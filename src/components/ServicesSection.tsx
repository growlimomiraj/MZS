import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageRoute } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServicesSectionProps {
  onNavigate: (route: PageRoute) => void;
}

const SERVICES = [
  {
    id: 'airport',
    subheadline: 'Airport transfers',
    title: 'Smooth landings, every time.',
    description:
      'Delayed flight? Chauffeurs track arrivals and adjust accordingly. Plus, you have 1 hour of complimentary wait time just in case.',
    image: '/assets/services/service-1.webp',
    route: '/airport-transfer' as PageRoute,
  },
  {
    id: 'hourly',
    subheadline: 'Hourly and full day hire',
    title: 'Seize the day.',
    description:
      "Reserve a dedicated chauffeur from 2 to 24 hours. They'll be on standby as long as you need them.",
    image: '/assets/services/service-2.webp',
    route: '/hourly-car-service' as PageRoute,
  },
  {
    id: 'city-to-city',
    subheadline: 'City-to-city',
    title: 'Between cities, done better.',
    description:
      'Turn long-distance journeys into time well spent. Arrive refreshed, not stressed.',
    image: '/assets/services/service-3.webp',
    route: '/city-to-city' as PageRoute,
  },
  {
    id: 'enterprise',
    subheadline: 'Enterprise and agency solutions',
    title: 'Corporate travel, simplified.',
    description:
      'One platform for companies and agencies to book, track, and account for every journey.',
    image: '/assets/services/service-4.webp',
    route: '/business' as PageRoute,
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Headings smooth entrance
      if (titleWrapperRef.current) {
        gsap.from(titleWrapperRef.current.children, {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleWrapperRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          },
        });
      }

      // 2. Cards track entrance - once visible, stays 100% visible
      if (cardsTrackRef.current) {
        gsap.from(cardsTrackRef.current.children, {
          y: 45,
          opacity: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsTrackRef.current,
            start: 'top 92%',
            toggleActions: 'play none none none',
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#eaf2fb] text-[#0F1319] py-20 lg:py-28 px-4 sm:px-8 lg:px-12 transition-colors duration-700 overflow-hidden shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
    >
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Title & Subtitle - Centered matching reference video */}
        <div ref={titleWrapperRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-['PP_Fragment',serif] font-normal text-[#0F1319] tracking-tight leading-[1.1] mb-3">
            Arrive at your best.
          </h2>
          <h3 className="text-base sm:text-xl text-[#666F7B] font-normal">
            Effortless journeys, tailored to you.
          </h3>
        </div>

        {/* Carousel / Cards Track */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none no-scrollbar cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div ref={cardsTrackRef} className="flex gap-6 w-full">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="w-[85vw] sm:w-[460px] lg:w-[calc(50%-12px)] shrink-0 snap-start flex flex-col bg-transparent group"
                >
                  {/* Image Container with 16px radius */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-gray-200 shadow-sm">
                    <img
                      src={service.image}
                      alt={service.subheadline}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Content below image matching reference video */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-sm font-normal text-gray-500 mb-1.5 block">
                        {service.subheadline}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-['PP_Fragment',serif] font-normal text-[#0F1319] mb-2 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mb-5">
                        {service.description}
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate(service.route)}
                      className="self-start inline-flex items-center justify-center px-6 py-2 rounded-full border border-gray-300 bg-white text-[#0F1319] text-sm font-normal hover:bg-gray-50 transition-colors shadow-xs cursor-pointer active:scale-95"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - Centered below cards matching video */}
          <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 hover:text-black transition-colors cursor-pointer shadow-xs active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 hover:text-black transition-colors cursor-pointer shadow-xs active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
