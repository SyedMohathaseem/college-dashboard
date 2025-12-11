import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { callAI, saveApiKeys, getApiKeys, getMockResponse } from '../../services/aiService';
import {
  HiOutlinePaperAirplane,
  HiOutlineSparkles,
  HiOutlineCog,
  HiOutlineX,
  HiOutlineClipboard,
  HiOutlineCheck,
  HiOutlineTrash,
  HiOutlineLightBulb,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineAcademicCap,
} from 'react-icons/hi';
import { SiOpenai, SiGoogle } from 'react-icons/si';
import toast from 'react-hot-toast';

const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState('chatgpt');
  const [showSettings, setShowSettings] = useState(false);
  const [apiKeys, setApiKeys] = useState(getApiKeys());
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);

  const providers = [
    { id: 'chatgpt', name: 'ChatGPT', icon: SiOpenai, color: 'text-emerald-500' },
    { id: 'gemini', name: 'Gemini', icon: SiGoogle, color: 'text-blue-500' },
    { id: 'perplexity', name: 'Perplexity', icon: HiOutlineSparkles, color: 'text-purple-500' },
  ];

  const quickPrompts = [
    { text: 'Study tips for exams', icon: HiOutlineLightBulb },
    { text: 'Help me with assignment', icon: HiOutlineBookOpen },
    { text: 'Create study schedule', icon: HiOutlineCalendar },
    { text: 'Explain this concept', icon: HiOutlineAcademicCap },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { id: Date.now(), role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      let response;
      const hasApiKey = apiKeys[provider];

      if (hasApiKey) {
        response = await callAI(input, provider);
      } else {
        // Use mock response for demo
        await new Promise((resolve) => setTimeout(resolve, 1000));
        response = getMockResponse(input, provider);
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: 'assistant', content: response, provider },
      ]);
    } catch (error) {
      toast.error(error.message || 'Failed to get response');
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: 'assistant',
          content: `Error: ${error.message}. Please check your API key or try again.`,
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success('Copied to clipboard');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const saveKeys = () => {
    saveApiKeys(apiKeys);
    toast.success('API keys saved');
    setShowSettings(false);
  };

  const clearChat = () => {
    setMessages([]);
    toast.success('Chat cleared');
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Assistant</h1>
          <p className="text-gray-500 dark:text-gray-400">Get help with studies, assignments, and more</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={clearChat}
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-500"
            title="Clear chat"
          >
            <HiOutlineTrash className="w-5 h-5" />
          </button>
          <button
            onClick={() => setShowSettings(true)}
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-500"
            title="Settings"
          >
            <HiOutlineCog className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Provider Selection */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {providers.map((p) => (
          <button
            key={p.id}
            onClick={() => setProvider(p.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
              provider === p.id
                ? 'bg-primary-500 text-white'
                : 'bg-white dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-200'
            }`}
          >
            <p.icon className={`w-4 h-4 ${provider === p.id ? 'text-white' : p.color}`} />
            <span className="text-sm font-medium">{p.name}</span>
            {!apiKeys[p.id] && (
              <span className="text-xs opacity-60">(Demo)</span>
            )}
          </button>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white dark:bg-dark-300 rounded-2xl border border-gray-200 dark:border-dark-100 overflow-hidden flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4">
                <HiOutlineSparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                How can I help you today?
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
                I'm your AI assistant for MUC ORBIT. Ask me anything about studies, schedules, or college life!
              </p>

              {/* Quick Prompts */}
              <div className="grid grid-cols-2 gap-3 max-w-md">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(prompt.text)}
                    className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-dark-200 hover:bg-gray-100 dark:hover:bg-dark-100 text-left transition-colors"
                  >
                    <prompt.icon className="w-5 h-5 text-primary-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{prompt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-primary-500 text-white'
                        : message.isError
                        ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                        : 'bg-gray-100 dark:bg-dark-200 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    {message.role === 'assistant' && !message.isError && (
                      <button
                        onClick={() => copyToClipboard(message.content, message.id)}
                        className="mt-2 flex items-center gap-1 text-xs opacity-60 hover:opacity-100"
                      >
                        {copiedId === message.id ? (
                          <HiOutlineCheck className="w-4 h-4" />
                        ) : (
                          <HiOutlineClipboard className="w-4 h-4" />
                        )}
                        {copiedId === message.id ? 'Copied' : 'Copy'}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-dark-200 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 dark:border-dark-100">
          <div className="flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-dark-100 rounded-xl resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 dark:text-gray-200"
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="px-4 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <HiOutlinePaperAirplane className="w-5 h-5 rotate-90" />
            </button>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-300 rounded-2xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">API Settings</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-dark-200 rounded-lg"
                >
                  <HiOutlineX className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                {providers.map((p) => (
                  <div key={p.id}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {p.name} API Key
                    </label>
                    <input
                      type="password"
                      value={apiKeys[p.id] || ''}
                      onChange={(e) => setApiKeys({ ...apiKeys, [p.id]: e.target.value })}
                      placeholder={`Enter your ${p.name} API key`}
                      className="input-field"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  💡 Without API keys, the assistant will use demo responses. Add your keys for real AI integration.
                </p>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 btn-secondary py-2"
                >
                  Cancel
                </button>
                <button onClick={saveKeys} className="flex-1 btn-primary py-2">
                  Save Keys
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAssistant;
