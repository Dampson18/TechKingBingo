import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Code2, Sparkles } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter / Landing Page",
    price: "GH₵ 1,500–3,000",
    detail: "For freelancers & micro-startups running a single campaign",
    features: ["1–3 page site", "contact form", "mobile responsiveness", "social media links", "SSL/TLS setup"],
    timeline: "3–7 days",
  },
  {
    name: "Standard Business Website",
    price: "GH₵ 3,000–5,500",
    detail: "For growing SMEs & local businesses — law firms, clinics, and more",
    features: ["5–15 pages", "content management system", "basic SEO setup", "Google Maps integration", "professional email setup"],
    timeline: "1–3 weeks",
  },
  {
    name: "E-commerce Platform",
    price: "GH₵ 5,000–10,000",
    detail: "For retailers & online shops",
    features: ["Product catalogue", "shopping cart", "inventory management", "local payment gateway integration", "SSL/TLS setup"],
    timeline: "2–5 weeks",
  },
  {
    name: "Website Redesign",
    price: "GH₵ 2,500–5,000",
    detail: "For any client with an existing website",
    features: ["Updated design", "SEO improvements", "modern UI/UX", "speed optimisation", "content migration"],
    timeline: "1–3 weeks",
  },
  {
    name: "Custom Web Solutions",
    price: "Quoted per project",
    detail: "Tailored web applications, client portals, booking systems, and enterprise solutions.",
    features: ["Custom build", "project planning", "scoped delivery", "integration-ready architecture"],
    timeline: "Custom",
  },
];

const otherServices = [
  { name: "Ongoing support", detail: "New Website Clients", price: "Free", description: "Free consultation, 30 days post-launch support, basic SEO setup, SSL/TLS certificate assistance, basic training on managing your site." },
  { name: "Domain Hosting & Assistance", detail: "Domain and hosting management", price: "GH₵ 50/month", description: "Domain and hosting management, renewals, DNS configuration, SSL certificate support, technical assistance." },
  { name: "Hourly Development", detail: "Website updates & consulting", price: "GH₵ 100–200/hr", description: "Website updates, troubleshooting, feature additions, consulting." },
  { name: "Website Maintenance", detail: "Ongoing site care", price: "GH₵ 200–500/month", description: "Backups, updates, security monitoring, bug fixes, content updates." },
  { name: "Priority Maintenance", detail: "Premium support", price: "GH₵ 1,000–2,500/month", description: "Everything in basic maintenance, plus priority support, performance optimization, and advanced monitoring." },
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
            TechKing Bingo Web Development Info
          </motion.h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Your business, built for the web. From a single landing page to a full online store — every project scoped, priced, and delivered on a clear timeline.
          </p>
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
              className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:border-primary/20 transition-all group flex flex-col h-full"
            >
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
            </motion.div>
          ))}
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
    </div>
  );
}
