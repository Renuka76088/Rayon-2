import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPagesOpen(false);
  }, [location]);

  const rayonLinks = [
    { name: 'Product Gallery', path: '/productgallery' },
    { name: 'Our Management', path: '/management' },
    { name: 'Trade Enquiry', path: '/enquiry' },
    { name: 'e-Quotation', path: '/quotation' },
    { name: 'e-Auction', path: '/auction' },
    { name: 'Tender & Contract', path: '/contract' },
    { name: 'Circular', path: '/circular' },
    { name: 'Career Page', path: '/career' },
    { name: 'Customer Review', path: '/review' },
    { name: 'Visit Appointment', path: '/appointment' },
    { name: 'Media Gallery', path: '/mediagallery' },
    { name: 'Textile Associates', path: '/associates' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Product', path: '/product' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-xl border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">
          
          {/* --- LEFT: Brand Logo --- */}
          <Link to="/" className="z-[130] flex items-center no-underline">
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(113, 127, 224, 0.15) 0%, rgba(113, 127, 224, 0.05) 100%)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
              }}
              className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] border-2 border-[#C5A27D] rounded-xl flex items-center justify-center mr-3 shrink-0 transition-all duration-300 hover:scale-105"
            >
              <span className="text-[#C5A27D] font-black text-2xl md:text-3xl leading-none">P</span>
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="flex items-center gap-x-2 text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">
                <span className="text-[#4A4238]">PAREKH</span>
                <span className="text-[#C5A27D]">RAYON</span>
              </h1>
              <span className="text-[9px] md:text-[11px] font-bold tracking-[0.3em] text-[#8b8175] uppercase mt-1">
                RAIPUR • CG
              </span>
            </div>
          </Link>

          {/* --- RIGHT: Desktop Navigation --- */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.path} to={link.path} className="nav-link-style">
                {link.name}
              </Link>
            ))}

            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsPagesOpen(true)}
              onMouseLeave={() => setIsPagesOpen(false)}
            >
              <button className="nav-link-style flex items-center gap-1">
                Pages 
              </button>
              <AnimatePresence>
                {isPagesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-64 bg-white shadow-2xl rounded-2xl border border-stone-100 py-4 z-50"
                  >
                    {rayonLinks.map((link, i) => (
                      <Link key={i} to={link.path} className="block px-6 py-2.5 text-sm text-stone-600 hover:bg-stone-50 hover:text-[#C5A27D] transition-all">
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link key={link.path} to={link.path} className="nav-link-style">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* --- RIGHT: Mobile Toggle Button --- */}
          <button 
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 z-[130]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-[#4A4238] block rounded-full"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-8 h-0.5 bg-[#4A4238] block rounded-full"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-[#4A4238] block rounded-full"
            />
          </button>
        </div>
      </header>

      {/* --- Mobile Full-Screen Overlay Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-white z-[120] lg:hidden flex flex-col"
          >
            <div className="flex-1 overflow-y-auto pt-32 px-10 pb-10 space-y-8">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="block text-4xl font-headline font-light text-[#4A4238]">
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-10 border-t border-stone-100">
                <h3 className="text-[#C5A27D] uppercase tracking-[0.3em] font-bold text-xs mb-6">Discover More</h3>
                <div className="grid grid-cols-1 gap-5">
                  {rayonLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="text-lg text-stone-500 hover:text-[#C5A27D]">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-10 bg-stone-50 text-center">
              <p className="text-xs text-stone-400 tracking-widest uppercase">Premium Rayon Textiles • 2026</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🟢 FLOATING WHATSAPP BUTTON (Bottom Right) */}
      <motion.a
        href="https://wa.me/91XXXXXXXXXX" // Apna WhatsApp number yahan dalein
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[150] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.3)] border-2 border-white cursor-pointer"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="white" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>

      <style jsx>{`
        .nav-link-style {
          font-family: 'Headline', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 13px;
          font-weight: 700;
          color: #4A4238;
          transition: all 0.3s ease;
        }
        .nav-link-style:hover {
          color: #C5A27D;
        }
      `}</style>
    </>
  );
}