import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Packages", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="section-shell pt-4">
        <div className="glass-panel rounded-full border border-primary/10 shadow-[0_12px_40px_rgba(23,24,29,0.08)]">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/logo.png"
                alt="TechKing Bingo logo"
                className="h-11 w-auto object-contain"
              />
              <div className="leading-tight">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">The Elle Corporations</p>
                <span className="font-serif text-lg font-bold text-dark tracking-tight sm:text-xl">
                  TechKing Bingo
                </span>
              </div>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-all",
                    location.pathname === link.path
                      ? "text-primary font-bold"
                      : "text-dark/65 hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-sm"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="section-shell pt-2 pb-4">
              <div className="glass-panel rounded-3xl border border-primary/10 p-3 shadow-xl">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-xl px-3 py-3 text-base font-medium",
                      location.pathname === link.path
                        ? "bg-primary/10 text-primary"
                        : "text-dark/70 hover:bg-beige/80"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-base font-semibold text-white"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
