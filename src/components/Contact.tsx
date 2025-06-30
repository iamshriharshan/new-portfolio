import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Centered Content */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Let's Connect
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4 sm:px-0">
              Ready to bring your ideas to life? Let's discuss how we can work together 
              to create something extraordinary.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                  Get in Touch
                </h3>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
                  I'm always open to discussing new opportunities, creative projects, 
                  or potential collaborations. Don't hesitate to reach out!
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 rounded-lg sm:rounded-xl hover:bg-slate-700/40 hover:border-slate-600/70 transition-all duration-300 hover:scale-[1.02] group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">Email</p>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-sm sm:text-base break-all">shri.harshan@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 rounded-lg sm:rounded-xl hover:bg-slate-700/40 hover:border-slate-600/70 transition-all duration-300 hover:scale-[1.02] group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-600/20 rounded-lg flex items-center justify-center group-hover:bg-slate-600/30 transition-colors duration-300 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-slate-300 transition-colors duration-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium group-hover:text-slate-300 transition-colors duration-300 text-sm sm:text-base">Phone</p>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-sm sm:text-base">+91 12345 67890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 rounded-lg sm:rounded-xl hover:bg-slate-700/40 hover:border-slate-600/70 transition-all duration-300 hover:scale-[1.02] group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600/20 rounded-lg flex items-center justify-center group-hover:bg-gray-600/30 transition-colors duration-300 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">Location</p>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-sm sm:text-base">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-slate-700/40 hover:border-slate-600/70 transition-all duration-300">
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2 hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-slate-600/60 hover:bg-slate-600/60 hover:border-slate-500/70 transition-all duration-300 text-sm sm:text-base"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2 hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-slate-600/60 hover:bg-slate-600/60 hover:border-slate-500/70 transition-all duration-300 text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2 hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-slate-600/60 hover:bg-slate-600/60 hover:border-slate-500/70 transition-all duration-300 text-sm sm:text-base"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2 hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-slate-600/60 hover:bg-slate-600/60 hover:border-slate-500/70 transition-all duration-300 resize-none text-sm sm:text-base"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-semibold rounded-lg hover:from-slate-600 hover:to-slate-500 hover:shadow-2xl hover:shadow-slate-500/25 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-slate-600 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="sm:w-5 sm:h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;