import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['user', 'assistant'],
    required: true
  },
  text: {
    type: String,
    required: true,
    maxlength: 4000
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { _id: false });

const personSchema = new mongoose.Schema({
  name: { type: String, default: '', maxlength: 120 },
  phone: { type: String, default: '', maxlength: 30 },
  city: { type: String, default: '', maxlength: 120 }
}, { _id: false });

const patientSchema = new mongoose.Schema({
  patientId: { type: String, required: true },
  name: { type: String, default: '', maxlength: 120 },
  age: { type: Number, min: 0, max: 120, default: null },
  gender: { type: String, enum: ['', 'female', 'male', 'other', 'unknown'], default: '' },
  relation: { type: String, default: '', maxlength: 80 },
  concern: { type: String, default: '', maxlength: 500 },
  symptoms: { type: [String], default: [] }
}, { _id: false });

const consultationStateSchema = new mongoose.Schema({
  mode: { type: String, enum: ['', 'online', 'offline'], default: '' },
  day: { type: String, default: '', maxlength: 20 },
  date: { type: String, default: '', maxlength: 10 },
  time: { type: String, default: '', maxlength: 40 },
  availabilityChecked: { type: Boolean, default: false },
  available: { type: Boolean, default: false }
}, { _id: false });

const aiChatConversationSchema = new mongoose.Schema({
  conversationId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  messages: {
    type: [messageSchema],
    default: []
  },
  summary: {
    type: String,
    default: '',
    maxlength: 3000
  },
  lastAssistantQuestion: {
    type: String,
    default: '',
    maxlength: 1000
  },
  pendingAction: {
    type: String,
    enum: [
      'NONE',
      'BOOK_CONSULTATION',
      'CONNECT_AGENT',
      'COLLECT_NAME',
      'COLLECT_PHONE',
      'COLLECT_CONSULTATION_DETAILS',
      'GENERAL_INFORMATION'
    ],
    default: 'NONE'
  },
  lastIntent: {
    type: String,
    default: 'UNKNOWN'
  },
  previousIntent: {
    type: String,
    default: 'UNKNOWN'
  },
  conversationStage: {
    type: String,
    enum: [
      'DISCOVERY',
      'CONSULTATION_INTEREST',
      'PATIENT_DETAILS',
      'MODE_SELECTION',
      'DAY_SELECTION',
      'TIME_SELECTION',
      'AVAILABILITY_CHECK',
      'BOOKING_CONFIRMATION',
      'BOOKING_SUBMITTED',
      'COMPLETED'
    ],
    default: 'DISCOVERY'
  },
  user: {
    type: personSchema,
    default: () => ({})
  },
  patients: {
    type: [patientSchema],
    default: []
  },
  activePatientId: {
    type: String,
    default: ''
  },
  consultation: {
    type: consultationStateSchema,
    default: () => ({})
  },
  currentTopic: {
    type: String,
    default: '',
    maxlength: 500
  },
  expiresAt: {
    type: Date,
    default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
    index: { expires: 0 }
  }
}, { timestamps: true });

const AiChatConversation = mongoose.model('AiChatConversation', aiChatConversationSchema);

export default AiChatConversation;
