import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Quotation() {


    return (

        <main class="relative min-h-screen pt-32 pb-24 overflow-hidden">
            {/* <!-- Background Fabric Layer --> */}
            <div class="absolute inset-0 -z-10 opacity-30">
                <img class="w-full h-full object-cover" data-alt="High-resolution close-up of ivory-colored flowing rayon fabric" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWt4TjFpw-ES1YNXJ3VBDjE5EgjLmw21RzQ7GAUro8FGp9UW5bw1C1DzOPSpdXUD2A037XbXLGsfReEsE_XPN2Gw2yAVnE91bEYSN6Titi6acVIW4RN7SenJWh-pgvW38voVZeXcooF0382JAW33EL9mzfVJfdpIEH7E4G3pgGxP_wbzRAMlPzCIg665KANmog6eNV3mqSFAb-6-aGIwfmlU-TUODJ_N3_2mlMaBXobr4v8S14KCR8WrotEoQq3wkBlehN4nqqTns" />
            </div>
            {/* <!-- Content Section --> */}
            <div class="max-w-7xl mx-auto px-8 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* <!-- Left Side: Editorial Context --> */}
                <div class="lg:col-span-5 space-y-12">
                    <div class="space-y-6">
                        <h1 class="font-headline font-light text-7xl md:text-8xl tracking-tight text-on-surface leading-[0.9]">
                            Bespoke <br /> <span class="italic text-primary">Quotation</span>
                        </h1>
                        <div class="h-1 w-24 bg-primary-container"></div>
                    </div>
                    <p class="font-body text-xl md:text-2xl font-light text-on-surface-variant leading-relaxed">
                        At Parekh Textile, we believe every vision deserves a custom weave. Our commitment to quality transcends the ordinary, ensuring that each fiber is curated for your specific architectural or fashion needs.
                    </p>
                    <div class="space-y-8 pt-8">
                        <div class="flex items-start gap-6">
                            <div class="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                                <span class="material-symbols-outlined text-primary">eco</span>
                            </div>
                            <div>
                                <h3 class="font-headline text-xl mb-1">Sustainable Origin</h3>
                                <p class="text-sm text-on-surface-variant">Traceable cellulose fibers sourced from responsibly managed forests.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-6">
                            <span class="material-symbols-outlined text-primary">eco</span>
                            <div>
                                <h3 class="font-headline text-xl mb-1">Artisanal Precision</h3>
                                <p class="text-sm text-on-surface-variant">Advanced loom technology meeting master craftsmanship.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Right Side: The Form Card --> */}
                <div class="lg:col-span-7">
                    <div class="bg-surface-container-lowest/60 backdrop-blur-2xl rounded-xl p-10 md:p-14 shadow-[0_12px_40px_0_rgba(28,28,25,0.04)] border border-white/20">
                        <form action="#" class="space-y-10">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                                {/* <!-- Contact Person --> */}
                                <div class="group">
                                    <label class="block font-label text-xs uppercase tracking-widest text-outline mb-3 group-focus-within:text-primary transition-colors">Contact Person</label>
                                    <input class="w-full bg-surface-container/40 border-none rounded-lg p-4 font-body focus:ring-0 focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant" placeholder="Julian Vane" type="text" />
                                </div>
                                {/* <!-- Business Email --> */}
                                <div class="group">
                                    <label class="block font-label text-xs uppercase tracking-widest text-outline mb-3 group-focus-within:text-primary transition-colors">Business Email</label>
                                    <input class="w-full bg-surface-container/40 border-none rounded-lg p-4 font-body focus:ring-0 focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant" placeholder="julian@atelier.com" type="email" />
                                </div>
                                {/* <!-- Select Collection --> */}
                                <div class="group">
                                    <label class="block font-label text-xs uppercase tracking-widest text-outline mb-3 group-focus-within:text-primary transition-colors">Select Collection</label>
                                    <select class="w-full bg-surface-container/40 border-none rounded-lg p-4 font-body focus:ring-0 focus:bg-surface-container-lowest transition-all appearance-none cursor-pointer">
                                        <option>Luminous Weave</option>
                                        <option>Silk-Touch Rayon</option>
                                        <option>Breathe-Easy Modal</option>
                                        <option>Heritage Viscose</option>
                                    </select>
                                </div>
                                {/* <!-- Estimated Volume --> */}
                                <div class="group">
                                    <label class="block font-label text-xs uppercase tracking-widest text-outline mb-3 group-focus-within:text-primary transition-colors">Estimated Volume</label>
                                    <input class="w-full bg-surface-container/40 border-none rounded-lg p-4 font-body focus:ring-0 focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant" placeholder="e.g. 5,000 meters" type="text" />
                                </div>
                                {/* <!-- Timeline --> */}
                                <div class="md:col-span-2 group">
                                    <label class="block font-label text-xs uppercase tracking-widest text-outline mb-3 group-focus-within:text-primary transition-colors">Project Timeline</label>
                                    <div class="flex flex-wrap gap-4">
                                        <label class="flex-1 cursor-pointer">
                                            <input class="hidden peer" name="timeline" type="radio" />
                                            <div class="text-center p-3 rounded-full border border-outline-variant/30 peer-checked:bg-secondary-fixed peer-checked:text-on-secondary-fixed text-sm transition-all hover:bg-surface-container">Immediate</div>
                                        </label>
                                        <label class="flex-1 cursor-pointer">
                                            <input class="hidden peer" name="timeline" type="radio" />
                                            <div class="text-center p-3 rounded-full border border-outline-variant/30 peer-checked:bg-secondary-fixed peer-checked:text-on-secondary-fixed text-sm transition-all hover:bg-surface-container">3-6 Months</div>
                                        </label>
                                        <label class="flex-1 cursor-pointer">
                                            <input class="hidden peer" name="timeline" type="radio" />
                                            <div class="text-center p-3 rounded-full border border-outline-variant/30 peer-checked:bg-secondary-fixed peer-checked:text-on-secondary-fixed text-sm transition-all hover:bg-surface-container">6+ Months</div>
                                        </label>
                                    </div>
                                </div>
                                {/* <!-- Description --> */}
                                <div class="md:col-span-2 group">
                                    <label class="block font-label text-xs uppercase tracking-widest text-outline mb-3 group-focus-within:text-primary transition-colors">Brief Description of Needs</label>
                                    <textarea class="w-full bg-surface-container/40 border-none rounded-lg p-4 font-body focus:ring-0 focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant resize-none" placeholder="Tell us about your specific color palettes, weight requirements, or finishing preferences..." rows="4"></textarea>
                                </div>
                            </div>
                            {/* <!-- Submit CTA --> */}
                            <div class="pt-6">
                                <button class="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-label text-sm uppercase tracking-[0.2em] font-bold shadow-xl hover:shadow-2xl active:scale-[0.98] transition-all flex items-center justify-center gap-3" type="submit">
                                    Request Estimate
                                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Quotation;