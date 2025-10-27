import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, LinkedinIcon, GithubIcon, MapPinIcon, PhoneIcon, SendIcon } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: <MailIcon size={24} />,
    label: 'Email',
    value: 'aayusha.shingavi@example.com',
    link: 'mailto:aayusha.shingavi@example.com'
  }, {
    icon: <LinkedinIcon size={24} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/aayushashingavi',
    link: 'https://linkedin.com/in/aayushashingavi'
  }, {
    icon: <GithubIcon size={24} />,
    label: 'GitHub',
    value: 'github.com/aayushashingavi',
    link: 'https://github.com/aayushashingavi'
  }, {
    icon: <MapPinIcon size={24} />,
    label: 'Location',
    value: 'Hoboken, New Jersey',
    link: null
  }];
  return <div className="relative min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-stone-700 to-stone-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss product management? I'd
            love to hear from you!
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-700 focus:border-transparent transition-all" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-700 focus:border-transparent transition-all" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-700 focus:border-transparent transition-all" placeholder="What's this about?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-700 focus:border-transparent transition-all resize-none" placeholder="Tell me about your project or idea..." />
              </div>
              <motion.button type="submit" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="w-full px-8 py-4 bg-gradient-to-r from-stone-700 to-stone-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-stone-500/50 transition-shadow">
                Send Message
                <SendIcon size={20} />
              </motion.button>
            </form>
          </motion.div>
          {/* Contact Information */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-300 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.1
              }} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-stone-700 to-stone-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {info.label}
                      </p>
                      {info.link ? <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-stone-700 transition-colors">
                          {info.value}
                        </a> : <p className="text-gray-900">{info.value}</p>}
                    </div>
                  </motion.div>)}
              </div>
            </div>
            <div className="p-8 bg-white border border-stone-300 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Let's Connect!
              </h2>
              <p className="text-gray-600 mb-6">
                I'm always interested in hearing about new opportunities,
                collaborations, or just having a conversation about product
                management and technology.
              </p>
              <div className="flex gap-4">
                <motion.a href="https://linkedin.com/in/aayushashingavi" target="_blank" rel="noopener noreferrer" whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.95
              }} className="w-12 h-12 bg-gradient-to-br from-stone-700 to-stone-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-shadow">
                  <LinkedinIcon size={24} />
                </motion.a>
                <motion.a href="https://github.com/aayushashingavi" target="_blank" rel="noopener noreferrer" whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.95
              }} className="w-12 h-12 bg-gradient-to-br from-stone-700 to-stone-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-shadow">
                  <GithubIcon size={24} />
                </motion.a>
                <motion.a href="mailto:aayusha.shingavi@example.com" whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.95
              }} className="w-12 h-12 bg-gradient-to-br from-stone-700 to-stone-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-shadow">
                  <MailIcon size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
}