import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from "react-icons/fa";

const initialReviews = [
  { id: 1, name: "Aarav Vardhan", role: "Interior Architect", text: "The drape of Parekh's Rayon is unparalleled. It brought a certain 'breathability' to our latest boutique hotel project that standard fabrics just couldn't achieve.", rating: 5, tag: "Architectural Use" },
  { id: 2, name: "Elena Rossi", role: "Fashion Director", text: "Working with their 'Luminous Weave' was a revelation. The way it catches the light while maintaining a soft, buttery feel is pure artisanal mastery.", rating: 5, tag: "High Fashion" },
  { id: 3, name: "Vikram Sethi", role: "Sustainable Brand Owner", text: "Finding traceable cellulose fibers in India was a challenge until we partnered with Parekh. Their commitment to the environment is as strong as their fibers.", rating: 4, tag: "Sustainability" }
];

function CustomerReview() {
  const [selectedRating, setSelectedRating] = useState(0);

  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWt4TjFpw-ES1YNXJ3VBDjE5EgjLmw21RzQ7GAUro8FGp9UW5bw1C1DzOPSpdXUD2A037XbXLGsfReEsE_XPN2Gw2yAVnE91bEYSN6Titi6acVIW4RN7SenJWh-pgvW38voVZeXcooF0382JAW33EL9mzfVJfdpIEH7E4G3pgGxP_wbzRAMlPzCIg665KANmog6eNV3mqSFAb-6-aGIwfmlU-TUODJ_N3_2mlMaBXobr4v8S14KCR8WrotEoQq3wkBlehN4nqqTns"
          alt="fabric"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">

        {/* Header */}
        <header className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-end">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <span className="text-[#C5A27D] text-xs tracking-[0.6em] uppercase font-bold mb-4 block">
              Craftsmanship Appreciation
            </span>
            <h1 className="font-light text-5xl md:text-6xl tracking-tighter text-[#4A4238] leading-[1.1]">
              Voices of the <br /> <span className="italic text-[#C5A27D]">Collective</span> Weave
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-right hidden md:block">
            <p className="text-5xl italic text-[#C5A27D]/40 leading-none">4.9/5.0</p>
            <p className="text-[10px] uppercase tracking-widest text-[#4A4238] font-bold mt-3">
              Global Excellence Rating
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Reviews */}
          <div className="lg:col-span-6 space-y-10">
            {initialReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white/40 backdrop-blur-2xl rounded-[2rem] p-10 border border-white/60 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="space-y-6">

                  {/* ⭐ Stars */}
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${
                          i < review.rating ? "text-[#C5A27D]" : "text-[#EAE3D8]"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-[#6B5E4C] italic">
                    "{review.text}"
                  </p>

                  <div className="pt-6 border-t border-[#F5F1EB]">
                    <h5 className="text-xl text-[#4A4238]">{review.name}</h5>
                    <p className="text-xs uppercase tracking-widest text-[#6B5E4C] opacity-60">
                      {review.role} • {review.tag}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-6 sticky top-24">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/90 backdrop-blur-3xl rounded-[2.5rem] p-12 md:p-16 border border-[#EAE3D8] shadow-xl"
            >
              <h2 className="text-3xl italic text-[#4A4238] mb-4">Share Your Experience</h2>
              <p className="text-[#6B5E4C] mb-10">
                We value your feedback as it helps us refine the Rayon experience.
              </p>

              <form className="space-y-10">

                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#C5A27D] font-bold">
                    Full Name / Title
                  </label>
                  <input
                    className="w-full bg-white/60 border border-[#EAE3D8] rounded-xl px-5 py-4 
                    focus:ring-2 focus:ring-[#C5A27D]/30 outline-none"
                    placeholder="Rajesh Kumar"
                  />
                </div>

                {/* ⭐ Rating */}
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#C5A27D] font-bold">
                    Rate the Craftsmanship
                  </label>

                  <div className="flex gap-3 mt-3">
                    {[...Array(5)].map((_, i) => {
                      const val = i + 1;
                      return (
                        <label key={i}>
                          <input
                            type="radio"
                            className="hidden"
                            onClick={() => setSelectedRating(val)}
                          />
                          <motion.div whileHover={{ scale: 1.2 }}>
                            <FaStar
                              className={`text-3xl ${
                                val <= selectedRating
                                  ? "text-[#C5A27D]"
                                  : "text-[#EAE3D8]"
                              }`}
                            />
                          </motion.div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#C5A27D] font-bold">
                    Your Testimonial
                  </label>
                  <textarea
                    rows="3"
                    className="w-full mt-2 bg-white/60 border border-[#EAE3D8] rounded-xl px-5 py-4 
                    focus:ring-2 focus:ring-[#C5A27D]/30 outline-none resize-none"
                    placeholder="Share your experience..."
                  />
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-5 rounded-full bg-[#C5A27D] text-white uppercase tracking-widest text-sm font-semibold shadow-lg hover:bg-[#B38E66]"
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
