
import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { getAIResponse } from '../services/geminiService';
import { PaperAirplaneIcon, SparklesIcon, UserIcon, CpuChipIcon } from './icons';
import { motion, AnimatePresence } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'ai', text: "Hello! I'm Shijas's AI assistant. Ask me anything about his skills, projects, or experience." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only scroll after the initial message to prevent page load scroll
    if (messages.length > 1) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
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
    <motion.section 
        id="ai-assistant" 
        className="py-16 bg-secondary"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
    >
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-border p-3 rounded-full mb-4">
                <SparklesIcon className="w-8 h-8 text-accent"/>
            </div>
            <h2 className="text-3xl font-bold text-accent">Chat with my AI Clone</h2>
            <p className="text-text-secondary mt-2">Powered by Google Gemini</p>
        </div>
        <div className="max-w-2xl mx-auto bg-primary rounded-lg border border-border shadow-2xl flex flex-col h-[500px]">
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`flex items-start gap-3 my-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0 flex items-center justify-center">
                    <CpuChipIcon className="w-5 h-5 text-white" />
                  </div>
                )}
                <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-accent text-white rounded-br-none' : 'bg-border text-text-primary rounded-bl-none'}`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
                 {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-text-secondary flex-shrink-0 flex items-center justify-center">
                    <UserIcon className="w-5 h-5 text-primary" />
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
                     <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0 flex items-center justify-center">
                       <CpuChipIcon className="w-5 h-5 text-white" />
                     </div>
                     <div className="flex items-center space-x-1 p-2 bg-border rounded-lg">
                       <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse delay-0"></span>
                       <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse delay-150"></span>
                       <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse delay-300"></span>
                     </div>
                   </motion.div>
                )}
            </AnimatePresence>
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my projects..."
                className="w-full bg-secondary border border-border rounded-full py-2 pl-4 pr-12 text-text-primary focus:ring-2 focus:ring-accent focus:outline-none transition-shadow"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent p-1.5 rounded-full hover:bg-accent-dark disabled:bg-text-secondary disabled:cursor-not-allowed transition-colors"
                disabled={isLoading || !input.trim()}
              >
                <PaperAirplaneIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};