import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Quote } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rajesh Khanna",
      role: "Director, Global Foods Corp",
      text: "The quality of Naina Seviyan is unmatched. We have been using their roasted vermicelli for our catering business for 10 years, and the texture is always perfect."
    },
    {
      name: "Amit Sharma",
      role: "Founder, Heritage Sweets",
      text: "Packaging is top-notch. The roasted vermicelli stays fresh and non-sticky, which is crucial for our premium dessert range. Highly recommended for bulk orders."
    },
    {
      name: "Sarah Williams",
      role: "International Export Partner",
      text: "Naina Noodles have seen a massive demand in the international market. The hygiene standards and vacuum-packed quality make it easy for us to distribute globally."
    },
    {
      name: "Vikram Mehra",
      role: "Quality Head, Delhi Caterers",
      text: "Finding consistent quality in Seviyan was hard until we found Naina Foods. Their German-tech roasting gives an even golden color every single time."
    }
  ];

  return (
    <section className="relative py-8 overflow-hidden bg-secondary">
      {/* Fixed Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000')`,
        }}
      >
        <div className="absolute inset-0 bg-secondary/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper testimonial-slider"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-4xl mx-auto text-center pb-10">
                <Quote className="mx-auto text-primary mb-8 opacity-70" size={60} />
                
                <p className="text-2xl md:text-4xl italic font-medium text-text-light mb-12 leading-relaxed tracking-tight">
                  "{review.text}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-1 bg-primary mb-6"></div>
                  <h5 className="font-black text-2xl uppercase tracking-[0.3em] text-primary">
                    {review.name}
                  </h5>
                  <span className="text-accent text-sm font-black uppercase mt-2 tracking-[0.2em] opacity-60">
                    {review.role}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styles for Swiper Dots and Arrows to match your theme */}
      <style jsx="true">{`
        .swiper-button-next, .swiper-button-prev {
          color: var(--primary) !important;
          transform: scale(0.6);
        }
        .swiper-pagination-bullet {
          background: var(--accent) !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: var(--primary) !important;
          opacity: 1;
          width: 25px;
          border-radius: 5px;
        }
        .testimonial-slider {
          padding: 20px 0;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;