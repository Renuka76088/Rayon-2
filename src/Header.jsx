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
  {/* 🟢 Premium "P" Box with Shadow & Gradient */}
  <div 
    style={{
      background: 'linear-gradient(135deg, rgba(113, 127, 224, 0.15) 0%, rgba(113, 127, 224, 0.05) 100%)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
    }}
    className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] border-2 border-[#C5A27D] rounded-xl flex items-center justify-center mr-3 shrink-0 transition-all duration-300 hover:scale-105"
  >
    <span className="text-[#C5A27D] font-black text-2xl md:text-3xl leading-none">P</span>
  </div>

  {/* 🟢 Text Section (Zero Space) */}
  <div className="flex flex-col justify-center">
    <h1 className="flex items-center text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">
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

            {/* Desktop Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsPagesOpen(true)}
              onMouseLeave={() => setIsPagesOpen(false)}
            >
              <button className="nav-link-style flex items-center gap-1">
                Pages <span className="material-symbols-outlined text-xs"></span>
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

      {/* CSS Utility for consistency */}
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