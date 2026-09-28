import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-sm font-black text-primary shadow-lg shadow-gold/20">
                TK
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                TechKing Bingo
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              TechKing Bingo creates premium websites, digital branding, and growth systems that help businesses stand out and sell more.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/233000000000" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Packages</Link></li>
              <li><Link to="/booking" className="hover:text-gold transition-colors">Book a Call</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Core Services</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>Website Design</li>
              <li>Brand Strategy</li>
              <li>E-commerce Stores</li>
              <li>SEO & Content</li>
              <li>Business Growth Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>Accra-Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+233 59 299 8425</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>techkingbingo@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">Web:</span>
                <span>www.techbingo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 TechKing Bingo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
