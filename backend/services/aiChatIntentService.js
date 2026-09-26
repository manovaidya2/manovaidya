import { PENDING_ACTIONS } from './aiConversationService.js';

export const INTENTS = Object.freeze({
  GREETING: 'GREETING',
  GENERAL_QUESTION: 'GENERAL_QUESTION',
  WEBSITE_INFORMATION: 'WEBSITE_INFORMATION',
  SERVICE_INFORMATION: 'SERVICE_INFORMATION',
  SYMPTOM_INFORMATION: 'SYMPTOM_INFORMATION',
  TREATMENT_INFORMATION: 'TREATMENT_INFORMATION',
  PRICE: 'PRICE',
  LOCATION: 'LOCATION',
  DOCTOR_INFORMATION: 'DOCTOR_INFORMATION',
  CONSULTATION_INFORMATION: 'CONSULTATION_INFORMATION',
  BOOK_CONSULTATION: 'BOOK_CONSULTATION',
  CONNECT_AGENT: 'CONNECT_AGENT',
  CONFIRMATION: 'CONFIRMATION',
  REJECTION: 'REJECTION',
  FOLLOW_UP: 'FOLLOW_UP',
  THANKS: 'THANKS',
  GOODBYE: 'GOODBYE',
  CLARIFICATION: 'CLARIFICATION',
  UNKNOWN: 'UNKNOWN'
});

const TYPO_NORMALIZATIONS = [
  [/\bautis+u?m\b|\bautizm\b/g, 'autism'],
  [/\bcons+u?l+a?t+i?o?n\b|\bconsultion\b/g, 'consultation'],
  [/\bbookng\b/g, 'booking'],
  [/\bappointmnt\b/g, 'appointment'],
  [/\bth+i+k\b/g, 'theek'],
  [/\bach+a+\b/g, 'achha'],
  [/\bok+k+\b/g, 'okay'],
  [/\b(locattion|loction|locationn|locaton)\b/g, 'location']
];

export const normalizeMessage = (value) => {
  let normalized = String(value || '')
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  TYPO_NORMALIZATIONS.forEach(([pattern, replacement]) => {
    normalized = normalized.replace(pattern, replacement);
  });
  return normalized;
};

const exactMatch = (value, phrases) => phrases.includes(value);
const containsAny = (value, phrases) => phrases.some((phrase) => value.includes(phrase));

const confirmations = [
  'yes', 'yeah', 'yep', 'sure', 'okay', 'ok', 'haan', 'han', 'ha',
  'theek', 'theek hai', 'thik hai', 'kar do', 'haan kar do', 'continue', 'go ahead'
];
const rejections = [
  'no', 'nope', 'nahi', 'nhi', 'nahin', 'abhi nahi', 'abhi nhi',
  'not now', 'later', 'rehne do', 'mat karo', 'cancel'
];

const getContextualAction = (pendingAction, isConfirmed) => {
  if (!isConfirmed) return 'NONE';
  if (pendingAction === PENDING_ACTIONS.BOOK_CONSULTATION) return 'BOOK_CONSULTATION';
  if (pendingAction === PENDING_ACTIONS.CONNECT_AGENT) return 'CONNECT_AGENT';
  return 'NONE';
};

