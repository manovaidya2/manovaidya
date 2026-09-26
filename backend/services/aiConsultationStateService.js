import { randomUUID } from 'node:crypto';
import {
  CONSULTATION_SCHEDULE,
  CONSULTATION_TIMES,
  getDayName,
  isValidConsultationDay
} from './consultationAvailabilityService.js';
import { INTENTS, normalizeMessage } from './aiChatIntentService.js';
import { PENDING_ACTIONS } from './aiConversationService.js';

export const CONVERSATION_STAGES = Object.freeze({
  DISCOVERY: 'DISCOVERY',
  CONSULTATION_INTEREST: 'CONSULTATION_INTEREST',
  PATIENT_DETAILS: 'PATIENT_DETAILS',
  MODE_SELECTION: 'MODE_SELECTION',
  DAY_SELECTION: 'DAY_SELECTION',
  TIME_SELECTION: 'TIME_SELECTION',
  AVAILABILITY_CHECK: 'AVAILABILITY_CHECK',
  BOOKING_CONFIRMATION: 'BOOKING_CONFIRMATION',
  BOOKING_SUBMITTED: 'BOOKING_SUBMITTED',
  COMPLETED: 'COMPLETED'
});

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const RELATIONS = {
  son: { relation: 'son', gender: 'male' },
  beta: { relation: 'son', gender: 'male' },
  bete: { relation: 'son', gender: 'male' },
  daughter: { relation: 'daughter', gender: 'female' },
  beti: { relation: 'daughter', gender: 'female' },
  child: { relation: 'child', gender: 'unknown' },
  baccha: { relation: 'child', gender: 'unknown' },
  bacha: { relation: 'child', gender: 'unknown' },
  wife: { relation: 'wife', gender: 'female' },
  husband: { relation: 'husband', gender: 'male' },
  mother: { relation: 'mother', gender: 'female' },
  father: { relation: 'father', gender: 'male' },
  self: { relation: 'self', gender: 'unknown' }
};

const clone = (value) => JSON.parse(JSON.stringify(value || {}));
const titleCase = (value) => String(value || '').replace(/\b\w/g, (letter) => letter.toUpperCase());

const newPatient = (details = {}) => ({
  patientId: randomUUID(),
  name: '',
  age: null,
  gender: '',
  relation: '',
  concern: '',
  symptoms: [],
  ...details
});

const getActivePatient = (state) => state.patients.find(
  (patient) => patient.patientId === state.activePatientId
) || state.patients.at(-1) || null;

const findOrCreatePatient = (state, details) => {
  const normalizedName = normalizeMessage(details.name);
  let patient = normalizedName
    ? state.patients.find((item) => normalizeMessage(item.name) === normalizedName)
    : null;

  if (!patient && details.relation) {
    patient = state.patients.find((item) => !item.name && item.relation === details.relation);
  }
  if (!patient && state.patients.length === 1 && !details.name) {
    patient = state.patients[0];
  }
  if (!patient) {
    patient = newPatient();
    state.patients.push(patient);
  }

  Object.entries(details).forEach(([key, value]) => {
    if (value !== '' && value !== null && value !== undefined) patient[key] = value;
  });
  state.activePatientId = patient.patientId;
  return patient;
};

