import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Auction() {
    return (
        <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
            {/* */}
         <div class="absolute inset-0 -z-10 opacity-30">
                <img class="w-full h-full object-cover" data-alt="High-resolution close-up of ivory-colored flowing rayon fabric" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWt4TjFpw-ES1YNXJ3VBDjE5EgjLmw21RzQ7GAUro8FGp9UW5bw1C1DzOPSpdXUD2A037XbXLGsfReEsE_XPN2Gw2yAVnE91bEYSN6Titi6acVIW4RN7SenJWh-pgvW38voVZeXcooF0382JAW33EL9mzfVJfdpIEH7E4G3pgGxP_wbzRAMlPzCIg665KANmog6eNV3mqSFAb-6-aGIwfmlU-TUODJ_N3_2mlMaBXobr4v8S14KCR8WrotEoQq3wkBlehN4nqqTns" />
            </div>

            {/* */}
            <div className="max-w-7xl mx-auto px-8 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* */}
                <div className="lg:col-span-5 space-y-12">
                    <div className="space-y-6">
                        <h1 className="font-headline font-light text-7xl md:text-8xl tracking-tight text-on-surface leading-[0.9]">
                            Auction <br /> <span className="italic text-primary">Inventory</span>
                        </h1>
                        <div className="h-1 w-24 bg-primary-container"></div>
                    </div>
                    
                    <p className="font-body text-xl md:text-2xl font-light text-on-surface-variant leading-relaxed">
                        Submit your exclusive textile batches for our premium auction house. Reach global designers and architectural firms looking for high-end sustainable weaves.
                    </p>

                    <div className="space-y-8 pt-8">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-primary">gavel</span>
                            </div>
                            <div>
                                <h3 className="font-headline text-xl mb-1">Global Bidding</h3>
                                <p className="text-sm text-on-surface-variant">Access to a network of 500+ luxury fashion houses and boutiques.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-primary">verified</span>
                            </div>
                            <div>
                                <h3 className="font-headline text-xl mb-1">Quality Assurance</h3>
                                <p className="text-sm text-on-surface-variant">Every lot is verified by our master weavers before going live.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* */}
                <div className="lg:col-span-7">
  <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-10 md:p-14 shadow-lg border border-gray-200">
    
    <form action="#" className="space-y-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">

        {/* Lot Name */}
        <div className="group">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-primary transition">
            Lot / Fabric Name
          </label>
          <input
            type="text"
            placeholder="Raw Mulberry Silk Batch"
            className="w-full bg-white/70 border border-gray-200 rounded-xl px-4 py-3 font-body 
            focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary 
            shadow-sm hover:shadow-md transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Category */}
        <div className="group">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-primary transition">
            Category
          </label>
          <select
            className="w-full bg-white/70 border border-gray-200 rounded-xl px-4 py-3 font-body 
            focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary 
            shadow-sm hover:shadow-md transition-all appearance-none cursor-pointer"
          >
            <option>Premium Silk</option>
            <option>Organic Cotton</option>
            <option>Recycled Viscose</option>
            <option>Architectural Mesh</option>
          </select>
        </div>

        {/* Quantity */}
        <div className="group">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-primary transition">
            Total Quantity (Meters)
          </label>
          <input
            type="number"
            placeholder="e.g. 1200"
            className="w-full bg-white/70 border border-gray-200 rounded-xl px-4 py-3 font-body 
            focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary 
            shadow-sm hover:shadow-md transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Price */}
        <div className="group">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-primary transition">
            Reserve Price (Per Meter)
          </label>
          <input
            type="text"
            placeholder="$ 45.00"
            className="w-full bg-white/70 border border-gray-200 rounded-xl px-4 py-3 font-body 
            focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary 
            shadow-sm hover:shadow-md transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Duration */}
        <div className="md:col-span-2 group">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 group-focus-within:text-primary transition">
            Auction Duration
          </label>
          <div className="flex flex-wrap gap-4">
            {['3 Days', '7 Days', '14 Days'].map((days) => (
              <label key={days} className="flex-1 cursor-pointer">
                <input className="hidden peer" name="duration" type="radio" />
                <div className="text-center py-3 rounded-xl border border-gray-200 
                peer-checked:bg-primary peer-checked:text-white 
                text-sm transition-all hover:bg-gray-100 shadow-sm">
                  {days}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Textarea */}
        <div className="md:col-span-2 group">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-primary transition">
            Technical Specifications
          </label>
          <textarea
            rows="3"
            placeholder="GSM, Thread count, Dyeing method, or sustainability certifications..."
            className="w-full bg-white/70 border border-gray-200 rounded-xl px-4 py-3 font-body 
            focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary 
            shadow-sm hover:shadow-md transition-all resize-none placeholder:text-gray-400"
          ></textarea>
        </div>

      </div>

      {/* Button */}
      <div className="pt-6">
<button
  type="submit"
  className="w-full py-5 rounded-xl 
  bg-[#8B5E3C] text-white 
  font-semibold text-sm uppercase tracking-wide 
  shadow-md hover:bg-[#7A4F32] hover:shadow-lg 
  active:scale-[0.97] active:shadow-sm 
  transition-all duration-200 
  flex items-center justify-center gap-3"
>
  List for Auction
  <span className="material-symbols-outlined text-sm">front_hand</span>
</button>


        <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest">
          Listing will be reviewed within 24 hours
        </p>
      </div>

    </form>

  </div>
</div>

            </div>
        </main>
    );
}

export default Auction