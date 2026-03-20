import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Timer, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  PlusCircle,
  Building2,
  Mail,
  ChevronDown
} from 'lucide-react';

function TenderContract() {
  return (
    <main className="pt-20 bg-[#FCFAF8]">
      {/* --- HERO SECTION (UNCHANGED as per request) --- */}
    {/* Editorial Hero */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden px-6 md:px-12 py-24">
          <div className="absolute inset-0 z-0">
            <img
              alt="Silken fabric background"
              className="w-full h-full object-cover opacity-60 scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdGVU65G7SiAuYSc5edK9C6f2oyNMzntWF_zwavJQkaTwlD_BYeVbG_4hzMUPXB9YFlLBLWuiLop_cqyYm9z7ioLc-iMCtj7Vbr5qOnTIIal3ExXP3CXpHU-db0Bb962sTugpAhIrFKV1HgCXxrHQwfem3vbKXDGZyF-Ld0q1cPS8smfh7T7nFApryBOR3BGU60ECYonB4VgDwuQvKdK-zIwx9VV1Vr8zaC-CvwPY6PUCeG4lBfboBTpiw3MYYEmdfS4SpCf-bAIQ"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="font-label text-tertiary tracking-[0.35em] uppercase mb-8 text-base font-semibold">
              Parekh Textile / Tenders
            </p>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-on-background tracking-tight leading-[0.88] mb-10 font-light">
              Weaving the <br /> Future of Industry
            </h1>
            <div className="h-px w-32 bg-outline-variant/30 mb-10"></div>
            <p className="font-body text-2xl md:text-3xl lg:text-4xl text-on-surface-variant leading-relaxed max-w-3xl font-light">
              Through industrial excellence and sustainable innovation, we partner with visionaries to redefine the global textile landscape.
            </p>
          </div>
        </section>

    {/* --- BENTO GRID TENDERS --- */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-[#C5A27D] mb-4"
            >
              <div className="h-[1px] w-8 bg-[#C5A27D]"></div>
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold" style={{fontSize:'17px'}}>Active Opportunities</span>
            </motion.div>
            <h2 className="font-headline text-5xl lg:text-7xl text-[#4A4238] leading-tight">
              Tenders & <span className="italic">Contracts</span>
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 text-xs tracking-[0.3em] font-bold uppercase py-5 px-10 rounded-full border border-stone-200 text-[#4A4238] hover:border-[#C5A27D] transition-all"
          >
            View Archive <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Large Card */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-8 bg-white p-10 md:p-14 rounded-[3rem] border border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[550px] group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
              <FileText size={300} strokeWidth={1} />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-2 bg-[#F9F7F2] text-[#C5A27D] px-5 py-2 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A27D] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A27D]"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{fontSize:'17px'}}>Live Tender</span>
                </div>
                <span className="text-stone-300 font-mono text-[10px] tracking-tighter">REF/PT/2026/01</span>
              </div>
              
              <h3 className="font-headline text-5xl md:text-7xl text-[#4A4238] mb-8 leading-[1.1]">
                Sustainable Fiber <br /> <span className="text-[#C5A27D] italic">Sourcing 2026</span>
              </h3>
              <p className="text-[#6B5E4C] text-lg md:text-xl max-w-xl font-light leading-relaxed">
                Global inquiry for certified regenerative cellulose fibers and circular supply chain partners for our eco-rayon line.
              </p>
            </div>

            <div className="relative z-10 pt-10">
              <button className="flex items-center gap-4 text-[#4A4238] font-bold text-xs tracking-[0.2em] uppercase group/btn">
                <span className="bg-[#4A4238] text-white p-4 rounded-full group-hover/btn:bg-[#C5A27D] transition-colors">
                  <ArrowRight size={20} />
                </span>
                Download Specifications
              </button>
            </div>
          </motion.div>

          {/* Secondary Vertical Card */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-4 bg-[#4A4238] p-10 rounded-[3rem] flex flex-col justify-between text-white group cursor-pointer overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-30 grayscale group-hover:scale-110 transition-transform duration-1000">
               <img src="https://images.unsplash.com/photo-1558583082-409143c794ca?q=80&w=800" alt="Loom" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#4A4238] via-transparent to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center mb-10 border border-white/10">
                <PlusCircle size={28} className="text-[#C5A27D]" />
              </div>
              <h3 className="font-headline text-3xl mb-4 leading-tight">Loom Technology <br /> Expansion</h3>
              <p className="text-white/60 text-base font-light leading-relaxed">
                Deployment of 50+ high-speed air-jet looms for Phase III facility.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A27D]">
              <Timer size={14} className="animate-spin-slow" />
              <span>Closing in 48 Hours</span>
            </div>
          </motion.div>

          {/* Smaller Cards */}
          {[
            { title: "Industrial Rayon R&D", deadline: "Oct 12, 2026", icon: Building2 },
            { title: "Solar Array Installation", deadline: "Nov 05, 2026", icon: ShieldCheck }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ borderColor: "#C5A27D" }}
              className="md:col-span-6 bg-white p-10 rounded-[2.5rem] border border-stone-100 flex flex-col justify-between group transition-all"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-[#F9F7F2] rounded-2xl text-[#C5A27D] group-hover:bg-[#C5A27D] group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <ArrowUpRight size={20} className="text-stone-300 group-hover:text-[#C5A27D] transition-colors" />
              </div>
              <div>
                <h3 className="font-headline text-3xl text-[#4A4238] mb-4">{item.title}</h3>
                <p style={{fontSize:'17px'}} className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Deadline: {item.deadline}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- VENDOR PORTAL --- */}
      <section className="bg-[#1C1C19] py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-6xl md:text-8xl font-headline text-white mb-10 leading-[0.9]">
              Become a <br /> <span className="italic text-[#C5A27D]">Partner</span>
            </h2>
            <p className="text-xl font-light text-white/50 max-w-lg leading-relaxed mb-16"style={{fontSize:'25px'}}>
              Join our ecosystem of quality-driven suppliers. We value innovation, transparency, and sustainable growth.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A27D] group-hover:bg-[#C5A27D] group-hover:text-white transition-all">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-1">Ethical Standards</h4>
                  <p className="text-white/30 text-xs" style={{fontSize:'17px'}}>Full compliance with global safety norms.</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A27D] group-hover:bg-[#C5A27D] group-hover:text-white transition-all">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-1">Digital Governance</h4>
                  <p className="text-white/30 text-xs" style={{fontSize:'17px'}}>Seamless API-driven vendor integration.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-[#FCFAF8] p-10 md:p-14 rounded-[4rem] shadow-2xl"
            >
              <h3 className="text-[#4A4238] text-4xl font-headline italic mb-10">Registration Portal</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
                    <input className="form-input pl-14 w-full" style={{fontSize:'17px'}} placeholder="Company Name" />
                  </div>
                  <div className="relative" style={{fontSize:'17px'}}>
                    <select className="form-input appearance-none w-full cursor-pointer">
                      <option>Select Firm Type</option>
                      <option>Logistics</option>
                      <option>Chemicals</option>
                      <option>Machinery</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-stone-300 pointer-events-none" size={18} />
                  </div>
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
                  <input className="form-input pl-14 w-full" placeholder="Contact Email" />
                </div>

                <textarea className="form-input w-full resize-none p-6" placeholder="Briefly describe your services..." rows={4}></textarea>
                
                <button style={{fontSize:'17px'}} className="w-full py-6 bg-[#4A4238] text-[#C5A27D] text-[10px] uppercase tracking-[0.4em] font-black rounded-3xl hover:bg-[#C5A27D] hover:text-white transition-all shadow-xl shadow-black/5 active:scale-[0.98]">
                  Submit Interest
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .form-input {
          background: #F9F7F2;
          border: 1px solid transparent;
          border-radius: 1.5rem;
          padding: 1.25rem;
          font-size: 0.9rem;
          color: #4A4238;
          transition: all 0.3s ease;
        }
        .form-input:focus {
          border-color: #C5A27D;
          background: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          outline: none;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}

export default TenderContract;