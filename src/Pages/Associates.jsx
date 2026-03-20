import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const associates = [
  { id: 1, name: "Parekh Fabrics", location: "Gujarat", x: "20%", y: "45%", desc: "Premium Rayon Manufacturing" },
  { id: 2, name: "Parekh Silk", location: "Maharashtra", x: "24%", y: "55%", desc: "Artisanal Silk Weaving" },
  { id: 3, name: "Parekh Rayon", location: "Madhya Pradesh", x: "46%", y: "55%", desc: "Core Rayon Hub" },
  { id: 4, name: "Parekh Linen", location: "West Bengal", x: "66%", y: "52%", desc: "Fine Linen Exports" },
  { id: 5, name: "Parekh e-Trade Market", location: "Telangana", x: "39%", y: "68%", desc: "Global Textile Digital Hub" },
  { id: 6, name: "Parekh Chamber of Textile", location: "Karnataka", x: "35%", y: "78%", desc: "Industry Standards & Quality" },
  { id: 7, name: "Parekh Southern Polyfabrics", location: "Tamil Nadu", x: "41%", y: "78%", desc: "Synthetic Blend Specialization" },
];

function Associates() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative min-h-screen bg-[#FCFAF8] py-24 px-6 overflow-hidden">
      
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-10 opacity-[0.03] select-none">
        <h1 className="text-[15rem] font-bold leading-none">PAREKH</h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-4 z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#C5A27D] text-xs tracking-[0.8em] uppercase font-bold block mb-4"
          >
            Network Presence
          </motion.span>
          <h2 className="font-headline text-5xl text-[#4A4238] font-light mb-8 leading-tight">
            Our Global <br /> <span className="italic text-[#C5A27D]">Footprint</span>
          </h2>
          <p className="text-[#6B5E4C] font-light leading-relaxed mb-10">
            India ke har kone mein hamari craftsmanship aur quality ki goonj hai. Mapping our journey from local looms to global excellence.
          </p>
          
          <div className="space-y-4">
            {associates.map((item) => (
              <div 
                key={item.id}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className={`p-4 rounded-xl border transition-all cursor-default ${
                  hovered === item.id ? 'bg-white border-[#C5A27D] shadow-lg translate-x-2' : 'border-transparent'
                }`}
              >
                <h4 className={`font-bold text-sm uppercase tracking-widest ${hovered === item.id ? 'text-[#C5A27D]' : 'text-[#4A4238]'}`}>
                  {item.name}
                </h4>
                <p className="text-xs text-[#6B5E4C] opacity-60">{item.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Interactive Map */}
        <div className="lg:col-span-8 relative flex justify-center items-center">
          <div className="relative w-full max-w-[700px]">
            
            {/* SVG India Map (Simplified Outline) */}
            <img 
              src="https://img.freepik.com/premium-vector/simple-minimalist-region-map-india_386815-17646.jpg?w=1060" 
              alt="India Map" 
              className="w-full h-auto "
            />

            {/* Pulsing Associate Points */}
            {associates.map((point) => (
              <div
                key={point.id}
                className="absolute transition-all duration-500"
                style={{ left: point.x, top: point.y }}
              >
                {/* Outer Pulse */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -inset-2 bg-[#C5A27D] rounded-full"
                />
                
                {/* Main Dot */}
                <button
                  onMouseEnter={() => setHovered(point.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={`relative w-4 h-4 rounded-full shadow-xl transition-transform duration-300 ${
                    hovered === point.id ? 'bg-[#4A4238] scale-150' : 'bg-[#C5A27D]'
                  }`}
                />

                {/* Tooltip Popup */}
                <AnimatePresence>
                  {hovered === point.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -10, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 z-50 pointer-events-none"
                    >
                      <div className="bg-[#4A4238] text-white p-4 rounded-2xl shadow-2xl text-center relative">
                        <p className="text-[10px] uppercase tracking-widest text-[#C5A27D] font-bold mb-1">Associate</p>
                        <h5 className="text-sm font-headline italic mb-1">{point.name}</h5>
                        <p className="text-[9px] opacity-70 leading-tight">{point.desc}</p>
                        {/* Little Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#4A4238]" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Desktop Text Label (Visible on large screens) */}
                <div className="hidden md:block absolute left-6 top-0 whitespace-nowrap">
                   <p className={`text-[10px] font-bold uppercase tracking-tighter transition-opacity ${hovered === point.id ? 'opacity-100' : 'opacity-30'}`}>
                    {point.name}
                   </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Associates;