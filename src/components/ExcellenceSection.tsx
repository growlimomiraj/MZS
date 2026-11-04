import React, { useRef, useEffect } from 'react';
import { WorldwideIcon, HighEndVehiclesIcon, SafeTravelsIcon } from './ExcellenceIcons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ExcellenceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header scrub in
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 50,
          opacity: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 1.5,
          },
        });
      }

      // 2. Cards stagger in on scroll
      if (cardsGridRef.current) {
        gsap.from(cardsGridRef.current.children, {
          y: 90,
          opacity: 0.2,
          stagger: 0.2,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsGridRef.current,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white text-[#0F1319] py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-100 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Headings */}
        <div ref={headerRef} className="max-w-3xl mb-14 lg:mb-18 will-change-transform">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-serif font-normal text-[#0F1319] tracking-tight leading-[1.08] mb-4">
            Expect excellence.
          </h2>
          <h3 className="text-xl sm:text-2xl text-[#666F7B] font-normal leading-relaxed">
            Leave the car refreshed and ready for what's next.
          </h3>
        </div>

        {/* 3 Pillars Grid */}
        <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#F8F9FA] border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <h3 className="text-2xl font-serif font-normal text-[#0F1319] mb-2">
                Available worldwide
              </h3>
              <p className="text-base text-[#666F7B] mb-8">
                Expert local chauffeurs in 500+ cities
              </p>
            </div>
            <div className="h-44 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-500 ease-out">
              <WorldwideIcon className="max-h-full max-w-full drop-shadow-md" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#F8F9FA] border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <h3 className="text-2xl font-serif font-normal text-[#0F1319] mb-2">
                High-end vehicles
              </h3>
              <p className="text-base text-[#666F7B] mb-8">
                Only the best recent models
              </p>
            </div>
            <div className="h-44 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-500 ease-out">
              <HighEndVehiclesIcon className="max-h-full max-w-full drop-shadow-md" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#F8F9FA] border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <h3 className="text-2xl font-serif font-normal text-[#0F1319] mb-2">
                Safe travels
              </h3>
              <p className="text-base text-[#666F7B] mb-8">
                Trained professionals and reliable pickups
              </p>
            </div>
            <div className="h-44 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-500 ease-out">
              <SafeTravelsIcon className="max-h-full max-w-full drop-shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
