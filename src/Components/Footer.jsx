import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe2, 
  MapPin, 
  Phone, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FCFAF8] pt-24 pb-12 relative overflow-hidden">
      {/* Background Soft Glow - Lines ki jagah depth dene ke liye */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-200 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-20">
          
          {/* Brand & Identity (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="text-[#C5A27D]" size={20} />
                <span className="font-headline italic text-3xl md:text-4xl text-[#4A4238] tracking-tight">
                  PAREKH RAYON
                </span>
              </div>
              <p className="text-[#6B5E4C] font-light text-base leading-relaxed max-w-xs" style={{fontSize:'20px'}}>
                Crafting fluid elegance since generations. We weave sustainability with heritage to define the future of textiles.
              </p>
            </div>

            {/* Newsletter - Soft Shadow Input */}
            <div className="relative max-w-sm group">
              <input 
                type="email" 
                placeholder="Join our world..." 
                className="w-full bg-white border-none py-4 px-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] focus:shadow-[0_15px_40px_rgba(197,162,125,0.1)] outline-none transition-all text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#4A4238] text-white p-2.5 rounded-xl hover:bg-[#C5A27D] transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Navigation (Spans 5 columns) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <h4 className="text-[10px] tracking-[0.3em] uppercase font-black text-[#C5A27D]" style={{fontSize:'17px'}}>Company</h4>
              <ul className="space-y-4">
                {['Our Story', 'Sustainable Fiber', 'Tenders', 'Career'].map((item) => (
                  <li key={item}>
                    <a  style={{fontSize:'19px'}} href="#" className="text-sm text-stone-500 hover:text-[#4A4238] hover:translate-x-1 transition-all inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] tracking-[0.3em] uppercase font-black text-[#C5A27D]" style={{fontSize:'17px'}}>Resources</h4>
              <ul className="space-y-4">
                {['Journal', 'Product Gallery', 'Vendor Portal', 'Privacy'].map((item) => (
                  <li key={item}>
                    <a  style={{fontSize:'19px'}} href="#" className="text-sm text-stone-500 hover:text-[#4A4238] hover:translate-x-1 transition-all inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details (Spans 3 columns) */}
          <div className="lg:col-span-3 space-y-10 lg:text-right flex flex-col lg:items-end">
            <div className="space-y-6">
              <h4 className="text-[10px]  uppercase font-black text-[#C5A27D]" style={{fontSize:'17px'}}>Connect</h4>
              <div className="space-y-4">
                <a href="mailto:info@parekhrayon.com" className="flex items-center lg:justify-end gap-3 text-stone-600 hover:text-[#C5A27D] transition-colors group">
                   <span className="text-sm font-medium underline underline-offset-4 decoration-stone-200 group-hover:decoration-[#C5A27D]" style={{fontSize:'19px'}}>info@parekhrayon.com</span>
                   <Mail size={18} strokeWidth={1.5} />
                </a>
                <a href="tel:+919876543210" className="flex items-center lg:justify-end gap-3 text-stone-600 hover:text-[#C5A27D] transition-colors">
                   <span className="text-sm font-medium" style={{fontSize:'19px'}}>+91 98765 43210</span>
                   <Phone size={18} strokeWidth={1.5} />
                </a>
                <div className="flex items-center lg:justify-end gap-3 text-stone-400">
                   <span className="text-sm text-right" style={{fontSize:'17px'}}>Indore HQ, MP, India</span>
                   <MapPin size={18} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Social Icons - Floating Style */}
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter, Globe2].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-stone-400 hover:text-[#C5A27D] hover:shadow-md transition-all active:scale-95"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-12 border-t border-stone-100/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.2em] text-stone-400 font-bold uppercase">
            © {currentYear} PAREKH RAYON EDITIONS. MADE IN INDORE.
          </p>
          <div className="flex items-center gap-6">
             <span className="text-[9px] uppercase tracking-widest text-stone-300">Fluidity • Heritage • Innovation</span>
          </div>
        </div>
      </div>

      {/* Decorative Blob - For that "Soft Shadow" feel */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C5A27D]/5 rounded-full blur-[100px] pointer-events-none"></div>
    </footer>
  );
}