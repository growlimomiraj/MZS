import React, { useEffect, useRef } from 'react';
import { BookingWidget } from './BookingWidget';
import { BookingState } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onSearch: (bookingData: BookingState) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.94,
        duration: 1.1,
      });

      tl.from(
        widgetContainerRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.9,
        },
        '-=0.6'
      );

      // 2. Scrub widget and title up and out as user scrolls past hero
      if (widgetContainerRef.current) {
        gsap.to(widgetContainerRef.current, {
          y: -180,
          opacity: 0,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: widgetContainerRef.current,
            start: 'bottom 65%',
            end: '+=450',
            scrub: true,
          },
        });
      }

      if (titleRef.current) {
        gsap.to(titleRef.current, {
          y: -120,
          opacity: 0,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'bottom 50%',
            end: '+=350',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-end items-center pb-8 sm:pb-12 lg:pb-14 px-4 sm:px-6 lg:px-8 bg-[#0F1319]"
    >
      {/* Sticky Background Container */}
      <div className="absolute inset-0 [clip-path:inset(0)] pointer-events-none select-none z-0">
        <picture className="w-full h-full">
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/hero/bg.webp"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/assets/hero/bg-mobile.webp"
          />
          <img
            ref={bgImgRef}
            src="/assets/hero/bg.webp"
            alt="MZS Executive Chauffeurs"
            className="fixed max-lg:absolute inset-0 w-full h-full object-cover object-[center_32%]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>

      {/* Content Container positioned in lower portion to match reference */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Title: Exact Ice Blue color #aecff3 and PP Fragment typography */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-[56px] font-['PP_Fragment',serif] font-normal text-[#aecff3] tracking-tight leading-[1.08] mb-4 sm:mb-5 max-w-4xl drop-shadow-md will-change-transform select-none"
        >
          Your chauffeur awaits.
        </h1>

        {/* Booking Form Widget Container */}
        <div ref={widgetContainerRef} className="w-full will-change-transform">
          <BookingWidget onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
};
