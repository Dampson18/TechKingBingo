import React from "react";
import { motion } from "motion/react";
import { Award, Globe, Heart, ShieldCheck, Target, Users } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <section className="relative text-dark py-24 overflow-hidden border-b border-primary/5">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1800"
          alt="About TechKing Bingo"
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        />

        <div className="absolute inset-0 bg-beige/70" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6 text-dark"
          >
            About TechKing Bingo
          </motion.h1>
          <p className="text-xl text-dark/80 max-w-2xl mx-auto leading-relaxed">
            We are a digital-first agency helping businesses build a strong online presence and grow with confidence.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold text-dark leading-tight">Our story & mission</h2>
            <p className="text-lg text-dark/70 leading-relaxed">
              TechKing Bingo was founded to help businesses turn online visibility into real momentum. We believe a strong digital presence should do more than look good — it should build trust, create clarity, and generate results.
            </p>
            <div className="bg-primary/5 p-8 rounded-3xl border-l-4 border-primary italic text-primary font-medium">
              “We turn ideas into digital experiences that help businesses grow, stand out, and win more attention.”
            </div>
            <p className="text-dark/70 leading-relaxed">
              Whether it is a clean business website, a clear brand story, or a better online customer journey, we work closely with clients to create solutions that fit their goals.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="Digital agency team"
              className="rounded-3xl shadow-2xl h-[480px] w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-primary/5 hidden md:block">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-gold" />
                <span className="font-bold text-dark">Creative Excellence</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Our core values</h2>
          <p className="text-dark/60">The principles that guide every design decision and client relationship.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Clear Strategy", desc: "Every project starts with understanding your business, audience, and goals.", icon: <Globe className="w-8 h-8 text-primary" /> },
            { title: "Quality Design", desc: "We build polished digital experiences that feel professional and practical.", icon: <ShieldCheck className="w-8 h-8 text-gold" /> },
            { title: "Client Focus", desc: "Your growth, clarity, and satisfaction remain our top priority throughout the process.", icon: <Heart className="w-8 h-8 text-red-400" /> }
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

      <section className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Happy Clients", value: "500+", icon: <Users className="w-6 h-6 text-gold" /> },
              { label: "Web Projects", value: "120+", icon: <Globe className="w-6 h-6 text-primary" /> },
              { label: "Creative Experts", value: "12", icon: <Award className="w-6 h-6 text-gold" /> },
              { label: "Growth Focus", value: "100%", icon: <Target className="w-6 h-6 text-primary" /> }
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
