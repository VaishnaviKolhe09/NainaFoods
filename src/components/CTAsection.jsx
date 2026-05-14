import React from 'react';
import { FileText, ArrowRight, MessageSquareQuote } from 'lucide-react';
import { Link } from 'react-router-dom';
const CTAsection = () => {
  return (
    <section className="relative py-10 overflow-hidden bg-[var(--secondary)]">
      
      {/* --- Visual Accents --- */}
      {/* Subtle Top Border Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50"></div>
      
      {/* Decorative Large Background Text */}
      <div className="absolute -bottom-10 -right-10 text-[12rem] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
        Partner
      </div>

      {/* Floating Light Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)] opacity-[0.07] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[var(--primary)]"></span>
              <span className="text-[var(--primary)] font-black uppercase tracking-[0.4em] text-[10px]">
                Business Collaboration
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[var(--text-light)] uppercase tracking-tighter leading-[0.95] mb-8">
              Ready to elevate <br />
              <span className="text-[var(--primary)] italic font-serif">Your Quality?</span>
            </h2>
            
            <p className="text-[var(--accent)]/70 text-lg md:text-xl font-serif italic leading-relaxed max-w-xl">
              "Join hands with Naina Foods for export-grade vermicelli and noodles. Let’s redefine culinary excellence across borders together."
            </p>
          </div>

          {/* Right Side: Actions */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-6 min-w-[280px]">
            {/* Primary Action */}
           <Link to="/contact">
  <button className="group relative cursor-pointer bg-[var(--primary)] text-[var(--text-light)] px-10 py-6 font-black uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:bg-[var(--primary-light)] shadow-2xl">
    <span className="relative z-10 flex items-center justify-center gap-3">
      Get A Quote <ArrowRight size={18} className="group-hover:translate-x-2  transition-transform" />
    </span>
  </button>
  </Link>

            {/* Secondary Action */}
            <button className="group border border-[var(--secondary-light)] bg-[var(--secondary-light)]/30 backdrop-blur-sm text-[var(--text-light)] px-10 py-6 font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-[var(--secondary-light)] transition-all">
              <FileText size={18} className="text-[var(--primary)]" />
              <span>Brochure 2026</span>
            </button>
            
            {/* Subtle Support Text */}
            <p className="text-[10px] text-center text-[var(--text-muted)] font-black uppercase tracking-[0.2em]">
              Response within 24 hours
            </p>
          </div>

        </div>
      </div>

      {/* --- Bottom Hexagon Decor --- */}
      <div className="absolute -bottom-12 left-10 w-24 h-24 bg-[var(--primary)] opacity-10 clip-hexagon rotate-12"></div>
    </section>
  );
};

export default CTAsection;