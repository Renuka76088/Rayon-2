import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = ["Textile Consultation", "Bespoke Design", "Bulk Procurement", "Sustainability Audit"];
const timeSlots = ["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM"];

function Appointment() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden font-body">
      
      {/* 🌟 Luxury Fabric Background Layer */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <img 
          className="w-full h-full object-cover scale-110" 
          alt="Silk texture background" 
          src="https://images.unsplash.com/photo-1571506504423-a2d818d4236c?auto=format&fit=crop&q=80" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* --- Header Section --- */}
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <span className="text-[#C5A27D] text-xs tracking-[0.8em] uppercase font-bold mb-4 block">Personalized Experience</span>
            <h1 className="font-headline font-light text-5xl md:text-7xl tracking-tighter text-[#4A4238] leading-tight">
              Reserve Your <span className="italic text-[#C5A27D]">Atelier</span> Session
            </h1>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- Left Column: Info & Aesthetics --- */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="group border-l-2 border-[#C5A27D] pl-8 py-2">
                <h3 className="text-2xl font-headline text-[#4A4238] mb-2">Expert Guidance</h3>
                <p className="text-[#6B5E4C] font-light leading-relaxed">Hamare fabric specialists aapko best rayon weaves aur blend options guide karenge.</p>
              </div>

              <div className="group border-l-2 border-[#EAE3D8] hover:border-[#C5A27D] transition-colors pl-8 py-2">
                <h3 className="text-2xl font-headline text-[#4A4238] mb-2">Tactile Sampling</h3>
                <p className="text-[#6B5E4C] font-light leading-relaxed">Appointment ke dauran aap hamari latest collection ko mehsoos kar sakte hain.</p>
              </div>

              <div className="pt-12">
                <div className="relative h-64 rounded-[2rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558583082-409143c794ca?auto=format&fit=crop&q=80" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    alt="Tailoring"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A4238]/60 to-transparent flex items-end p-8">
                    <p className="text-white text-sm tracking-widest uppercase font-bold">The Art of Drapery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- Right Column: Booking Form --- */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/70 backdrop-blur-3xl rounded-[3rem] p-10 md:p-14 border border-white/60 shadow-[0_40px_80px_-15px_rgba(74,66,56,0.08)]"
            >
              <form className="space-y-10">
                
                {/* Name & Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A27D]">Full Name</label>
                    <input className="bg-transparent border-b border-[#EAE3D8] py-3 outline-none focus:border-[#C5A27D] transition-all text-lg" placeholder="Name" />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A27D]">Phone / WhatsApp</label>
                    <input className="bg-transparent border-b border-[#EAE3D8] py-3 outline-none focus:border-[#C5A27D] transition-all text-lg" placeholder="+91" />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-5">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A27D]">Select Service Type</label>
                  <div className="flex flex-wrap gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`px-6 py-3 rounded-full text-xs font-bold transition-all border ${
                          selectedService === service 
                          ? 'bg-[#4A4238] text-white border-[#4A4238]' 
                          : 'bg-white/50 text-[#6B5E4C] border-[#EAE3D8] hover:border-[#C5A27D]'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A27D]">Preferred Date</label>
                    <input type="date" className="bg-transparent border-b border-[#EAE3D8] py-3 outline-none focus:border-[#C5A27D] transition-all text-lg text-[#6B5E4C]" />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A27D]">Select Slot</label>
                    <div className="flex flex-wrap gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-4 py-2 rounded-lg text-[11px] font-bold transition-all ${
                            selectedTime === time 
                            ? 'bg-[#C5A27D] text-white' 
                            : 'bg-[#F5F1EB] text-[#4A4238] hover:bg-[#EAE3D8]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div className="flex flex-col space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A27D]">Specific Requirements (Optional)</label>
                  <textarea rows={2} className="bg-transparent border-b border-[#EAE3D8] py-3 outline-none focus:border-[#C5A27D] transition-all text-lg resize-none" placeholder="Share any specific blend or project details..." />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 rounded-full bg-[#4A4238] text-white font-bold text-xs uppercase tracking-[0.5em] shadow-2xl hover:bg-[#2D2822] transition-all"
                >
                  Confirm Appointment
                </motion.button>

                <p className="text-center text-[10px] text-[#6B5E4C]/50 uppercase tracking-widest italic">
                  *A confirmation email will be sent to your registered address.
                </p>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Appointment;