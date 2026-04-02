import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Leaf, Sparkles, Clock, CheckCircle2, ShoppingBag, Calendar } from "lucide-react";

const herbalTreatments = [
  { name: "Type II Diabetes", desc: "Natural management of blood sugar levels using traditional herbs.", benefits: ["Regulates insulin", "Improves metabolism", "Detoxifies body"] },
  { name: "Kidney Stones", desc: "Effective herbal solutions to dissolve and prevent kidney stones.", benefits: ["Pain relief", "Natural dissolution", "Kidney health support"] },
  { name: "Obesity", desc: "Weight management through herbal metabolism boosters.", benefits: ["Fat burning", "Appetite control", "Energy boost"] },
  { name: "Hernia", desc: "Traditional treatments to manage and alleviate hernia symptoms.", benefits: ["Reduces inflammation", "Strengthens tissues", "Pain management"] },
  { name: "Typhoid & Malaria", desc: "Potent herbal blends to treat and boost immunity against fever.", benefits: ["Rapid recovery", "Immune support", "Natural fever reducer"] },
  { name: "Sexual Weakness", desc: "Natural vitality boosters for improved performance and energy.", benefits: ["Increased stamina", "Hormonal balance", "Improved circulation"] },
  { name: "Prostate Enlargement", desc: "Herbal support for prostate health and urinary function.", benefits: ["Reduces swelling", "Improves flow", "Anti-inflammatory"] },
  { name: "Yeast Infection", desc: "Natural antifungal treatments for long-term relief.", benefits: ["Restores balance", "Antifungal properties", "Prevents recurrence"] },
];

const spaServices = [
  { name: "Hot Stone Massage", desc: "Heated stones placed on key points to melt away deep muscle tension.", duration: "60/90 min", benefits: ["Deep relaxation", "Improved circulation", "Stress relief"] },
  { name: "Thai Massage", desc: "Traditional stretching and pressure point therapy for flexibility.", duration: "60/90 min", benefits: ["Increased flexibility", "Energy flow", "Muscle relief"] },
  { name: "Deep Tissue Massage", desc: "Intense pressure to release chronic muscle knots and tension.", duration: "60/90 min", benefits: ["Chronic pain relief", "Posture correction", "Muscle recovery"] },
  { name: "Swedish Massage", desc: "Gentle, long strokes to promote overall relaxation and circulation.", duration: "60 min", benefits: ["Stress reduction", "Better sleep", "Muscle relaxation"] },
  { name: "Chiropractic Therapy", desc: "Professional spinal adjustments for better alignment and health.", duration: "45 min", benefits: ["Spinal health", "Nerve relief", "Improved mobility"] },
  { name: "Couple Massage", desc: "Enjoy a relaxing massage experience together in our private suite.", duration: "60/90 min", benefits: ["Shared relaxation", "Bonding time", "Full body therapy"] },
];

export default function Services() {
  return (
    <div className="bg-beige/20 min-h-screen pb-24">
      {/* Header */}
      <section className="relative text-white py-24 overflow-hidden">
  {/* Background Image */}
  <img
    src="/images/services-bg.jpg"
    alt="Services Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-primary/70" />

  {/* Existing Blur Effect */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />

  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-6xl font-serif font-bold mb-6"
    >
      Our Healing Services
    </motion.h1>

    <p className="text-xl text-white/80 max-w-2xl mx-auto">
      Explore our comprehensive range of natural herbal treatments and professional spa therapies.
    </p>
  </div>
</section>

      {/* Herbal Treatments */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-primary/10 p-3 rounded-2xl">
            <Leaf className="text-primary w-8 h-8" />
          </div>
          <h2 className="text-4xl font-serif font-bold">Herbal Treatments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {herbalTreatments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:border-primary/20 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">{item.name}</h3>
              <p className="text-dark/60 text-sm mb-6 flex-grow leading-relaxed">{item.desc}</p>
              <div className="space-y-2 mb-8">
                {item.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-dark/80">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/shop"
                className="w-full bg-beige text-primary py-3 rounded-xl text-sm font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Treatment
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spa Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-gold/10 p-3 rounded-2xl">
              <Sparkles className="text-gold w-8 h-8" />
            </div>
            <h2 className="text-4xl font-serif font-bold">Spa Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-beige/20 p-8 rounded-3xl border border-gold/10 hover:border-gold/30 transition-all group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-serif font-bold group-hover:text-gold transition-colors">{service.name}</h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-gold bg-gold/10 px-3 py-1 rounded-full">
                    <Clock className="w-3 h-3" />
                    {service.duration}
                  </div>
                </div>
                <p className="text-dark/60 text-sm mb-6 flex-grow leading-relaxed">{service.desc}</p>
                <div className="space-y-2 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-dark/80">
                      <CheckCircle2 className="w-3 h-3 text-gold" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/booking"
                  className="w-full bg-gold text-white py-4 rounded-xl text-sm font-bold hover:bg-gold/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
                >
                  <Calendar className="w-4 h-4" />
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
