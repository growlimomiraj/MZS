import React from 'react';
import { PageRoute } from '../types';

interface SustainabilitySectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative z-10 bg-[#fbf8f2] text-[#0F1319] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#0F1319]/10">
      <div className="max-w-[1170px] mx-auto text-center">
        <h3 className="text-xl sm:text-2xl font-['PP_Fragment',serif] font-normal text-[#0F1319] mb-8 sm:mb-12">
          Sustainability partners
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 lg:gap-24 opacity-85 hover:opacity-100 transition-opacity">
          {/* Climate Pledge */}
          <button
            onClick={() => onNavigate('/sustainability')}
            className="hover:scale-105 transition-transform cursor-pointer focus:outline-none"
            aria-label="The Climate Pledge"
          >
            <img
              src="/assets/sustainability/climate-pledge.svg"
              alt="The Climate Pledge"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </button>

          {/* Leaders for Climate Action */}
          <button
            onClick={() => onNavigate('/sustainability')}
            className="hover:scale-105 transition-transform cursor-pointer focus:outline-none"
            aria-label="Leaders for Climate Action"
          >
            <img
              src="/assets/sustainability/leaders.svg"
              alt="Leaders for Climate Action"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </button>

          {/* South Pole */}
          <button
            onClick={() => onNavigate('/sustainability')}
            className="hover:scale-105 transition-transform cursor-pointer focus:outline-none"
            aria-label="South Pole"
          >
            <img
              src="/assets/sustainability/south-pole.svg"
              alt="South Pole"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
