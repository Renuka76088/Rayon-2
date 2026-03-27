import React from 'react';
import { motion } from 'framer-motion';

const circulars = [
  {
    id: 1,
    date: "25 March 2026",
    title: "Update on Sustainable Rayon Sourcing Policy (v3.1)",
    category: "Policy",
    fileSize: "1.2 MB"
  },
  {
    id: 2,
    date: "18 March 2026",
    title: "Q2 2026 Loom Technology Integration Schedule",
    category: "Operations",
    fileSize: "2.5 MB"
  },
  {
    id: 3,
    date: "05 March 2026",
    title: "Revised Vendor Compliance Standards for Dyeing Processes",
    category: "Compliance",
    fileSize: "980 KB"
  }
];

const Circular = () => {
  return (
    <main className="bg-[#FDFBF7] text-[#4A4238] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* 🌟 Background Fluidity (Rayon Feel) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FAF7F2] -skew-x-12 translate-x-1/4 z-0" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#C5A27D]/5 blur-[100px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Section 1: Editorial Header --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#C5A27D] text-2xl  uppercase font-bold mb-6 block">
                Official Communications
              </span>
              <h1 className="text-6xl md:text-8xl font-headline italic tracking-tighter mb-10 leading-[0.9]">
                Circulars & <br />
                <span className="text-[#C5A27D]">Notices</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-[#6B5E4C] max-w-2xl leading-[1.8]">
                "Access all official updates, collection launches, and operational policies for Parekh Rayon here. We are dedicated to delivering excellence through transparency and operational efficiency."
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(197,162,125,0.2)] border-[10px] border-white">
              <img 
                className="w-full h-full object-cover grayscale-[0.2]" 
                src="https://img.freepik.com/free-photo/traditional-weaving-loom_23-2151949045.jpg?t=st=1774619392~exp=1774622992~hmac=f09526cecf55f8c21912128b9169431b95b48f916e84ef4b40a8ae5308605b0f&w=1480" 
                alt="Textile Loom"
              />
            </div>
            {/* Soft Overlay badge */}
             <div className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-[#EAE3D8]">
                <p className="text-[#C5A27D] font-headline text-xl italic mb-1">Q2 2026</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">Policy Updates</p>
            </div>
          </div>
        </section>

        {/* --- Section 2: Circular Matrix (Glassmorphism List) --- */}
        <section className="relative rounded-[3rem] overflow-hidden bg-white border border-[#EAE3D8] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.03)]">
          {/* Subtle Fabric Background Texture */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')]" />

          <div className="relative p-10 md:p-16 lg:p-20">
            <div className="mb-16 flex flex-col md:flex-row justify-between items-start gap-6">
              <h2 className="text-4xl md:text-5xl font-headline italic mb-2 tracking-tighter">
                Active Directives
              </h2>
              <div className="flex gap-2">
                 <input type="text" placeholder="Search Circulars..." className="bg-[#FAF7F2] border border-[#EAE3D8] rounded-full px-6 py-3 text-sm outline-none focus:border-[#C5A27D] transition-all w-full md:w-80" />
                 <button className="px-6 py-3 bg-[#C5A27D] text-white rounded-full text-xs uppercase tracking-widest font-bold shadow-lg">Filter</button>
              </div>
            </div>

            <div className="space-y-6">
              {circulars.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-8 rounded-2xl bg-white border border-[#EAE3D8] hover:border-[#C5A27D]/40 hover:bg-[#FAF7F2] hover:shadow-lg transition-all"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A27D] px-3 py-1 bg-[#C5A27D]/5 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#6B5E4C] font-medium opacity-60">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight group-hover:text-[#4A4238] transition-colors max-w-2xl">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6 w-full md:w-auto">
                    <span className="text-xs text-[#6B5E4C]/70 font-medium whitespace-nowrap hidden lg:block">{item.fileSize}</span>
                    
                    <button className="flex-1 md:flex-initial group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white border-2 border-[#EAE3D8] text-[#4A4238] font-bold text-xs uppercase tracking-[0.3em] hover:bg-[#4A4238] hover:border-[#4A4238] hover:text-white transition-all shadow-sm">
                      Access PDF
                      <div className="w-7 h-7 rounded-full bg-[#EAE3D8] group-hover:bg-white/10 flex items-center justify-center transition-colors">
                        <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:text-white transition-colors">
                          <path d="M7.5 1V10M7.5 10L11 6.5M7.5 10L4 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination / "Load More" */}
           
          </div>
        </section>
      </div>
    </main>
  );
};

export default Circular;