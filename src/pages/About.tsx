import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Award, Globe, Heart, ShieldCheck, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { title: "Clear Strategy", desc: "Every project starts with business goals, audience needs, and a plan designed to drive action.", icon: <Globe className="w-8 h-8 text-primary" /> },
  { title: "Premium Design", desc: "We create digital experiences that look modern, strong, and easy to trust at first glance.", icon: <ShieldCheck className="w-8 h-8 text-amber-500" /> },
  { title: "Client Focus", desc: "Your growth, clarity, and confidence are built into every decision we make for your brand.", icon: <Heart className="w-8 h-8 text-rose-500" /> },
  { title: "Results-first Thinking", desc: "We design for visibility, conversion, and long-term business momentum, not just good-looking pages.", icon: <Target className="w-8 h-8 text-primary" /> },
];

const process = [
  { step: "01", title: "Discover", desc: "We learn about your business, competition, customer journey, and growth goals." },
  { step: "02", title: "Design", desc: "We map your brand story, layout system, and content strategy into a clear structure." },
  { step: "03", title: "Build", desc: "We turn the plan into a polished website or brand system that is live, responsive, and usable." },
  { step: "04", title: "Support", desc: "We remain available for updates, troubleshooting, and smarter digital improvements over time." },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="space-y-6 rounded-3xl border border-primary/5 bg-beige/20 p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                {value.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold">{value.title}</h3>
              <p className="text-dark/60 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">How we work</p>
            <h2 className="mt-4 font-serif text-4xl font-bold">A simple process built for clarity and momentum.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">{item.step}</span>
                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-primary/10 bg-gradient-to-br from-primary/5 via-white to-amber-100/40 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Why clients hire us</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-dark">We bring structure, design, and real business thinking together.</h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-dark/70">
              <p>TechKing Bingo helps businesses stop feeling stuck online. We turn outdated pages, generic visuals, and unclear messaging into systems that are easier to trust and easier to use.</p>
              <p>From start-ups to service businesses, we help owners present a sharper proposition, improve their online credibility, and make the website work harder for growth.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { label: "Happy Clients", value: "500+", icon: <Users className="h-6 w-6 text-gold" /> },
              { label: "Web Projects", value: "120+", icon: <Globe className="h-6 w-6 text-primary" /> },
              { label: "Creative Experts", value: "12", icon: <Award className="h-6 w-6 text-gold" /> },
              { label: "Growth Focus", value: "100%", icon: <Target className="h-6 w-6 text-primary" /> }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-4 rounded-[28px] border border-primary/5 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">{stat.icon}</div>
                <p className="font-serif text-3xl font-bold text-gold md:text-4xl">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-dark/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">Want a web presence that feels premium and trustworthy?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">Let’s build a digital experience that reflects the quality of your business and gives your customers confidence from the very first click.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary shadow-lg transition hover:-translate-y-0.5">
            Talk to us
            <ArrowRight className="h-4 w-4" />
          </Link>
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
