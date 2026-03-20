import React from 'react'

function Product() {
  return (
   <>
   
   
   <main class="pt-20">
{/* <!-- Hero Section --> */}
<section class="relative h-[921px] w-full overflow-hidden bg-surface-container">
<div class="absolute inset-0">
<img alt="Fluid rayon fabric" class="w-full h-full object-cover opacity-90 mix-blend-multiply" data-alt="Close up of draped ivory rayon fabric folds" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjusaUfWVAc5rGPlFsbs7OvykgNz6Zzgj4mM9lOZzaSIlEenq42Uw_TNZPGggnYPG0ts4DRHrQZuvlAGcvEZ4PnWMG-ZsU2CH-HXZJnr-ztPmYRIDtN3qCcTeXDEVmpVRObCEk8K_W5jyG0JcFe_8XpIBZQQ3-TVn992GbLrrxe5FHvXQU1se_4NwGM9Vk4eoQ6bo0o8THTGkDRHrJp6ggrivE105Ti4pAHe-EZx1qHjN_NqI3qX0lRzPaqd0-8WcRs2wN1xzmS-A"/>
<div class="absolute inset-0 bg-gradient-to-r from-surface/40 to-transparent"></div>
</div>
<div class="relative h-full flex flex-col justify-center px-12 md:px-24 max-w-[1920px] mx-auto">
<span class="text-tertiary font-label tracking-[0.3em] uppercase text-xs mb-6">The Essence of Rayon</span>
<h1 class="font-headline text-6xl md:text-8xl text-on-surface max-w-4xl leading-[1.1] tracking-tight mb-8">
                    The Art of <br/><i class="font-normal italic">Fluidity</i>: Our Rayon Collection
                </h1>
<p class="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed mb-10">
                    Engineered from wood pulp, our Rayon is a testament to sustainable luxury. A fabric that mimics the silken drape of nature while maintaining a breathability that defies the seasons.
                </p>
<div class="flex gap-4">
<button class="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 rounded-xl font-label text-sm uppercase tracking-widest hover:shadow-xl transition-all duration-500">
                        Explore Collection
                    </button>
</div>
</div>
</section>
{/* <!-- Product Grid: Fabric Finishes --> */}
<section class="px-12 md:px-24 py-32 max-w-[1920px] mx-auto">
<div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div class="max-w-2xl">
<h2 class="font-headline text-4xl text-on-surface mb-6">Mastered Finishes</h2>
<p class="text-on-surface-variant leading-relaxed">Each finish is meticulously processed to achieve a specific tactile signature, from the radiant glow of satin to the understated elegance of matte.</p>
</div>
<div class="text-right">
<span class="font-label text-xs uppercase tracking-[0.2em] text-outline">01 / Fabric Series</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
{/* <!-- Satin Finish --> */}
<div class="group flex flex-col">
<div class="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low mb-8 relative">
<img alt="Satin finish fabric" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Lustrous silver rayon satin fabric close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2f9yt0VTpcsp-OL7gdd4k2UTwifUqdderdDuEFO-HxIGhvGElc-f1SGp8rtQcWfiCTg7wakOiPkk8TrSCnsakVdXXg8zD4j8_rBbXz0tcRRAeueEv7KAMBYPnBdApl3VVS-QC7MrDyhym-SylW6GZ0kidDlmpbPLLexzy7-vz8t1la05x2oufbt2t4hwmr5OYkCF7OrwDX3rwRD4zA7z4nJt37-QQPWrzGOZ-bvqeMijud0al3Q02B2Z89aFenG8DZxIywkIitFM"/>
<div class="absolute top-6 right-6">
<span class="bg-surface-container-lowest/80 backdrop-blur px-4 py-1 rounded-full text-[10px] uppercase tracking-widest text-on-surface">Radiant</span>
</div>
</div>
<h3 class="font-headline text-2xl mb-2">Rayon Satin</h3>
<div class="flex items-center gap-3 mb-6">
<span class="text-xs font-label uppercase text-outline">Glossy Texture</span>
<span class="w-1 h-1 rounded-full bg-outline-variant"></span>
<span class="text-xs font-label uppercase text-outline">Ultra Lightweight</span>
</div>
<button class="w-full border border-outline-variant/30 py-4 rounded-xl font-label text-xs uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-all duration-500 flex items-center justify-center gap-2 group/btn">
                        Feel the Fabric
                        <span class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
{/* <!-- Matte Finish --> */}
<div class="group flex flex-col md:translate-y-12">
<div class="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low mb-8 relative">
<img alt="Matte finish fabric" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Muted charcoal matte rayon fabric swatch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLSX5PYdhOTA4wJqQqLM2TlWxY5RyWQh2PEUymxby3IBRgAw61M9Nwr9Hz6Jec5gTHDqonP5S5MFK8mYQ4x70cCc6F33qpQi38pjhCojysMI4S0da8On0DYAxFy7SOeUh5ms9NsuAuBQR9SAGm76sbOgfKPlHEEPW8F5Yjb5QDnQp69hM3vQpN6kSWCTWiu-Q8lO4mmJVxNmt9V8BWkewcvzdO3hfEefS_pdUPXPhVMSA1vsPTDaiZFzXChlzF6CAoH2-TXT-Fhmc"/>
<div class="absolute top-6 right-6">
<span class="bg-surface-container-lowest/80 backdrop-blur px-4 py-1 rounded-full text-[10px] uppercase tracking-widest text-on-surface">Timeless</span>
</div>
</div>
<h3 class="font-headline text-2xl mb-2">Rayon Matte</h3>
<div class="flex items-center gap-3 mb-6">
<span class="text-xs font-label uppercase text-outline">Matte Texture</span>
<span class="w-1 h-1 rounded-full bg-outline-variant"></span>
<span class="text-xs font-label uppercase text-outline">Breathable Base</span>
</div>
<button class="w-full border border-outline-variant/30 py-4 rounded-xl font-label text-xs uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-all duration-500 flex items-center justify-center gap-2 group/btn">
                        Feel the Fabric
                        <span class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
{/* <!-- Twill Finish --> */}
<div class="group flex flex-col">
<div class="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low mb-8 relative">
<img alt="Twill finish fabric" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Structured tan rayon twill fabric texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgQyYE9l3PKWc_Kw1y-3aL40mhXpCNAlVSJDWktPj2epi9u2bSorCqjYv_bXb_fIEpdrX9ayh3Qod8Z-Y9CRc1vBzkY0r91SZtiUbswYsgX0bWmqjvg037gxLwjeHV1fQOnjgAxXW9_9ore8RGZyLXDBQIMtMAZ2oPkhnIJkh3GSWq1tKnpZ_-FR7k1cUvJiy6ZsCBQzkL6T4mEEHo8dANe5sRLqfeoTlP44oJ6_wUIAyONo-f0V0Ps84fAk-eo-XZLH1LgglSe78"/>
<div class="absolute top-6 right-6">
<span class="bg-surface-container-lowest/80 backdrop-blur px-4 py-1 rounded-full text-[10px] uppercase tracking-widest text-on-surface">Architectural</span>
</div>
</div>
<h3 class="font-headline text-2xl mb-2">Rayon Twill</h3>
<div class="flex items-center gap-3 mb-6">
<span class="text-xs font-label uppercase text-outline">Diagonal Weave</span>
<span class="w-1 h-1 rounded-full bg-outline-variant"></span>
<span class="text-xs font-label uppercase text-outline">Mid Weight</span>
</div>
<button class="w-full border border-outline-variant/30 py-4 rounded-xl font-label text-xs uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-all duration-500 flex items-center justify-center gap-2 group/btn">
                        Feel the Fabric
                        <span class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</section>
{/* <!-- Seasonal Palette Section --> */}
<section class="bg-surface-container-low py-32 mt-12">
<div class="px-12 md:px-24 max-w-[1920px] mx-auto">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div>
<span class="text-tertiary font-label tracking-[0.3em] uppercase text-xs mb-6 block">Color Narrative</span>
<h2 class="font-headline text-5xl text-on-surface mb-8 leading-tight">The Seasonal Palette</h2>
<p class="text-on-surface-variant text-lg leading-relaxed mb-12">
                            Inspired by the transition of light across natural landscapes, our curated palette for the season brings a sense of calm and permanence to your wardrobe.
                        </p>
<div class="grid grid-cols-2 gap-x-12 gap-y-16">
<div class="space-y-4">
<div class="w-full aspect-square rounded-full bg-[#f0f4f8] shadow-inner" title="Morning Mist"></div>
<div>
<h4 class="font-headline text-xl">Morning Mist</h4>
<p class="text-xs font-label text-outline uppercase tracking-wider">A breath of pale azure</p>
</div>
</div>
<div class="space-y-4">
<div class="w-full aspect-square rounded-full bg-[#ede1d4] shadow-inner" title="Gilded Sand"></div>
<div>
<h4 class="font-headline text-xl">Gilded Sand</h4>
<p class="text-xs font-label text-outline uppercase tracking-wider">Warm midday neutrals</p>
</div>
</div>
<div class="space-y-4">
<div class="w-full aspect-square rounded-full bg-[#2c3e50] shadow-inner" title="Dusk Indigo"></div>
<div>
<h4 class="font-headline text-xl">Dusk Indigo</h4>
<p class="text-xs font-label text-outline uppercase tracking-wider">The depth of twilight</p>
</div>
</div>
<div class="space-y-4">
<div class="w-full aspect-square rounded-full bg-[#4a3728] shadow-inner" title="Oak Bark"></div>
<div>
<h4 class="font-headline text-xl">Oak Bark</h4>
<p class="text-xs font-label text-outline uppercase tracking-wider">Grounded earth tones</p>
</div>
</div>
</div>
</div>
<div class="relative">
<div class="aspect-[4/5] overflow-hidden rounded-2xl relative z-10">
<img alt="Model wearing rayon" class="w-full h-full object-cover" data-alt="Modern draped garment in neutral rayon fabric" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBc0VDcksVZVVfNhujfELWl4Mg-rZnSqrTfEL1XZCx2a9e3J5sBdkn_0TPPo78_99OUIbv4LwSCyX_qhKXiw2jRT3IbagkqJhge2I3AENHqaGVR4sz35DS7n3zrkBtffsBOfrA_pkQHFqWmrNMTU33WzUGFYQwtUpieDx--yETAf5kSt1UpE8isxS5s8KgA-jtXgeC4q-CYlCYwOUIwitEl3mTD9OyAMFRRTtD05o2r9mn-qFTCYWZghAhKahY9P7vRCEeRm_5bW8"/>
</div>
{/* <!-- Asymmetric Decorative Element --> */}
<div class="absolute -bottom-12 -left-12 w-64 h-64 bg-surface-container-highest rounded-2xl -z-0"></div>
<div class="absolute top-1/2 -right-8 transform -translate-y-1/2 flex flex-col gap-2 z-20">
<span class="[writing-mode:vertical-rl] text-[10px] font-label uppercase tracking-[0.5em] text-outline-variant">Natural Origin</span>
<div class="w-[1px] h-20 bg-outline-variant/30 mx-auto"></div>
</div>
</div>
</div>
</div>
</section>
{/* <!-- Fabric Swatch Carousel (Signature Component) --> */}
<section class="py-32 px-12 md:px-24 max-w-[1920px] mx-auto overflow-hidden">
<h2 class="font-headline text-3xl text-center mb-20 italic">Curating the Drape</h2>
<div class="flex flex-nowrap gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar">
<div class="flex-none w-80 snap-center group">
<div class="aspect-[4/5] rounded-xl overflow-hidden mb-6">
<img alt="Fabric swatch" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Light blue rayon fabric texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3np7Gde442g0hbIRHcYAU4npxnbWQndOqMM4vkY4qkEF0CeaQY1tYFuHvXKcOwp4-EzkAF2mnKmpQDmgxr2AVjQx_GkC1xa_-AMOHWZ0NdX5MYpLrwxOCuI8xZISywG15-k5YISBbphvCNKXteZyg0NumzuNk3ewFcigAt9HkAnk1DxLKLV1j-wDknDLmDhZgQoHiG3zJZEKLxTxDYu7ahKivbE4V2t9ZBaU5smNxC73w4u4IJq3vDnxsHp32uRF1Y6nQnkVGvaU"/>
</div>
<span class="font-label text-xs uppercase tracking-widest text-outline">Series A // 01</span>
</div>
<div class="flex-none w-80 snap-center group translate-y-8">
<div class="aspect-[4/5] rounded-xl overflow-hidden mb-6">
<img alt="Fabric swatch" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Rich terracotta rayon fabric close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArxfS2Oy4abbWO8rriNXqmkcC66R0GXZgL1Y4MrOcWoPeRiO3yAdzwfCMMVU82R-levxYeeAGFRDX8VRPUzXBaHBFThdOnLZ_f5m4H6YWr6jzGlPARhrDXAeWX0kMiMYBB3I3kXjwVKTtd1udv4eTGY2ZmoP8U1VR-u759A0DGqR7ZbocoxLN19iuX4s38VXFNqIB94HJKfiTjPX9n21Y8pbTGIPnPnNhVB74SBg7Ow9inUQjRNTg4XhprFFANBiLP3L5P-RND9UM"/>
</div>
<span class="font-label text-xs uppercase tracking-widest text-outline">Series A // 02</span>
</div>
<div class="flex-none w-80 snap-center group">
<div class="aspect-[4/5] rounded-xl overflow-hidden mb-6">
<img alt="Fabric swatch" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Minimalist beige rayon textile fold" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0qn8aC9SXsDSW9WOc1xy3LDoRU3_DpQa6j5-O8xbAQsRy-W-r3gkaKic6H423bZEkOc-mQ89fOw6mDnHGEzrUPKT_MR2R8wMkixYYgy_hXNAWdnoSGbic-0C9SKMQTfiA8IUB5EA97AsoS_k4Sn3coe63qdFTdB1LQnAnOJ0mrTXpVnr3c09kLDQvoZj5222PXNG1ZlNuvnTvMfXSGbdu5QSJq10LI4p6NoBz3_87REJzdl5biILyZRRRU7jcqA0_1Z7gj8qh5cg"/>
</div>
<span class="font-label text-xs uppercase tracking-widest text-outline">Series A // 03</span>
</div>
<div class="flex-none w-80 snap-center group translate-y-8">
<div class="aspect-[4/5] rounded-xl overflow-hidden mb-6">
<img alt="Fabric swatch" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Forest green rayon satin shimmer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF3o7fjXvEaUVBMIC4etTC5zWKt1b53PhPv-3Sm3f8bHV1UE6Nk_0kWPhQioO43v1YWA9LffDqhD7Lg_LCKdR6CZEUoRPOKdpdnuUvoYwhXFXNtO1o5N0oZFoI2adjZ6j4gGGPQJO9PJeywz-unjUqgclO5lPEnH1Ba1a5ZKIpysFY2GyZo23AfYhzWbVC9PZDP7yYFN9e7EMxuvcGI5Gaimtr2B0DB5WyYZXnpMAQWB3BPlQw-CZ3tdgaZtDynjGSlNsaq_eLtTs"/>
</div>
<span class="font-label text-xs uppercase tracking-widest text-outline">Series A // 04</span>
</div>
<div class="flex-none w-80 snap-center group">
<div class="aspect-[4/5] rounded-xl overflow-hidden mb-6">
<img alt="Fabric swatch" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Deep black matte rayon fabric" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHyVbt9QVPiQ7d2BF8IblXvsqEmBNzsUhb0kVbyqu-SZqNJ9Jgf2pjLBeuCzKWlXOx_F3dZgqsDWHHp1poD-lR223TcPh0zCFBuaadHCMJaKkCm25TwO3Mi7tkc_qhTJYA_ZPZ815mz40M45d8_iE_aYjxOFdC42yODUZZFFdOFe8xYnn4L_dm7X6katg3ZBx4BO31L-hRc6i1o2qMPYTBQ_Dbdo6kFgxwKdmbexlapOtSq5KLnh6B1mUcwj2Q12B8hm5m9hcdNjE"/>
</div>
<span class="font-label text-xs uppercase tracking-widest text-outline">Series A // 05</span>
</div>
</div>
</section>
</main>
   
   
   </>
  )
}

export default Product