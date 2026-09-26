import React, { useState } from "react";
import { X, Calendar, Clock, Video, Sparkles, CheckCircle2, Phone } from "lucide-react";

interface VipConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VipConsultationModal({ isOpen, onClose }: VipConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    timeSlot: "11:00 AM - 12:00 PM",
    interest: "Bridal Jewellery Suite",
    type: "Virtual Video Session (Google Meet / WhatsApp)",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      // Keep confirmation visible
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vip-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#0e0e0e] border border-white/15 p-6 sm:p-8 shadow-2xl text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 transition rounded-full"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-10 text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <CheckCircle2 size={32} />
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2 font-medium">
              Reservation Confirmed
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white italic mb-3">
              Your VIP Appointment is Scheduled
            </h3>
            <p className="text-white/80 text-sm max-w-md mx-auto leading-relaxed mb-6 font-light">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. An Aurix Master Jewellery Stylist will connect with you on <span className="text-[#E5C158] font-mono">{formData.phone}</span> for your session on <span className="text-white">{formData.date || "the requested date"}</span> ({formData.timeSlot}).
            </p>
            <div className="p-4 bg-[#141414] border border-white/10 max-w-sm mx-auto text-left text-xs space-y-1 mb-8">
              <div className="text-white/60">Session Type: <span className="text-white">{formData.type}</span></div>
              <div className="text-white/60">Interest: <span className="text-white">{formData.interest}</span></div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="min-h-[48px] bg-[#D4AF37] text-neutral-950 font-bold px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-white transition"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase mb-2">
              <Sparkles size={14} />
              <span>Complimentary Concierge</span>
            </div>
            <h2 id="vip-modal-title" className="font-serif text-2xl sm:text-3xl italic text-white mb-2">
              Book a Private 1-on-1 Stylist Session
            </h2>
            <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-6">
              Connect with our master gemologists for personalized bridal styling, bespoke 22K gold heirloom customization, or virtual high-definition viewing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="vip-name" className="block text-[10px] uppercase tracking-widest text-white/70 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    id="vip-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika Kapoor"
                    className="w-full bg-[#181818] border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition"
                  />
                </div>
                <div>
                  <label htmlFor="vip-phone" className="block text-[10px] uppercase tracking-widest text-white/70 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="vip-phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#181818] border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="vip-date" className="block text-[10px] uppercase tracking-widest text-white/70 mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    id="vip-date"
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#181818] border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37] transition"
                  />
                </div>
                <div>
                  <label htmlFor="vip-time" className="block text-[10px] uppercase tracking-widest text-white/70 mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    id="vip-time"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#181818] border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37] transition"
                  >
                    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM IST</option>
                    <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM IST</option>
                    <option value="04:30 PM - 05:30 PM">04:30 PM - 05:30 PM IST</option>
                    <option value="07:00 PM - 08:00 PM">07:00 PM - 08:00 PM IST</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="vip-interest" className="block text-[10px] uppercase tracking-widest text-white/70 mb-1.5">
                  Collection of Interest
                </label>
                <select
                  id="vip-interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-[#181818] border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37] transition"
                >
                  <option value="Bridal Jewellery Suite">Bridal 22K Gold Jewellery Suite</option>
                  <option value="Necklaces & Royal Chokers">Necklaces & Royal Chokers</option>
                  <option value="Rings & Diamond Bands">22K Rings & Diamond Bands</option>
                  <option value="Earrings & Bangles">Earrings & Handcrafted Bangles</option>
                  <option value="Custom Bespoke Commission">Bespoke Custom Commission</option>
                  <option value="Investment Bullion Consultation">22K / 24K Gold Investment Consultation</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[48px] bg-[#D4AF37] text-neutral-950 font-bold px-6 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-white transition flex items-center justify-center gap-2"
                >
                  Confirm Appointment
                </button>
              </div>

              <p className="text-[11px] text-white/60 text-center flex items-center justify-center gap-1.5">
                <Phone size={12} className="text-[#E5C158]" />
                Prefer immediate assistance? Call <a href="tel:+919034196429" className="text-[#E5C158] hover:underline font-medium">+91 9034196429</a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
