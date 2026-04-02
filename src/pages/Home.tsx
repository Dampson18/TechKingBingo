import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, ShoppingBag, ArrowRight, Star, ShieldCheck, Heart, Sparkles, Phone, MessageCircle, MapPin, Leaf } from "lucide-react";

const testimonials = [
  { name: "Akua Mensah", quote: "The herbal treatment for my yeast infection worked like magic. I've never felt better!", rating: 5 },
  { name: "Kofi Boateng", quote: "Best deep tissue massage in Accra. The therapists are highly professional.", rating: 5 },
  { name: "Sarah Owusu", quote: "GHMC is my go-to for relaxation. Their hot stone massage is heavenly.", rating: 5 },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        {/* Video Placeholder Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            >
            <source src="/images/hero.mp4" type="video/mp4" />
            </video>
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-gold/20 backdrop-blur-md rounded-full text-gold text-sm font-bold tracking-widest uppercase mb-6 border border-gold/30">
              #HealingYouCan’tCompare
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Relax. Heal. <br />
              <span className="text-gold">Rejuvenate.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the perfect blend of traditional herbal wisdom and modern spa therapy at Gyenyamdi Herbal and Massage Center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <Link
                to="/shop"
                className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-beige transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Order Herbal Treatment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">Our Signature Services</h2>
            <p className="text-dark/60 max-w-2xl mx-auto">Discover our most popular treatments designed to restore your body and mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
  { 
    title: "Hot Stone Massage", 
    desc: "Deeply relaxing therapy using heated basalt stones to melt away tension.",
    image: "/images/hot-stone-massage.jpg",
    link: "/services"
  },
  { 
    title: "Herbal Healing", 
    desc: "Natural treatments for chronic conditions using potent organic herbs.",
    image: "/images/herbal-healing.jpg",
    link: "/services"
  },
  { 
    title: "Deep Tissue Massage", 
    desc: "Targeted pressure to release chronic muscle tension and knots.",
    image: "/images/deep-tissue-massage.jpg",
    link: "/services"
  }
].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 bg-beige/30 rounded-3xl border border-primary/5 hover:border-primary/20 transition-all group"
              >
                <div className="mb-6 overflow-hidden rounded-2xl relative">
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
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

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" 
                alt="Healing Hands" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-serif font-bold mb-1">100%</p>
                <p className="text-sm font-bold uppercase tracking-widest">Natural Solutions</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">Why Choose Gyenyamdi Herbal & Massage Center?</h2>
              <div className="space-y-6">
                {[
                  { title: "Natural Herbal Solutions", desc: "We use only the finest organic herbs for our treatments.", icon: <Leaf className="w-6 h-6" /> },
                  { title: "Professional Therapy", desc: "Our therapists are certified experts in various massage techniques.", icon: <ShieldCheck className="w-6 h-6" /> },
                  { title: "Trusted Healing Approach", desc: "Years of experience in helping people achieve optimal wellness.", icon: <Heart className="w-6 h-6" /> }
                ].map((item, idx) => (
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

      {/* Testimonials */}
      <section className="py-24 bg-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
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

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Start Your Healing Journey Today</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/booking"
              className="bg-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30"
            >
              Book Now
            </Link>
            <Link
              to="/shop"
              className="bg-dark text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-dark/90 transition-all"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-beige/30 border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-dark/40 uppercase tracking-widest">Call Us</p>
                <p className="text-lg font-bold text-dark">+233 537 140 997</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-dark/40 uppercase tracking-widest">WhatsApp</p>
                <p className="text-lg font-bold text-dark">+233 506 277 472</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-dark/40 uppercase tracking-widest">Location</p>
                <p className="text-lg font-bold text-dark">Oyibi, Raspberries Street</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
