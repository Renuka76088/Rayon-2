
import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "Ethereal Wrap",
    category: "Signature Rayon",
    price: "Rs89",
    image: "https://img.freepik.com/premium-photo/examples-fabric-various-color-type_77684-19494.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    name: "Dawn Tunic",
    category: "Fluid Collection",
    price: "Rs120",
    image: "https://img.freepik.com/free-photo/line-hanging-textured-fabrics-different-colors-shades_181624-5610.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    name: "Mist Overshirt",
    category: "Lightweight Series",
    price: "Rs95",
    image: "https://img.freepik.com/premium-photo/examples-colorful-fabric-various-color-type_77684-76671.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
  }
];



const blogs = [
  {
    id: 1,
    date: "12 March 2026",
    title: "The Breathing Thread: Why Rayon is the Future of Sustainable Fashion",
    excerpt: "Explore how HC Parekh is revolutionizing textile comfort with eco-friendly beechwood fibers.",
    image: "https://img.freepik.com/premium-photo/needle-cotton-yarn-sewing-thread-fabric_53876-55101.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    tag: "Sustainability"
  },
  {
    id: 2,
    date: "05 March 2026",
    title: "Mastering the Drape: A Guide to Rayon Maintenance",
    excerpt: "Keep the fluid sheen of your garments alive with our expert care and handling tips.",
    image: "https://img.freepik.com/premium-photo/fabric-store-there-are-rolls-fabrics-different-colors-shelves-yarn-business-tailoring-clothes-bed-linen-made-natural-linen-cotton_678914-14974.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    tag: "Fabric Care"
  },
  {
    id: 3,
    date: "28 Feb 2026",
    title: "Summer 2026 Trends: Fluidity in Everyday Wear",
    excerpt: "From office to evening soirées, discover how rayon adapts to every movement of your life.",
    image: "https://img.freepik.com/premium-photo/stack-multi-colored-satin-fabric-blue-background-space-text_83196-1323.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    tag: "Trends"
  }
];

