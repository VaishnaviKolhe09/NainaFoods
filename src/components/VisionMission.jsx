import React from 'react';
import { ArrowUpRight, Target, Eye, Globe, Zap, Award } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-8 container mx-auto px-6 bg-[var(--background)]">
      <div className="flex flex-col gap-32">

        {/* --- 01. Mission (Abstract Style) --- */}
        <div className="flex flex-col lg:flex-row items-center -mb-10 gap-14 lg:gap-18">
          <div className="w-full lg:w-1/2 relative">
            {/* Image ki jagah Abstract Badge & Shape */}
            <div className="relative aspect-square flex items-center justify-center">
              {/* Outer Decorative Rotating Circle */}
              <div className="absolute inset-0 border-2 border-dashed border-[var(--primary)]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              
              {/* Main Square Card */}
              <div className="relative z-10 w-4/5 h-4/5 bg-[var(--secondary)] rounded-[40px] shadow-2xl flex flex-col items-center justify-center p-12 overflow-hidden group">
                {/* Floating Background Icon */}
                <Target size={200} className="absolute -bottom-10 -right-10 text-white/[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                
                <div className="bg-[var(--primary)] p-6 rounded-3xl mb-8 shadow-lg shadow-[var(--primary)]/20">
                  <Target size={48} className="text-white" />
                </div>
                
                <h3 className="text-[var(--primary)] text-5xl font-black mb-2 tracking-tighter">100%</h3>
                <p className="text-[var(--text-light)] font-black uppercase tracking-[0.3em] text-[8px] text-center">
                  Commitment to Purity
                </p>
                
                {/* Decorative Dots */}
                <div className="absolute top-8 left-8 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--primary)]/30"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-black uppercase tracking-[0.4em] text-xs text-[var(--primary)]">The Mission</span>
              <div className="w-12 h-[1px] bg-[var(--primary)]"></div>
            </div>

            <h2 className="text-3xl lg:text-5xl font-black uppercase leading-[0.85] mb-8 tracking-tighter text-[var(--secondary)]">
              Pure <span className="text-[var(--primary)] italic font-serif">Ingredients.</span> <br />
              Honest Taste.
            </h2>

            <p className="text-xl leading-relaxed mb-10 text-[var(--text-muted)] font-serif italic max-w-lg">
              "We don't just manufacture; we craft. Our mission is to bridge the gap between traditional nutrition and modern convenience."
            </p>

            <div className="flex flex-wrap gap-4">
               {/* Feature Mini-Cards */}
               {['Chemical Free', 'German Tech', 'Handmade Soul'].map((text, i) => (
                 <span key={i} className="px-5 py-2 border border-[var(--border)] rounded-full text-[10px] font-black uppercase tracking-widest text-[var(--secondary)] bg-[var(--surface)]">
                   {text}
                 </span>
               ))}
            </div>
          </div>
        </div>

        {/* --- 02. Vision (Abstract Style) --- */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-14 lg:gap-28">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square flex items-center justify-center">
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 border-[20px] border-[var(--surface)] rounded-full"></div>
              
              {/* Vision Card */}
              <div className="relative z-10 w-4/5 h-4/5 bg-[var(--primary)] rounded-full shadow-2xl flex flex-col items-center justify-center p-12 group transition-transform hover:scale-105 duration-500">
                <Globe size={180} className="absolute inset-0 m-auto text-white/10" />
                
                <div className="bg-[var(--secondary)] p-6 rounded-full mb-6">
                  <Eye size={48} className="text-[var(--primary)]" />
                </div>
                
                <h3 className="text-white text-4xl font-black mb-1 uppercase tracking-tighter">Vision</h3>
                <p className="text-[var(--accent)] font-black uppercase tracking-[0.4em] text-[8px]">
                  Global Presence 2030
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[var(--primary)]"></div>
              <span className="font-black uppercase tracking-[0.4em] text-xs text-[var(--primary)]">The Vision</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-black uppercase leading-[0.85] mb-8 tracking-tighter text-[var(--secondary)]">
              Beyond <br />
              <span className="text-[var(--primary)] italic font-serif">Boundaries.</span>
            </h2>

            <p className="text-xl leading-relaxed mb-12 text-[var(--text-muted)] font-serif italic max-w-lg">
              "Becoming the global benchmark for premium vermicelli. We are scaling production to serve 20+ countries by the end of the decade."
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="text-[var(--primary)] mt-1"><Zap size={20} /></div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest text-[var(--secondary)]">Innovation</h4>
                  <p className="text-[10px] text-[var(--text-muted)] font-bold mt-1 uppercase">Advanced Roasting Tech</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[var(--primary)] mt-1"><Award size={20} /></div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest text-[var(--secondary)]">Legacy</h4>
                  <p className="text-[10px] text-[var(--text-muted)] font-bold mt-1 uppercase">25+ Years of Trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;