import React from "react";
import { motion } from "motion/react";
import { Leaf, Heart, ShieldCheck, Target, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero */}
     <section className="relative text-dark py-24 overflow-hidden border-b border-primary/5">
  {/* Background Image */}
  <img
    src="/images/about-bg.jpg" // Put your About page bg in public/images/
    alt="About GHMC Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-beige/60" />

  {/* Optional Blur/Decorative Shape */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl" />

  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-6xl font-serif font-bold mb-6 text-dark"
    >
      About GHMC
    </motion.h1>
    <p className="text-xl text-dark/80 max-w-2xl mx-auto leading-relaxed">
      Rooted in tradition, powered by nature, and dedicated to your holistic wellness.
    </p>
  </div>
</section>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold text-dark leading-tight">Our Story & Mission</h2>
            <p className="text-lg text-dark/70 leading-relaxed">
              Gyenyamdi Herbal and Massage Center (GHMC) was founded with a single vision: to bridge the gap between ancient herbal wisdom and modern wellness practices. We believe that true healing comes from nature and the expert touch of professional therapy.
            </p>
            <div className="bg-primary/5 p-8 rounded-3xl border-l-4 border-primary italic text-primary font-medium">
              "To provide natural healing solutions and professional wellness services for a healthier life."
            </div>
            <p className="text-dark/70 leading-relaxed">
              Located in the heart of Oyibi, we have become a trusted sanctuary for those seeking relief from chronic conditions and the stresses of modern life.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" 
              alt="Wellness Center" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-primary/5 hidden md:block">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-gold" />
                <span className="font-bold text-dark">Certified Experts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Our Core Values</h2>
          <p className="text-dark/60">The principles that guide every treatment and interaction.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Natural Healing", desc: "We prioritize organic, herbal solutions that work with your body's natural rhythms.", icon: <Leaf className="w-8 h-8 text-primary" /> },
            { title: "Professional Care", desc: "Our team consists of highly trained therapists dedicated to your comfort and recovery.", icon: <ShieldCheck className="w-8 h-8 text-gold" /> },
            { title: "Customer Satisfaction", desc: "Your wellness journey is our priority. We listen, care, and deliver results.", icon: <Heart className="w-8 h-8 text-red-400" /> }
          ].map((value, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 bg-beige/20 rounded-3xl border border-primary/5 text-center space-y-6"
            >
              <div className="mx-auto w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                {value.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold">{value.title}</h3>
              <p className="text-dark/60 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Happy Clients", value: "5,000+", icon: <Users className="w-6 h-6 text-gold" /> },
              { label: "Herbal Formulas", value: "50+", icon: <Leaf className="w-6 h-6 text-primary" /> },
              { label: "Expert Therapists", value: "12", icon: <Award className="w-6 h-6 text-gold" /> },
              { label: "Years Experience", value: "10+", icon: <Target className="w-6 h-6 text-primary" /> }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-gold">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
