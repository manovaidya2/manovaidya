import crypto from 'crypto';
import LiveChatSession from '../models/LiveChatSession.js';

const cleanText = (value, max = 1200) => String(value || '').trim().slice(0, max);

const getSessionOr404 = async (id) => {
  const session = await LiveChatSession.findOne({ sessionKey: id });
  if (!session) {
    const error = new Error('Live chat session not found');
    error.statusCode = 404;
    throw error;
  }
  return session;
};

const addMessage = (session, sender, text) => {
  session.messages.push({
    sender,
    text,
    readByAdmin: sender !== 'visitor',
    readByVisitor: sender !== 'agent',
  });
  session.lastMessageAt = new Date();
};

export const createLiveChatSession = async (req, res) => {
  try {
    const visitorName = cleanText(req.body?.visitorName, 120);
    const visitorPhone = cleanText(req.body?.visitorPhone, 40);
    const initialMessage = cleanText(req.body?.message || 'Visitor requested to connect with an agent.');

    let session;
    
    if (visitorPhone) {
      session = await LiveChatSession.findOne({ visitorPhone }).sort({ lastMessageAt: -1 });
    }

    if (session) {
      if (session.status === 'closed') session.status = 'waiting';
      
      addMessage(session, 'visitor', initialMessage);
      
      // Update name if changed
      if (visitorName && session.visitorName !== visitorName) {
        session.visitorName = visitorName;
      }
      
      await session.save();
    } else {
      session = await LiveChatSession.create({
        sessionKey: crypto.randomUUID(),
        visitorName,
        visitorPhone,
        status: 'waiting',
        messages: [
          {
            sender: 'system',
            text: 'Visitor requested live agent support.',
            readByAdmin: false,
            readByVisitor: true,
          },
          {
            sender: 'visitor',
            text: initialMessage,
            readByAdmin: false,
            readByVisitor: true,
          },
        ],
        lastMessageAt: new Date(),
      });
    }

    res.status(201).json({ success: true, data: session });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getLiveChatSession = async (req, res) => {
  try {
    const session = await getSessionOr404(req.params.id);
    session.messages.forEach((message) => {
      if (message.sender === 'agent') message.readByVisitor = true;
    });
    await session.save();
    res.json({ success: true, data: session });
  } catch (error) {
    res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
};

export const addVisitorMessage = async (req, res) => {
  try {
    const text = cleanText(req.body?.message);
    if (!text) return res.status(400).json({ success: false, message: 'Message is required' });

    const session = await getSessionOr404(req.params.id);
    if (session.status === 'closed') session.status = 'waiting';
    addMessage(session, 'visitor', text);
    await session.save();
    res.status(201).json({ success: true, data: session });
  } catch (error) {
    res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
};

export const getAdminLiveChatSessions = async (req, res) => {
  try {
    const sessions = await LiveChatSession.find()
      .sort({ lastMessageAt: -1 })
      .limit(100);

    res.json({ success: true, data: sessions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addAgentMessage = async (req, res) => {
  try {
    const text = cleanText(req.body?.message);
    if (!text) return res.status(400).json({ success: false, message: 'Message is required' });

    const session = await getSessionOr404(req.params.id);
    session.status = 'active';
    addMessage(session, 'agent', text);
    await session.save();
    res.status(201).json({ success: true, data: session });
  } catch (error) {
    res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
};

export const updateLiveChatStatus = async (req, res) => {
  try {
    const status = cleanText(req.body?.status, 20);
    if (!['waiting', 'active', 'closed'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }

    const session = await getSessionOr404(req.params.id);
    session.status = status;
    await session.save();
    res.json({ success: true, data: session });
  } catch (error) {
    res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
};

export const markAdminRead = async (req, res) => {
  try {
    const session = await getSessionOr404(req.params.id);
    session.messages.forEach((message) => {
      if (message.sender === 'visitor' || message.sender === 'system') message.readByAdmin = true;
    });
    await session.save();
    res.json({ success: true, data: session });
  } catch (error) {
    res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
};
