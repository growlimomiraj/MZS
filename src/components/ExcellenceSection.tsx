import React, { useRef, useEffect } from 'react';
import { WorldwideIcon, HighEndVehiclesIcon, SafeTravelsIcon } from './ExcellenceIcons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    title: 'Available worldwide',
    description: 'Expert local chauffeurs in 500+ cities',
    icon: <WorldwideIcon className="h-full w-auto drop-shadow-md" />,
  },
  {
    title: 'High-end vehicles',
    description: 'Only the best recent models',
    icon: <HighEndVehiclesIcon className="h-full w-auto drop-shadow-md" />,
  },
  {
    title: 'Safe travels',
    description: 'Trained professionals and reliable pickups',
    icon: <SafeTravelsIcon className="h-full w-auto drop-shadow-md" />,
  },
];

export const ExcellenceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Big Title scrub in matching Blacklane tu()
      if (titleRef.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
          },
        }).from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power1.out',
        });

        // 2. Title exit scrub
        gsap.timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 0%',
            end: 'top -20%',
            scrub: 1,
          },
        }).to(titleRef.current, {
          y: -200,
          opacity: 0,
          duration: 1,
          ease: 'power1.out',
        });
      }

      // 3. Subtitle & Cards Stagger in
      if (subtitleRef.current && cardsGridRef.current) {
        const subTl = gsap.timeline({
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 2,
            toggleActions: 'play none none reverse',
          },
        });

        subTl.from(subtitleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1.5,
          ease: 'power1.out',
        });

        subTl.from(
          cardsGridRef.current.children,
          {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power1.out',
            stagger: 0.2,
          },
          '-=0.3'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#fbf8f2] text-[#0F1319] py-20 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1170px] mx-auto">
        {/* Headings: Centered matching Blacklane reference */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-16 will-change-transform">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-[56px] font-['PP_Fragment',serif] font-normal text-[#0F1319] tracking-tight leading-[1.08] mb-4"
          >
            Expect excellence.
          </h2>
          <h3
            ref={subtitleRef}
            className="text-base sm:text-lg text-[#0F1319] font-normal leading-relaxed"
          >
            Leave the car refreshed and ready for what's next.
          </h3>
        </div>

        {/* 3 Pillars Grid: Light ice-blue #aecff3 rounded-2xl cards matching screenshot */}
        <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between items-center p-8 sm:p-9 rounded-2xl bg-[#aecff3] text-center select-none shadow-xs hover:shadow-md transition-all duration-300 will-change-transform"
            >
              <div className="flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl font-medium text-[#0F1319] mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#0F1319]/85 leading-snug font-normal max-w-[260px]">
                  {feature.description}
                </p>
              </div>

              {/* 3D Glassmorphic Icon at bottom */}
              <div className="h-32 sm:h-36 w-full flex items-center justify-center mt-8">
                {feature.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
