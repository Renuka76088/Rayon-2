import React from 'react'

function ProductGallery() {
  return (
    <>
    
    <main class="pt-24 pb-32 overflow-x-hidden max-w-[1440px] mx-auto">
{/* <!-- Hero Story Section --> */}
<section class="px-6 lg:px-12 mb-24 lg:mb-32">
<div class="relative flex flex-col lg:flex-row items-center">
<div class="aspect-[4/5] lg:aspect-[16/9] w-full rounded-xl overflow-hidden bg-surface-container shadow-2xl">
<img alt="Rayon fabric drape" class="w-full h-full object-cover" data-alt="Flowing cream rayon fabric draped elegantly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMHKog9h-lC_URZU1Och_3E-qgxaVKsaovPn1QPgG4egJblIsMTHux_2ryyIzr-mR2rARnZUG4ljUcafPKOZutHsJUU5xdkKl7e_afAy27-LcFPAvbxy2_sSOWsEKj8LtFAV57PejLHpw3iG1LPJWOTLb9xHlvDFnVMT5wLcXYPDV1-dbw1CtB8ZaMfzmf1lDm3OqgiRAvVAUGPYFVoAI_NASHvb8lKIl6p1gr3ovihECkwOskmfgPs-zlQ6KGTxyZq7TjrQWRrX0"/>
</div>
<div class="mt-[-4rem] lg:mt-0 lg:absolute lg:right-12 lg:w-[450px] p-8 lg:p-12 bg-surface-container-lowest/90 backdrop-blur-md rounded-xl shadow-[0_24px_48px_-12px_rgba(28,28,25,0.08)] border border-outline-variant/20">
<h2 class="font-headline text-3xl md:text-5xl font-bold leading-tight mb-4">The Fluidity of Light</h2>
<p class="text-on-surface-variant text-base leading-relaxed mb-6">Our signature rayon weave captures movement in every thread, offering a silken drape that breathes with you and reflects the natural cadence of life.</p>
<button class="font-label text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-2 group">
                        Explore Collection 
                        <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</section>
{/* <!-- Fabric Swatch Carousel (Responsive Grid/Carousel) --> */}
<section class="mb-24 lg:mb-32">
<div class="px-6 lg:px-12 mb-8 flex items-end justify-between">
<div>
<p class="font-label text-xs uppercase tracking-widest text-primary font-bold mb-1">Tactile Selection</p>
<h3 class="font-headline text-3xl md:text-4xl font-bold">The Palette</h3>
</div>
<div class="flex gap-2 lg:hidden">
<button class="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center border border-outline-variant/10">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="chevron_left">chevron_left</span>
</button>
<button class="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center border border-outline-variant/10">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
{/* <!-- Desktop Grid / Mobile Scroll --> */}
<div class="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible no-scrollbar gap-6 px-6 lg:px-12 snap-x snap-mandatory">
{/* <!-- Swatch 1 --> */}
<div class="min-w-[280px] lg:min-w-0 snap-center">
<div class="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-500">
<img alt="Champagne Rayon" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" data-alt="Close up of champagne colored textured rayon fabric" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwiJbmOrk_aAZYc7TIPmjll0PkCWTXLYm87yZf-VujuVH19YI8qnTgVBfvIxGmUWbmiUXZ9UGmFJXuW2nV0-8koGY3onOJlD6TA_fhouXXmdXEyfbyDHV581GxvRjpX4ARF4AQrRRPcNoW2I4UViZXrVU50iQkmlN24a5YUvC98j1_xiUiytFvHq1HcqR2ddXWOdl3SypJYKzXNzN0P6YKNYwSccW-3kAbolVbx36-R_nrcilsgUIQVw3VYoiGDkgTcTHkcqHLtxo"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<p class="text-white text-xs uppercase tracking-widest font-bold">Details</p>
</div>
</div>
<div class="flex justify-between items-center px-1">
<h4 class="font-headline font-bold text-lg">Champagne Mist</h4>
<span class="bg-secondary-container px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-on-secondary-container">Satin Weave</span>
</div>
</div>
{/* <!-- Swatch 2 --> */}
<div class="min-w-[280px] lg:min-w-0 snap-center">
<div class="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-500">
<img alt="Charcoal Weave" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" data-alt="Deep charcoal rayon fabric with visible grain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm0BJ0emfW7aePH-ZEYz9A7ZMjmBX2IMiHIj8HHKBrhQbmvtCe8RwFpJQwpete6bPA9oWm1ylmpqE2QQaBn6FxOS8fEUmSGLftS5IMLoynW6lCEwI2pi8v7ZYnvdD2kGZzjVt3L0AuuaXgyxu8O9pLxJ39-TVqeqcHIAHDJtT7Pdz1qXYrRmEEguKoDFJ7upAhLqKpGIXNZqkovYgfnOMpwBFyoui4MpiX-nE51mTtUijSQu6_Twz4nyXVkt0WjJixgSaU0UFeWF8"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<p class="text-white text-xs uppercase tracking-widest font-bold">Details</p>
</div>
</div>
<div class="flex justify-between items-center px-1">
<h4 class="font-headline font-bold text-lg">Muted Obsidian</h4>
<span class="bg-secondary-container px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-on-secondary-container">Twill Base</span>
</div>
</div>
{/* <!-- Swatch 3 --> */}
<div class="min-w-[280px] lg:min-w-0 snap-center">
<div class="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-500">
<img alt="Earth Tone Fabric" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" data-alt="Earthy terracotta rayon fabric layered" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHDQUpV1vcs2Vc9_Po5awTKaFzbEkdeKWRG4oQDGoKNKtOBp1kySBdMlDzdOzdyiAnwIrPrcl6VSdQ884ukDKHr7e4rEn0VaWY9merZp1UvgvqJ_S7ZsIz-m-ZfpHDRIrYL80MkWaj16OS3r7obNuWGu9AYob6B-YwnZpjMzndFrXLMwL7xto_KoxQi1S5d1bp8qNSGmhTwuAowFaJ8TpACMYIfwStvmBRoQHf3ETkaI5FTkAnRjs8LT1Hy13gPlga2pw8xeHwNsY"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<p class="text-white text-xs uppercase tracking-widest font-bold">Details</p>
</div>
</div>
<div class="flex justify-between items-center px-1">
<h4 class="font-headline font-bold text-lg">Dusted Earth</h4>
<span class="bg-secondary-container px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-on-secondary-container">Crepe Weave</span>
</div>
</div>
</div>
</section>
{/* <!-- Fabric Detail Grid (Bento Style) --> */}
<section class="px-6 lg:px-12 mb-24 lg:mb-32">
<div class="mb-8">
<p class="font-label text-xs uppercase tracking-widest text-primary font-bold mb-1">Technical Artistry</p>
<h3 class="font-headline text-3xl md:text-4xl font-bold">Fabric Architecture</h3>
</div>
<div class="grid grid-cols-2 lg:grid-cols-3 gap-6">
<div class="col-span-2 aspect-video lg:aspect-auto lg:h-full rounded-xl bg-surface-container-low overflow-hidden relative shadow-md">
<img alt="Macro weave" class="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105" data-alt="Macro photography of fine textile fibers and weave" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpuE1Dswl3n6PmLj1-Ay-ljR0vG6Zmhgk8LDsHSQh58T6BRdjfJCVHVaokYH_REIy1DlmrGCurDHHhHxpcfWdGDrckO6RfYlfG9CGKpz-bXgJeGGNY1f50AzQvQl_Wf6WE1DicSNBAVmTX59v518jv0lakL-au7w40F0gChfIWPd-6DhqduIVYwCusKgOd04gSV7t0AIBRuoUdspu_FAjgFmn8BB2R8-mkwQ5AClt9GIdXTQvhrUT-gDRv70x7jbupEGQdzvL2CSI"/>
<div class="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent">
<p class="font-headline text-xl md:text-2xl font-bold">Micro-Pore Breathability</p>
<p class="text-sm text-on-surface-variant font-body max-w-md">Engineered with a molecular structure that allows for unprecedented moisture-wicking and thermal regulation.</p>
</div>
</div>
<div class="col-span-1 flex flex-col gap-6">
<div class="aspect-square lg:flex-1 rounded-xl bg-surface-container overflow-hidden shadow-md">
<img alt="Detailed weave" class="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" data-alt="Abstract close-up of folded soft fabric" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyQbPvbErvczoIt_uEK639ZoDW6ErMPq-5m1vhi7q2iONQ3LM-NLPmUvzxBKYSVNvYn-iUf3KCYqBEO0SrpGpXZWRhfiWyKdH4t750c0Gqe1ABelsTDIjtWwYCqWHux0CyJQMd7WXXhdOrZRoJ-bXkckgRXEU5Acmt6UIURAOd6_PasHtgmXTXrCU_vcTsQnV5mYQKSXWE_xk7sg61KUSvh6mnMnJiqaN543v1SJmLEOkioWnqynZlrC1SIJjpj7XwogAufXLMpBs"/>
</div>
<div class="aspect-square lg:flex-1 rounded-xl bg-surface-container-high overflow-hidden flex flex-col items-center justify-center p-8 text-center shadow-md">
<span class="material-symbols-outlined text-5xl text-primary mb-4" data-icon="opacity">opacity</span>
<p class="font-headline text-lg font-bold">Lustrous Sheen</p>
<p class="text-xs text-on-surface-variant mt-2 leading-relaxed">A subtle, multidimensional glow that mimics the complex reflection of natural silk without the fragility.</p>
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