import { randomBytes } from 'node:crypto';
import AiChatConversation from '../models/AiChatConversation.js';

export const PENDING_ACTIONS = Object.freeze({
  NONE: 'NONE',
  BOOK_CONSULTATION: 'BOOK_CONSULTATION',
  CONNECT_AGENT: 'CONNECT_AGENT',
  COLLECT_NAME: 'COLLECT_NAME',
  COLLECT_PHONE: 'COLLECT_PHONE',
  COLLECT_CONSULTATION_DETAILS: 'COLLECT_CONSULTATION_DETAILS',
  GENERAL_INFORMATION: 'GENERAL_INFORMATION'
});

const RECENT_MESSAGE_LIMIT = 10;
const CONVERSATION_TTL_MS = 24 * 60 * 60 * 1000;
const CONVERSATION_ID_PATTERN = /^[a-f0-9]{48}$/;

export const createConversationId = () => randomBytes(24).toString('hex');

export const isValidConversationId = (value) => {
  const candidate = String(value || '').trim().toLowerCase();
  return CONVERSATION_ID_PATTERN.test(candidate);
};

const compactMessages = (summary, messages) => {
  if (messages.length <= RECENT_MESSAGE_LIMIT) {
    return { summary, messages };
  }

  const overflowCount = messages.length - RECENT_MESSAGE_LIMIT;
  const archived = messages.slice(0, overflowCount);
  const archivedText = archived
    .map((message) => `${message.role === 'user' ? 'Visitor' : 'Assistant'}: ${message.text}`)
    .join('\n');

  return {
    summary: [summary, archivedText].filter(Boolean).join('\n').slice(-3000),
    messages: messages.slice(overflowCount)
  };
};

export const extractLastQuestion = (answer) => {
  const matches = String(answer || '').match(/[^?\n]{2,}\?/g);
  return matches?.at(-1)?.trim().slice(0, 1000) || '';
};

export const inferPendingAction = (answer) => {
  const question = extractLastQuestion(answer).toLowerCase();
  if (!question) return PENDING_ACTIONS.NONE;
  if (/book|consultation|appointment|slot/.test(question)) return PENDING_ACTIONS.BOOK_CONSULTATION;
  if (/connect|agent|team|human|person|baat/.test(question)) return PENDING_ACTIONS.CONNECT_AGENT;
  return PENDING_ACTIONS.GENERAL_INFORMATION;
};

export const loadConversation = async (conversationId) => {
  const validId = isValidConversationId(conversationId) ? String(conversationId).toLowerCase() : null;
  if (validId) {
    const existing = await AiChatConversation.findOne({ conversationId: validId });
    if (existing) return existing;
    return AiChatConversation.create({ conversationId: validId });
  }

  return AiChatConversation.create({ conversationId: createConversationId() });
};

export const saveConversationTurn = async (conversation, {
  question,
  answer,
  intent,
  pendingAction,
  currentTopic,
  state
}) => {
  const allMessages = [
    ...conversation.messages.map((message) => ({ role: message.role, text: message.text })),
    { role: 'user', text: question.slice(0, 4000) },
    { role: 'assistant', text: answer.slice(0, 4000) }
  ];
  const compacted = compactMessages(conversation.summary, allMessages);

  conversation.messages = compacted.messages;
  conversation.summary = compacted.summary;
  conversation.lastAssistantQuestion = extractLastQuestion(answer);
  conversation.pendingAction = pendingAction;
  conversation.previousIntent = conversation.lastIntent || 'UNKNOWN';
  conversation.lastIntent = intent;
  conversation.currentTopic = String(currentTopic || conversation.currentTopic || '').slice(0, 500);
  if (state) {
    conversation.conversationStage = state.stage;
    conversation.user = state.user;
    conversation.patients = state.patients;
    conversation.activePatientId = state.activePatientId;
    conversation.consultation = state.consultation;
  }
  conversation.expiresAt = new Date(Date.now() + CONVERSATION_TTL_MS);
  await conversation.save();

  return conversation;
};

export const formatRecentConversation = (conversation) => conversation.messages
  .map((message) => `${message.role === 'user' ? 'Visitor' : 'Assistant'}: ${message.text}`)
  .join('\n');

export const syncConversationUserDetails = async (conversationId, details = {}) => {
  if (!isValidConversationId(conversationId)) return null;
  const conversation = await AiChatConversation.findOne({ conversationId: String(conversationId).toLowerCase() });
  if (!conversation) return null;

  const clean = (value, max) => String(value || '').trim().slice(0, max);
  const name = clean(details.name, 120);
  const phone = clean(details.phone, 30).replace(/[^\d+]/g, '');
  const city = clean(details.city, 120);
  if (name) conversation.user.name = name;
  if (phone) conversation.user.phone = phone;
  if (city) conversation.user.city = city;
  if (details.submitted === true) conversation.conversationStage = 'BOOKING_SUBMITTED';
  conversation.expiresAt = new Date(Date.now() + CONVERSATION_TTL_MS);
  await conversation.save();
  return conversation;
};
