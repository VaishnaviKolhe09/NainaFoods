import React from 'react';
import { Mail, Phone, MapPin, Globe, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-0 bg-[var(--background)] text-[var(--text-dark)] min-h-screen">
      {/* --- Section 1: Hero Banner --- */}
      <section className="h-[55vh] bg-[var(--secondary)] flex items-center justify-center text-center relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/mix2.jpg" 
            loading="lazy"
            alt="HQ Background" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--secondary)]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6">
          <span className="text-[var(--primary)] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-black text-[var(--text-light)] uppercase tracking-tighter leading-none">
            GLOBAL <br/> <span className="text-[var(--primary)] italic font-serif">HEADQUARTERS</span>
          </h1>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mt-8"></div>
        </div>
      </section>

      {/* --- Section 2: Contact Content --- */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Left: Inquiry Form */}
          <div className="bg-[var(--surface)] p-10 md:p-16 border border-[var(--border)] shadow-sm">
            <h2 className="text-4xl font-black uppercase mb-10 text-[var(--secondary)] leading-none">
              Start A <span className="text-[var(--primary)]">Partnership</span>
            </h2>
            
            <form className="grid gap-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="text-[10px] font-black uppercase text-[var(--text-muted)] tracking-widest block mb-2">Your Identity</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b-2 border-[var(--border)] p-4 focus:border-[var(--primary)] outline-none transition-all font-serif italic text-lg" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] font-black uppercase text-[var(--text-muted)] tracking-widest block mb-2">Email Access</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b-2 border-[var(--border)] p-4 focus:border-[var(--primary)] outline-none transition-all font-serif italic text-lg" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              
              <div className="group">
                <label className="text-[10px] font-black uppercase text-[var(--text-muted)] tracking-widest block mb-2">Nature of Inquiry</label>
                <select className="w-full bg-transparent border-b-2 border-[var(--border)] p-4 focus:border-[var(--primary)] outline-none cursor-pointer font-serif italic text-lg">
                  <option>Bulk/Export Enquiry</option>
                  <option>Distributorship Application</option>
                  <option>General Collaboration</option>
                </select>
              </div>
              
              <div className="group">
                <label className="text-[10px] font-black uppercase text-[var(--text-muted)] tracking-widest block mb-2">Message Brief</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-transparent border-b-2 border-[var(--border)] p-4 focus:border-[var(--primary)] outline-none resize-none font-serif italic text-lg" 
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <button className="bg-[var(--secondary)] text-[var(--text-light)] py-6 px-10 font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[var(--primary)] transition-all group overflow-hidden relative">
                <span className="relative z-10">TRANSMIT MESSAGE</span>
                <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform relative z-10" />
              </button>
            </form>
          </div>

          {/* Right: Info & Visuals */}
          <div className="space-y-16">
            <div className="relative">
              <div className="absolute -top-12 -left-12 text-[12rem] font-black text-[var(--surface)] z-0 select-none">@</div>
              <div className="relative z-10 pl-4 border-l-8 border-[var(--primary)]">
                <h3 className="text-3xl font-black uppercase text-[var(--secondary)] mb-6">Corporate Office</h3>
                <p className="text-[var(--text-muted)] leading-relaxed font-serif text-lg italic">
                  Visit us for a tasting session or business discussion at our main processing facility.
                </p>
              </div>
            </div>

            <div className="grid gap-10">
              {/* Address */}
              <div className="flex gap-8 group">
                <div className="bg-[var(--primary)] text-[var(--text-light)] p-5 h-fit clip-hexagon group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest text-[var(--primary)] mb-2">Locate Us</h4>
                  <p className="text-[var(--secondary)] font-serif italic text-lg leading-snug">
                    Industrial Area, Phase II, Plot No. 124, <br />New Delhi - 1100XX, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-8 group">
                <div className="bg-[var(--secondary)] text-[var(--text-light)] p-5 h-fit clip-hexagon group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest text-[var(--secondary)] mb-2">Phone Lines</h4>
                  <p className="text-[var(--secondary)] font-serif italic text-lg">+91 11-XXXX-XXXX <br /> +91 98XXX XXXXX</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-8 group">
                <div className="bg-[var(--primary)] text-[var(--text-light)] p-5 h-fit clip-hexagon group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest text-[var(--primary)] mb-2">Digital Mail</h4>
                  <p className="text-[var(--secondary)] font-serif italic text-lg">export@nainafoods.com <br/> info@nainafoods.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Map Section --- */}
      <section className="h-[600px] w-full bg-[var(--surface)] relative border-t border-[var(--border)] group">
        {/* Placeholder Dark Overlay on Map */}
        <div className="absolute inset-0 bg-[var(--secondary)]/10 group-hover:bg-transparent transition-all duration-700 z-10 pointer-events-none"></div>
        
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--surface)]">
          <div className="text-center z-20">
            <div className="w-20 h-20 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
              <MapPin size={40} className="text-[var(--text-light)]" />
            </div>
            <p className="font-black text-[var(--secondary)] uppercase tracking-[0.3em] text-xl">Find Our Hub</p>
            <p className="text-xs text-[var(--text-muted)] mt-2 italic">[Paste Google Maps Iframe Here]</p>
          </div>
        </div>

        {/* Example of how to style actual iframe for this theme:
        <iframe 
          src="..." 
          className="w-full h-full border-0 grayscale opacity-80" 
          allowFullScreen="" 
          loading="lazy">
        </iframe> 
        */}
      </section>
    </div>
  );
};

export default Contact;