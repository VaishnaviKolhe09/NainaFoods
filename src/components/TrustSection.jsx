import React from 'react';
import { ShieldCheck, Truck, Star, CheckCircle2 } from 'lucide-react';

const TrustSection = () => {
  const stats = [
    {
      icon: <ShieldCheck size={32} />,
      title: "100% PURE",
      desc: "Zero Preservatives Added",
      tag: "Quality"
    },
    {
      icon: <Truck size={32} />,
      title: "GLOBAL",
      desc: "Exporting to 15+ Countries",
      tag: "Reach"
    },
    {
      icon: <Star size={32} />,
      title: "25+ YRS",
      desc: "Legacy of Excellence",
      tag: "Experience"
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "CERTIFIED",
      desc: "FSSAI & ISO Standards",
      tag: "Safety"
    }
  ];

  return (
    <section className="bg-[var(--background)] py-10 border-y border-[var(--border)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x lg:divide-[var(--border)]">
          
          {stats.map((item, index) => (
            <div 
              key={index} 
              className="group p-10 flex flex-col items-center text-center transition-all duration-500 hover:bg-[var(--surface)] relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full  h-1 bg-[var(--primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Icon with Soft Glow */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-[var(--primary)] opacity-20 blur-xl rounded-full scale-0 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative text-[var(--primary)] group-hover:scale-110 cursor-pointer transition-transform duration-500">
                  {item.icon}
                </div>
              </div>

              {/* Tag */}
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)] mb-3 opacity-60 group-hover:text-[var(--primary)] transition-colors">
                {item.tag}
              </span>

              {/* Title & Desc */}
              <h4 className="text-3xl font-black text-[var(--secondary)] tracking-tighter mb-2 italic uppercase">
                {item.title}
              </h4>
              <p className="text-[var(--text-muted)] text-sm font-serif italic max-w-[180px]">
                {item.desc}
              </p>
              
              {/* Bottom Decoration for Mobile */}
              <div className="w-12 h-[1px] bg-[var(--border)] mt-8 lg:hidden"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TrustSection;