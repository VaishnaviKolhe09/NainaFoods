import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from './Products';
import { ArrowLeft, ShieldCheck, Zap, Award } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();
  
  const product = categories
    .flatMap(cat => cat.items)
    .find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="py-20 text-center bg-[var(--background)] text-[var(--text-dark)]">
        Product not found! 
        <Link to="/products" className="text-[var(--primary)] ml-2 font-bold underline">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] pb-20">
      
      {/* --- Mini Hero Section --- */}
      <section className="relative h-[35vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-[var(--secondary)]">
        {/* Decorative Background Image / Pattern */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/mix2.jpg')" }} // Aap apni background image use kar sakte hain
        ></div>
        
        <div className="relative z-10 text-center px-6">
          <h2 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter italic mb-4">
            Product Discovery
          </h2>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[var(--primary-light)] transition-all shadow-lg hover:-translate-y-1"
          >
            <ArrowLeft size={14} /> Back to Products
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Product Image */}
          <div className="lg:col-span-5 bg-[var(--surface)] border border-[var(--border)] p-8 rounded-2xl sticky top-24 shadow-sm">
            <img 
              src={product.img} 
              loading="lazy"
              alt={product.name} 
              className="w-full h-auto object-contain mix-blend-multiply drop-shadow-2xl"
            />
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7">
            <span className="text-[var(--primary)] font-black uppercase tracking-[0.3em] text-xs mb-4 block">Premium Collection</span>
            <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] uppercase tracking-tighter mb-6 leading-none italic">
              {product.name}
            </h1>
            
            <p className="text-xl text-[var(--text-muted)] font-serif italic leading-relaxed mb-8 border-l-4 border-[var(--primary)] pl-6">
              "{product.desc}"
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h4 className="font-black uppercase tracking-widest text-[var(--secondary)] text-sm">Specifications:</h4>
                <ul className="space-y-3">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-3 text-[var(--text-dark)] text-sm font-bold">
                      <ShieldCheck size={18} className="text-[var(--primary)]" /> {spec}
                    </li>
                  ))}
                  <li className="flex items-center gap-3 text-[var(--text-dark)] text-sm font-bold">
                    <Zap size={18} className="text-[var(--primary)]" /> Shelf Life: 12 Months
                  </li>
                </ul>
              </div>

              {/* QR Code Section */}
              <div className="bg-[var(--secondary)] p-6 rounded-2xl text-[var(--text-light)] flex flex-col items-center justify-center text-center shadow-lg">
                 <div className="bg-white p-2 rounded-lg mb-4">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${window.location.href}`} 
                      alt="QR Code" 
                      loading="lazy"
                      className="w-24 h-24"
                    />
                 </div>
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Scan for e-Catalog</p>
                 <p className="text-[8px] mt-1 text-[var(--primary-light)] uppercase">Premium Quality Guaranteed</p>
              </div>
            </div>

            {/* Bottom Badges */}
            <div className="border-t border-[var(--border)] pt-8 grid grid-cols-3 gap-4">
               <div className="text-center">
                  <Award size={32} className="mx-auto mb-2 text-[var(--primary-light)] opacity-60" />
                  <p className="text-[8px] font-black uppercase text-[var(--text-muted)]">Certified Quality</p>
               </div>
               <div className="text-center border-x border-[var(--border)]">
                  <ShieldCheck size={32} className="mx-auto mb-2 text-[var(--primary-light)] opacity-60" />
                  <p className="text-[8px] font-black uppercase text-[var(--text-muted)]">100% Natural</p>
               </div>
               <div className="text-center">
                  <Zap size={32} className="mx-auto mb-2 text-[var(--primary-light)] opacity-60" />
                  <p className="text-[8px] font-black uppercase text-[var(--text-muted)]">Quick Cooking</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;