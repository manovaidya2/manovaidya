import test from 'node:test';
import assert from 'node:assert/strict';
import { PENDING_ACTIONS, createConversationId, isValidConversationId } from '../services/aiConversationService.js';
import {
  INTENTS,
  getDeterministicReply,
  normalizeMessage,
  resolveIntent
} from '../services/aiChatIntentService.js';

const state = (overrides = {}) => ({
  pendingAction: PENDING_ACTIONS.NONE,
  lastAssistantQuestion: '',
  currentTopic: '',
  lastIntent: 'UNKNOWN',
  ...overrides
});

test('creates opaque high-entropy conversation IDs', () => {
  const first = createConversationId();
  const second = createConversationId();
  assert.equal(first.length, 48);
  assert.equal(isValidConversationId(first), true);
  assert.notEqual(first, second);
});

test('recognises greeting naturally', () => {
  assert.equal(resolveIntent('hi', state()).intent, INTENTS.GREETING);
});

test('starts the existing consultation flow for direct booking requests and common spelling errors', () => {
  for (const message of ['consultation book karni hai', 'appointmnt chahiye', 'consulation book karni hai']) {
    assert.equal(resolveIntent(message, state()).action, 'BOOK_CONSULTATION');
  }
});

test('resolves haan and ok from a pending booking question', () => {
  const bookingState = state({
    pendingAction: PENDING_ACTIONS.BOOK_CONSULTATION,
    lastAssistantQuestion: 'Would you like to continue?'
  });
  assert.equal(resolveIntent('haan', bookingState).action, 'BOOK_CONSULTATION');
  assert.equal(resolveIntent('ok', bookingState).action, 'BOOK_CONSULTATION');
});

test('resolves confirmation and rejection for a pending agent connection', () => {
  const agentState = state({
    pendingAction: PENDING_ACTIONS.CONNECT_AGENT,
    lastAssistantQuestion: 'Would you like to connect with our team?'
  });
  assert.equal(resolveIntent('haan', agentState).action, 'CONNECT_AGENT');

  const rejected = resolveIntent('nahi', agentState);
  assert.equal(rejected.intent, INTENTS.REJECTION);
  assert.equal(rejected.action, 'NONE');
  assert.match(getDeterministicReply({ question: 'nahi', resolution: rejected, state: agentState }), /start nahi karunga/i);
});

test('keeps short child concern, doctor, consultation and autism replies in context', () => {
  const cases = [
    ['speech delay', state({ currentTopic: 'meri beti 5 saal ki hai', lastAssistantQuestion: 'What concern are you noticing?' })],
    ['experience?', state({ currentTopic: 'doctor ke baare me batao', lastAssistantQuestion: 'Would you like more detail?' })],
    ['online?', state({ currentTopic: 'consultation fee', lastAssistantQuestion: 'Would you like to know about online consultation?' })],
    ['aur?', state({ currentTopic: 'autism signs', lastAssistantQuestion: 'Would you like more signs?' })],
    ['acha', state({ currentTopic: 'autism signs', lastAssistantQuestion: 'Does that help?' })]
  ];

  cases.forEach(([message, conversationState]) => {
    const intent = resolveIntent(message, conversationState).intent;
    assert.ok(
      [INTENTS.FOLLOW_UP, INTENTS.SYMPTOM_INFORMATION].includes(intent),
      `${message} should retain follow-up or symptom context`
    );
  });
});

test('treats thik hai as acknowledgement and only triggers the pending contextual action', () => {
  const noAction = resolveIntent('thik hai', state({ lastAssistantQuestion: 'Does that make sense?' }));
  assert.equal(noAction.intent, INTENTS.CONFIRMATION);
  assert.equal(noAction.action, 'NONE');

  const booking = resolveIntent('thik hai', state({
    pendingAction: PENDING_ACTIONS.BOOK_CONSULTATION,
    lastAssistantQuestion: 'Would you like to book?'
  }));
  assert.equal(booking.action, 'BOOK_CONSULTATION');
});

test('normalises common spelling variants without changing user-visible text', () => {
  assert.equal(normalizeMessage('autisum aur bookng'), 'autism aur booking');
  assert.equal(normalizeMessage('okkk'), 'okay');
  assert.equal(normalizeMessage('locattion janan hai'), 'location janan hai');
  assert.equal(resolveIntent('locattion bta do', state()).intent, INTENTS.LOCATION);
});
