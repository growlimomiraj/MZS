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
    image: 'https://static.blacklane.com/assets/_next/static/media/1.879377e626f27fdd.webp',
    route: '/airport-transfer' as PageRoute,
  },
  {
    id: 'hourly',
    subheadline: 'Hourly and full day hire',
    title: 'Seize the day.',
    description:
      "Reserve a dedicated chauffeur from 2 to 24 hours. They'll be on standby as long as you need them.",
    image: 'https://static.blacklane.com/assets/_next/static/media/2.9ae17562d88c590d.webp',
    route: '/hourly-car-service' as PageRoute,
  },
  {
    id: 'city-to-city',
    subheadline: 'City-to-city',
    title: 'Between cities, done better.',
    description:
      'Turn long-distance journeys into time well spent. Arrive refreshed, not stressed.',
    image: 'https://static.blacklane.com/assets/_next/static/media/3.a05cc4329bbe2ee0.webp',
    route: '/city-to-city' as PageRoute,
  },
  {
    id: 'enterprise',
    subheadline: 'Enterprise and agency solutions',
    title: 'Corporate travel, simplified.',
    description:
      'One platform for companies and agencies to book, track, and account for every journey.',
    image: 'https://static.blacklane.com/assets/_next/static/media/4.13f5624e9bdcc2ee.webp',
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
      // 1. Background color morph to #fbf8f2 on scroll
      gsap.to(sectionRef.current, {
        backgroundColor: '#fbf8f2',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'top 20%',
          scrub: 1,
        },
      });

      // 2. Headings scrub in
      if (titleWrapperRef.current) {
        gsap.from(titleWrapperRef.current.children, {
          y: 45,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleWrapperRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1.5,
          },
        });
      }

      // 3. Cards track entrance on scroll
      if (cardsTrackRef.current) {
        gsap.from(cardsTrackRef.current.children, {
          y: 60,
          opacity: 0.3,
          stagger: 0.1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsTrackRef.current,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 1,
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
      className="bg-white text-[#0F1319] py-24 lg:py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-700 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Title & Subtitle */}
        <div ref={titleWrapperRef} className="mb-14 lg:mb-18">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-serif font-normal text-[#0F1319] tracking-tight leading-[1.08] mb-4">
            Arrive at your best.
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-sans text-[#666F7B] font-normal">
            Effortless journeys, tailored to you.
          </h3>
        </div>

        {/* Carousel / Cards Track */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none no-scrollbar cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div ref={cardsTrackRef} className="flex gap-6">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="w-[85vw] sm:w-[380px] lg:w-[420px] shrink-0 snap-start flex flex-col bg-transparent group"
                >
                  {/* Image Container with hover zoom */}
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-gray-100 shadow-sm">
                    <img
                      src={service.image}
                      alt={service.subheadline}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#8A94A6] mb-2 block">
                        {service.subheadline}
                      </span>
                      <h3 className="text-2xl font-serif font-normal text-[#0F1319] mb-3 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#666F7B] leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate(service.route)}
                      className="self-start inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#0F1319] text-[#0F1319] text-sm font-medium hover:bg-[#0F1319] hover:text-white transition-all duration-200 cursor-pointer active:scale-95"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-end gap-3 mt-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-300 hover:border-gray-900 bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-700 hover:text-black transition-all cursor-pointer shadow-sm hover:scale-105"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-300 hover:border-gray-900 bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-700 hover:text-black transition-all cursor-pointer shadow-sm hover:scale-105"
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
