import React from 'react';
import { BookingWidget } from './BookingWidget';
import { BookingState } from '../types';

interface HeroSectionProps {
  onSearch: (bookingData: BookingState) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0F1319]">
      {/* Background Picture */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <source
          media="(min-width: 1024px)"
          srcSet="https://static.blacklane.com/assets/_next/static/media/bg.01a8f1ce1808c5e8.webp"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="https://static.blacklane.com/assets/_next/static/media/bg-mobile.bec167bf82cf67ed.webp"
        />
        <img
          src="https://static.blacklane.com/assets/_next/static/media/bg.01a8f1ce1808c5e8.webp"
          alt="Your chauffeur awaits"
          className="w-full h-full object-cover object-center brightness-90 contrast-[1.05]"
          loading="eager"
        />
      </picture>

      {/* Dark gradient overlay for luxury contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319] via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center mt-6 sm:mt-12">
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-serif font-normal text-white tracking-tight leading-[1.08] mb-8 sm:mb-12 max-w-4xl drop-shadow-md">
          Your chauffeur awaits.
        </h1>

        {/* Booking Form Widget */}
        <BookingWidget onSearch={onSearch} />
      </div>

      {/* Bottom fade into light section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#FFFFFF] pointer-events-none" />
    </section>
  );
};
