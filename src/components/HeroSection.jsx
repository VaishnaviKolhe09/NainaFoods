import React from 'react';
import { ArrowRight, Play, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background)] py-20 lg:py-0">
      
      {/* --- Decorative Elements --- */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--surface)] z-0 hidden lg:block"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 md:w-96 md:h-96 bg-[var(--primary)] opacity-5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* --- Left Content: Text & CTA --- */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-8 md:w-12 h-[2px] bg-[var(--primary)]"></span>
              <span className="text-[var(--primary)] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs">
                Est. 1995 | Premium Food Craft
              </span>
            </div>

            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[var(--secondary)] leading-[1] md:leading-[0.9] uppercase tracking-tighter">
              Authentic <br />
              <span className="text-[var(--primary)] italic font-serif">Flavor</span> <br />
              Legacy.
            </h1>

            <p className="text-[var(--text-muted)] text-base md:text-xl font-serif italic max-w-lg mx-auto lg:mx-0 leading-relaxed border-l-4 border-[var(--primary)] pl-6 text-left">
              "Experience the gold standard of Naina Seviyan. Where every strand is roasted to perfection using heritage techniques."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
             <Link to="/products" className="w-full sm:w-auto">
    <button className="w-full bg-[var(--secondary)] text-[var(--text-light)] px-8 md:px-10 py-4 md:py-5 font-black uppercase tracking-[0.1em] md:tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-[var(--primary)] transition-all group shadow-xl text-sm text-nowrap">
      Explore Catalog <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
    </button>
  </Link>
              
              {/* <button className="flex items-center gap-4 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] transition-all">
                  <Play size={18} className="text-[var(--secondary)] group-hover:text-white fill-current ml-1" />
                </div>
                <span className="font-black uppercase tracking-widest text-[10px] md:text-xs text-[var(--secondary)]">Watch Process</span>
              </button> */}
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-2 gap-4 md:gap-8 pt-8 border-t border-[var(--border)] max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Award className="text-[var(--primary)] flex-shrink-0" size={20} md={24} />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-tighter leading-tight text-left">ISO 22000 <br/>Certified</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Globe className="text-[var(--primary)] flex-shrink-0" size={20} md={24} />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-tighter leading-tight text-left">Exporting to <br/>15+ Countries</span>
              </div>
            </div>
          </div>

          {/* --- Right Content: Product Visual --- */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mt-10 lg:mt-0">
            {/* Hexagon Clip Backdrop - Smaller on mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full lg:w-[120%] lg:h-[120%] bg-[var(--primary)] opacity-10 clip-hexagon animate-pulse"></div>
            
            <div className="relative z-10 p-2 md:p-4">
              <div className="relative aspect-square w-full max-w-[280px] sm:max-w-md mx-auto">
                <img 
                  src="/assets/naina_noodles.jpeg" 
                  alt="Naina Roasted Seviyan" 
                  className="w-full h-full object-cover shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}
                />
                
                {/* Floating Badge - Scaled for mobile */}
                <div className="absolute -bottom-5 -left-5 md:-bottom-10 md:-left-10 bg-[var(--primary)] p-4 md:p-8 text-[var(--text-light)] shadow-2xl">
                  <p className="text-2xl md:text-4xl font-black italic font-serif">100%</p>
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">Pure Wheat</p>
                </div>
              </div>
            </div>

            {/* Background Decorative Text - Responsive visibility */}
            <div className="absolute -right-10 top-0 text-[8rem] lg:text-[15rem] font-black text-[var(--surface)] z-0 select-none opacity-40 lg:opacity-100 hidden sm:block uppercase tracking-tighter">
              Naina
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;