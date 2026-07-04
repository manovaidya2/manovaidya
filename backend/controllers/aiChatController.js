import { answerWebsiteQuestion, getAiChatConfigStatus } from '../services/aiChatService.js';

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
      context: body.context || body.websiteContext || body.content
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
