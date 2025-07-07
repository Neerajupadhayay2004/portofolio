import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { contactInfo } from '../data/portfolio';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gray-800/70 mx-4 lg:mx-8 my-12 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,255,157,0.1)] hover:border-blue-400/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 to-blue-400/3 -z-10" />
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-cyan-400 tracking-[3px] relative">
          CONTACT ME
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/70 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-cyan-400 mb-2 font-bold tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-blue-400/5 border border-white/10 rounded-lg text-gray-300 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_10px_rgba(0,184,255,0.1)] focus:bg-cyan-400/5 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-cyan-400 mb-2 font-bold tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-blue-400/5 border border-white/10 rounded-lg text-gray-300 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_10px_rgba(0,184,255,0.1)] focus:bg-cyan-400/5 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-cyan-400 mb-2 font-bold tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-400/5 border border-white/10 rounded-lg text-gray-300 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_10px_rgba(0,184,255,0.1)] focus:bg-cyan-400/5 transition-all duration-300"
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-cyan-400 mb-2 font-bold tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-blue-400/5 border border-white/10 rounded-lg text-gray-300 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_10px_rgba(0,184,255,0.1)] focus:bg-cyan-400/5 transition-all duration-300 resize-none"
                  placeholder="Enter your message"
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-bold text-sm uppercase tracking-wider rounded-full hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,184,255,0.3)] relative overflow-hidden group"
              >
                <Send size={18} />
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-500" />
              </button>
            </form>
          </div>
          
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-6 bg-gray-800/70 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-cyan-400/5 hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_8px_20px_rgba(0,255,157,0.1)]">
              <div className="text-cyan-400 text-2xl">
                <Mail />
              </div>
              <div>
                <div className="text-gray-300">Email</div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-gray-800/70 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-cyan-400/5 hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_8px_20px_rgba(0,255,157,0.1)]">
              <div className="text-cyan-400 text-2xl">
                <Phone />
              </div>
              <div>
                <div className="text-gray-300">Phone</div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-gray-800/70 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-cyan-400/5 hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_8px_20px_rgba(0,255,157,0.1)]">
              <div className="text-cyan-400 text-2xl">
                <MapPin />
              </div>
              <div>
                <div className="text-gray-300">Location</div>
                <div className="text-cyan-400 font-medium">{contactInfo.location}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-gray-800/70 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-cyan-400/5 hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_8px_20px_rgba(0,255,157,0.1)]">
              <div className="text-cyan-400 text-2xl">
                <Github />
              </div>
              <div>
                <div className="text-gray-300">GitHub</div>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  github.com/Neerajupadhayay2004
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-gray-800/70 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-cyan-400/5 hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_8px_20px_rgba(0,255,157,0.1)]">
              <div className="text-cyan-400 text-2xl">
                <Linkedin />
              </div>
              <div>
                <div className="text-gray-300">LinkedIn</div>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  linkedin.com/in/neeraj-upadhayay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;