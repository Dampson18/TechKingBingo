import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-sm font-black text-white shadow-lg shadow-primary/20">
                TK
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                TechKing Bingo
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              TechKing Bingo creates premium website experiences, digital branding, and business growth systems that help companies stand out online.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/233592998425" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-primary hover:text-white">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/shop" className="hover:text-gold">Packages</Link></li>
              <li><Link to="/booking" className="hover:text-gold">Book a Call</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg font-bold text-white">Core Services</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>Website Design</li>
              <li>Brand Strategy</li>
              <li>E-commerce Stores</li>
              <li>SEO & Growth</li>
              <li>Maintenance Support</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg font-bold text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-gold" />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                <span>+233 59 299 8425</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <span>techkingbingo@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">Web:</span>
                <span>www.techbingo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row">
          <p>© 2026 TechKing Bingo. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="https://wa.me/233592998425" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-white/70 hover:text-white">
              Contact
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
