import { GoogleGenAI } from '@google/genai';

const isTemporaryModelError = (error) => {
  const details = `${error?.code || ''} ${error?.status || ''} ${error?.message || ''}`;
  return /404|429|503|NOT_FOUND|RESOURCE_EXHAUSTED|UNAVAILABLE|high demand|overloaded|not found|not supported/i.test(details);
};

export const getAiChatConfigStatus = () => ({
  configured: Boolean(process.env.GEMINI_API_KEY),
  model: process.env.GEMINI_CHAT_MODEL || 'gemini-3.1-flash-lite',
  fallbackModel: process.env.GEMINI_CHAT_FALLBACK_MODEL || 'gemini-3.5-flash'
});

export const answerWebsiteQuestion = async ({ question, context }) => {
  if (!process.env.GEMINI_API_KEY) {
    const error = new Error('GEMINI_API_KEY is not configured on the backend.');
    error.code = 'GEMINI_NOT_CONFIGURED';
    throw error;
  }

  const cleanQuestion = String(question || '').trim();
  const cleanContext = String(context || '').trim().slice(0, 6000);

  if (!cleanQuestion) {
    const error = new Error('Please enter a question.');
    error.code = 'QUESTION_REQUIRED';
    throw error;
  }

  const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const primaryModel = process.env.GEMINI_CHAT_MODEL || 'gemini-3.1-flash-lite';
  const fallbackModel = process.env.GEMINI_CHAT_FALLBACK_MODEL || 'gemini-3.5-flash';
  const models = [...new Set([primaryModel, fallbackModel].filter(Boolean))];

  const input = [
    'Website context:',
    cleanContext || 'No relevant Manovaidya information was supplied.',
    '',
    'Visitor question:',
    cleanQuestion
  ].join('\n');

  let lastError;

  for (const [modelIndex, model] of models.entries()) {
    for (let attempt = 0; attempt < 1; attempt += 1) {
      try {
        const response = await client.models.generateContent({
          model,
          contents: input,
          config: {
            systemInstruction: [
              'You are the Manovaidya AI assistant.',
              'Answer using only the supplied Manovaidya information.',
              'Do not mention internal files, raw context, website reading, source snippets, or implementation details.',
              'Match the visitor language: answer in simple English or Hinglish/Hindi when the question is Hinglish/Hindi.',
              'Give a professional, helpful answer with enough detail for a visitor.',
              'For service or condition questions, include what the concern means, how Manovaidya can support, what the care process may involve, and when to book a consultation if the context supports it.',
              'Use short paragraphs or 4 to 6 clear bullet-style lines. Avoid one-line answers unless the question is very small.',
              'If the supplied Manovaidya information does not contain the answer, say that clearly and suggest contacting the Manovaidya team or booking a consultation.',
              'Do not invent fees, medicines, diagnoses, guarantees, credentials, phone numbers, addresses, or links.',
              'For health and mental-health questions, keep the answer educational and encourage professional consultation when appropriate.',
              'If there may be an emergency, tell the visitor to seek immediate medical help.'
            ].join(' '),
            temperature: 0.25,
            maxOutputTokens: 650
          }
        });

        const answer = response.text?.trim();
        if (!answer) {
          const error = new Error('Gemini returned no answer.');
          error.code = 'GEMINI_EMPTY_RESPONSE';
          throw error;
        }

        return { answer, model };
      } catch (error) {
        lastError = error;
        if (!isTemporaryModelError(error)) throw error;

        if (modelIndex >= models.length - 1) throw error;
      }
    }
  }

  throw lastError;
};
