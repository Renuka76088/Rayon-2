import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["All Collections", "Raw Weaves", "The Atelier", "Sustainability"];

const galleryItems = [
  { id: 1, category: "Raw Weaves", title: "Golden Rayon Thread", size: "col-span-1 row-span-2", img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80" },
  { id: 2, category: "The Atelier", title: "Precision Draping", size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1558583082-409143c794ca?auto=format&fit=crop&q=80" },
  { id: 3, category: "Sustainability", title: "Eco-Cellulose Fiber", size: "col-span-2 row-span-2", img: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80" },
  { id: 4, category: "Raw Weaves", title: "Soft Ivory Texture", size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1571506504423-a2d818d4236c?auto=format&fit=crop&q=80" },
  { id: 5, category: "The Atelier", title: "Master Craftsmanship", size: "col-span-1 row-span-2", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" },
  { id: 6, category: "Sustainability", title: "Earth-Friendly Dyes", size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1590736961649-710043fd07bf?auto=format&fit=crop&q=80" },
];

function MediaGallery() {
  const [activeFilter, setActiveFilter] = useState("All Collections");

  const filteredItems = activeFilter === "All Collections" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#FCFAF8] py-24 px-6 md:px-12 lg:px-24">
      
      {/* --- Section Header --- */}
      <div className="max-w-4xl mb-20">
        <motion.span 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          className="text-[#C5A27D] text-xs tracking-[0.8em] uppercase font-bold block mb-4"
        >
          Visual Narrative
        </motion.span>
        <h2 className="font-headline text-5xl md:text-7xl text-[#4A4238] font-light leading-none">
          The Fabric <span className="italic text-[#C5A27D]">Chronicles</span>
        </h2>
      </div>

      {/* --- Filter Navigation --- */}
      <div className="flex flex-wrap gap-8 mb-16 border-b border-[#EAE3D8] pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`relative text-xs uppercase tracking-[0.3em] font-bold transition-colors ${
              activeFilter === cat ? 'text-[#C5A27D]' : 'text-[#4A4238]/40 hover:text-[#4A4238]'
            }`}
          >
            {cat}
            {activeFilter === cat && (
              <motion.div 
                layoutId="underline" 
                className="absolute -bottom-[25px] left-0 right-0 h-[2px] bg-[#C5A27D]" 
              />
            )}
          </button>
        ))}
      </div>

      {/* --- Gallery Grid --- */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className={`group relative overflow-hidden rounded-[1.5rem] bg-[#EAE3D8] ${item.size}`}
            >
              {/* Image with Overlay */}
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Glassmorphism Hover Card */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 w-full p-6 rounded-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] text-white/70 uppercase tracking-widest mb-1">{item.category}</p>
                  <h4 className="text-xl font-headline text-white italic">{item.title}</h4>
                </div>
              </div>

              {/* View Button (Icon) */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-[#C5A27D] hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-sm">fullscreen</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* --- Footer CTA --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-24 text-center"
      >
        <p className="text-[#6B5E4C] italic font-light mb-8">Har dhaaga ek nayi kahani bayaan karta hai.</p>
        <button className="px-12 py-5 rounded-full border border-[#C5A27D] text-[#C5A27D] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A27D] hover:text-white transition-all">
          Download Lookbook 2024
        </button>
      </motion.div>

    </div>
  );
}

export default MediaGallery;