import React from 'react';
import { WorldwideIcon, HighEndVehiclesIcon, SafeTravelsIcon } from './ExcellenceIcons';

export const ExcellenceSection: React.FC = () => {
  return (
    <section className="bg-white text-[#0F1319] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        {/* Headings */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-serif font-normal text-[#0F1319] tracking-tight leading-[1.1] mb-4">
            Expect excellence.
          </h2>
          <h3 className="text-xl sm:text-2xl text-[#666F7B] font-normal leading-relaxed">
            Leave the car refreshed and ready for what's next.
          </h3>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#F8F9FA] border border-gray-100 hover:border-gray-300 transition-all duration-300">
            <div>
              <h3 className="text-2xl font-serif font-normal text-[#0F1319] mb-2">
                Available worldwide
              </h3>
              <p className="text-base text-[#666F7B] mb-8">
                Expert local chauffeurs in 500+ cities
              </p>
            </div>
            <div className="h-40 flex items-center justify-center p-2">
              <WorldwideIcon className="max-h-full max-w-full drop-shadow-md" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#F8F9FA] border border-gray-100 hover:border-gray-300 transition-all duration-300">
            <div>
              <h3 className="text-2xl font-serif font-normal text-[#0F1319] mb-2">
                High-end vehicles
              </h3>
              <p className="text-base text-[#666F7B] mb-8">
                Only the best recent models
              </p>
            </div>
            <div className="h-40 flex items-center justify-center p-2">
              <HighEndVehiclesIcon className="max-h-full max-w-full drop-shadow-md" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#F8F9FA] border border-gray-100 hover:border-gray-300 transition-all duration-300">
            <div>
              <h3 className="text-2xl font-serif font-normal text-[#0F1319] mb-2">
                Safe travels
              </h3>
              <p className="text-base text-[#666F7B] mb-8">
                Trained professionals and reliable pickups
              </p>
            </div>
            <div className="h-40 flex items-center justify-center p-2">
              <SafeTravelsIcon className="max-h-full max-w-full drop-shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
