import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, User, Phone, CheckCircle, ArrowRight, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/src/lib/utils";

const services = [
  "Website Design",
  "Brand Identity",
  "Landing Page",
  "E-commerce Website",
  "SEO Strategy",
  "Website Maintenance",
  "Business Automation",
  "Digital Branding",
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
      }
    } catch (err) {
      console.error("Booking failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (success) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-md w-full border border-primary/10"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4 text-dark">Call request received</h2>
          <p className="text-dark/60 mb-8 leading-relaxed">
            Thank you, <span className="font-bold text-primary">{formData.name}</span>. Your request for <span className="font-bold">{formData.service}</span> on <span className="font-bold">{formData.date}</span> at <span className="font-bold">{formData.time}</span> has been scheduled.
          </p>
          <button
            onClick={() => window.location.href = "/"}
            className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-beige/20 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">Book a discovery call</h1>
          <p className="text-dark/60">Choose the service you need and tell us the best time to speak.</p>
        </div>

        <div className="flex justify-between mb-12 relative max-w-md mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/10 -translate-y-1/2 z-0" />
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn(
                "relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-2",
                step >= i ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "bg-white text-dark/30 border-primary/10"
              )}
            >
              {i}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-primary/5 border border-primary/5 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-serif font-bold flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-primary" />
                    Select service
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: s })}
                        className={cn(
                          "p-4 rounded-2xl text-left transition-all border-2",
                          formData.service === s
                            ? "bg-primary/5 border-primary text-primary font-bold shadow-sm"
                            : "bg-white border-primary/5 hover:border-primary/20 text-dark/70"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end pt-8">
                    <button
                      type="button"
                      disabled={!formData.service}
                      onClick={nextStep}
                      className="bg-primary text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                    >
                      Next Step <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-serif font-bold flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-primary" />
                        Select date
                      </h3>
                      <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full p-4 bg-beige/30 border-2 border-primary/5 rounded-2xl focus:border-primary focus:outline-none transition-all text-lg"
                      />
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-2xl font-serif font-bold flex items-center gap-3">
                        <Clock className="w-6 h-6 text-primary" />
                        Select time
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormData({ ...formData, time: t })}
                            className={cn(
                              "p-3 rounded-xl text-sm font-bold transition-all border-2",
                              formData.time === t
                                ? "bg-primary text-white border-primary shadow-md"
                                : "bg-white border-primary/5 hover:border-primary/20 text-dark/70"
                            )}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-primary font-bold px-8 py-4 rounded-xl hover:bg-primary/5 transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={!formData.date || !formData.time}
                      onClick={nextStep}
                      className="bg-primary text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                    >
                      Next Step <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <h3 className="text-2xl font-serif font-bold flex items-center gap-3">
                    <User className="w-6 h-6 text-primary" />
                    Personal details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-dark/60 uppercase tracking-widest ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40" />
                        <input
                          required
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 bg-beige/30 border-2 border-primary/5 rounded-2xl focus:border-primary focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-dark/60 uppercase tracking-widest ml-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40" />
                        <input
                          required
                          type="tel"
                          placeholder="Enter phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 bg-beige/30 border-2 border-primary/5 rounded-2xl focus:border-primary focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 space-y-4">
                    <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Call summary</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-dark/40 mb-1">Service</p>
                        <p className="font-bold text-dark">{formData.service}</p>
                      </div>
                      <div>
                        <p className="text-dark/40 mb-1">Date & Time</p>
                        <p className="font-bold text-dark">{formData.date} at {formData.time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-primary font-bold px-8 py-4 rounded-xl hover:bg-primary/5 transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading || !formData.name || !formData.phone}
                      className="bg-primary text-white px-12 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50 shadow-xl shadow-primary/30"
                    >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Confirm request"}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
}
