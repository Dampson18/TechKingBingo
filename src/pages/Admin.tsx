import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calendar, ShoppingBag, User, Phone, Clock, MapPin, Package, CheckCircle, Trash2, Loader2, ShieldCheck } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Admin() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"bookings" | "orders">("bookings");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bRes, oRes] = await Promise.all([
          fetch("/api/bookings"),
          fetch("/api/orders")
        ]);
        setBookings(await bRes.json());
        setOrders(await oRes.json());
      } catch (err) {
        console.error("Failed to fetch admin data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-beige/20 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-2xl">
              <ShieldCheck className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-serif font-bold text-dark">Admin Dashboard</h1>
              <p className="text-dark/60 text-sm">Manage your wellness center operations.</p>
            </div>
          </div>
          
          <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-primary/5">
            <button
              onClick={() => setActiveTab("bookings")}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2",
                activeTab === "bookings" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-dark/40 hover:text-primary"
              )}
            >
              <Calendar className="w-4 h-4" />
              Bookings ({bookings.length})
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2",
                activeTab === "orders" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-dark/40 hover:text-primary"
              )}
            >
              <ShoppingBag className="w-4 h-4" />
              Orders ({orders.length})
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {activeTab === "bookings" ? (
            bookings.length === 0 ? (
              <div className="bg-white p-20 rounded-[40px] text-center border border-primary/5">
                <Calendar className="w-16 h-16 text-dark/10 mx-auto mb-4" />
                <p className="text-dark/40 font-medium">No bookings yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="bg-primary/10 p-3 rounded-xl text-primary">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-dark/30 uppercase tracking-widest">
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-1">{booking.service}</h3>
                      <div className="flex items-center gap-2 text-primary font-bold text-sm">
                        <Clock className="w-4 h-4" />
                        {booking.date} at {booking.time}
                      </div>
                    </div>
                    <div className="pt-6 border-t border-primary/5 space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <User className="w-4 h-4 text-dark/40" />
                        <span className="font-medium">{booking.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-dark/40" />
                        <span className="font-medium">{booking.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            orders.length === 0 ? (
              <div className="bg-white p-20 rounded-[40px] text-center border border-primary/5">
                <ShoppingBag className="w-16 h-16 text-dark/10 mx-auto mb-4" />
                <p className="text-dark/40 font-medium">No orders yet.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3 space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="bg-gold/10 p-3 rounded-xl text-gold">
                          <Package className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold text-dark/30 uppercase tracking-widest">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                          <User className="w-4 h-4 text-dark/40" />
                          <span className="font-bold">{order.customer.name}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Phone className="w-4 h-4 text-dark/40" />
                          <span>{order.customer.phone}</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm">
                          <MapPin className="w-4 h-4 text-dark/40 shrink-0 mt-1" />
                          <span className="text-dark/60">{order.customer.address}</span>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-primary/5">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-dark/40 uppercase tracking-widest">Payment</span>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                            {order.customer.payment}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3 bg-beige/20 rounded-2xl p-6">
                      <h4 className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-4">Order Items</h4>
                      <div className="space-y-4">
                        {order.items.map((item: any, idx: number) => (
                          <div key={idx} className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-3">
                              <span className="bg-white w-6 h-6 rounded-md flex items-center justify-center font-bold text-[10px] border border-primary/5">
                                {item.quantity}x
                              </span>
                              <span className="font-medium">{item.product.name}</span>
                            </div>
                            <span className="font-bold">GH₵ {item.product.price * item.quantity}</span>
                          </div>
                        ))}
                        <div className="pt-4 border-t border-primary/10 flex justify-between items-center">
                          <span className="font-bold text-dark">Total Amount</span>
                          <span className="text-xl font-bold text-primary">GH₵ {order.total}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
