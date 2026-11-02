import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Code2, Sparkles } from "lucide-react";

const serviceHighlights = [
  {
    title: "Business-first design",
    text: "Every page is structured around your offer, customer journey, and conversion goals.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900",
  },
  {
    title: "Modern UI systems",
    text: "We use strong visual hierarchy, clean layouts, and premium design patterns that feel credible.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=900",
  },
  {
    title: "Launch-ready build",
    text: "Your website is designed to look polished and perform smoothly across screens and devices.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
  },
  {
    title: "Support after launch",
    text: "We help you stay confident with updates, improvements, and guidance after your site goes live.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=900",
  },
];

const pricingPlans = [
  {
    name: "Starter / Landing Page",
    price: "GH₵ 1,500–3,000",
    detail: "For freelancers & micro-startups running a single campaign",
    features: ["1–3 page site", "contact form", "mobile responsiveness", "social media links", "SSL/TLS setup"],
    timeline: "3–7 days",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Standard Business Website",
    price: "GH₵ 3,000–5,500",
    detail: "For growing SMEs & local businesses — law firms, clinics, and more",
    features: ["5–15 pages", "content management system", "basic SEO setup", "Google Maps integration", "professional email setup"],
    timeline: "1–3 weeks",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "E-commerce Platform",
    price: "GH₵ 5,000–10,000",
    detail: "For retailers & online shops",
    features: ["Product catalogue", "shopping cart", "inventory management", "local payment gateway integration", "SSL/TLS setup"],
    timeline: "2–5 weeks",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Website Redesign",
    price: "GH₵ 2,500–5,000",
    detail: "For any client with an existing website",
    features: ["Updated design", "SEO improvements", "modern UI/UX", "speed optimisation", "content migration"],
    timeline: "1–3 weeks",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "Custom Web Solutions",
    price: "Quoted per project",
    detail: "Tailored web applications, client portals, booking systems, and enterprise solutions.",
    features: ["Custom build", "project planning", "scoped delivery", "integration-ready architecture"],
    timeline: "Custom",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=900",
  },
];

const otherServices = [
  { name: "Ongoing support", detail: "New Website Clients", price: "Free", description: "Free consultation, 30 days post-launch support, basic SEO setup, SSL/TLS certificate assistance, basic training on managing your site." },
  { name: "Domain Hosting & Assistance", detail: "Domain and hosting management", price: "GH₵ 50/month", description: "Domain and hosting management, renewals, DNS configuration, SSL certificate support, technical assistance." },
  { name: "Hourly Development", detail: "Website updates & consulting", price: "GH₵ 100–200/hr", description: "Website updates, troubleshooting, feature additions, consulting." },
  { name: "Website Maintenance", detail: "Ongoing site care", price: "GH₵ 200–500/month", description: "Backups, updates, security monitoring, bug fixes, content updates." },
  { name: "Priority Maintenance", detail: "Premium support", price: "GH₵ 1,000–2,500/month", description: "Everything in basic maintenance, plus priority support, performance optimization, and advanced monitoring." },
];

const includedPerPlan = [
  "Custom layout and UX direction",
  "Mobile-first responsive design",
  "Optimized performance and page speed",
  "Contact forms and conversion touchpoints",
  "Basic SEO foundations and metadata",
  "Launch support and delivery guidance",
];

const faqs = [
  { q: "How long does a project take?", a: "Most small business sites take between 3 days and 3 weeks depending on the scope, content readiness, and custom features required." },
  { q: "Can I get a redesign instead of a new site?", a: "Yes. We regularly redesign and modernize existing websites to improve visuals, performance, lead generation, and clarity." },
  { q: "Do you support businesses outside Ghana?", a: "Yes. We work with clients locally and remotely, and can support businesses that need a strong online presence anywhere." },
  { q: "Do you offer ongoing website support?", a: "Yes. We provide maintenance and support packages for updates, content changes, bug fixes, and technical upkeep after launch." },
];

