import React from 'react';
import { Link } from 'react-router-dom';

// Data ko export kar rahe hain taaki Detail page bhi ise use kar sake
export const categories = [
  { 
    name: "Roasted Range", 
    items: [
      { 
        slug: "roasted-vermicelli-fine-cut",
        name: "Roasted Vermicelli (Fine Cut)", 
        img: "/assets/vermicelli_rosted.jpeg",
        desc: "Expertly roasted fine-cut seviyan, perfect for creating rich, creamy Kheer and traditional sweet treats.",
        specs: ["Extra Fine Cut", "Perfect for Kheer", "Rich Roasted Aroma"]
      },
      { 
        slug: "roasted-seviyan-long-cut",
        name: "Roasted Seviyan (Long Cut)", 
        img: "/assets/vermicelli_rosted1.jpeg",
        desc: "Premium long-cut roasted vermicelli. Versatile enough for sweet kheer, savory upma, or flavorful pulao.",
        specs: ["Long Strand", "Multi-Purpose Use", "Non-Sticky"]
      }
    ] 
  },
  { 
    name: "Traditional Range", 
    items: [
      { 
        slug: "naina-special-seviyan",
        name: "Naina Special Seviyan", 
        img: "/assets/seviyan_rosted.jpeg",
        desc: "Our signature traditional seviyan crafted for authentic taste. Ideal for festive celebrations and everyday desserts.",
        specs: ["Traditional Texture", "Quick Cooking", "Hygienically Packed"]
      },
      { 
        slug: "short-cut-vermicelli",
        name: "Short Cut Vermicelli", 
        img: "/assets/seviyan.jpeg",
        desc: "Convenient pre-cut pieces that save time in the kitchen while maintaining a superior, bouncy mouthfeel.",
        specs: ["Ready-to-Cook", "Uniform Cutting", "Value Pack"]
      },
      { 
        slug: "vermicelli-rava",
        name: "Vermicelli / Rava", 
        img: "/assets/vermicelli_rava.jpeg",
        desc: "High-quality Semolina based vermicelli. A healthy choice for energy-packed breakfasts like Upma.",
        specs: ["Made with 100% Suji", "Rich in Fiber", "Diet Friendly"]
      }
    ] 
  },
  { 
    name: "Modern Range", 
    items: [
      { 
        slug: "naina-hakka-noodles",
        name: "Naina Hakka Noodles", 
        img: "/assets/naina_noodles.jpeg",
        desc: "Restaurant-style Hakka noodles made for home chefs. Superior length and strength for the perfect stir-fry.",
        specs: ["Wheat Based", "High Elasticity", "Includes Masala Mix"]
      },
      { 
        slug: "naina-premium-pasta",
        name: "Naina Premium Pasta", 
        img: "/assets/pasta.jpeg",
        desc: "Italian-inspired Fusilli pasta. Deep ridges designed to hold sauce perfectly for a gourmet experience.",
        specs: ["100% Durum Wheat", "No Trans Fat", "Al Dente Texture"]
      },
      { 
        slug: "gourmet-pasta-spiral",
        name: "Gourmet Pasta (Spiral)", 
        img: "/assets/pasta1.jpeg",
        desc: "Premium spiral pasta that adds a fun twist to your meals. Healthy, filling, and perfect for salads.",
        specs: ["Spiral Shape", "Kid's Favorite", "Preservative Free"]
      },
      { 
        slug: "naina-penne-macaroni",
        name: "Naina Penne / Macaroni", 
        img: "/assets/pasta2.jpeg",
        desc: "Transparent-grade premium pasta made from 100% Soji. No Maida ensures a healthy and guilt-free meal.",
        specs: ["Made with 100% Soji", "No Maida", "Iron & Vitamin Enriched"]
      }
    ] 
  }
];

const Products = () => {
  return (
    <div className="pt-0">
      <section className="h-[30vh] md:h-[55vh] bg-slate-900 flex items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('/assets/mix2.jpg')" }}></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Our Products</h1>
          <p className="text-amber-500 font-bold tracking-widest mt-4 italic text-xs">PREMIUM QUALITY FOOD PRODUCTS</p>
        </div>
      </section>

      <section className="py-10 container mx-auto px-6">
        <div className="grid gap-16">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-black uppercase text-slate-900 whitespace-nowrap">{cat.name}</h2>
                <div className="h-[1px] bg-slate-200 w-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cat.items.map((product, i) => (
                  <Link 
                    to={`/product/${product.slug}`} 
                    key={i} 
                    className="flex flex-col sm:flex-row gap-6 bg-white p-6 border border-slate-100 hover:shadow-2xl hover:border-amber-200 transition-all group"
                  >
                    <div className="w-full sm:w-40 h-40 bg-slate-50 flex-shrink-0 overflow-hidden">
                      <img 
                        src={product.img} 
                        loading="lazy"
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 uppercase text-slate-800 group-hover:text-amber-600 transition-colors">{product.name}</h3>
                      <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.desc}</p>
                      <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Click to View Details →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;