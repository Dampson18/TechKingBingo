import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Loader2, CheckCircle } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="relative text-white py-24 overflow-hidden">
  {/* Background Image */}
  <img
    src="/images/contact-bg.jpg" // put your image in public/images/
    alt="Contact GHMC Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay for readability */}
  <div className="absolute inset-0 bg-primary/70" />

  {/* Optional Blur / Decorative Shape */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />

  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-6xl font-serif font-bold mb-6"
    >
      Get in Touch
    </motion.h1>
    <p className="text-xl text-white/80 max-w-2xl mx-auto">
      Have questions? We're here to help you on your path to wellness.
    </p>
  </div>
</section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-1">Our Location</p>
                    <p className="text-lg font-bold text-dark">Oyibi, Raspberries Street</p>
                    <p className="text-dark/60">Digital Address: GM-308-9329</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="bg-green-50 p-4 rounded-2xl group-hover:bg-green-500 group-hover:text-white transition-all">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-1">WhatsApp Us</p>
                    <p className="text-lg font-bold text-dark">+233 506 277 472</p>
                    <p className="text-dark/60">+233 596 774 538</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="bg-gold/10 p-4 rounded-2xl group-hover:bg-gold group-hover:text-white transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-lg font-bold text-dark">+233 537 140 997</p>
                    <p className="text-dark/60">+233 596 774 538</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-beige/30 p-8 rounded-3xl border border-primary/5">
              <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                Opening Hours
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-primary/5 pb-2">
                  <span className="text-dark/60">Monday - Friday</span>
                  <span className="font-bold">08:00 AM - 08:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-primary/5 pb-2">
                  <span className="text-dark/60">Saturday</span>
                  <span className="font-bold">09:00 AM - 06:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark/60">Sunday</span>
                  <span className="font-bold text-primary">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-primary/5 border border-primary/5">
            {sent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold">Message Sent!</h3>
                <p className="text-dark/60">Thank you for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setSent(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-serif font-bold mb-8">Send us a Message</h3>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-1">Full Name</label>
                  <input required type="text" className="w-full p-4 bg-beige/20 border-2 border-primary/5 rounded-2xl focus:border-primary focus:outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-1">Email Address</label>
                  <input required type="email" className="w-full p-4 bg-beige/20 border-2 border-primary/5 rounded-2xl focus:border-primary focus:outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-1">Message</label>
                  <textarea required className="w-full p-4 bg-beige/20 border-2 border-primary/5 rounded-2xl focus:border-primary focus:outline-none transition-all h-32" placeholder="How can we help you?"></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                >
                  {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-5 h-5" /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-[40px] shadow-2xl border border-primary/5 h-[500px] relative overflow-hidden">
            {/* Embedded Map Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.07727189158!2d-0.0886214!3d5.782143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf83796366632d%3A0x67375001198544d!2sOyibi!5e0!3m2!1sen!2sgh!4v1712040000000!5m2!1sen!2sgh" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[32px]"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
