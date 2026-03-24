import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { getAIResponse } from '../services/geminiService';
import { PaperAirplaneIcon, SparklesIcon, UserIcon, CpuChipIcon } from './icons';
// FIX: Import Variants type from framer-motion to correctly type the animation variants object.
import { motion, AnimatePresence, Variants } from 'framer-motion';

// FIX: Explicitly type viewVariants with Variants to resolve type incompatibility with the 'ease' property.
const viewVariants: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] } }
};

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'ai', text: "Hello! I'm Shijas's AI assistant. Ask me anything about his skills, projects, or experience." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiText = await getAIResponse(input);
      const aiMessage: ChatMessage = { sender: 'ai', text: aiText };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Gemini API error:", error);
      const errorMessage: ChatMessage = { sender: 'ai', text: "Sorry, I encountered an error. Please try again." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      key="ai" 
      variants={viewVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      className="flex flex-col h-full"
    >
        <div className="text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">AI Assistant</h2>
            <p className="text-slate-400">Chat with my AI clone, powered by Google Gemini.</p>
        </div>
        <div className="bg-slate-800/50 rounded-lg border border-slate-700 shadow-2xl flex flex-col flex-grow">
          <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`flex items-start gap-3 my-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-sky-500 flex-shrink-0 flex items-center justify-center">
                    <CpuChipIcon className="w-5 h-5 text-white" />
                  </div>
                )}
                <div className={`max-w-[80%] px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-sky-500 text-white rounded-br-none' : 'bg-slate-800 text-slate-200 rounded-bl-none'}`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
                 {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-500 flex-shrink-0 flex items-center justify-center">
                    <UserIcon className="w-5 h-5 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
            <AnimatePresence>
                {isLoading && (
                   <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-3 my-4 justify-start"
                   >
                     <div className="w-8 h-8 rounded-full bg-sky-500 flex-shrink-0 flex items-center justify-center">
                       <CpuChipIcon className="w-5 h-5 text-white" />
                     </div>
                     <div className="flex items-center space-x-1 p-2 bg-slate-800 rounded-lg">
                       <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-0"></span>
                       <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-150"></span>
                       <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-300"></span>
                     </div>
                   </motion.div>
                )}
            </AnimatePresence>
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my projects..."
                className="w-full bg-slate-900 border border-slate-700 rounded-full py-2 pl-4 pr-12 text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-sky-400 focus:outline-none transition-shadow"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-sky-500 p-1.5 rounded-full hover:bg-sky-600 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors"
                disabled={isLoading || !input.trim()}
              >
                <PaperAirplaneIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </form>
        </div>
    </motion.div>
  );
};