import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  MapPin, 
  GraduationCap, 
  Languages, 
  Plane, 
  Mail, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Facebook,
  FileCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

function Career() {
  const targetSectors = [
    "Textile & Garments", "Pulp & Paper Industry", "Medical & Healthcare",
    "F.M.C.G.", "Industrial & Corporate Projects", "Tenders and M.O.U."
  ];

  return (
    <div className="bg-[#FCFAF8] min-h-screen pb-20">
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 text-center border-b border-stone-100">
        <motion.span 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="text-[#C5A27D] uppercase tracking-[0.4em] text-[10px] font-black mb-4 block"
        >
          Join Our Team
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="font-headline text-6xl md:text-8xl text-[#4A4238] leading-none mb-6"
        >
          Current <span className="italic">Openings</span>
        </motion.h1>
        <p className="text-stone-500 font-light text-xl">Explore opportunities to grow with us</p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        
        {/* --- HR MANAGER ROLE --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <span className="bg-[#4A4238] text-[#C5A27D] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Management</span>
              <h2 className="font-headline text-5xl text-[#4A4238] leading-tight">HR Manager</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-stone-500"><MapPin size={18}/> <span>Bengaluru, Karnataka</span></div>
                <div className="flex items-center gap-3 text-stone-500"><Briefcase size={18}/> <span>Full Time</span></div>
                <div className="text-2xl font-headline text-[#C5A27D]">CTC: Rs. 5.25 L.P.A.</div>
              </div>
              
              <div className="p-8 bg-white rounded-[2rem] border border-stone-100 shadow-sm mt-10">
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-stone-400 mb-6">How to Apply</h4>
                <p className="text-sm text-stone-600 mb-6 leading-relaxed">Send your updated Resume/CV to the email below. Mention position in subject.</p>
                <a href="mailto:hemant.parekh2012@gmail.com" className="flex items-center gap-3 text-[#4A4238] font-bold text-sm group">
                  <div className="w-10 h-10 rounded-full bg-[#F9F7F2] flex items-center justify-center group-hover:bg-[#C5A27D] group-hover:text-white transition-all">
                    <Mail size={16}/>
                  </div>
                  hemant.parekh2012@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12 bg-white p-10 md:p-16 rounded-[3rem] border border-stone-100">
            {/* Criteria */}
            <div className="space-y-6">
              <h3 className="font-headline text-3xl text-[#4A4238] flex items-center gap-4">
                <GraduationCap className="text-[#C5A27D]" /> Essential Criteria
              </h3>
              <ul className="space-y-4 text-stone-600 font-light leading-relaxed">
                <li className="flex gap-4"><ChevronRight size={18} className="text-[#C5A27D] shrink-0 mt-1"/> MBA (HR) / Graduate with 8+ years experience in Manufacturing/Corporate End-to-End recruitment.</li>
                <li className="flex gap-4"><ChevronRight size={18} className="text-[#C5A27D] shrink-0 mt-1"/> Proficiency in English, Hindi, and Regional languages equally.</li>
                <li className="flex gap-4"><ChevronRight size={18} className="text-[#C5A27D] shrink-0 mt-1"/> Acquainted with official Tour & Travel within India.</li>
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="space-y-6">
              <h3 className="font-headline text-3xl text-[#4A4238] flex items-center gap-4">
                <FileCheck className="text-[#C5A27D]" /> Responsibilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "End-to-End Recruitment & Induction",
                  "Pay-Roll & Compliance (EPF, ESI, Labour Law)",
                  "Relieving & Full/Final Settlement",
                  "Campus Interview Coordination"
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-[#F9F7F2] rounded-2xl flex items-start gap-4">
                    <CheckCircle2 size={18} className="text-[#C5A27D] shrink-0 mt-1" />
                    <span className="text-sm font-medium text-[#4A4238]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- SOCIAL MEDIA INFLUENCER ROLE --- */}
        <section className="relative overflow-hidden bg-[#1C1C19] rounded-[4rem] p-10 md:p-20 text-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A27D]/5 skew-x-12 translate-x-20"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <span className="bg-[#C5A27D] text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Campaign</span>
              <h2 className="font-headline text-5xl md:text-7xl leading-none">Social Media <br/><span className="italic text-[#C5A27D]">Influencer</span></h2>
              <p className="text-white/50 text-xl font-light leading-relaxed">
                Brand Promotion: Long-term Online Business Advertisements on personal platforms for our tangible & intangible products.
              </p>
              
              <div className="pt-8 space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A27D]">Required Platforms</h4>
                <div className="flex flex-wrap gap-6 text-white/40">
                  <Linkedin className="hover:text-white cursor-pointer transition-colors" />
                  <Facebook className="hover:text-white cursor-pointer transition-colors" />
                  <Instagram className="hover:text-white cursor-pointer transition-colors" />
                  <Youtube className="hover:text-white cursor-pointer transition-colors" />
                  <span className="text-xs font-bold uppercase tracking-widest self-center">+ Others</span>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10">
                <h4 className="font-headline text-2xl mb-8">Target Sectors</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {targetSectors.map((sector, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/5 hover:border-[#C5A27D]/30 transition-colors">
                      <span className="text-[#C5A27D] font-mono text-xs">{i + 1}</span>
                      <span className="text-xs font-medium text-white/80">{sector}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#C5A27D] p-10 rounded-[3rem] text-[#1C1C19]">
                <h4 className="font-headline text-2xl mb-4">Submission Guide</h4>
                <p className="text-sm font-medium mb-8 leading-relaxed">Submit your <b>Quotation in PDF</b> format including payment terms (Excludes 3rd Party & GST).</p>
                <a href="mailto:hemant.parekh2012@gmail.com" className="w-full py-5 bg-[#1C1C19] text-[#C5A27D] rounded-2xl flex items-center justify-center gap-3 font-black text-[10px] uppercase tracking-widest hover:scale-[1.02] transition-transform">
                  Apply Now <ExternalLink size={16}/>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER NOTE --- */}
        <div className="text-center pt-10">
          <p className="text-stone-400 text-xs tracking-widest uppercase">
            Hiring process remains open until a deserving candidate is appointed via 3-Round interviews.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Career;