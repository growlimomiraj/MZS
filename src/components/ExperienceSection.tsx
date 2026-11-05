import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    title: 'A welcome like no other',
    description:
      'The door is opened for you. Your luggage is stowed. Everything is taken care of.',
    image: '/assets/experience/ride-1.webp',
  },
  {
    title: 'You set the tone',
    description:
      'Sit back and relax. Music and temperature will be adjusted to your preferences.',
    image: '/assets/experience/ride-2.webp',
  },
  {
    title: 'Recharge your batteries',
    description:
      'Stay connected on the go with universal chargers for iOS and Android.',
    image: '/assets/experience/ride-3.webp',
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
      // 1. Title smooth entrance
      if (titleRef.current && subtitleRef.current) {
        gsap.from(titleRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          },
        });

        gsap.from(subtitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          },
        });
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
            start: 'top 84px',
            end: '+=200%',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Unpeel card 0, then card 1 in sequence
        cardRefs.forEach((ref, idx) => {
          if (ref.current && idx < cardRefs.length - 1) {
            pinTl.to(
              ref.current,
              {
                yPercent: -110,
                ease: 'none',
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
      className="relative z-10 bg-white text-[#0F1319] pt-20 pb-16 lg:pt-28 lg:pb-24 px-4 sm:px-8 lg:px-12 border-t border-gray-100 overflow-hidden"
    >
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Headings */}
        <div className="max-w-[1170px] mx-auto text-center mb-12 lg:mb-16">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-5xl lg:text-[56px] font-['PP_Fragment',serif] font-normal text-[#0F1319] tracking-tight leading-[1.12] mb-4 will-change-transform max-w-[800px] mx-auto"
          >
            Step in. Breathe out.
          </h2>
          <h3
            ref={subtitleRef}
            className="text-base sm:text-xl lg:text-[22px] text-[#666F7B] font-normal leading-relaxed will-change-transform max-w-[800px] mx-auto"
          >
            Thoughtful details and discreet service transform every journey into your personal sanctuary.
          </h3>
        </div>

        {/* Desktop Pinned Card Stack - Full width matching user screenshot */}
        <div className="hidden lg:block w-full">
          <div
            ref={stackContainerRef}
            className="relative w-full h-[calc(100vh-140px)] min-h-[600px] max-h-[800px] rounded-2xl overflow-hidden bg-black shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
          >
            {EXPERIENCES.map((item, idx) => (
              <div
                key={idx}
                ref={cardRefs[idx]}
                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden will-change-transform flex flex-col justify-end p-8 sm:p-12 lg:p-14 text-white bg-black select-none"
              >
                {/* Full-bleed background photography */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.88] contrast-[1.04]"
                />

                {/* Dark gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Frosted Glass Content Box matching video */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 p-6 sm:p-7 rounded-xl backdrop-blur-xl bg-black/45 border border-white/20 text-white z-10 select-none shadow-lg text-left">
                  <h3 className="text-2xl sm:text-3xl font-['PP_Fragment',serif] font-normal text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal max-w-2xl">
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
              className="w-[88vw] sm:w-[480px] shrink-0 snap-start flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100"
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
                <h3 className="text-xl sm:text-2xl font-serif text-[#0F1319] mb-2">{item.title}</h3>
                <p className="text-sm text-[#666F7B] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
