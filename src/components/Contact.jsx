"use client";
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xvgzrvrk', { // You'll need to replace this with your Formspree form ID
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-md border border-purple-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">📧</span>
                <a href="mailto:apenukon@gmu.edu" className="text-gray-300 hover:text-purple-400">
                  apenukon@gmu.edu
                </a>
              </div>
              {/* <div className="flex items-center">
                <span className="text-purple-400 mr-3">📱</span>
                <p className="text-gray-300">+1 (571) 668-3858</p>
              </div> */}
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">📍</span>
                <p className="text-gray-300">Burke, VA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-md border border-purple-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           text-white placeholder-gray-400"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg 
                         hover:bg-purple-700 transition-colors duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
