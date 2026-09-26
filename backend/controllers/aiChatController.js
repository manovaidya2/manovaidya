import { answerWebsiteQuestion, getAiChatConfigStatus } from '../services/aiChatService.js';
import { checkConsultationAvailability } from '../services/consultationAvailabilityService.js';
import { syncConversationUserDetails } from '../services/aiConversationService.js';

const getErrorStatus = (error) => {
  if (error.code === 'QUESTION_REQUIRED') return 400;
  if (error.code === 'GEMINI_NOT_CONFIGURED') return 503;
  return 500;
};

export const getAiChatStatus = (req, res) => {
  res.json({
    success: true,
    data: getAiChatConfigStatus()
  });
};

export const askAiChat = async (req, res) => {
  try {
    const body = req.body || {};
    const result = await answerWebsiteQuestion({
      question: body.question || body.message || body.prompt || body.text,
      context: body.context || body.websiteContext || body.content,
      conversationId: body.conversationId
    });

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    if (error.code === 'QUESTION_REQUIRED') {
      console.warn('AI chat validation:', error.message);
    } else {
      console.error('AI chat error:', error.message);
    }
    res.status(getErrorStatus(error)).json({
      success: false,
      message: error.message,
      code: error.code || 'AI_CHAT_ERROR'
    });
  }
};

export const checkAiChatConsultationAvailability = async (req, res) => {
  try {
    const result = await checkConsultationAvailability({
      mode: req.body?.mode,
      date: req.body?.date,
      time: req.body?.time
    });
    res.json({ success: true, data: result });
  } catch (error) {
    console.error('AI chat availability error:', error.message);
    res.status(500).json({ success: false, message: 'Unable to check slot availability.' });
  }
};

export const syncAiChatConversationDetails = async (req, res) => {
  try {
    const conversation = await syncConversationUserDetails(req.body?.conversationId, req.body || {});
    if (!conversation) {
      return res.status(404).json({ success: false, message: 'Conversation not found.' });
    }
    res.json({ success: true });
  } catch (error) {
    console.error('AI chat detail sync error:', error.message);
    res.status(500).json({ success: false, message: 'Unable to update conversation details.' });
  }
};
