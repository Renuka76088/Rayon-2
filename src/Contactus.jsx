import React from 'react';
import { motion } from 'framer-motion';

function Contactus() {
  return (
    <main className="bg-surface text-on-surface pt-20 overflow-hidden">
      
      {/* --- Section 1: Cinematic Hero --- */}
      <section className="relative h-[80vh] w-full flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="w-full h-full object-cover opacity-80 mix-blend-multiply" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4qdkwFlFwQQK41Vr3pvb1GRpFx04de6BkIs5uNt_OboSXmtNpaMSH1Qb8R_wWTK93eSSQi2UA8tuOtfwsm4RfVq4FIyba5ehVqZx16GgHttjOAzH4rxv-m67t4HtAd4XOCABdB3apcFirFBZWxyLPjWbvOInOuhbBz5mmzVXWDgwvY3PsQ7Q70cq8eQUTqGEDkz069CQaIJgAN38oWhUiZo1TZqNBDqTg0UVitsiWyevcb6YTvHDSfC0N2NqQ7UWmutL0j0yzjiI"
            alt="Draped Rayon"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
        </div>

        <div className="relative z-10 px-8 md:px-24 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-tertiary text-xs tracking-[0.6em] uppercase font-bold mb-6 block">
              Direct Contact • Atelier 
            </span>
            <h1 className="font-headline text-7xl md:text-9xl font-light tracking-tighter leading-[0.85] mb-8">
              Let’s start <br /> 
              <span className="italic font-light text-primary">a conversation</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface/60 max-w-md leading-relaxed">
              From Surat to the world—bringing fine rayon craftsmanship to your doorstep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Contact Matrix --- */}
    (
    <section className="relative px-6 md:px-20 py-28 overflow-hidden bg-[#f8f5f0]">

      {/* 🌟 Fabric Gradient Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.7),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(210,200,190,0.3),transparent_50%)]"></div>

      {/* subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')]"></div>

      <div className="relative grid lg:grid-cols-12 gap-20">

        {/* LEFT SIDE */}
        <div className="lg:col-span-5 space-y-16">

          <div>
            <h2 className="text-3xl font-headline text-[#2b2a28] mb-6">
              Our Studio
            </h2>

            <p className="text-base text-[#6b6359] leading-relaxed">
              <br />
              Raipur, CG , India
            </p>
          </div>

          {/* Emails */}
          <div className="space-y-12">

            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#9c938a] mb-2">
                Wholesale
              </p>
              <p className="text-xl font-headline text-[#2b2a28] tracking-wide">
                PARTNERSHIPS@PAREKHTEXTILE.COM
              </p>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#9c938a] mb-2">
                Press
              </p>
              <p className="text-xl font-headline text-[#2b2a28] tracking-wide">
                MEDIA@PAREKHTEXTILE.COM
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="border-l border-[#d8d2c8] pl-6 pt-4">
            <p className="italic text-[#8a8178] text-lg leading-relaxed font-headline">
              "Rayon is more than fabric; it is the physical manifestation of
              breath and movement."
            </p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="lg:col-span-7">

          <div className="relative bg-white/60 backdrop-blur-xl p-10 md:p-14 rounded-[28px] border border-[#e5dfd7] shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

            <h3 className="text-4xl font-headline text-[#2b2a28] mb-12 text-center">
              Leave a Message
            </h3>

            <form className="space-y-8">

              {/* NAME + EMAIL */}
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="text-[10px] uppercase tracking-[0.35em] text-[#9c938a] mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Elias Thorne"
                    className="w-full bg-[#f6f3ee] px-5 py-4 rounded-xl outline-none text-[#2b2a28] placeholder:text-[#b9b4af] focus:ring-1 focus:ring-[#cfc7bd]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-[0.35em] text-[#9c938a] mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="hello@domain.com"
                    className="w-full bg-[#f6f3ee] px-5 py-4 rounded-xl outline-none text-[#2b2a28] placeholder:text-[#b9b4af] focus:ring-1 focus:ring-[#cfc7bd]"
                  />
                </div>

              </div>

              {/* SUBJECT */}
              <div>
                <label className="text-[10px] uppercase tracking-[0.35em] text-[#9c938a] mb-2 block">
                  Subject
                </label>

                <div className="relative">
                  <select className="w-full bg-[#f6f3ee] px-5 py-4 rounded-xl appearance-none text-[#2b2a28] outline-none focus:ring-1 focus:ring-[#cfc7bd]">
                    <option>General Inquiry</option>
                    <option>Wholesale Partnership</option>
                    <option>Custom Orders</option>
                  </select>

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9c938a]">
                    ▼
                  </span>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-[10px] uppercase tracking-[0.35em] text-[#9c938a] mb-2 block">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="How may we assist you?"
                  className="w-full bg-[#f6f3ee] px-5 py-4 rounded-xl outline-none resize-none text-[#2b2a28] placeholder:text-[#b9b4af] focus:ring-1 focus:ring-[#cfc7bd]"
                ></textarea>
              </div>

              {/* BUTTON */}
              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-[#625e5a] to-[#7a746f] text-white px-12 py-4 rounded-full flex items-center gap-4 text-xs tracking-[0.35em] uppercase mx-auto shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Inquiry
                  <span className="text-lg">→</span>
                </motion.button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>

      {/* --- Section 3: Full Width Map --- */}
<section className="relative h-[600px] w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 overflow-hidden">

  {/* Responsive Map */}
  <div className="w-full h-full">
    <iframe
      src="https://www.google.com/maps?q=Raipur,Chhattisgarh&output=embed"
      className="w-full h-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-color" />

  {/* Location Pointer */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
    
    {/* Ping Effect */}
    <div className="w-20 h-20 rounded-full bg-primary/20 animate-ping absolute -top-8 -left-8" />
    
    {/* Dot */}
    <div className="w-4 h-4 rounded-full bg-primary relative z-10 shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
    
    {/* Label */}
    <div className="mt-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-2xl border border-gray-100">
      <p className="text-[10px] font-bold uppercase tracking-widest text-black">
        Raipur, CG
      </p>
      <p className="text-[8px] text-gray-500 uppercase">
        Chhattisgarh, India
      </p>
    </div>
  </div>

</section>

    </main>
  );
}

export default Contactus;