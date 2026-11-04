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
        scale: 0.92,
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

      // 2. Background parallax on scroll
      if (bgImgRef.current && sectionRef.current) {
        gsap.to(bgImgRef.current, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 3. Scrub widget out as user scrolls past hero
      if (widgetContainerRef.current && sectionRef.current) {
        gsap.to(widgetContainerRef.current, {
          y: -80,
          opacity: 0.15,
          ease: 'none',
          scrollTrigger: {
            trigger: widgetContainerRef.current,
            start: 'bottom 65%',
            end: '+=450',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-end items-center pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0F1319]"
    >
      {/* Background Picture with Parallax */}
      <picture className="absolute inset-0 w-full h-[115%] -top-[7%] pointer-events-none select-none">
        <source
          media="(min-width: 1024px)"
          srcSet="https://static.blacklane.com/assets/_next/static/media/bg.01a8f1ce1808c5e8.webp"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="https://static.blacklane.com/assets/_next/static/media/bg-mobile.bec167bf82cf67ed.webp"
        />
        <img
          ref={bgImgRef}
          src="https://static.blacklane.com/assets/_next/static/media/bg.01a8f1ce1808c5e8.webp"
          alt="Your chauffeur awaits"
          className="w-full h-full object-cover object-[center_32%] brightness-95 contrast-[1.03]"
          loading="eager"
        />
      </picture>

      {/* Subtle top & overall gradient for navigation readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/20 pointer-events-none" />

      {/* Content Container positioned in lower portion to match reference */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Title: Exact Ice Blue color #aecff3 and PP Fragment typography */}
        <h1
          ref={titleRef}
          className="text-3xl sm:text-5xl lg:text-[54px] font-['PP_Fragment',serif] font-normal text-[#aecff3] tracking-tight leading-[1.12] mb-4 sm:mb-5 max-w-4xl drop-shadow-md will-change-transform"
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
