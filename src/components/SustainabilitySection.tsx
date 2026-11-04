import React from 'react';
import { PageRoute } from '../types';

interface SustainabilitySectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ onNavigate }) => {
  return (
    <section className="bg-white text-[#0F1319] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto text-center">
        <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#0F1319] mb-10">
          Sustainability partners
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 lg:gap-24 opacity-85 hover:opacity-100 transition-opacity">
          {/* Climate Pledge */}
          <button
            onClick={() => onNavigate('/sustainability')}
            className="hover:scale-105 transition-transform cursor-pointer focus:outline-none"
            aria-label="The Climate Pledge"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold tracking-wide text-[#1B945A] uppercase border-b-2 border-[#1B945A] pb-0.5">
                The Climate Pledge
              </span>
            </div>
          </button>

          {/* Leaders for Climate Action */}
          <button
            onClick={() => onNavigate('/sustainability')}
            className="hover:scale-105 transition-transform cursor-pointer focus:outline-none"
            aria-label="Leaders for Climate Action"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold tracking-wide text-gray-900 uppercase border-b-2 border-gray-900 pb-0.5">
                Leaders for Climate Action
              </span>
            </div>
          </button>

          {/* South Pole */}
          <button
            onClick={() => onNavigate('/sustainability')}
            className="hover:scale-105 transition-transform cursor-pointer focus:outline-none"
            aria-label="South Pole"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold tracking-wide text-[#2E528F] uppercase border-b-2 border-[#2E528F] pb-0.5">
                South Pole
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