const extractPatients = (question, state) => {
  const text = String(question || '').trim();
  const normalized = normalizeMessage(text);
  const changes = [];
  let foundNamedPatient = false;

  const namedWithAge = /\b(?:my|mera|meri|mere)\s+(son|daughter|beta|bete|beti|child|baccha|bacha)\s+([a-z][a-z'-]*)\s+(?:is|age\s*(?:is)?|ki\s+age)?\s*(\d{1,3})(?:\s*(?:years?|yrs?|saal|sal))?/gi;
  for (const match of text.matchAll(namedWithAge)) {
    if (['hai', 'is', 'age', 'ki', 'ka'].includes(normalizeMessage(match[2]))) continue;
    const relationInfo = RELATIONS[normalizeMessage(match[1])];
    const age = Number(match[3]);
    if (age > 120) continue;
    const patient = findOrCreatePatient(state, {
      name: titleCase(match[2]),
      age,
      ...relationInfo
    });
    foundNamedPatient = true;
    changes.push({ type: 'patient', patientId: patient.patientId });
  }

  if (/\b(for myself|for me|mere liye|khud ke liye|myself)\b/.test(normalized)) {
    const patient = findOrCreatePatient(state, RELATIONS.self);
    changes.push({ type: 'patient', patientId: patient.patientId });
  }

  const relationMatch = normalized.match(/\b(son|daughter|beta|bete|beti|child|baccha|bacha|wife|husband|mother|father)\b/);
  const ageMatch = normalized.match(/\b(\d{1,3})\s*(?:years? old|years?|yrs?|saal|sal)\b/);
  if (!foundNamedPatient && (relationMatch || ageMatch)) {
    const relationInfo = relationMatch ? RELATIONS[relationMatch[1]] : {};
    const age = ageMatch ? Number(ageMatch[1]) : null;
    if (age === null || age <= 120) {
      const patient = findOrCreatePatient(state, { ...relationInfo, age });
      changes.push({ type: 'patient', patientId: patient.patientId });
    }
  }

  const contextualNameMatch = text.match(/\b(?:uska|uski|iska|iski|patient(?:'s)?|child(?:'s)?)\s+(?:name|naam)\s+(?:is\s+)?([\p{L}][\p{L}'-]{1,50})/iu);
  if (contextualNameMatch) {
    const patient = getActivePatient(state) || findOrCreatePatient(state, {});
    patient.name = titleCase(contextualNameMatch[1]);
    changes.push({ type: 'patient', patientId: patient.patientId });
  }

  const selectedByName = state.patients.find(
    (patient) => patient.name && new RegExp(`\\b${patient.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(text)
  );
  if (selectedByName) state.activePatientId = selectedByName.patientId;

  const userNameMatch = text.match(/\b(?:my name is|mera naam|mera name)\s+([\p{L}][\p{L}'-]{1,50})/iu);
  if (userNameMatch) state.user.name = titleCase(userNameMatch[1]);
  const phoneMatch = text.match(/(?:\+?91[\s-]?)?([6-9]\d{9})/);
  if (phoneMatch) state.user.phone = phoneMatch[1];
  const cityMatch = text.match(/\b(?:i live in|from|city is|shehar|shahar)\s+([\p{L}][\p{L}\s'-]{1,60})/iu);
  if (cityMatch) state.user.city = titleCase(cityMatch[1].trim());

  const activePatient = getActivePatient(state);
  const administrative = /\b(fee|price|cost|location|address|online|offline|clinic|appointment|consultation|book|monday|tuesday|wednesday|thursday|friday|saturday|sunday|baje|am|pm)\b/;
  const concernSignal = /\b(problem|difficulty|concern|delay|symptom|issue|pain|anxiety|stress|focus|focusing|speak|speaking|speech|bolne|dhyan|pareshaani|pareshani|dikkat)\b/;
  if (activePatient && !administrative.test(normalized) && concernSignal.test(normalized)) {
    const concern = text.replace(/^(?:he|she|they|him|her|usko|isko|patient|child)\s*/i, '').trim().slice(0, 500);
    if (concern) {
      activePatient.concern = concern;
      if (!activePatient.symptoms.some((item) => normalizeMessage(item) === normalizeMessage(concern))) {
        activePatient.symptoms = [...activePatient.symptoms, concern].slice(-8);
      }
      changes.push({ type: 'concern', patientId: activePatient.patientId });
    }
  }

  return changes;
};

const getIndiaDateString = (now = new Date()) => new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}).format(now);

const addDays = (dateString, days) => {
  const date = new Date(`${dateString}T12:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
};

export const resolveConsultationDate = (question, now = new Date()) => {
  const value = normalizeMessage(question);
  const today = getIndiaDateString(now);
  const explicitDate = value.match(/\b(\d{4}-\d{2}-\d{2})\b/)?.[1];
  if (explicitDate) return { date: explicitDate, day: getDayName(explicitDate) };
  if (/\bday after tomorrow\b|\bparso\b/.test(value)) {
    const date = addDays(today, 2);
    return { date, day: getDayName(date) };
  }
  if (/\btomorrow\b|\bkal\b/.test(value)) {
    const date = addDays(today, 1);
    return { date, day: getDayName(date) };
  }
  if (/\btoday\b|\baaj\b/.test(value)) return { date: today, day: getDayName(today) };

  const weekdayIndex = WEEKDAYS.findIndex((day) => new RegExp(`\\b${day.toLowerCase()}\\b`).test(value));
  if (weekdayIndex < 0) return null;
  const currentIndex = WEEKDAYS.indexOf(getDayName(today));
  let offset = (weekdayIndex - currentIndex + 7) % 7;
  if (/\bnext\b/.test(value) && offset === 0) offset = 7;
  const date = addDays(today, offset);
  return { date, day: WEEKDAYS[weekdayIndex] };
};

export const resolveConsultationTime = (question) => {
  const text = String(question || '').trim();
  const exact = CONSULTATION_TIMES.find((slot) => normalizeMessage(slot) === normalizeMessage(text));
  if (exact) return exact;

  const match = text.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm|a\.?m\.?|p\.?m\.?|baje)?\b/i);
  if (!match) return '';
  let hour = Number(match[1]);
  const minute = Number(match[2] || 0);
  const marker = String(match[3] || '').toLowerCase();
  if (marker.startsWith('p') && hour < 12) hour += 12;
  if ((marker === 'baje' || !marker) && hour >= 1 && hour <= 7) hour += 12;
  if (marker.startsWith('a') && hour === 12) hour = 0;
  const totalMinutes = hour * 60 + minute;

  return CONSULTATION_TIMES.find((slot) => {
    const start = slot.match(/^(\d{1,2}):(\d{2})\s+(AM|PM)/);
    let slotHour = Number(start[1]);
    if (start[3] === 'PM' && slotHour < 12) slotHour += 12;
    if (start[3] === 'AM' && slotHour === 12) slotHour = 0;
    return slotHour * 60 + Number(start[2]) === totalMinutes;
  }) || '';
};

const resolveMode = (question, stage) => {
  const value = normalizeMessage(question);
  const bookingContext = stage !== CONVERSATION_STAGES.DISCOVERY || /\b(chahiye|prefer|book|booking|consultation|appointment|visit)\b/.test(value);
  if (!bookingContext && !['online', 'offline', 'clinic', 'opd'].includes(value)) return '';
  if (/\b(offline|clinic|clinic visit|noida opd|opd|physical|physically)\b/.test(value)) return 'offline';
  if (/\b(online|video|video call|remote)\b/.test(value)) return 'online';
  return '';
};

const modePrompt = (mode) => mode === 'offline'
  ? 'Theek hai. Noida clinic visit Tuesday, Saturday aur Sunday ko available hai. Aap kaunsa din prefer karenge?'
  : 'Bilkul. Online consultation Monday aur Thursday ko available hai. Aap Monday ya Thursday mein se kaunsa din prefer karenge?';

const invalidDayPrompt = (mode, day) => {
  if (mode === 'offline') {
    return `${day} online consultation ke liye available hai. Noida clinic visit Tuesday, Saturday aur Sunday ko available hai. Aap clinic visit ke liye Tuesday, Saturday ya Sunday mein se kaunsa din prefer karenge?`;
  }
  return `${day} clinic visit ke schedule mein aata hai. Online consultation Monday aur Thursday ko available hai. Aap Monday ya Thursday mein se koi din choose kar sakte hain.`;
};

export const createConversationState = (conversation) => ({
  stage: conversation.conversationStage || CONVERSATION_STAGES.DISCOVERY,
  user: clone(conversation.user || {}),
  patients: clone(conversation.patients || []),
  activePatientId: conversation.activePatientId || '',
  consultation: clone(conversation.consultation || {})
});

export const processConsultationTurn = async ({
  question,
  conversationState,
  resolution,
  checkAvailability,
  now = new Date()
}) => {
  const state = clone(conversationState);
  state.user ||= {};
  state.patients ||= [];
  state.consultation ||= {};
  state.stage ||= CONVERSATION_STAGES.DISCOVERY;
  const entityChanges = extractPatients(question, state);
  const value = normalizeMessage(question);

  if (state.stage === CONVERSATION_STAGES.BOOKING_CONFIRMATION) {
    if (resolution.intent === INTENTS.REJECTION) {
      state.stage = CONVERSATION_STAGES.TIME_SELECTION;
      state.consultation.availabilityChecked = false;
      state.consultation.available = false;
      state.consultation.time = '';
      return {
        handled: true,
        answer: 'Theek hai, booking submit nahi karunga. Aap koi doosra preferred time bata sakte hain.',
        action: 'NONE',
        pendingAction: PENDING_ACTIONS.NONE,
        state
      };
    }
    if (resolution.intent === INTENTS.CONFIRMATION && state.consultation.available) {
      return {
        handled: true,
        answer: 'Bilkul. Checked slot ke saath booking details complete karte hain. Slot tabhi confirm hoga jab request successfully submit ho jayegi.',
        action: 'BOOK_CONSULTATION',
        pendingAction: PENDING_ACTIONS.COLLECT_CONSULTATION_DETAILS,
        state
      };
    }
  }

  const mode = resolveMode(question, state.stage);
  if (mode) {
    state.consultation = {
      mode,
      day: '',
      date: '',
      time: '',
      availabilityChecked: false,
      available: false
    };
    state.stage = CONVERSATION_STAGES.DAY_SELECTION;
    return {
      handled: true,
      answer: modePrompt(mode),
      action: 'NONE',
      pendingAction: PENDING_ACTIONS.GENERAL_INFORMATION,
      state
    };
  }

  const resolvedDate = resolveConsultationDate(question, now);
  if (resolvedDate && state.consultation.mode) {
    if (!isValidConsultationDay(state.consultation.mode, resolvedDate.day)) {
      state.stage = CONVERSATION_STAGES.DAY_SELECTION;
      return {
        handled: true,
        answer: invalidDayPrompt(state.consultation.mode, resolvedDate.day),
        action: 'NONE',
        pendingAction: PENDING_ACTIONS.GENERAL_INFORMATION,
        state
      };
    }
    state.consultation.day = resolvedDate.day;
    state.consultation.date = resolvedDate.date;
    state.consultation.time = '';
    state.consultation.availabilityChecked = false;
    state.consultation.available = false;
    state.stage = CONVERSATION_STAGES.TIME_SELECTION;
    return {
      handled: true,
      answer: `${resolvedDate.day}, ${resolvedDate.date} note kar liya. Aap preferred time bata dijiye.`,
      action: 'NONE',
      pendingAction: PENDING_ACTIONS.GENERAL_INFORMATION,
      state
    };
  }

  const time = resolveConsultationTime(question);
  if (time && state.consultation.mode && state.consultation.date) {
    state.stage = CONVERSATION_STAGES.AVAILABILITY_CHECK;
    const availability = await checkAvailability({
      mode: state.consultation.mode,
      date: state.consultation.date,
      time
    });
    state.consultation.time = time;
    state.consultation.availabilityChecked = true;
    state.consultation.available = availability.available;

    if (!availability.available) {
      state.stage = CONVERSATION_STAGES.TIME_SELECTION;
      state.consultation.time = '';
      return {
        handled: true,
        answer: availability.reason === 'FULL'
          ? `${time} ka slot abhi available nahi hai. Aap koi doosra preferred time choose kar sakte hain.`
          : 'Yeh time configured consultation slots mein nahi hai. Aap available list mein se koi preferred time choose kar sakte hain.',
        action: 'NONE',
        pendingAction: PENDING_ACTIONS.GENERAL_INFORMATION,
        state
      };
    }

    state.stage = CONVERSATION_STAGES.BOOKING_CONFIRMATION;
    return {
      handled: true,
      answer: `${state.consultation.day}, ${state.consultation.date} ko ${time} ka slot backend availability check mein available hai. Kya aap isi slot ke saath booking details complete karna chahenge?`,
      action: 'NONE',
      pendingAction: PENDING_ACTIONS.BOOK_CONSULTATION,
      state
    };
  }

  if (resolution.intent === INTENTS.CONFIRMATION && [CONVERSATION_STAGES.MODE_SELECTION, CONVERSATION_STAGES.DAY_SELECTION].includes(state.stage)) {
    return {
      handled: true,
      answer: state.stage === CONVERSATION_STAGES.MODE_SELECTION
        ? 'Bilkul. Aap online consultation prefer karenge ya Noida clinic visit?'
        : modePrompt(state.consultation.mode),
      action: 'NONE',
      pendingAction: PENDING_ACTIONS.GENERAL_INFORMATION,
      state
    };
  }

  if (resolution.intent === INTENTS.BOOK_CONSULTATION) {
    state.stage = CONVERSATION_STAGES.MODE_SELECTION;
    return {
      handled: true,
      answer: 'Bilkul. Aap online consultation prefer karenge ya Noida clinic visit?',
      action: 'NONE',
      pendingAction: PENDING_ACTIONS.GENERAL_INFORMATION,
      state
    };
  }

  const activePatient = getActivePatient(state);
  if (entityChanges.length && activePatient && !activePatient.concern) {
    const relationLabel = activePatient.relation === 'daughter'
      ? 'aapki beti'
      : activePatient.relation === 'son'
        ? 'aapke bete'
        : `aapke ${activePatient.relation || 'patient'}`;
    const subject = activePatient.name || (activePatient.relation === 'self' ? 'aap' : relationLabel);
    const age = activePatient.age !== null && activePatient.age !== undefined ? `, age ${activePatient.age}` : '';
    return {
      handled: true,
      answer: `Samajh gaya, ${subject}${age}. Aapko kaunsi main concern ya symptoms notice ho rahe hain?`,
      action: 'NONE',
      pendingAction: PENDING_ACTIONS.GENERAL_INFORMATION,
      state
    };
  }

  return { handled: false, state };
};

export const getPublicConversationState = (state) => {
  const activePatient = state.patients.find((patient) => patient.patientId === state.activePatientId) || null;
  return {
    stage: state.stage,
    patient: activePatient,
    patientCount: state.patients.length,
    consultation: state.consultation
  };
};

export const getConsultationScheduleText = () => [
  `Offline / Noida clinic: ${CONSULTATION_SCHEDULE.offline.join(', ')}`,
  `Online: ${CONSULTATION_SCHEDULE.online.join(', ')}`
].join('\n');
