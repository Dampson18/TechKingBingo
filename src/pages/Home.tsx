import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Code2,
  Globe,
  Layers3,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const services = [
  {
    title: "Website Design",
    desc: "Custom business websites that look premium, load fast, and turn visitors into customers.",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80&w=900",
    link: "/services",
    icon: <MonitorSmartphone className="w-5 h-5" />,
  },
  {
    title: "Branding & Identity",
    desc: "Clear positioning, memorable visuals, and strong messaging to make your business stand out.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=900",
    link: "/services",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: "SEO & Growth",
    desc: "Search visibility, content strategy, and digital systems that attract qualified leads.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900",
    link: "/services",
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

const reasons = [
  { title: "Strategy-first design", desc: "We build digital experiences that support your goals, not just visuals.", icon: <Layers3 className="w-6 h-6" /> },
  { title: "Conversion-focused websites", desc: "Every page is designed to guide visitors toward action and trust.", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Reliable digital partnership", desc: "From your first idea to launch and beyond, we stay committed to your growth.", icon: <Rocket className="w-6 h-6" /> },
];

const testimonials = [
  { name: "Nana K.", quote: "TechKing Bingo transformed our brand presence and gave our business a website that finally feels premium.", rating: 5 },
  { name: "Akwasi D.", quote: "Their team made the process simple and delivered a site that looks sharp and performs well.", rating: 5 },
  { name: "Mercy T.", quote: "We now have a stronger online presence and a clearer message for our customers.", rating: 5 },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1800"
          alt="TechKing Bingo creative workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-gold/20 backdrop-blur-md rounded-full text-gold text-sm font-bold tracking-widest uppercase mb-6 border border-gold/30">
              Digital Growth Studio
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Build a stronger <span className="text-gold">online presence</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              TechKing Bingo creates modern websites, branding systems, and digital experiences that help businesses grow with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Call
              </Link>
              <Link
                to="/shop"
                className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-beige transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Explore Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">What we do best</h2>
            <p className="text-dark/60 max-w-2xl mx-auto">We design and build digital experiences that help your business look credible, attract demand, and convert attention into growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 bg-beige/30 rounded-3xl border border-primary/5 hover:border-primary/20 transition-all group"
              >
                <div className="mb-6 overflow-hidden rounded-2xl relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-dark/60 mb-6 leading-relaxed">{service.desc}</p>
                <Link to={service.link} className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                alt="Creative digital team"
                className="rounded-3xl shadow-2xl h-[420px] w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-serif font-bold mb-1">5+</p>
                <p className="text-sm font-bold uppercase tracking-widest">Years of Craft</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">Why businesses choose TechKing Bingo</h2>
              <div className="space-y-6">
                {reasons.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-white/10 p-3 rounded-xl h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Client feedback</h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5">
                <p className="text-dark/70 italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-dark">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to level up your online presence?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/booking"
              className="bg-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30"
            >
              Book a Discovery Call
            </Link>
            <Link
              to="/services"
              className="bg-dark text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-dark/90 transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-beige/30 border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-dark/40 uppercase tracking-widest">Call Us</p>
                <p className="text-lg font-bold text-dark">+233 59 299 8425</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <MessageCircle className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-dark/40 uppercase tracking-widest">WhatsApp</p>
                <p className="text-lg font-bold text-dark">+233 59 299 8425</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-dark/40 uppercase tracking-widest">Location</p>
                <p className="text-lg font-bold text-dark">Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
