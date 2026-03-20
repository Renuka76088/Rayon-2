import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const initialReviews = [
  { id: 1, name: "Aarav Vardhan", role: "Interior Architect", text: "The drape of Parekh's Rayon is unparalleled. It brought a certain 'breathability' to our latest boutique hotel project that standard fabrics just couldn't achieve.", rating: 5, tag: "Architectural Use" },
  { id: 2, name: "Elena Rossi", role: "Fashion Director", text: "Working with their 'Luminous Weave' was a revelation. The way it catches the light while maintaining a soft, buttery feel is pure artisanal mastery.", rating: 5, tag: "High Fashion" },
  { id: 3, name: "Vikram Sethi", role: "Sustainable Brand Owner", text: "Finding traceable cellulose fibers in India was a challenge until we partnered with Parekh. Their commitment to the environment is as strong as their fibers.", rating: 4, tag: "Sustainability" }
];

function CustomerReview() {
  const [selectedRating, setSelectedRating] = useState(0);

  return (
      <main class="relative min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* 🌟 Background Fabric Layer (Jesay Quotation page mein thi) */}
      <div class="absolute inset-0 -z-10 opacity-30">
                <img class="w-full h-full object-cover" data-alt="High-resolution close-up of ivory-colored flowing rayon fabric" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWt4TjFpw-ES1YNXJ3VBDjE5EgjLmw21RzQ7GAUro8FGp9UW5bw1C1DzOPSpdXUD2A037XbXLGsfReEsE_XPN2Gw2yAVnE91bEYSN6Titi6acVIW4RN7SenJWh-pgvW38voVZeXcooF0382JAW33EL9mzfVJfdpIEH7E4G3pgGxP_wbzRAMlPzCIg665KANmog6eNV3mqSFAb-6-aGIwfmlU-TUODJ_N3_2mlMaBXobr4v8S14KCR8WrotEoQq3wkBlehN4nqqTns" />
            </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* --- Header Section (Headline size choti ki hai) --- */}
        <header className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <span className="text-[#C5A27D] text-xs tracking-[0.6em] uppercase font-bold mb-4 block">Craftsmanship Appreciation</span>
            <h1 className="font-headline font-light text-5xl md:text-6xl tracking-tighter text-[#4A4238] leading-[1.1]">
              Voices of the <br /> <span className="italic text-[#C5A27D]">Collective</span> Weave
            </h1>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-right hidden md:block">
            <p className="font-body text-5xl italic text-[#C5A27D]/40 leading-none">4.9/5.0</p>
            <p className="text-[10px] uppercase tracking-widest text-[#4A4238] font-bold mt-3">Global Excellence Rating</p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- Left Column: Existing Translucent Reviews --- */}
          <div className="lg:col-span-6 space-y-10">
            {initialReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative bg-white/40 backdrop-blur-2xl rounded-[2rem] p-10 border border-white/60 shadow-[0_12px_40px_0_rgba(28,28,25,0.03)] hover:shadow-2xl transition-all"
              >
                <span className="material-symbols-outlined text-7xl text-[#C5A27D]/10 absolute top-10 right-10 group-hover:opacity-40 transition-opacity">format_quote</span>
                
                <div className="space-y-6 relative">
                  <div className="flex gap-1.5 mb-2">
 {[...Array(5)].map((_, i) => (
  <span
    key={i}
    className={`material-symbols-outlined text-sm ${
      i < review.rating ? 'text-[#C5A27D]' : 'text-[#EAE3D8]'
    }`}
    style={{
      fontVariationSettings: i < review.rating ? "'FILL' 1" : "'FILL' 0"
    }}
  >
    star
  </span>
))}

</div>
                  <p className="text-lg md:text-xl font-light text-[#6B5E4C] leading-relaxed italic">"{review.text}"</p>
                  <div className="pt-8 border-t border-[#F5F1EB] mt-8">
                    <h5 className="font-headline text-2xl text-[#4A4238]">{review.name}</h5>
                    <p className="text-xs uppercase tracking-widest text-[#6B5E4C] font-bold opacity-60">{review.role} • {review.tag}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- Right Column: Creative Submit Review Form --- */}
          <div className="lg:col-span-6 sticky top-24">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/90 backdrop-blur-3xl rounded-[2.5rem] p-12 md:p-16 border border-[#EAE3D8] shadow-[0_50px_100px_-20px_rgba(197,162,125,0.1)]"
            >
              <h2 className="text-3xl font-headline italic text-[#4A4238] mb-4">Share Your Experience</h2>
              <p className="text-[#6B5E4C] text-[16px] font-light mb-12 max-w-sm">Hum aapke comments ko seriously lete hain taaki rayon ka ehsas aur bhi behtar ho sake.</p>
              
              <form className="space-y-12">
                <div className="group flex flex-col space-y-3 relative">
                  <label className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#C5A27D]">Full Name / Title</label>
                  <input className="bg-transparent border-b-2 border-[#EAE3D8] py-4 outline-none focus:border-[#C5A27D] transition-all text-lg placeholder:text-[#C5A27D]/30" placeholder="E.g. Rajesh Kumar, Fashion Lead" />
                </div>
                
                {/* 🌟 Creative Star Rating Selection */}
                <div className="space-y-4">
                  <label className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#C5A27D]">Rate the Craftsmanship</label>
                  <div className="flex gap-3">
                    {[...Array(5)].map((_, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i} className="cursor-pointer">
                          <input type="radio" name="rating" value={ratingValue} onClick={() => setSelectedRating(ratingValue)} className="hidden" />
                          <motion.span 
                            whileHover={{ scale: 1.2 }}
                            animate={{ opacity: ratingValue <= selectedRating ? 1 : 0.4 }}
                            className={`material-symbols-outlined text-3xl ${ratingValue <= selectedRating ? 'text-[#C5A27D] fill-current' : 'text-[#EAE3D8]'}`}
                          >star</motion.span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="group flex flex-col space-y-3">
                  <label className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#C5A27D]">Your Testimonial</label>
                  <textarea rows={3} className="bg-transparent border-b-2 border-[#EAE3D8] py-4 outline-none focus:border-[#C5A27D] transition-all text-lg resize-none placeholder:text-[#C5A27D]/30" placeholder="Aapke comments rayon ke ehsas ko aur bhi behtar banayenge..." />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 rounded-full bg-[#C5A27D] text-white font-bold text-xs uppercase tracking-[0.4em] shadow-xl hover:bg-[#B38E66] transition-all"
                >
                  Submit Appreciation
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default CustomerReview;