export const resolveIntent = (question, state = {}) => {
  const value = normalizeMessage(question);
  const pendingAction = state.pendingAction || PENDING_ACTIONS.NONE;
  const hasHistory = Boolean(state.lastAssistantQuestion || state.currentTopic || state.lastIntent);

  if (exactMatch(value, rejections) || /^(nahi|nhi|no)\b/.test(value)) {
    return { intent: INTENTS.REJECTION, action: 'NONE', isRejection: true };
  }

  if (exactMatch(value, confirmations)) {
    return {
      intent: INTENTS.CONFIRMATION,
      action: getContextualAction(pendingAction, true),
      isConfirmation: true
    };
  }

  if (/\b(book|booking|schedule)\b.*\b(consultation|appointment|slot)\b|\b(consultation|appointment|slot)\b.*\b(book|booking|chahiye|karni|leni)\b/.test(value)) {
    return { intent: INTENTS.BOOK_CONSULTATION, action: 'BOOK_CONSULTATION' };
  }

  if (containsAny(value, [
    'connect with agent', 'connect agent', 'human se', 'agent se', 'team se baat',
    'doctor se baat', 'support team', 'real person', 'live agent', 'live chat',
    'kisi se baat', 'person se baat', 'team se connect', 'someone call me', 'call me'
  ])) {
    return { intent: INTENTS.CONNECT_AGENT, action: 'CONNECT_AGENT' };
  }

  if (exactMatch(value, ['hi', 'hello', 'hey', 'namaste', 'hii', 'helo'])) {
    return { intent: INTENTS.GREETING, action: 'NONE' };
  }
  if (exactMatch(value, ['thanks', 'thank you', 'thankyou', 'dhanyavad', 'shukriya'])) {
    return { intent: INTENTS.THANKS, action: 'NONE' };
  }
  if (exactMatch(value, ['bye', 'goodbye', 'see you', 'alvida'])) {
    return { intent: INTENTS.GOODBYE, action: 'NONE' };
  }
  if (containsAny(value, ['fee', 'fees', 'price', 'cost', 'charge', 'kitne ki', 'kitna paisa'])) {
    return { intent: INTENTS.PRICE, action: 'NONE' };
  }
  if (containsAny(value, ['address', 'location', 'kahan', 'kaha', 'clinic kidhar', 'where'])) {
    return { intent: INTENTS.LOCATION, action: 'NONE' };
  }
  if (containsAny(value, ['doctor', 'dr ankush', 'qualification', 'founder'])) {
    return { intent: INTENTS.DOCTOR_INFORMATION, action: 'NONE' };
  }
  if (containsAny(value, ['consultation process', 'consultation kaise', 'appointment kab', 'available day', 'slot', 'online possible'])) {
    return { intent: INTENTS.CONSULTATION_INFORMATION, action: 'NONE' };
  }
  if (containsAny(value, ['symptom', 'signs', 'difficulty', 'problem', 'delay', 'dikkat'])) {
    return { intent: INTENTS.SYMPTOM_INFORMATION, action: 'NONE' };
  }
  if (containsAny(value, ['treatment', 'therapy', 'neuro ayurveda', 'medicine', 'dawai', 'dawa'])) {
    return { intent: INTENTS.TREATMENT_INFORMATION, action: 'NONE' };
  }
  if (containsAny(value, ['service', 'support', 'help for', 'care for'])) {
    return { intent: INTENTS.SERVICE_INFORMATION, action: 'NONE' };
  }

  const words = value.split(' ').filter(Boolean);
  const referenceWords = ['ye', 'isme', 'aisa', 'usme', 'phir', 'wahan', 'iska', 'uska', 'kitna', 'kab', 'kaise', 'online', 'experience', 'aur', 'achha', 'acha'];
  if (hasHistory && (words.length <= 3 || referenceWords.some((word) => words.includes(word)))) {
    return { intent: INTENTS.FOLLOW_UP, action: 'NONE' };
  }

  return { intent: INTENTS.GENERAL_QUESTION, action: 'NONE' };
};

export const getDeterministicReply = ({ question, resolution, state }) => {
  const value = normalizeMessage(question);

  if (resolution.action === 'BOOK_CONSULTATION') {
    return 'Bilkul. Main consultation booking start kar raha hoon.';
  }
  if (resolution.action === 'CONNECT_AGENT') {
    return 'Bilkul. Main aapko Manovaidya support team se connect kar raha hoon.';
  }
  if (resolution.intent === INTENTS.REJECTION) {
    if (/abhi|not now|later/.test(value)) {
      return 'Koi baat nahi, jab aap ready hon tab hum continue kar lenge. Abhi main kisi aur question mein help kar sakta hoon.';
    }
    return 'Theek hai, main woh action start nahi karunga. Aap apna koi aur question pooch sakte hain.';
  }
  if (resolution.intent === INTENTS.CONFIRMATION && state.pendingAction === PENDING_ACTIONS.GENERAL_INFORMATION) {
    return 'Bilkul, main isi topic par continue karta hoon. Aap jo detail jaan-na chahte hain woh bata dijiye.';
  }
  if (resolution.intent === INTENTS.CONFIRMATION && !state.lastAssistantQuestion) {
    return 'Theek hai. Aap kis baare mein help chahte hain?';
  }

  return '';
};

export const deriveTopic = (question, resolution, previousTopic = '') => {
  if (resolution.intent === INTENTS.FOLLOW_UP || resolution.intent === INTENTS.CONFIRMATION || resolution.intent === INTENTS.REJECTION) {
    return previousTopic;
  }
  return normalizeMessage(question).slice(0, 500);
};
