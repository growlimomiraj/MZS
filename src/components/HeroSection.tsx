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
      // Gentle entrance animation with clearProps: 'all' to guarantee it is always visible
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 25,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }

      if (widgetContainerRef.current) {
        gsap.from(widgetContainerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: 0.1,
          ease: 'power2.out',
          clearProps: 'all',
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
            className="fixed max-lg:absolute inset-0 w-full h-full object-cover object-[center_28%] max-lg:object-[center_top]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Subtle cinematic gradient to enhance typography readability and luxury contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/80 via-[#0F1319]/20 to-transparent pointer-events-none" />
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
        <div id="booking-widget" ref={widgetContainerRef} className="w-full">
          <BookingWidget onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
};
