import React from 'react';
import { motion } from 'framer-motion';

function Enquiry() {
  return (
    <main className="bg-[#FDFBF7] text-[#4A4238] min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* --- Hero Section --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#C5A27D] text-xs tracking-[0.6em] uppercase font-bold mb-6 block">
                The Textile Chamber
              </span>
              <h1 className="text-6xl md:text-8xl font-headline italic tracking-tighter mb-10 leading-[0.9]">
                The Guild of <br />
                <span className="text-[#C5A27D]">Fluidity</span>
              </h1>
              {/* Bada aur clear P tag */}
              <p className="text-xl md:text-2xl font-light text-[#6B5E4C] max-w-2xl leading-[1.8]">
                Elevating the textile trade through collaborative excellence. Hamara maqsad rayon ki legacy ko modern global trade insights ke saath jodna hai. Join our elite circle to access exclusive innovations.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(197,162,125,0.3)] border-[12px] border-white">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjMTJTODm6HKl6PKWA4-1-rMXahqaR7Psp7KV2CvvVlWvpOyfSHfiKMFUsRWQWMajdzAPVMWUnqFd4UICx0b6qzMqH-Y4XsdJrf7pTtSi9YSNRa0weKjPcbLTKqJQ6BPl8w7VbZuAoagX3JqBRdJqEwe1FQkcBxjziy8IKBg5-FoRe-Wr2dWjYMx3f10tVUkdqEcN2hxoCd2R475PCtFc9OftaV96uXcsfOs4aIrHSA_zbVnOaW1xb67yPGcwrm5jWvpd4GGiRKTM" 
                alt="Luxurious Fabric"
              />
            </div>
            {/* Floating Info Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-2xl shadow-xl hidden xl:block max-w-[280px]">
              <p className="font-headline italic text-2xl mb-4 text-[#C5A27D]">Support</p>
              <div className="space-y-3 text-sm tracking-wide text-[#6B5E4C]">
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A27D]"></span>
                  membership@parekh.com
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A27D]"></span>
                  trade-enquiry@parekh.com
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Form Section --- */}
        <section className="relative rounded-[3rem] overflow-hidden bg-white border border-[#EAE3D8] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.03)]">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Process */}
            <div className="lg:col-span-4 bg-[#FAF7F2] p-12 md:p-16 border-r border-[#EAE3D8]">
              <span className="text-[#C5A27D] text-[10px] uppercase tracking-[0.4em] font-bold mb-8 block">Steps to Join</span>
              <h3 className="text-4xl font-headline italic mb-10 leading-tight">Seamless Integration</h3>
              
              <div className="space-y-12" >
                {[
                  { id: "01", title: "Digital Application", desc: "Shuruat karein apne basic trade details ke saath." },
                  { id: "02", title: "Document Upload", desc: "GST, Trade license aur tax details upload karein." },
                  { id: "03", title: "Official Audit", desc: "Verification process by our experts (48-72 hours)." }
                ].map((step) => (
                  <div key={step.id} className="group">
                    <div className="flex items-center gap-4 mb-3">
                      <span style={{fontSize:'20px'}} className="text-[#C5A27D] font-headline text-2xl italic opacity-40 group-hover:opacity-100 transition-opacity">{step.id}</span>
                      <div className="h-[1px] flex-1 bg-[#EAE3D8]" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 tracking-tight">{step.title}</h4>
                    <p className="text-[#6B5E4C] text-[16px] leading-relaxed" style={{fontSize:'20px'}}>{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-2xl bg-white border border-[#EAE3D8]">
                <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-[#C5A27D]">Compliance Check</h4>
                <div className="flex flex-wrap gap-2">
                  {["GST", "MSME", "Trade License", "LLP", "CIN"].map((item) => (
                    <span key={item} className="px-3 py-1 text-[10px] font-bold border border-[#EAE3D8] rounded-full uppercase tracking-tighter">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-8 p-12 md:p-20">
              <header className="mb-16">
                <h2 className="text-5xl font-headline italic mb-4 tracking-tighter">Apply for Membership</h2>
                <p className="text-[#6B5E4C] text-lg font-light italic">Fill in the details to start your journey with the HC Parekh Chamber.</p>
              </header>

              <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="group flex flex-col space-y-3">
                    <label className="text-[10px] uppercase font-bold text-[#C5A27D]" style={{fontSize:'17px'}}>Authorized Official</label>
                    <input className="bg-transparent border-b-2 border-[#EAE3D8] py-4 outline-none focus:border-[#C5A27D] transition-all placeholder:text-[#C5A27D]/30" placeholder="E.g. Rajesh Kumar"  style={{fontSize:'17px'}} />
                  </div>
                  <div className="group flex flex-col space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A27D]"  style={{fontSize:'17px'}}>Code Number</label>
                    <input className="bg-transparent border-b-2 border-[#EAE3D8] py-4 outline-none focus:border-[#C5A27D] transition-all placeholder:text-[#C5A27D]/30" placeholder="CH-XXXX"  style={{fontSize:'17px'}} />
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="group flex flex-col space-y-3">
                    <label className="text-[10px] uppercase font-bold text-[#C5A27D]"  style={{fontSize:'17px'}}>Legal Entity Name</label>
                    <input className="bg-transparent border-b-2 border-[#EAE3D8] py-4 outline-none focus:border-[#C5A27D] transition-all placeholder:text-[#C5A27D]/30" placeholder="Your Business Name"  style={{fontSize:'17px'}} />
                  </div>
                  <div className="group flex flex-col space-y-3">
                    <label className="text-[10px] uppercase  font-bold text-[#C5A27D]"  style={{fontSize:'17px'}}>Business Registered Address</label>
                    <textarea rows={2} className="bg-transparent border-b-2 border-[#EAE3D8] py-4 outline-none focus:border-[#C5A27D] transition-all placeholder:text-[#C5A27D]/30 resize-none" placeholder="Enter full address" style={{fontSize:'17px'}} />
                  </div>
                </div>

                {/* Upload Zone */}
                <div className="group relative border-2 border-dashed border-[#EAE3D8] rounded-3xl p-16 text-center hover:bg-[#FAF7F2] hover:border-[#C5A27D] transition-all cursor-pointer">
                  <div className="w-16 h-16 bg-[#C5A27D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#C5A27D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-[#4A4238] mb-1">Drag & Drop Documents</p>
                  <p className="text-sm text-[#C5A27D] uppercase tracking-widest font-bold">PDF, JPG up to 10MB</p>
                </div>

                {/* Actions */}
                <div className="flex flex-col md:flex-row gap-6 pt-10">
                   <button  style={{fontSize:'17px'}} className="px-12 py-5 rounded-full border border-[#C5A27D] text-[#C5A27D] font-bold text-xs uppercase  hover:bg-[#C5A27D] hover:text-white transition-all">
                    Preview Application
                  </button>
                  <button  style={{fontSize:'17px'}} className="flex-1 px-12 py-5 rounded-full bg-[#C5A27D] text-white font-bold text-xs uppercase  style={{fontSize:'17px'}} shadow-xl hover:bg-[#B38E66] transition-all">
                    Submit Formal Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Enquiry;