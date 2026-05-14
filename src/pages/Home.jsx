import React from 'react';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Truck, Quote } from 'lucide-react';
import Testimonials from '../components/Testimonial';
import HeroSection from '../components/HeroSection';
import CTAsection from '../components/CTAsection';
import TrustSection from '../components/TrustSection';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <HeroSection/>

      {/* 2. Top Products Showcase */}
    <section className="py-12 container mx-auto px-6 bg-[var(--background)]">
  <div className="text-center mb-16">
    <span className="text-[var(--primary)] font-black uppercase tracking-[0.3em] text-xs mb-2 block">Our Favorites</span>
    <h2 className="text-5xl font-black text-[var(--secondary)] uppercase tracking-tighter italic">Bestseller Products</h2>
    <div className="w-24 h-1.5 bg-[var(--primary)] mx-auto mt-4"></div>
  </div>

  <div className="grid md:grid-cols-3 gap-12">
    {[
      {
        id: 'naina-seviyan', // Added an ID for the URL
        name: 'Naina Seviyan',
        img: '/assets/seviyan.jpeg',
        
        desc: 'Traditional handmade taste processed with modern hygiene standards.'
      },
      {
        id: 'roasted-vermicelli',
        name: 'Roasted Vermicelli',
        img: '/assets/vermicelli_rosted1.jpeg',
        desc: 'Triple-roasted golden strands for the perfect non-sticky texture.'
      },
      {
        id: 'premium-noodles',
        name: 'Premium Noodles',
        img: '/assets/naina_noodles.jpeg',
        desc: 'High-protein wheat noodles crafted for authentic global flavors.'
      }
    ].map((product, i) => (
      <div key={i} className="group cursor-pointer">
        {/* Image Container */}
        <div className="bg-[var(--surface)] aspect-[4/5] mb-8 overflow-hidden relative border border-[var(--border)] shadow-sm group-hover:shadow-xl transition-all duration-500">
          <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/10 transition-all duration-500 z-10"></div>
          
          <img 
            src={product.img} 
            loading="lazy"
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Badge for premium look */}
          <div className="absolute top-4 right-4 bg-[var(--secondary)] text-[var(--text-light)] text-[8px] font-black uppercase px-3 py-1 tracking-widest z-20">
            Premium
          </div>
        </div>

        {/* Text Content */}
        <h3 className="text-2xl font-black mb-3 uppercase text-[var(--secondary)] tracking-tight">{product.name}</h3>
        <p className="text-[var(--text-muted)] text-sm mb-6 font-serif italic leading-relaxed">
          {product.desc}
        </p>
        
        {/* Updated Button to Link */}
        <Link 
          to={`/products`} 
          className="inline-flex items-center gap-2 text-[var(--primary)] font-black tracking-[0.2em] text-[10px] hover:gap-4 transition-all uppercase"
        >
          View Details <ArrowRight size={14}/>
        </Link>
      </div>
    ))}
  </div>
</section>

      {/* 3. Features/Stats Section */}
      <TrustSection/>
      {/* <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          <div>
            <ShieldCheck className="mx-auto text-amber-600 mb-4" size={48} />
            <h4 className="text-3xl font-black">100% PURE</h4>
            <p className="text-slate-500 mt-2">Zero Preservatives Added</p>
          </div>
          <div>
            <Truck className="mx-auto text-amber-600 mb-4" size={48} />
            <h4 className="text-3xl font-black">GLOBAL</h4>
            <p className="text-slate-500 mt-2">Exporting to 15+ Countries</p>
          </div>
          <div>
            <Star className="mx-auto text-amber-600 mb-4" size={48} />
            <h4 className="text-3xl font-black">25+ YRS</h4>
            <p className="text-slate-500 mt-2">Legacy of Excellence</p>
          </div>
          <div>
            <CheckCircle2 className="mx-auto text-amber-600 mb-4" size={48} />
            <h4 className="text-3xl font-black">CERTIFIED</h4>
            <p className="text-slate-500 mt-2">FSSAI & ISO Standards</p>
          </div>
        </div>
      </section> */}

      {/* 4. Testimonials */}
      <Testimonials/>
    

      {/* 5. Mini Contact CTA */}
      <CTAsection/>
      
    </div>
  );
};

export default Home;