const serviceList = [
  "Custom website development and monthly maintenance for corporate, e-commerce, and portfolio sites.",
  "Website maintenance and updates.",
  "SEO and performance optimization.",
  "Hosting and domain setup support.",
  "Website redesigning.",
  "Logo design.",
  "Mobile app development.",
  "Branding.",
  "AI chatbot integration.",
  "Business automation.",
  "Website security packages.",
  "UI/UX design.",
  "Custom software development.",
  "Cloud solutions.",
  "Cybersecurity services.",
  "Digital marketing.",
  "IT consulting.",
  "Technology training.",
  "AI-powered business solutions.",
];

export default function Services() {
  return (
    <div className="bg-beige/20 min-h-screen pb-24">
      <section className="relative text-white py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1800"
          alt="TechKing Bingo services"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />

        <div className="absolute inset-0 bg-primary/75" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            TechKing Bingo Services
          </motion.h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            TechKing Bingo is here to help businesses improve efficiency, streamline operations, and grow through powerful web design, digital strategy, and business software solutions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {serviceHighlights.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[28px] border border-primary/10 bg-white shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-dark/65">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-primary/10 p-3 rounded-2xl">
            <Code2 className="text-primary w-8 h-8" />
          </div>
          <h2 className="text-4xl font-serif font-bold">Services overview</h2>
        </div>

        <div className="rounded-[30px] border border-primary/10 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceList.map((service) => (
              <div key={service} className="flex items-start gap-3 rounded-2xl bg-beige/30 p-4 text-sm text-dark/75">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-primary/10 p-3 rounded-2xl">
            <Code2 className="text-primary w-8 h-8" />
          </div>
          <h2 className="text-4xl font-serif font-bold">Pricing plan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary/5 bg-white shadow-sm transition-all hover:border-primary/20"
            >
              <img
                src={plan.image}
                alt={plan.name}
                className="h-48 w-full object-cover"
                referrerPolicy="no-referrer"
              />

              <div className="flex flex-1 flex-col p-8">
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{plan.name}</p>
                  <h3 className="mt-3 text-3xl font-serif font-bold text-dark">{plan.price}</h3>
                  <p className="mt-3 text-sm text-dark/60">{plan.detail}</p>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-dark/80">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-primary/10 pt-4 mt-auto">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    {plan.timeline}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">What every project gets</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-dark">A project experience designed for clarity and confidence.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-primary/10 bg-primary/5 p-8">
              <ul className="space-y-4">
                {includedPerPlan.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-dark/75">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[32px] border border-dark/5 bg-dark p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Best for</p>
              <h3 className="mt-4 font-serif text-3xl font-bold text-white">Businesses that want to look credible and convert better.</h3>
              <p className="mt-5 text-base leading-relaxed text-white/75">Whether you are building from scratch, refreshing an old site, or improving your digital presence, our packages are designed to match your stage and goals.</p>
              <Link to="/booking" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary">
                Book a discovery call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-gold/10 p-3 rounded-2xl">
              <Sparkles className="text-gold w-8 h-8" />
            </div>
            <h2 className="text-4xl font-serif font-bold">Other services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="bg-beige/20 p-8 rounded-3xl border border-gold/10 hover:border-gold/30 transition-all group flex flex-col h-full"
              >
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{service.name}</p>
                  <h3 className="mt-2 text-2xl font-serif font-bold text-dark">{service.price}</h3>
                </div>
                <p className="text-sm font-semibold text-dark/70 mb-3">{service.detail}</p>
                <p className="text-sm text-dark/60 leading-relaxed mb-6 flex-grow">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-primary text-white p-8 md:p-10 text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Need something larger?</h3>
            <p className="max-w-3xl mx-auto text-white/80 leading-relaxed">
              Custom enterprise and multi-dashboard platforms are quoted individually — get in touch to scope your project.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary transition hover:bg-beige"
            >
              Let's build your website
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">FAQ</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-dark">Questions clients ask before starting.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[28px] border border-primary/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dark">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-dark/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
