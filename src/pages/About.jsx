import React from 'react';
import { ArrowUpRight, Zap, ShieldCheck, Globe } from 'lucide-react';
import MissionVision from '../components/VisionMission';
import CTAsection from '../components/CTAsection';

const About = () => {
  return (
    <div
      className="pt-0 overflow-x-hidden"
      style={{
        background: "var(--background)",
        color: "var(--text-dark)",
        
      }}
    >
      {/* --- Section 1: Hero Banner --- */}
      <section
        className="h-[65vh] flex items-center justify-center text-center relative "
        style={{ background: "var(--secondary)" }}
      >
        <div className="absolute inset-0 opacity-30 bg-[url('/assets/mix.jpg')] bg-cover bg-fixed"></div>

        <div className="relative z-10 px-6">
          <span
            className="font-bold tracking-[0.4em] uppercase text-sm mb-4 block"
            style={{ color: "var(--primary)" }}
          >
            Legacy of Taste
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none" style={{ color: "var(--text-light)" }}>
  A LEGACY OF <br />
  <span className="italic" style={{ color: "var(--primary)" }}>PURITY</span>
</h1>

          <div
            className="w-32 h-1.5 mx-auto mt-8 rounded-full"
            style={{ background: "var(--primary)" }}
          ></div>
        </div>
      </section>

      {/* --- Section 2: Mission & Vision --- */}
     
    <MissionVision/>

      {/* --- Stats Section --- */}
      <section
        className="py-12 border-y"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">

          {[
            { label: "Production Capacity", val: "500T+", unit: "Daily" },
            { label: "Quality Checks", val: "Triple", unit: "Phase" },
            { label: "Partner Network", val: "1200+", unit: "Stores" },
            { label: "Global Presence", val: "15+", unit: "Countries" }
          ].map((stat, i) => (
            <div key={i} className="text-center">

              <h3
                className="text-3xl md:text-4xl font-black leading-none"
                style={{ color: "var(--secondary)" }}
              >
                {stat.val}
              </h3>

              <p
                className="text-[10px] font-black uppercase tracking-widest mt-2"
                style={{ color: "var(--primary)" }}
              >
                {stat.label}
              </p>

              <p className="text-gray-500 text-[10px] font-bold uppercase">
                {stat.unit}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Core Values --- */}
      <section className="py-10 md:py-18 container mx-auto px-6">

        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tight"
            style={{ color: "var(--secondary)" }}
          >
            The{" "}
            <span style={{ color: "var(--primary)" }}>
              DNA
            </span>{" "}
            of Naina Foods
          </h2>

          <p
            className="mt-4 tracking-[0.2em] uppercase font-bold text-xs"
            style={{ color: "#6b7280" }}
          >
            Core Principles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              icon: <ShieldCheck size={32} />,
              title: "Uncompromising Quality",
              desc: "No second chances. Every packet is a promise of health."
            },
            {
              icon: <Zap size={32} />,
              title: "Modern Innovation",
              desc: "Advanced roasting tech ensuring non-sticky perfection."
            },
            {
              icon: <Globe size={32} />,
              title: "Ethical Sourcing",
              desc: "Direct from farms to maintain the chain of trust."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border"
              style={{
                background: "var(--background)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="mb-8"
                style={{ color: "var(--primary)" }}
              >
                {item.icon}
              </div>

              <h4
                className="text-2xl font-black uppercase mb-4 leading-tight"
                style={{ color: "var(--secondary)" }}
              >
                {item.title}
              </h4>

              <p className="leading-relaxed text-sm text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA Section --- */}
      <CTAsection/>
    </div>
  );
};

export default About;