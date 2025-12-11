// AI Service - Real API Integration for ChatGPT, Gemini, and Perplexity

const API_ENDPOINTS = {
  chatgpt: 'https://api.openai.com/v1/chat/completions',
  gemini: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
  perplexity: 'https://api.perplexity.ai/chat/completions',
};

// Save API keys to localStorage
export const saveApiKeys = (keys) => {
  localStorage.setItem('muc_orbit_ai_keys', JSON.stringify(keys));
};

// Get API keys from localStorage
export const getApiKeys = () => {
  const stored = localStorage.getItem('muc_orbit_ai_keys');
  return stored ? JSON.parse(stored) : {};
};

// Call ChatGPT API
const callChatGPT = async (message, apiKey) => {
  const response = await fetch(API_ENDPOINTS.chatgpt, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful AI assistant for a college management system called MUC ORBIT. Help students, teachers, and administrators with academic queries, study tips, scheduling, and general college-related questions.',
        },
        { role: 'user', content: message },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'ChatGPT API error');
  }

  const data = await response.json();
  return data.choices[0].message.content;
};

// Call Gemini API
const callGemini = async (message, apiKey) => {
  const response = await fetch(`${API_ENDPOINTS.gemini}?key=${apiKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `You are a helpful AI assistant for a college management system called MUC ORBIT. Help with academic queries, study tips, and college-related questions.\n\nUser: ${message}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Gemini API error');
  }

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
};

// Call Perplexity API
const callPerplexity = async (message, apiKey) => {
  const response = await fetch(API_ENDPOINTS.perplexity, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'llama-3.1-sonar-small-128k-online',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful AI assistant for a college management system called MUC ORBIT. Help with academic queries, study tips, and college-related questions. Provide accurate and up-to-date information.',
        },
        { role: 'user', content: message },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Perplexity API error');
  }

  const data = await response.json();
  return data.choices[0].message.content;
};

// Main function to call AI based on provider
export const callAI = async (message, provider = 'chatgpt') => {
  const keys = getApiKeys();
  const apiKey = keys[provider];

  if (!apiKey) {
    throw new Error(`No API key found for ${provider}. Please configure your API key in settings.`);
  }

  switch (provider) {
    case 'chatgpt':
      return await callChatGPT(message, apiKey);
    case 'gemini':
      return await callGemini(message, apiKey);
    case 'perplexity':
      return await callPerplexity(message, apiKey);
    default:
      throw new Error(`Unknown AI provider: ${provider}`);
  }
};

// Generate mock response for demo (when no API key)
export const getMockResponse = (message, provider) => {
  const responses = {
    study: [
      "Here are some effective study techniques:\n\n1. **Active Recall** - Test yourself regularly instead of passive reading\n2. **Spaced Repetition** - Review material at increasing intervals\n3. **Pomodoro Technique** - Study for 25 minutes, break for 5 minutes\n4. **Mind Mapping** - Create visual connections between concepts\n5. **Teaching Others** - Explain concepts to reinforce understanding",
      "To improve your study habits:\n\n• Set specific goals for each session\n• Create a distraction-free environment\n• Take regular breaks to avoid burnout\n• Use multiple resources for learning\n• Review notes within 24 hours of class",
    ],
    schedule: [
      "Here's a recommended daily schedule for students:\n\n**Morning (8-12)**\n- Most challenging subjects\n- New concept learning\n\n**Afternoon (2-5)**\n- Practice problems\n- Group study\n\n**Evening (7-9)**\n- Review and revision\n- Light reading",
    ],
    grades: [
      "Tips to improve your grades:\n\n1. Attend all classes and participate actively\n2. Complete assignments on time\n3. Form study groups with classmates\n4. Visit office hours for help\n5. Practice past exam papers\n6. Focus on understanding, not memorizing",
    ],
    default: [
      "I'm here to help with your academic journey! I can assist with:\n\n• Study tips and techniques\n• Schedule management\n• Course information\n• Exam preparation\n• Assignment help\n• Career guidance\n\nWhat would you like to know?",
      "That's a great question! Based on MUC ORBIT's resources, I recommend checking with your department or using the student portal for detailed information. Is there anything specific I can help clarify?",
    ],
  };

  const lowerMessage = message.toLowerCase();
  let category = 'default';

  if (lowerMessage.includes('study') || lowerMessage.includes('learn')) {
    category = 'study';
  } else if (lowerMessage.includes('schedule') || lowerMessage.includes('time')) {
    category = 'schedule';
  } else if (lowerMessage.includes('grade') || lowerMessage.includes('marks') || lowerMessage.includes('score')) {
    category = 'grades';
  }

  const categoryResponses = responses[category];
  return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
};

export default {
  callAI,
  saveApiKeys,
  getApiKeys,
  getMockResponse,
};
