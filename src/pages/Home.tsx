import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Calendar,
  CheckCircle2,
  Compass,
  Cpu,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Phone,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Workflow,
  X,
} from "lucide-react";

const services = [
  {
    title: "Custom Website Development",
    desc: "Corporate, e-commerce, portfolio, and business websites designed to create trust and support growth.",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80&w=900",
    link: "/services",
    icon: <MonitorSmartphone className="h-5 w-5" />,
  },
  {
    title: "Branding & Logo Design",
    desc: "Powerful visual identities, logo design, and messaging that help brands stand out in competitive markets.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=900",
    link: "/services",
    icon: <Palette className="h-5 w-5" />,
  },
  {
    title: "SEO & Growth Strategy",
    desc: "Technical improvements, visible positioning, and performance support that attract the right customers online.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900",
    link: "/services",
    icon: <BarChart3 className="h-5 w-5" />,
  },
];

const reasons = [
  { title: "Business-first design", desc: "Every site is shaped around your goals, customers, and the outcome you want from your digital presence.", icon: <ShieldCheck className="h-6 w-6" /> },
  { title: "Modern technology", desc: "We design with current tools, user experience best practices, and scalable solutions in mind.", icon: <Layers3 className="h-6 w-6" /> },
  { title: "Reliable support", desc: "We stay involved after launch with updates, maintenance, and practical guidance for your brand.", icon: <Rocket className="h-6 w-6" /> },
  { title: "Customer-focused service", desc: "We build with clarity, trust, and business growth in mind for every client relationship.", icon: <Compass className="h-6 w-6" /> },
];

