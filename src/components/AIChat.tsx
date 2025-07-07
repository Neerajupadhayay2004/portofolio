import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm Neeraj's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: Record<string, string> = {
    skills: "Neeraj has expertise in:\n• Frontend: HTML/CSS (95%), JavaScript (90%), React (85%)\n• Backend: Node.js (90%), Python (85%), Java (80%)\n• Security: Penetration Testing (90%), Ethical Hacking (85%)\n• AI: Generative AI (75%), AI Security (70%)\n• Databases: MongoDB (85%), MySQL (80%)",
    projects: "Here are some of Neeraj's key projects:\n• Hidden Spots Stories - Location sharing platform\n• MLM System - Multi-level marketing platform\n• Password Strength Checker - Security validation tool\n• Chess Game - Full-featured chess implementation\n• TECH BUDDY - Healthcare diagnostics platform\n• KYC System - Identity verification system",
    experience: "Neeraj's professional journey includes:\n• Full Stack Developer & Security Researcher (2024-Present)\n• Ethical Hacking & CTF Competitor (2023-2024) - Top 15% in penetration testing\n• AI & Cybersecurity Intern at Ybi Foundation (2023)\n• Hackathon Technical Lead - 2nd place winner\n• Multiple cybersecurity simulations (AIG, ANZ)",
    education: "Educational Background:\n• B.Tech Computer Science (Cybersecurity) - IILM University (2023-2027)\n• 12th Grade - PC College, Buxar (60%)\n• 10th Grade - SS Convent, Buxar (72.8%)",
    certifications: "Key Certifications:\n• MongoDB Certification\n• Foundation of Cybersecurity (Coursera)\n• AWS Cloud Security\n• Microsoft 365 Copilot\n• GitHub Copilot\n• Java Basics (HackerRank)\n• AI & Generative AI (Ybi Foundation)",
    contact: "You can reach Neeraj at:\n📞 +91 6200592390\n📧 neerajupadhayay347@gmail.com\n📍 Buxar, Bihar, India\n🔗 GitHub: github.com/Neerajupadhayay2004\n💼 LinkedIn: linkedin.com/in/neeraj-upadhayay"
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return predefinedResponses.skills;
    }
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return predefinedResponses.projects;
    }
    if (message.includes('experience') || message.includes('job') || message.includes('career')) {
      return predefinedResponses.experience;
    }
    if (message.includes('education') || message.includes('study') || message.includes('degree')) {
      return predefinedResponses.education;
    }
    if (message.includes('certificate') || message.includes('qualification')) {
      return predefinedResponses.certifications;
    }
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('phone')) {
      return predefinedResponses.contact;
    }
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn about Neeraj's background. You can ask me about his skills, projects, experience, education, certifications, or contact information.";
    }
    if (message.includes('ai') || message.includes('artificial intelligence')) {
      return "Neeraj is passionate about AI! He has completed certifications in Generative AI and AI Security, and applies AI concepts to enhance security solutions. He's experienced with AI tools like GitHub Copilot and Microsoft 365 Copilot.";
    }
    if (message.includes('security') || message.includes('cybersecurity') || message.includes('hacking')) {
      return "Security is Neeraj's specialty! He's skilled in penetration testing, ethical hacking, and has completed simulations with AIG and ANZ. He participates in CTF competitions and ranks in the top 15% for penetration testing challenges.";
    }
    
    return "That's an interesting question! I can help you learn about Neeraj's skills, projects, experience, education, certifications, or contact information. What specific area would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: getAIResponse(inputValue),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-400 text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-50 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 w-80 lg:w-96 h-96 bg-gray-900/95 backdrop-blur-md rounded-2xl border border-cyan-400/30 shadow-[0_0_20px_rgba(0,0,0,0.3)] z-50 overflow-hidden flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 px-4 py-3 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                <Bot size={16} className="text-black" />
              </div>
              <div>
                <div className="text-cyan-400 font-bold text-sm">AI Assistant</div>
                <div className="text-gray-400 text-xs">Ask me about Neeraj</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400' 
                      : 'bg-gradient-to-r from-purple-400 to-pink-400'
                  }`}>
                    {message.type === 'user' ? (
                      <User size={12} className="text-black" />
                    ) : (
                      <Bot size={12} className="text-black" />
                    )}
                  </div>
                  <div className={`px-3 py-2 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-black'
                      : 'bg-gray-800/70 text-gray-300 border border-white/10'
                  }`}>
                    <div className="whitespace-pre-line">{message.content}</div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <Bot size={12} className="text-black" />
                  </div>
                  <div className="bg-gray-800/70 border border-white/10 px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about skills, projects, experience..."
                className="flex-1 px-3 py-2 bg-gray-800/70 border border-white/10 rounded-lg text-gray-300 text-sm focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,184,255,0.1)]"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-3 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-black rounded-lg hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;