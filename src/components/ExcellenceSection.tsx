import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    title: 'Available worldwide',
    description: 'Expert local chauffeurs in 500+ cities',
    image: '/assets/excellence/like.png',
    fallback: 'https://static.blacklane.com/assets/_next/static/media/like.6f578ab713c8f1de.png',
    alt: 'Available worldwide',
  },
  {
    title: 'High-end vehicles',
    description: 'Only the best recent models',
    image: '/assets/excellence/cloud.png',
    fallback: 'https://static.blacklane.com/assets/_next/static/media/cloud.4afa6c08cc182c1c.png',
    alt: 'High-end vehicles',
  },
  {
    title: 'Safe travels',
    description: 'Trained professionals and reliable pickups',
    image: '/assets/excellence/lock.png',
    fallback: 'https://static.blacklane.com/assets/_next/static/media/lock.cd4981c5f73169d5.png',
    alt: 'Safe travels',
  },
];

export const ExcellenceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Big Title scrub in matching Blacklane
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
          y: -150,
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
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: 'power1.out',
        });

        subTl.from(
          cardsGridRef.current.children,
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: 'power1.out',
            stagger: 0.15,
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
        {/* Headings: Exact PP Fragment typography & hierarchy matching screenshot */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-16 will-change-transform">
          <h2
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-[72px] font-['PP_Fragment',serif] font-normal text-[#0F1319] tracking-tight leading-[1.06] mb-4"
          >
            Expect excellence.
          </h2>
          <h3
            ref={subtitleRef}
            className="text-base sm:text-lg lg:text-xl font-['Geist',sans-serif] text-[#0F1319] font-medium leading-relaxed"
          >
            Leave the car refreshed and ready for what's next.
          </h3>
        </div>

        {/* 3 Pillars Grid: Light ice-blue #aecff3 rounded-2xl cards with official 3D assets */}
        <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between items-center pt-10 pb-8 px-6 sm:px-8 rounded-2xl bg-[#aecff3] text-center select-none shadow-xs hover:shadow-md transition-all duration-300 will-change-transform min-h-[340px]"
            >
              <div className="flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl font-['Geist',sans-serif] font-medium text-[#0F1319] mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base font-['Geist',sans-serif] text-[#0F1319]/80 leading-relaxed font-normal max-w-[260px]">
                  {feature.description}
                </p>
              </div>

              {/* Official Blacklane 3D Production Icon */}
              <div className="h-32 sm:h-36 w-full flex items-center justify-center mt-6">
                <img
                  src={feature.image}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== feature.fallback) {
                      target.src = feature.fallback;
                    }
                  }}
                  alt={feature.alt}
                  loading="lazy"
                  className="h-28 sm:h-32 w-auto object-contain drop-shadow-md pointer-events-none select-none transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
