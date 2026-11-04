import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    title: 'A welcome like no other',
    description:
      'The door is opened for you. Your luggage is stowed. Everything is taken care of.',
    image: 'https://static.blacklane.com/assets/_next/static/media/ride-1.510c61ecb0d86e20.webp',
  },
  {
    title: 'You set the tone',
    description:
      'Sit back and relax. Music and temperature will be adjusted to your preferences.',
    image: 'https://static.blacklane.com/assets/_next/static/media/ride-2.1ffe259f4c10fd5e.webp',
  },
  {
    title: 'Recharge your batteries',
    description:
      'Stay connected on the go with universal chargers for iOS and Android.',
    image: 'https://static.blacklane.com/assets/_next/static/media/ride-3.232eb40d5ccb6f01.webp',
  },
];

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const stackContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title scrub in on scroll
      if (titleRef.current && subtitleRef.current) {
        const titleTl = gsap.timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 1.5,
          },
        });

        titleTl.from(titleRef.current, {
          y: 70,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        });

        titleTl.from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
          },
          '-=0.7'
        );
      }

      // 2. Desktop Pinned Stack Unpeel Scroll Animation
      const isDesktop = window.innerWidth >= 1024;
      if (isDesktop && stackContainerRef.current) {
        // Set descending z-index so first card is on top
        cardRefs.forEach((ref, idx) => {
          if (ref.current) {
            gsap.set(ref.current, { zIndex: cardRefs.length - idx });
          }
        });

        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: stackContainerRef.current,
            start: 'top 12%',
            end: '+=200%',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Unpeel card 0, then card 1
        cardRefs.forEach((ref, idx) => {
          if (ref.current && idx < cardRefs.length - 1) {
            pinTl.to(
              ref.current,
              {
                yPercent: -115,
                ease: 'power1.inOut',
                duration: 1,
              },
              idx
            );
          }
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
        <div className="max-w-3xl mb-14 lg:mb-18">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-[64px] font-serif font-normal text-[#0F1319] tracking-tight leading-[1.08] mb-6 will-change-transform"
          >
            Step in. Breathe out.
          </h2>
          <h3
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-[#666F7B] font-normal leading-relaxed will-change-transform"
          >
            Thoughtful details and discreet service transform every journey into your personal sanctuary.
          </h3>
        </div>

        {/* Desktop Pinned Card Stack (< 1024px falls back to horizontal scroll) */}
        <div className="hidden lg:block">
          <div
            ref={stackContainerRef}
            className="relative w-full h-[620px] rounded-[36px] overflow-hidden bg-black shadow-2xl"
          >
            {EXPERIENCES.map((item, idx) => (
              <div
                key={idx}
                ref={cardRefs[idx]}
                className="absolute inset-0 w-full h-full rounded-[36px] overflow-hidden will-change-transform flex flex-col justify-end p-12 text-white bg-black select-none"
              >
                {/* Full-bleed background photography */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.82] contrast-[1.08]"
                />

                {/* Dark gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Content Overlay */}
                <div className="relative z-10 max-w-xl">
                  <span className="text-xs font-semibold tracking-wider uppercase text-gray-300 mb-2 block">
                    Sanctuary Detail 0{idx + 1}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet View (Touch scroll snap) */}
        <div className="lg:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar">
          {EXPERIENCES.map((item, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[420px] shrink-0 snap-start flex flex-col rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-[#0F1319] mb-2">{item.title}</h3>
                <p className="text-sm text-[#666F7B] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
