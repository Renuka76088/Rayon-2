import React from 'react'

function Blog() {
  return (
    <>
    <main class="pt-32 pb-24">
{/* <!-- Hero Section: Featured Post --> */}
<section class="px-8 md:px-24 mb-32 max-w-screen-2xl mx-auto">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div class="lg:col-span-7 relative group">
<div class="overflow-hidden rounded-xl bg-surface-container">
<img alt="Draped Rayon Fabric" class="w-full aspect-[4/5] object-cover scale-100 group-hover:scale-105 transition-transform duration-1000" data-alt="Flowing draped cream colored rayon textile with soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT5cAlr241vsF6fnKuXMiQNBJ-G8ozPl0RBoTwjAObCJd1ovPz9Onf0PIO2fwuPx27XG7kqkb9QLbINoMUZ46gtpBIhs-iv2RqUQhtLiQT3vntlbN-WaYMkqzrcUW9ARQnvSat7eD26k97fx2n4-lqH5AkKTEts0Kgh5q3b_5reNG34Xw43CY-35jzH1G_SsGWYIZeQNHUmn_hYfXDBJVAwJvLPWhJR8u8GoeJwZck_akZpPKXC71hZGbo48HnzLsFYGJuIssNwuk"/>
</div>
<div class="absolute -bottom-8 -right-8 hidden lg:block bg-surface-container-lowest p-8 rounded-xl editorial-shadow max-w-xs">
<span class="font-label text-xs tracking-widest uppercase text-tertiary mb-2 block">Featured Narrative</span>
<p class="font-headline text-lg italic leading-relaxed text-on-surface">"The way light dances on our Twilight Rayon mimics the movement of river water at dusk."</p>
</div>
</div>
<div class="lg:col-span-5 lg:pl-12">
<h1 class="font-headline text-5xl md:text-7xl leading-tight text-on-surface mb-8 tracking-tight">The Loom &amp; The Light</h1>
<div class="space-y-6">
<div class="flex items-center gap-4">
<span class="w-12 h-[1px] bg-outline-variant"></span>
<span class="font-label text-xs tracking-widest uppercase text-outline">Editorial — Oct 2024</span>
</div>
<p class="text-lg leading-relaxed text-on-surface-variant font-light">Explore the intricate relationship between high-twist rayon yarns and the soft morning luminescence of our weaving studio. A poetic inquiry into why texture defines the modern silhouette.</p>
<button class="group flex items-center gap-4 py-4 px-8 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-label text-sm uppercase tracking-widest transition-all hover:opacity-90 active:scale-95">
                            Read the Story
                            <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
{/* <!-- Fabric Stories Grid --> */}
<section class="px-8 md:px-24 mb-32 max-w-screen-2xl mx-auto">
<div class="flex justify-between items-end mb-16">
<div>
<h2 class="font-headline text-4xl text-on-surface mb-2">Fabric Stories</h2>
<p class="font-label text-sm uppercase tracking-widest text-outline">The intersection of craft and comfort</p>
</div>
<div class="hidden md:flex gap-4">
<button class="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-outline hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button class="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-outline hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
{/* <!-- Story 1 --> */}
<article class="group cursor-pointer">
<div class="relative aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-surface-container-low">
<img alt="Sustainable Sourcing" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Close up of raw botanical fibers used for rayon production" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGgeq15yPPDveiBNkzbQF5-X2hdpDJUbCcjUcAPX5WMIigNmCmBTnDRGEZT_zJxJVAsVlMoStXDjHU6FWyhEilSbzKKOE01reT0rukZVbZ_sKI06guHMcKu3t6QhHGfVPHWhOew4ROvm1-j9tbGxByj_72V9QtL0kpevisFRCZEoSOEB-qPsTxmSDc2zc4JzMfmH-5BbE-DRoBUhIaLKxA928u1e5FCExZwze2BQpGjJBNUgZD9YziwRbDA6i8lb51zXF5tLo3duI"/>
<div class="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div class="flex items-center gap-3 mb-3">
<span class="px-3 py-1 bg-secondary-container rounded-full font-label text-[10px] uppercase tracking-widest text-on-secondary-container">Origins</span>
<span class="text-[10px] uppercase tracking-widest text-outline">04.10.24</span>
</div>
<h3 class="font-headline text-2xl text-on-surface group-hover:text-primary transition-colors">From Pulp to Poetry: Our Sustainable Sourcing</h3>
</article>
{/* <!-- Story 2 --> */}
<article class="group cursor-pointer mt-12 md:mt-24">
<div class="relative aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-surface-container-low">
<img alt="The Drape" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Silhouette of person in flowing rayon garment against window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx4WTEoa_EPqchpJ-FxeefUSu3ZEaZpxDXlu4lwymex9G31vZkKUI55QCGSRFIKEeADz7loQ0eS522BhDajsT0pkRobEkum-qcdApBbz0rPy-7C3yqfqPDF9bbnTY9GExUZxOl-FU2hxU6m8Np6CiAhvnJm_Pc75AF3Fi1576Wzpm7S_jEeNhCkFgPeLwyGW_fuLsbxETzdW_9WuEZoMQpLN-V_bRs00mZF5p9R2TH5mE65ks3bYAAiBkCdqXPi1b4e4wIprw30kI"/>
<div class="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div class="flex items-center gap-3 mb-3">
<span class="px-3 py-1 bg-secondary-container rounded-full font-label text-[10px] uppercase tracking-widest text-on-secondary-container">Technique</span>
<span class="text-[10px] uppercase tracking-widest text-outline">28.09.24</span>
</div>
<h3 class="font-headline text-2xl text-on-surface group-hover:text-primary transition-colors">Gravity and Grace: Mastering the Perfect Drape</h3>
</article>
{/* <!-- Story 3 --> */}
<article class="group cursor-pointer">
<div class="relative aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-surface-container-low">
<img alt="Color Theory" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Abstract watercolor dyes mixing in water" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhsjWEIRbrLmKUcZxqkEqhBvJcTziNgXbr3zFfxCkaDzqqgPGJ_9oAkDCDJ7taqTwGPYSqInLERauau1yj6JjDPeNzNeSXqax_WItF8ApN25FEchqhHKIg5JgipQNanLTVKZSbJo0YONhugb5Gpql4BchAybz3M0TWrC-UjF6GLauu0EBY3DqAcLzgp_8vduE9Dod5H27wRByNVOjUNgfQaovPoGTDhBvk5zxzQI2SYEnN8Ip6hmczIwNFK9bs76YoiZXCjkXXHLk"/>
<div class="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div class="flex items-center gap-3 mb-3">
<span class="px-3 py-1 bg-secondary-container rounded-full font-label text-[10px] uppercase tracking-widest text-on-secondary-container">Palette</span>
<span class="text-[10px] uppercase tracking-widest text-outline">15.09.24</span>
</div>
<h3 class="font-headline text-2xl text-on-surface group-hover:text-primary transition-colors">Whispering Pigments: Our Autumn Dye Process</h3>
</article>
</div>
</section>
{/* <!-- The Material Diary Section --> */}
<section class="bg-surface-container-low py-32">
<div class="px-8 md:px-24 max-w-screen-2xl mx-auto">
<div class="text-center mb-20">
<h2 class="font-headline text-4xl text-on-surface mb-4 italic">The Material Diary</h2>
<p class="font-body text-on-surface-variant max-w-lg mx-auto leading-relaxed">A tactile study of rayon's diverse personalities—from the crisp touch of morning sheets to the liquid gold of evening wear.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div class="md:col-span-2 space-y-8">
<div class="rounded-xl overflow-hidden aspect-video bg-surface-container">
<img alt="Macro Rayon" class="w-full h-full object-cover" data-alt="Ultra macro shot of textile fibers showing weave detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJbV-uXqUanS__KH2qvTAtGqFsg2yEOLdBk8eTa_6u6-H_1UCbvF-SHBdNmo8_E4zPQWiisCPDGbxVgRwRk0f3LH_CAJJG7iWcZQnYybv2VJYR2v49SUVzgXATbwZbB3vP8ZaaQW5uQC49AUhKUHHwQ3KtdPZC3044yuJak-QSKube5qh7mI2P0vH5UnQ0QQhnlfu6icIdGvbdQ7J9NN8QBdzyCNT6CRiwyI6DA5UQ6i3ImIQ6AlZkyLxKHL8bYqrVeu8buXJnQRk"/>
</div>
<div class="px-4">
<h4 class="font-headline text-xl mb-2">Structure &amp; Strength</h4>
<p class="text-sm text-on-surface-variant leading-relaxed">Observing the micro-geometry of our high-twist fibers under polarized light.</p>
</div>
</div>
<div class="space-y-8 md:mt-12">
<div class="rounded-xl overflow-hidden aspect-[4/5] bg-surface-container">
<img alt="Fabric Movement" class="w-full h-full object-cover" data-alt="Fabric blowing gently in a light breeze" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyG1q5mNvI-3zzMFAyZgqlJabLltf1s1HEwpsFPnRMM-gBxatewhebA-LELwsGmSBqs7JN_f69zDuceu7o07YX93gMDZSo806phBvodSlVxKmP7V_J_cdyrJm9KNxEtxoMlKlPKZl06gU9p_S9HKniNqjNqZfyKaPzuUct_saA5yw_3A0-U4NUO20LBpGx9dP4_5DWPWWNuUENC0nENY5IunuP-dl7_WAoSJYKh33fNcbWdcvt_8KDDoITZz_ej3jW2QkOkCZj6iE"/>
</div>
<div class="px-4">
<h4 class="font-headline text-xl mb-2">Breathable Ease</h4>
<p class="text-sm text-on-surface-variant leading-relaxed">Capturing the sheer airiness of open-weave rayon construction.</p>
</div>
</div>
<div class="space-y-8">
<div class="rounded-xl overflow-hidden aspect-[4/5] bg-surface-container">
<img alt="Handfeel" class="w-full h-full object-cover" data-alt="Hands touching a soft piece of silk-like textile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7KHM7wuTeju73EYwv3_Q1EJhdnWexZw2dySZ0mtFrM8H0vzqVO5QoluOp1eOMAReb13SAOhQI68llG-_Y_6Cr6UtdRvXW-_WQTaWbGlbVTT03UBhploZBJoVjNVfRzhTVPwcB5QXmaQcYzL_SWJYNmaa09nhqybHuePs62Uts_rRBx5LbPqeAsTeBu6P-DwityOH4kwRJKYnf6YiK4JKekb7QdRTgYFiaLhsNmt4GNbxegFZerr1ojAZjJIIqa4b28EcygfH6kZY"/>
</div>
<div class="px-4">
<h4 class="font-headline text-xl mb-2">The Handfeel</h4>
<p class="text-sm text-on-surface-variant leading-relaxed">Why the "cool touch" of rayon is unmatched in summer humidity.</p>
</div>
</div>
</div>
</div>
</section>
{/* <!-- Newsletter Section --> */}
<section class="px-8 md:px-24 py-32 max-w-screen-2xl mx-auto">
<div class="bg-surface-container-lowest rounded-xl p-12 md:p-24 text-center editorial-shadow relative overflow-hidden">
<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-container via-primary-container to-secondary-container"></div>
<h2 class="font-headline text-4xl md:text-5xl text-on-surface mb-6">Luminous Weave</h2>
<p class="font-body text-on-surface-variant mb-12 max-w-xl mx-auto text-lg leading-relaxed italic">Receive our monthly journal of fabric philosophy, aesthetic inspiration, and exclusive studio previews.</p>
<form class="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
<input class="flex-1 bg-surface-container border-none rounded-xl px-6 py-4 focus:ring-1 focus:ring-outline-variant transition-all font-body text-sm placeholder:text-outline/50" placeholder="Your email address" type="email"/>
<button class="bg-on-surface text-surface px-10 py-4 rounded-xl font-label text-xs uppercase tracking-widest hover:bg-primary transition-colors duration-300">
                        Subscribe
                    </button>
</form>
<p class="mt-8 text-[10px] uppercase tracking-[0.2em] text-outline/60">Gentle updates. No clutter. Pure elegance.</p>
</div>
</section>
</main>
    
    
    </>
  )
}

export default Blog