export default function Home() {
  
  return (

    <>
    <section className="relative h-screen flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Fluid Rayon Texture"
          className="w-full h-full object-cover opacity-60 mix-blend-multiply"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW8T9MkOzK0370fL0eP-mbSo5mnexlk4NiCrJk0P4l2TTAKggq39a7ZZP5F7RimIHNmO3SCYyXWPYYDfw0W7l4bPtT4XIDzBTDNxynPZQ_ne-HzTleEU4aUuVYXs-bqLX3qJozm5Ag81JTO7p9WCHL1PuFWO_PIckIunIxXa7AYJK-3GQ6jqzQm8gQY7ZT8gST9Uu3pfVkRYur5tYsh3dn37eLL466N_jAm_0CEqgqv2QG2fkstuPrdwEYf7kMgNK4dkO9Myln8rc"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-surface" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <div className="inline-block mb-6 px-4 py-1 rounded-full bg-secondary-container/50 backdrop-blur-sm">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-tertiary">
            Summer 2024 Collection
          </span>
        </div>

        <h2 className="font-headline text-5xl md:text-8xl lg:text-9xl mb-8 tracking-tighter text-on-surface leading-[0.9]">
          The Fluidity <br />
          <span className="italic font-light text-primary">of Light</span>
        </h2>

        <p className="font-body text-lg md:text-xl text-primary max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Experience the softest touch of pure rayon. A collection designed to move with you, capturing the essence of air and the sheen of dawn.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="px-10 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-medium tracking-wide shadow-lg scale-95 active:scale-90 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            Explore the Collection
          </button>
          <button className="px-10 py-5 text-primary rounded-xl font-medium tracking-wide border border-outline-variant/30 hover:bg-surface-container-low transition-all duration-300">
            View Editorial
          </button>
        </div>
      </div>

      {/* Floating Quote (desktop only) */}
      <div className="absolute bottom-24 right-12 hidden lg:block max-w-xs z-20">
        <div className="bg-surface-container-lowest/30 backdrop-blur-xl p-8 rounded-xl shadow-[0_12px_40px_0_rgba(28,28,25,0.04)]">
          <p className="font-headline italic text-2xl text-tertiary mb-2">"Pure Indulgence"</p>
          <p className="font-body text-xs uppercase tracking-widest text-on-surface/60">
            Crafted from sustainable beechwood fibers.
          </p>
        </div>
      </div>

      {/* Decorative Swatch */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 hidden xl:block w-48 h-96 z-10">
        <div className="w-full h-full bg-surface-container-high/40 backdrop-blur-md rounded-full transform -rotate-12 border border-outline-variant/10" />
        <img
          alt="Fabric Swatch"
          className="absolute top-12 left-8 w-40 h-64 object-cover rounded-xl shadow-2xl transform rotate-6"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfQGnfkL9cIu2VdJ4S2xLnntXP0K9T-3BCir4CdS8ozMI4chRDtCbu1paHR2Z8Fre7N30cZgzRkje-TArlvyXUadxD19X6a4UFidaLBR9JTNGwyA7ZBhf7RpNXS-EGj6VwJvEc2kDtb57MBRY2og4NM7E9mCUalddTAXGRhC_B3J5g1JIY0hd-NbdDJ7Rk_SZsZi5TBCcfV9Rf1QpXKS8PkkfBO5kQ-goPGZyniYPdfPNh6dj4L6dVWwgl_SyFStUfSQ0Y94D4E0M"
        />
      </div>
    </section>

    <section className="relative py-24 bg-surface overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-container/10 -skew-x-12 translate-x-1/2 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual Storytelling */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://img.freepik.com/premium-photo/crumpled-linen-cloth-texture-wrinkled-textile-yellow_317399-461.jpg?w=1060" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-8 -right-8 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block border border-outline-variant/20">
                <p className="text-primary font-headline italic text-3xl mb-1">100%</p>
                <p className="text-xs uppercase tracking-tighter text-on-surface/70 font-medium">
                  Sustainable <br /> Organic Rayon
                </p>
              </div>
            </div>
            
            {/* Small Floating Image */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border-8 border-surface overflow-hidden shadow-lg hidden xl:block">
               <img 
                src="https://img.freepik.com/premium-photo/abstract-white-satin-silky-cloth-background-fabric-textile-drape-with-crease-wavy-folds-with-soft-waves-waving-wind_44622-983.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80" 
                alt="Texture Detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col space-y-8">
            <div>
              <span className="text-tertiary text-xs uppercase tracking-[0.4em] font-semibold mb-4 block">
                Our Heritage
              </span>
              <h2 className="text-5xl md:text-6xl font-headline text-on-surface leading-tight tracking-tighter">
                Woven with <br /> 
                <span className="italic font-light text-primary">Purpose & Passion</span>
              </h2>
            </div>

            <p className="font-body text-lg text-on-surface/80 leading-relaxed max-w-xl">
       
  We don’t just weave fabric; we craft an experience. Our journey began with 
  a simple vision: to harmonize the natural softness of rayon with 
  contemporary design. Every thread is meticulously curated to ensure you 
  feel the perfect blend of effortless comfort and timeless elegance.

            </p>

            <div className="grid grid-cols-2 gap-8 py-6 border-y border-outline-variant/30">
              <div>
                <h4 className="font-headline text-xl text-primary mb-2">Sustainable</h4>
                <p className="text-sm text-on-surface/60 leading-snug">Eco-friendly processes jo nature aur fabric dono ka khayal rakhte hain.</p>
              </div>
              <div>
                <h4 className="font-headline text-xl text-primary mb-2">Artisanal</h4>
                <p className="text-sm text-on-surface/60 leading-snug">Expert craftsmen dwara banayi gayi har ek detail mein finishing.</p>
              </div>
            </div>

            <div className="pt-4">
              <button className="group flex items-center gap-4 text-on-surface font-medium tracking-wide">
                <span className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500"></span>
                Learn Our Process
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="py-24 bg-surface text-on-surface">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-tertiary text-xs uppercase tracking-[0.4em] font-semibold mb-4 block">
              Curated Selection
            </span>
            <h2 className="text-5xl md:text-7xl font-headline leading-[0.9] tracking-tighter">
              The Art of <br />
              <span className="italic font-light text-primary underline decoration-outline-variant/30 underline-offset-8">Movement</span>
            </h2>
          </div>
          <p className="font-body text-on-surface/60 max-w-xs text-sm leading-relaxed mb-2">
            Each piece is engineered to capture light and shadow, mimicking the effortless drape of water on skin.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              {/* Image Container with Soft Shadow and Zoom */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary-container/20 border border-outline-variant/10">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Floating "Quick View" Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 backdrop-blur-[2px]">
                  <button className="bg-white/90 text-on-surface px-6 py-3 rounded-full text-sm font-medium tracking-wide shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Discover Piece
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-2xl font-headline tracking-tight text-on-surface">
                    {product.name}
                  </h3>
                </div>
                <span className="font-body text-lg font-light text-primary">
                  {product.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.4em] font-semibold text-on-surface hover:text-primary transition-colors">
            View All Pieces
            <div className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary transition-all">
               <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>


    <section className="py-24 bg-surface-container-lowest">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h6 className="text-tertiary text-xs uppercase tracking-[0.5em] font-semibold mb-6">
              HC Parekh Editorial
            </h6>
            <h2 className="text-5xl md:text-7xl font-headline tracking-tighter text-on-surface leading-[0.85]">
              Stories <span className="italic font-light text-primary">Behind the Weave</span>
            </h2>
          </div>
          <p className="font-body text-on-surface/50 text-sm max-w-[280px] leading-relaxed uppercase tracking-wider italic">
            Deep diving into the world of luxury textiles and mindful craftsmanship.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group flex flex-col"
            >
              {/* Image with Soft Blend Effect */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6 bg-secondary-container/10">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/5 rounded-full">
                  {post.tag}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-on-surface/40">
                  {post.date}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-headline leading-snug text-on-surface mb-4 group-hover:text-primary transition-colors">
                <a href="#">{post.title}</a>
              </h3>
              
              <p className="text-on-surface/60 font-body text-sm leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Read More link */}
              <div className="mt-auto">
                <a href="#" className="inline-block text-[11px] uppercase tracking-[0.3em] font-bold text-on-surface relative overflow-hidden group">
                  <span className="relative z-10">Read Journal</span>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-outline-variant transform translate-y-1 group-hover:translate-y-0 group-hover:bg-primary transition-all" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="mt-24 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
      </div>
    </section>

    <section className="relative w-full min-h-screen flex flex-col lg:flex-row bg-surface overflow-hidden">
      
      {/* Left Column: Visual & Info (50% Width) */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 bg-primary text-on-primary">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://img.freepik.com/free-photo/close-up-velvet-texture_23-2149305958.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80" 
            alt="Rayon Texture" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        <div className="relative z-10">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xs uppercase tracking-[0.5em] font-medium opacity-60 mb-8 block"
          >
            Connect With HC Parekh
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-headline tracking-tighter leading-[0.85] mb-12"
          >
            Bringing <br />
            <span className="italic font-light opacity-80 text-secondary-container">Fluidity</span> <br />
            to your vision.
          </motion.h2>

          <div className="space-y-10 max-w-md">
            <div className="group cursor-pointer">
              <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2 group-hover:text-secondary-container transition-colors">Corporate Headquarters</p>
              <p className="text-xl font-body leading-relaxed">
                Raipur . CG <br />
                The Textile Hub of Central India
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10">
              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2 group-hover:text-secondary-container transition-colors">Direct Dial</p>
                <p className="text-xl font-body">+91 1111 11111</p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2 group-hover:text-secondary-container transition-colors">Email Journal</p>
                <p className="text-xl font-body">info@hcparekh.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Floating Element */}
        <div className="absolute bottom-12 left-12 hidden xl:block">
           <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
              <svg width="40" height="40" viewBox="0 0 100 100" className="opacity-40">
                <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="1" />
              </svg>
           </div>
        </div>
      </div>

      {/* Right Column: Interactive Form (50% Width) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 bg-surface">
        <div className="max-w-xl w-full mx-auto lg:mx-0">
          <h3 className="text-3xl font-headline text-on-surface mb-12 tracking-tight">
            Send an Inquiry
          </h3>

          <form className="space-y-12">
            <div className="relative group">
              <input 
                type="text" 
                id="name"
                className="peer w-full bg-transparent border-b-2 border-outline-variant/30 py-4 outline-none focus:border-primary transition-all placeholder-transparent"
                placeholder="Full Name"
              />
              <label htmlFor="name" className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.2em] text-on-surface/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-primary">
                Full Name
              </label>
            </div>

            <div className="relative group">
              <input 
                type="email" 
                id="email"
                className="peer w-full bg-transparent border-b-2 border-outline-variant/30 py-4 outline-none focus:border-primary transition-all placeholder-transparent"
                placeholder="Email Address"
              />
              <label htmlFor="email" className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.2em] text-on-surface/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-primary">
                Email Address
              </label>
            </div>

            <div className="relative group">
              <textarea 
                id="message"
                rows={3}
                className="peer w-full bg-transparent border-b-2 border-outline-variant/30 py-4 outline-none focus:border-primary transition-all placeholder-transparent resize-none"
                placeholder="Your Message"
              />
              <label htmlFor="message" className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.2em] text-on-surface/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-primary">
                How can we help you?
              </label>
            </div>

            <motion.button 
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group"
            >
              <span className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg group-hover:bg-primary-container transition-colors">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-on-surface">
                Send Message
              </span>
            </motion.button>
          </form>
        </div>
      </div>

    </section>
    </>
  );
}