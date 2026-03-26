import React from 'react'

function ProductGallery() {
  return (
    <>
    
    <main class="pt-24 pb-32 overflow-x-hidden max-w-[1440px] mx-auto">
{/* <!-- Hero Story Section --> */}
<section class="px-6 lg:px-12 mb-32 lg:mb-48 relative">
  <div class="max-w-[1440px] mx-auto relative">
    
    <div class="relative aspect-[4/5] lg:aspect-[21/9] w-full rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(92,74,42,0.2)] bg-[#F4EFE6]">
      <img 
        alt="Rayon fabric drape" 
        class="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s] ease-out" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMHKog9h-lC_URZU1Och_3E-qgxaVKsaovPn1QPgG4egJblIsMTHux_2ryyIzr-mR2rARnZUG4ljUcafPKOZutHsJUU5xdkKl7e_afAy27-LcFPAvbxy2_sSOWsEKj8LtFAV57PejLHpw3iG1LPJWOTLb9xHlvDFnVMT5wLcXYPDV1-dbw1CtB8ZaMfzmf1lDm3OqgiRAvVAUGPYFVoAI_NASHvb8lKIl6p1gr3ovihECkwOskmfgPs-zlQ6KGTxyZq7TjrQWRrX0"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"></div>
    </div>

    <div class="mt-[-6rem] lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-16 lg:w-[500px] z-10">
      <div class="p-10 lg:p-14 bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-white/50 relative overflow-hidden group">
        
        <div class="absolute top-0 left-0 w-2 h-full bg-[#B79A63] opacity-20"></div>
        
        <span class="text-[#B79A63] font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Artisan Weave</span>
        
        <h2 class="font-serif text-4xl md:text-6xl text-[#333333] leading-[1.1] mb-6">
          The Fluidity <br/>
          <span class="italic font-light text-[#5C4A2A]">of Light</span>
        </h2>
        
        <p class="text-[#5C4A2A]/70 text-lg font-light leading-relaxed mb-10">
          Our signature rayon weave captures movement in every thread, offering a silken drape that breathes with you and reflects the natural cadence of life.
        </p>

        <button class="relative overflow-hidden group/btn flex items-center gap-4 py-4 px-8 rounded-full bg-[#5C4A2A] text-white transition-all duration-300 hover:bg-[#B79A63] hover:shadow-xl hover:shadow-[#B79A63]/30">
          <span class="font-bold text-xs uppercase tracking-widest relative z-10">Explore Collection</span>
          <span class="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-2 relative z-10">arrow_forward</span>
        </button>
      </div>
      
      <div class="hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 bg-[#E6DBC4] rounded-full -z-10 mix-blend-multiply blur-2xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
    </div>

  </div>
</section>
{/* <!-- Fabric Swatch Carousel (Responsive Grid/Carousel) --> */}
<section class="mb-32 lg:mb-48 bg-[#FDFBF7] py-20 relative overflow-hidden">
  <div class="px-6 lg:px-12 mb-16 flex items-end justify-between max-w-[1440px] mx-auto">
    <div class="space-y-2">
      <div class="flex items-center gap-3">
        <div class="w-8 h-px bg-[#B79A63]"></div>
        <p class="font-bold text-[10px] uppercase tracking-[0.4em] text-[#B79A63]">Tactile Selection</p>
      </div>
      <h3 class="font-serif text-4xl md:text-5xl text-[#333333]">The Palette</h3>
    </div>
    
    <div class="flex gap-3 lg:hidden">
      <button class="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#E6DBC4] shadow-sm active:scale-95 transition-transform">
        <span class="material-symbols-outlined text-[#5C4A2A]" data-icon="chevron_left">chevron_left</span>
      </button>
      <button class="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#E6DBC4] shadow-sm active:scale-95 transition-transform">
        <span class="material-symbols-outlined text-[#5C4A2A]" data-icon="chevron_right">chevron_right</span>
      </button>
    </div>
  </div>

  <div class="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible no-scrollbar gap-10 px-6 lg:px-12 snap-x snap-mandatory max-w-[1440px] mx-auto pb-10">
    
    <div class="min-w-[320px] lg:min-w-0 snap-center group">
      <div class="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative cursor-pointer shadow-2xl shadow-[#5C4A2A]/5 transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-[#B79A63]/20">
        <img alt="Champagne Rayon" class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwiJbmOrk_aAZYc7TIPmjll0PkCWTXLYm87yZf-VujuVH19YI8qnTgVBfvIxGmUWbmiUXZ9UGmFJXuW2nV0-8koGY3onOJlD6TA_fhouXXmdXEyfbyDHV581GxvRjpX4ARF4AQrRRPcNoW2I4UViZXrVU50iQkmlN24a5YUvC98j1_xiUiytFvHq1HcqR2ddXWOdl3SypJYKzXNzN0P6YKNYwSccW-3kAbolVbx36-R_nrcilsgUIQVw3VYoiGDkgTcTHkcqHLtxo"/>
        
        <div class="absolute inset-0 bg-gradient-to-t from-[#5C4A2A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
          <p class="text-white/70 text-[10px] uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Fabric Composition</p>
          <p class="text-white text-sm font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">100% Pure Organic Rayon with a subtle silk finish.</p>
        </div>
      </div>
      <div class="flex justify-between items-center px-2">
        <div>
          <h4 class="font-serif text-2xl text-[#333333] group-hover:text-[#B79A63] transition-colors">Champagne Mist</h4>
          <p class="text-[10px] text-[#8C7345] font-bold uppercase tracking-widest mt-1">Ref: RM-2026</p>
        </div>
        <span class="bg-[#F4EFE6] px-4 py-1.5 rounded-full text-[9px] uppercase tracking-[0.1em] font-bold text-[#5C4A2A] border border-[#E6DBC4]">Satin Weave</span>
      </div>
    </div>

    <div class="min-w-[320px] lg:min-w-0 snap-center group">
      <div class="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative cursor-pointer shadow-2xl shadow-[#5C4A2A]/5 transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-[#B79A63]/20">
        <img alt="Charcoal Weave" class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm0BJ0emfW7aePH-ZEYz9A7ZMjmBX2IMiHIj8HHKBrhQbmvtCe8RwFpJQwpete6bPA9oWm1ylmpqE2QQaBn6FxOS8fEUmSGLftS5IMLoynW6lCEwI2pi8v7ZYnvdD2kGZzjVt3L0AuuaXgyxu8O9pLxJ39-TVqeqcHIAHDJtT7Pdz1qXYrRmEEguKoDFJ7upAhLqKpGIXNZqkovYgfnOMpwBFyoui4MpiX-nE51mTtUijSQu6_Twz4nyXVkt0WjJixgSaU0UFeWF8"/>
        
        <div class="absolute inset-0 bg-gradient-to-t from-[#5C4A2A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
          <p class="text-white/70 text-[10px] uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Fabric Composition</p>
          <p class="text-white text-sm font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">High-density twill base for durability and deep luster.</p>
        </div>
      </div>
      <div class="flex justify-between items-center px-2">
        <div>
          <h4 class="font-serif text-2xl text-[#333333] group-hover:text-[#B79A63] transition-colors">Muted Obsidian</h4>
          <p class="text-[10px] text-[#8C7345] font-bold uppercase tracking-widest mt-1">Ref: RO-2026</p>
        </div>
        <span class="bg-[#F4EFE6] px-4 py-1.5 rounded-full text-[9px] uppercase tracking-[0.1em] font-bold text-[#5C4A2A] border border-[#E6DBC4]">Twill Base</span>
      </div>
    </div>

    <div class="min-w-[320px] lg:min-w-0 snap-center group">
      <div class="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative cursor-pointer shadow-2xl shadow-[#5C4A2A]/5 transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-[#B79A63]/20">
        <img alt="Earth Tone Fabric" class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHDQUpV1vcs2Vc9_Po5awTKaFzbEkdeKWRG4oQDGoKNKtOBp1kySBdMlDzdOzdyiAnwIrPrcl6VSdQ884ukDKHr7e4rEn0VaWY9merZp1UvgvqJ_S7ZsIz-m-ZfpHDRIrYL80MkWaj16OS3r7obNuWGu9AYob6B-YwnZpjMzndFrXLMwL7xto_KoxQi1S5d1bp8qNSGmhTwuAowFaJ8TpACMYIfwStvmBRoQHf3ETkaI5FTkAnRjs8LT1Hy13gPlga2pw8xeHwNsY"/>
        
        <div class="absolute inset-0 bg-gradient-to-t from-[#5C4A2A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
          <p class="text-white/70 text-[10px] uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Fabric Composition</p>
          <p class="text-white text-sm font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">Textured crepe weave offering a unique granular feel.</p>
        </div>
      </div>
      <div class="flex justify-between items-center px-2">
        <div>
          <h4 class="font-serif text-2xl text-[#333333] group-hover:text-[#B79A63] transition-colors">Dusted Earth</h4>
          <p class="text-[10px] text-[#8C7345] font-bold uppercase tracking-widest mt-1">Ref: RE-2026</p>
        </div>
        <span class="bg-[#F4EFE6] px-4 py-1.5 rounded-full text-[9px] uppercase tracking-[0.1em] font-bold text-[#5C4A2A] border border-[#E6DBC4]">Crepe Weave</span>
      </div>
    </div>

  </div>

  <div class="flex justify-center gap-1.5 mt-8 lg:hidden">
    <div class="w-8 h-1 rounded-full bg-[#B79A63]"></div>
    <div class="w-2 h-1 rounded-full bg-[#E6DBC4]"></div>
    <div class="w-2 h-1 rounded-full bg-[#E6DBC4]"></div>
  </div>
</section>
{/* <!-- Fabric Detail Grid (Bento Style) --> */}
<section class="px-6 lg:px-12 mb-32 lg:mb-48 max-w-[1440px] mx-auto relative">
  <div class="absolute top-0 right-0 text-[10px] font-mono text-[#B79A63]/30 uppercase tracking-[0.5em] [writing-mode:vertical-lr] h-full hidden lg:block">
    Structural Integrity // Molecular Weave // DNA-Silk
  </div>

  <div class="mb-16 space-y-3">
    <div class="flex items-center gap-4">
      <span class="h-px w-12 bg-[#B79A63]"></span>
      <p class="font-bold text-[11px] uppercase tracking-[0.4em] text-[#B79A63]">Technical Artistry</p>
    </div>
    <h3 class="font-serif text-4xl md:text-6xl text-[#333333]">Fabric Architecture</h3>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[650px]">
    
    <div class="lg:col-span-8 relative rounded-[3rem] overflow-hidden group shadow-2xl shadow-[#5C4A2A]/10">
      <img 
        alt="Macro weave" 
        class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpuE1Dswl3n6PmLj1-Ay-ljR0vG6Zmhgk8LDsHSQh58T6BRdjfJCVHVaokYH_REIy1DlmrGCurDHHhHxpcfWdGDrckO6RfYlfG9CGKpz-bXgJeGGNY1f50AzQvQl_Wf6WE1DicSNBAVmTX59v518jv0lakL-au7w40F0gChfIWPd-6DhqduIVYwCusKgOd04gSV7t0AIBRuoUdspu_FAjgFmn8BB2R8-mkwQ5AClt9GIdXTQvhrUT-gDRv70x7jbupEGQdzvL2CSI"
      />
      
      <div class="absolute inset-0 bg-gradient-to-t from-[#5C4A2A]/90 via-transparent to-transparent opacity-90"></div>
      
      <div class="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="max-w-md animate-fade-in">
          <div class="w-12 h-1 bg-[#B79A63] mb-6"></div>
          <h4 class="font-serif text-3xl md:text-4xl text-white mb-4">Micro-Pore <br/><span class="italic font-light opacity-80">Breathability</span></h4>
          <p class="text-white/70 text-sm leading-relaxed font-light">
            Engineered with a molecular structure that allows for unprecedented moisture-wicking and thermal regulation, ensuring comfort in any climate.
          </p>
        </div>
        
        <div class="hidden md:flex flex-col items-center gap-2 px-6 py-6 rounded-full border border-white/20 backdrop-blur-md bg-white/5">
           <span class="text-white font-bold text-xs tracking-tighter">98.2%</span>
           <span class="text-white/40 text-[8px] uppercase tracking-widest">Airflow</span>
        </div>
      </div>
    </div>

    <div class="lg:col-span-4 flex flex-col gap-8">
      
      <div class="flex-1 rounded-[3rem] overflow-hidden group relative shadow-xl">
        <img 
          alt="Detailed weave" 
          class="w-full h-full object-cover transition-transform duration-1000 group-hover:rotate-2 group-hover:scale-110" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyQbPvbErvczoIt_uEK639ZoDW6ErMPq-5m1vhi7q2iONQ3LM-NLPmUvzxBKYSVNvYn-iUf3KCYqBEO0SrpGpXZWRhfiWyKdH4t750c0Gqe1ABelsTDIjtWwYCqWHux0CyJQMd7WXXhdOrZRoJ-bXkckgRXEU5Acmt6UIURAOd6_PasHtgmXTXrCU_vcTsQnV5mYQKSXWE_xk7sg61KUSvh6mnMnJiqaN543v1SJmLEOkioWnqynZlrC1SIJjpj7XwogAufXLMpBs"
        />
        <div class="absolute inset-0 bg-[#B79A63]/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      <div class="flex-1 rounded-[3rem] bg-[#5C4A2A] overflow-hidden flex flex-col items-center justify-center p-10 text-center relative group transition-all duration-500 hover:bg-[#4A3B21]">
        <div class="absolute w-32 h-32 bg-[#B79A63]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
        
        <div class="relative z-10">
          <span class="material-symbols-outlined text-5xl text-[#B79A63] mb-6 animate-pulse" style="font-variation-settings: 'FILL' 1">opacity</span>
          <h4 class="font-serif text-2xl text-white mb-4 tracking-wide">Lustrous Sheen</h4>
          <p class="text-white/60 text-xs leading-[1.8] font-light max-w-[220px]">
            A subtle, multidimensional glow that mimics the complex reflection of natural silk without the fragility.
          </p>
        </div>
        
        <div class="absolute bottom-6 right-8 opacity-20 group-hover:opacity-50 transition-opacity">
           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H39V40" stroke="#B79A63" stroke-width="2"/>
           </svg>
        </div>
      </div>

    </div>
  </div>
</section>
{/* <!-- Lookbook Section --> */}
<section class="px-6 lg:px-12 mb-12">
<div class="mb-12 text-center lg:text-left">
<p class="font-label text-xs uppercase tracking-widest text-primary font-bold mb-1">Spring / Summer 24</p>
<h3 class="font-headline text-4xl md:text-5xl font-bold italic">The Lookbook</h3>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
<div class="relative group">
<div class="aspect-[2/3] w-full rounded-xl overflow-hidden bg-surface-container-low shadow-2xl">
<img alt="Model in Rayon" class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" data-alt="Model wearing elegant flowing rayon garment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWQtI5LBAEVjsIbD9v9AeyuDhud9gu9oSEwf1Ld4kf5BaipCNWP_GHXEvog-3Rqn-f4SQv-xs-PlW0rqFD9PzukAFrMHNwsfpWtFm6H75FoLCTs91LggysWoURaMUQbiLVr-N8G7jnzcJnbsWvlV5LBPC3RzFEmJS-ZSrTvxB9gfS1_qO5ZM689hrh5HxITUPLY-4fgkz94ISrDHlvbBHjH-35VcDL8r9IsPkTs8o-6gDwMJihx5OIfI1sGoQT28lJFAim5MvMnhU"/>
</div>
<div class="mt-6 flex justify-between items-start px-2">
<div>
<p class="font-headline text-2xl font-bold">The Ethereal Gown</p>
<p class="text-sm md:text-base text-on-surface-variant mt-1">100% Premium Rayon Twill • Ivory</p>
</div>
<div class="text-right">
<p class="font-label font-bold text-xl">$285</p>
<button class="mt-2 text-[10px] uppercase tracking-widest font-bold text-primary border-b border-primary/30 hover:border-primary transition-all pb-0.5">Quick Add</button>
</div>
</div>
</div>
<div class="relative group lg:mt-32">
<div class="aspect-[2/3] w-full rounded-xl overflow-hidden bg-surface-container shadow-2xl">
<img alt="Rayon Detail" class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" data-alt="Fashion portrait highlighting the texture of clothing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZNmw618kKjH6esfyyYkqMJnAclPpkMnViCGjs1Ko0RUOYiIG6ku5ltHTf0lIOGs1xLLDfeZMPjvFmCvXRqP0VcCY-R9cyTLfrlbh3QaJRb7Sve3UvoVqjTiNxfw8uV0kVSnKLKD-Rd6r7gyZoD3aXUmHk_RvXrSW4dtNgQ87K7-kYayE4_m2vDXLDBVW-6HIfGYYzb0Ql4zOifGx-xjFE8boB2H3Fv0P1zHMOZl1WusExv8WYMlc64yra-FeXviiCCJG4Ah5bka0"/>
</div>
<div class="mt-6 flex justify-between items-start px-2">
<div>
<p class="font-headline text-2xl font-bold">Studio Relaxed Shirt</p>
<p class="text-sm md:text-base text-on-surface-variant mt-1">Lightweight Satin Finish • Sand</p>
</div>
<div class="text-right">
<p class="font-label font-bold text-xl">$140</p>
<button class="mt-2 text-[10px] uppercase tracking-widest font-bold text-primary border-b border-primary/30 hover:border-primary transition-all pb-0.5">Quick Add</button>
</div>
</div>
</div>
</div>
</section>
</main>
    
    </>
  )
}

export default ProductGallery