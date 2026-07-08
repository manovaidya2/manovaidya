import mongoose from 'mongoose';

const liveChatMessageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      enum: ['visitor', 'agent', 'system'],
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    readByVisitor: {
      type: Boolean,
      default: false,
    },
    readByAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const liveChatSessionSchema = new mongoose.Schema(
  {
    sessionKey: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    visitorName: {
      type: String,
      trim: true,
      default: '',
    },
    visitorPhone: {
      type: String,
      trim: true,
      default: '',
    },
    status: {
      type: String,
      enum: ['waiting', 'active', 'closed'],
      default: 'waiting',
      index: true,
    },
    source: {
      type: String,
      default: 'Website AI assistant',
    },
    messages: [liveChatMessageSchema],
    lastMessageAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  { timestamps: true }
);

const LiveChatSession = mongoose.model('LiveChatSession', liveChatSessionSchema);

export default LiveChatSession;
