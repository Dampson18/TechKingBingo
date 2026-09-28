import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Trash2, Plus, Minus, CheckCircle, Loader2, X, Sparkles, CreditCard, Truck, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

const products = [
  { id: "1", name: "Starter Website Package", price: 450, desc: "A clean, modern website for new businesses ready to establish credibility online.", category: "Launch" },
  { id: "2", name: "Business Growth Site", price: 750, desc: "A stronger website for brands that want better visibility and more customer inquiries.", category: "Growth" },
  { id: "3", name: "Brand Identity Pack", price: 600, desc: "Brand direction, messaging, and creative assets to sharpen your market presence.", category: "Branding" },
  { id: "4", name: "SEO Booster", price: 500, desc: "Search optimization and content setup to help attract quality traffic.", category: "Marketing" },
  { id: "5", name: "Landing Page Sprint", price: 350, desc: "A focused page built to convert visitors for campaigns, offers, or launches.", category: "Campaign" },
  { id: "6", name: "Portfolio Website", price: 680, desc: "A premium portfolio or personal brand website to showcase your work and expertise.", category: "Portfolio" },
  { id: "7", name: "E-commerce Setup", price: 1200, desc: "An online shop experience designed to sell products or services smoothly.", category: "Commerce" },
  { id: "8", name: "Maintenance Plan", price: 260, desc: "Ongoing support, fixes, and updates to keep your site fast and reliable.", category: "Support" },
];

export default function Shop() {
  const [cart, setCart] = useState<{ product: any; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", payment: "MOMO" });

  const addToCart = (product: any) => {
    const existing = cart.find((item) => item.product.id === product.id);
    if (existing) {
      setCart(cart.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.product.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(cart.map((item) => {
      if (item.product.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart, customer: formData, total }),
      });
      if (res.ok) {
        setSuccess(true);
        setCart([]);
      }
    } catch (err) {
      console.error("Order failed:", err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-md w-full border border-primary/10"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4 text-dark">Package Request Sent!</h2>
          <p className="text-dark/60 mb-8 leading-relaxed">
            Thank you, <span className="font-bold text-primary">{formData.name}</span>. Your package request has been received and our team will contact you at <span className="font-bold">{formData.phone}</span> to confirm the next steps.
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-beige/20 min-h-screen pb-24">
      {/* Header */}
      <section className="relative text-white py-20 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1800"
    alt="TechKing Bingo digital packages"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-dark/70" />
  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Service Packages</h1>
    <p className="text-white/60 max-w-xl">
      Choose the package that fits your business stage and start building a stronger digital presence.
    </p>
  </div>
</section>

      {/* Product Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-primary/5 hover:border-primary/20 transition-all flex flex-col"
            >
              <div className="bg-beige/50 rounded-2xl h-48 flex items-center justify-center mb-6 relative overflow-hidden group">
                <Sparkles className="w-16 h-16 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/10">
                  {product.category}
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold mb-2">{product.name}</h3>
              <p className="text-dark/60 text-sm mb-6 flex-grow leading-relaxed">{product.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-primary">GHS {product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-primary text-white p-3 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-primary/10 flex justify-between items-center">
                <h2 className="text-2xl font-serif font-bold flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                  Your Cart
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-beige rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-dark/40 space-y-4">
                    <ShoppingBag className="w-16 h-16 opacity-20" />
                    <p className="font-medium">Your cart is empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.product.id} className="flex gap-4 items-center bg-beige/20 p-4 rounded-2xl border border-primary/5">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shrink-0">
                        <Sparkles className="w-8 h-8 text-primary/20" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-sm">{item.product.name}</h4>
                        <p className="text-primary font-bold text-sm">GHS {item.product.price}</p>
                      </div>
                      <div className="flex items-center gap-3 bg-white px-2 py-1 rounded-lg border border-primary/10">
                        <button onClick={() => updateQuantity(item.product.id, -1)} className="p-1 hover:text-primary"><Minus className="w-3 h-3" /></button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, 1)} className="p-1 hover:text-primary"><Plus className="w-3 h-3" /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 border-t border-primary/10 bg-beige/10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-dark/60 font-medium">Total Amount</span>
                    <span className="text-2xl font-bold text-primary">GHS {total}</span>
                  </div>
                  
                  {checkoutStep === 1 ? (
                    <button
                      onClick={() => setCheckoutStep(2)}
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                    >
                      Checkout Now <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <form onSubmit={handleCheckout} className="space-y-4">
                      <div className="space-y-4 mb-6">
                        <input
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full p-3 bg-white border border-primary/10 rounded-xl text-sm focus:border-primary focus:outline-none"
                        />
                        <input
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-3 bg-white border border-primary/10 rounded-xl text-sm focus:border-primary focus:outline-none"
                        />
                        <textarea
                          required
                          placeholder="Project Details / Business Info"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full p-3 bg-white border border-primary/10 rounded-xl text-sm focus:border-primary focus:outline-none h-20"
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, payment: "MOMO" })}
                            className={cn(
                              "p-3 rounded-xl text-xs font-bold border-2 flex items-center justify-center gap-2",
                              formData.payment === "MOMO" ? "border-primary bg-primary/5 text-primary" : "border-primary/5 text-dark/40"
                            )}
                          >
                            <CreditCard className="w-4 h-4" /> MOMO
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, payment: "COD" })}
                            className={cn(
                              "p-3 rounded-xl text-xs font-bold border-2 flex items-center justify-center gap-2",
                              formData.payment === "COD" ? "border-primary bg-primary/5 text-primary" : "border-primary/5 text-dark/40"
                            )}
                          >
                            <Truck className="w-4 h-4" /> On Delivery
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setCheckoutStep(1)}
                          className="flex-grow bg-beige text-primary py-4 rounded-xl font-bold text-sm"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className="flex-[2] bg-primary text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                        >
                          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Request"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
