import test from 'node:test';
import assert from 'node:assert/strict';
import { processConsultationTurn } from '../services/aiConsultationStateService.js';
import { resolveIntent } from '../services/aiChatIntentService.js';
import { PENDING_ACTIONS } from '../services/aiConversationService.js';

const fixedNow = new Date('2026-09-25T10:00:00.000Z');
const available = async () => ({ available: true, reason: 'AVAILABLE', booked: 0, capacity: 1 });

const initialState = () => ({
  stage: 'DISCOVERY',
  user: {},
  patients: [],
  activePatientId: '',
  consultation: {}
});

const runTurn = async (state, question, pendingAction = PENDING_ACTIONS.NONE, checkAvailability = available) => {
  const resolution = resolveIntent(question, {
    pendingAction,
    lastAssistantQuestion: pendingAction === PENDING_ACTIONS.NONE ? '' : 'Please choose or confirm.',
    currentTopic: state.patients.at(-1)?.concern || '',
    lastIntent: 'GENERAL_QUESTION',
    stage: state.stage
  });
  return processConsultationTurn({
    question,
    conversationState: state,
    resolution,
    checkAvailability,
    now: fixedNow
  });
};

test('retains dynamic daughter details through offline slot selection and confirmation', async () => {
  let state = initialState();
  let turn = await runTurn(state, 'abhi nhi meri beti hai 5 sal ki');
  state = turn.state;
  assert.equal(state.patients[0].name, '');
  assert.equal(state.patients[0].age, 5);
  turn = await runTurn(state, 'speech delay');
  state = turn.state;
  turn = await runTurn(state, 'fee kitna hai');
  state = turn.state;
  turn = await runTurn(state, 'uska name Sikha hai');
  state = turn.state;
  turn = await runTurn(state, 'offline');
  state = turn.state;
  turn = await runTurn(state, 'tuesday ka', turn.pendingAction);
  state = turn.state;
  turn = await runTurn(state, '11 baje', turn.pendingAction);
  state = turn.state;

  assert.equal(state.patients[0].name, 'Sikha');
  assert.equal(state.patients[0].age, 5);
  assert.equal(state.patients[0].relation, 'daughter');
  assert.match(state.patients[0].concern, /speech delay/i);
  assert.deepEqual(state.consultation, {
    mode: 'offline',
    day: 'Tuesday',
    date: '2026-09-29',
    time: '11:00 AM - 11:30 AM',
    availabilityChecked: true,
    available: true
  });

  turn = await runTurn(state, 'yes', PENDING_ACTIONS.BOOK_CONSULTATION);
  assert.equal(turn.action, 'BOOK_CONSULTATION');
  assert.match(turn.answer, /successfully submit/i);
});

test('extracts different English patients and resolves pronoun concerns without fixed names', async () => {
  let state = initialState();
  let turn = await runTurn(state, 'My son Aarav is 8 years old.');
  state = turn.state;
  turn = await runTurn(state, 'He has difficulty speaking clearly.');
  state = turn.state;
  turn = await runTurn(state, 'offline');
  state = turn.state;
  turn = await runTurn(state, 'Sunday', turn.pendingAction);

  assert.equal(turn.state.patients[0].name, 'Aarav');
  assert.equal(turn.state.patients[0].age, 8);
  assert.equal(turn.state.patients[0].relation, 'son');
  assert.match(turn.state.patients[0].concern, /difficulty speaking/i);
  assert.equal(turn.state.consultation.mode, 'offline');
  assert.equal(turn.state.consultation.day, 'Sunday');
});

test('supports online mode and Thursday for any patient', async () => {
  let state = initialState();
  state = (await runTurn(state, 'My daughter Riya is 6.')).state;
  state = (await runTurn(state, 'She has difficulty focusing.')).state;
  state = (await runTurn(state, 'online')).state;
  const turn = await runTurn(state, 'Thursday', PENDING_ACTIONS.GENERAL_INFORMATION);

  assert.equal(turn.state.patients[0].name, 'Riya');
  assert.match(turn.state.patients[0].concern, /difficulty focusing/i);
  assert.equal(turn.state.consultation.mode, 'online');
  assert.equal(turn.state.consultation.day, 'Thursday');
});

test('understands self as patient without assuming a child', async () => {
  const turn = await runTurn(initialState(), 'I want consultation for myself.');
  assert.equal(turn.state.patients[0].relation, 'self');
});

test('rejects a day that belongs to the other consultation mode', async () => {
  let state = (await runTurn(initialState(), 'offline')).state;
  const turn = await runTurn(state, 'Monday', PENDING_ACTIONS.GENERAL_INFORMATION);
  assert.equal(turn.state.stage, 'DAY_SELECTION');
  assert.equal(turn.state.consultation.date, '');
  assert.match(turn.answer, /Monday online consultation/i);
});

test('does not treat ambiguous ok as a day selection', async () => {
  const state = (await runTurn(initialState(), 'online consultation chahiye')).state;
  const turn = await runTurn(state, 'ok', PENDING_ACTIONS.GENERAL_INFORMATION);
  assert.equal(turn.state.stage, 'DAY_SELECTION');
  assert.equal(turn.state.consultation.day, '');
  assert.match(turn.answer, /Monday ya Thursday/i);
});

test('never reports a full slot as available', async () => {
  let state = (await runTurn(initialState(), 'online')).state;
  state = (await runTurn(state, 'Thursday', PENDING_ACTIONS.GENERAL_INFORMATION)).state;
  const full = async () => ({ available: false, reason: 'FULL', booked: 1, capacity: 1 });
  const turn = await runTurn(state, '11 AM', PENDING_ACTIONS.GENERAL_INFORMATION, full);
  assert.equal(turn.state.consultation.available, false);
  assert.equal(turn.state.consultation.time, '');
  assert.match(turn.answer, /available nahi/i);
});

test('keeps two named patients separate and selects the referenced patient', async () => {
  let state = (await runTurn(initialState(), 'My son Aarav is 8 and my daughter Riya is 5.')).state;
  assert.equal(state.patients.length, 2);

  state = (await runTurn(state, 'Riya ke liye consultation chahiye')).state;
  const active = state.patients.find((patient) => patient.patientId === state.activePatientId);
  assert.equal(active.name, 'Riya');
  assert.equal(state.stage, 'MODE_SELECTION');
});