const projects = [
  {
    name: "Business Website Refresh",
    description: "A polished digital presence for a service business that needed stronger trust, clearer messaging, and better conversion flow.",
    tags: ["UI/UX", "Web Design", "Branding"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Growth-Focused Landing Page",
    description: "A faster, more modern website setup designed to communicate value and support customer action.",
    tags: ["Landing Page", "Strategy", "SEO"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "AI & Automation Web System",
    description: "A smarter digital experience with automated support features, lead capture, and business process enhancements.",
    tags: ["AI", "Automation", "UX"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900",
  },
];

const processSteps = [
  { number: "01", title: "Discuss", description: "We learn about your business goals, audience, and the problem you want to solve." },
  { number: "02", title: "Plan", description: "We map the right structure, platform, design system, and digital direction for your project." },
  { number: "03", title: "Build", description: "We design and develop a solution that is modern, useful, and built for real business use." },
  { number: "04", title: "Deliver", description: "We launch, support, and refine your digital presence so it continues to perform for your business." },
];

const testimonials = [
  {
    quote: "TechKing Bingo understood our business goals and translated them into a clean, professional online presence that feels credible.",
    note: "Business owner",
  },
  {
    quote: "Their process was clear and collaborative, and the final website looked premium while still being easy to manage and update.",
    note: "Startup founder",
  },
  {
    quote: "We wanted more digital visibility and a stronger brand image. TechKing Bingo delivered a solution that helped us look more professional online.",
    note: "Service brand",
  },
];

const focusAreas = [
  "Website design and redesign",
  "Branding and logo design",
  "SEO and performance optimization",
  "Hosting and domain setup support",
  "AI chatbot integration",
  "Business automation and software support",
  "Website maintenance and updates",
  "UI/UX design and custom software solutions",
];

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVideoOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-8rem] top-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-24 left-1/3 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-dark shadow-2xl">
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close welcome video"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full bg-black">
              <video
                className="h-full w-full object-cover"
                controls
                autoPlay
                playsInline
                poster="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
              >
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      <section className="relative isolate overflow-hidden pt-28 pb-18 sm:pt-32 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(215,40,40,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(249,182,45,0.12),transparent_25%)]" />
        <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              The Elle Corporations
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] text-dark sm:text-6xl lg:text-7xl">
              <span className="text-primary">TechKing Bingo</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-dark/70">
              We help businesses in Ghana and beyond build a stronger online presence, connect with customers, and increase productivity through smart websites and digital systems.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-white shadow-xl shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/15 bg-white px-7 py-4 text-base font-semibold text-dark transition hover:border-primary hover:text-primary"
              >
                <Play className="h-4 w-4 fill-current" />
                Watch Welcome Video
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-dark/65">
              <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-dark/5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Website design
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-dark/5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Branding systems
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-dark/5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Growth support
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -right-8 bottom-8 h-32 w-32 rounded-full bg-gold/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-white p-4 shadow-[0_30px_80px_rgba(22,22,22,0.12)]">
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200"
                  alt="TechKing Bingo workspace"
                  className="h-[540px] w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute left-8 top-8 rounded-2xl border border-white/40 bg-white/85 p-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-dark/45">Founded</p>
                    <p className="text-sm font-bold text-dark">2025</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 rounded-2xl bg-dark p-4 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Business impact</p>
                <p className="mt-1 text-2xl font-bold text-gold">+30%</p>
                <p className="text-xs text-white/70">Growth potential</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section id="about" className="py-24 bg-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }}>
        <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">About us</p>
              <h2 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">Founded by King-Bi Emmanuella of The Elle Corporations.</h2>
            </div>
            <p className="text-lg leading-relaxed text-dark/70">
              TechKing Bingo was founded by King-Bi Emmanuella of The Elle Corporations in 2025 as a way to help businesses in Ghana have an online presence, connect with customers, and increase productivity. We later partnered with NextEdge Designs and Pixelink Studios, which helped elevate our work and grow our operational capacity.
            </p>
            <div className="rounded-3xl border border-primary/10 bg-primary/5 p-6 text-primary shadow-sm">
              “TechKing Bingo still thrives to bring the best out of its clients through various stages of the clientele life.”
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-base font-semibold text-primary hover:text-primary/80">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -bottom-6 right-8 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
              alt="TechKing team working"
              className="relative h-[500px] w-full rounded-[32px] object-cover shadow-[0_25px_65px_rgba(23,24,29,0.15)]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.section>

      <motion.section className="bg-surface py-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
        <div className="section-shell">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">What we do</p>
            <h2 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">Helping businesses grow with stronger digital systems</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[28px] border border-dark/5 bg-white p-6 shadow-[0_14px_35px_rgba(17,17,17,0.04)] transition-all hover:border-primary/20 hover:shadow-[0_18px_45px_rgba(215,40,40,0.08)]"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-dark">{service.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-dark/65">{service.desc}</p>
                <Link to={service.link} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="bg-dark py-24 text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
        <div className="section-shell">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Why choose TechKing</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Built for clarity, trust, and growth.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((item, idx) => (
              <div key={idx} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-dark/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="bg-white py-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
        <div className="section-shell">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Vision & mission</p>
              <h2 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">A brand built for long-term digital success.</h2>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
              Read Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] border border-primary/10 bg-primary/5 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Vision</p>
              <h3 className="mt-4 text-3xl font-bold text-dark">To become a leading web development brand in Africa, expanding globally by offering cutting-edge digital solutions.</h3>
            </div>

            <div className="rounded-[28px] border border-gold/15 bg-gold/5 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <Workflow className="h-6 w-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Mission</p>
              <h3 className="mt-4 text-3xl font-bold text-dark">To empower businesses with innovative, user-friendly websites that drive growth and visibility online.</h3>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="bg-surface py-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
        <div className="section-shell">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Featured work</p>
            <h2 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">Projects built for modern brands.</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <div key={idx} className="group overflow-hidden rounded-[28px] border border-dark/5 bg-beige/30 shadow-[0_18px_40px_rgba(17,17,17,0.04)] transition hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(17,17,17,0.08)]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-dark/50 ring-1 ring-dark/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-dark">{project.name}</h3>
                  <p className="mt-3 text-base leading-relaxed text-dark/65">{project.description}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                    View Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="bg-white py-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
        <div className="section-shell">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">How we work</p>
            <h2 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">Simple, clear, and collaborative.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="relative rounded-[28px] border border-dark/5 bg-white p-6 shadow-[0_12px_32px_rgba(17,17,17,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-black text-white">
                  {step.number}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-dark">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-dark/65">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="bg-white py-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
        <div className="section-shell">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Reviews</p>
            <h2 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">What clients say about working with us.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item, idx) => (
              <div key={idx} className="rounded-[28px] border border-dark/5 bg-beige/30 p-7 shadow-[0_12px_30px_rgba(17,17,17,0.04)]">
                <div className="mb-5 flex gap-1 text-gold">
                  {[...Array(5)].map((_, starIdx) => <Star key={starIdx} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-base leading-relaxed text-dark/70">“{item.quote}”</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-dark/45">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="bg-primary py-20 text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
        <div className="section-shell">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-primary to-[#b71d1d] p-8 shadow-[0_20px_60px_rgba(215,40,40,0.3)] md:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Let’s build something great</p>
                <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Have a project in mind?</h2>
                <p className="mt-4 text-lg leading-relaxed text-white/80">
                  Tell us what your business needs and we’ll help shape the right digital solution for your growth goals.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/booking" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary shadow-lg transition hover:-translate-y-0.5">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="bg-white py-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
        <div className="section-shell">
          <div className="mb-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Meet the team</p>
            <h2 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">The people behind the brand.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "King-Bi Emmanuella", role: "CEO / Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=900" },
              { name: "Kelvin Dampson", role: "Web Developer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=900" },
              { name: "Kofi Amoah", role: "Graphics Designer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=900" },
            ].map((person) => (
              <div key={person.name} className="rounded-[28px] border border-dark/5 bg-beige/30 p-5 shadow-[0_12px_30px_rgba(17,17,17,0.04)]">
                <img src={person.image} alt={person.name} className="h-72 w-full rounded-[24px] object-cover" referrerPolicy="no-referrer" />
                <h3 className="mt-5 text-2xl font-bold text-dark">{person.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="bg-surface py-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
        <div className="section-shell">
          <div className="mb-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Our focus</p>
            <h2 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">The solutions we provide for growing businesses.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area} className="flex items-center gap-3 rounded-[24px] border border-dark/5 bg-white p-4 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Cpu className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-dark/75">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="border-t border-dark/5 bg-beige/30 py-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
        <div className="section-shell">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-center gap-4 rounded-[24px] bg-white p-4 shadow-sm ring-1 ring-dark/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark/40">Call us</p>
                <p className="text-base font-semibold text-dark">059 299 8435</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-[24px] bg-white p-4 shadow-sm ring-1 ring-dark/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark/40">WhatsApp</p>
                <p className="text-base font-semibold text-dark">+233592998435</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-[24px] bg-white p-4 shadow-sm ring-1 ring-dark/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark/40">Email</p>
                <p className="text-base font-semibold text-dark">techkingbingo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
