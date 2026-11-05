import React from 'react';
import { WorldwideIcon, HighEndVehiclesIcon, SafeTravelsIcon } from './ExcellenceIcons';

interface FeatureItem {
  title: string;
  description: string;
  image: string;
  alt: string;
  svgFallback: React.ReactNode;
}

const FEATURES: FeatureItem[] = [
  {
    title: 'Nationwide coverage',
    description: 'Licensed professional chauffeurs across the USA',
    image: '/assets/excellence/like.png',
    alt: 'Nationwide coverage across the USA',
    svgFallback: <WorldwideIcon className="h-28 sm:h-32 w-auto object-contain" />,
  },
  {
    title: 'High-end vehicles',
    description: 'Only the best recent models',
    image: '/assets/excellence/cloud.png',
    alt: 'High-end vehicles',
    svgFallback: <HighEndVehiclesIcon className="h-28 sm:h-32 w-auto object-contain" />,
  },
  {
    title: 'Safe travels',
    description: 'Trained professionals and reliable pickups',
    image: '/assets/excellence/lock.png',
    alt: 'Safe travels',
    svgFallback: <SafeTravelsIcon className="h-28 sm:h-32 w-auto object-contain" />,
  },
];

export const ExcellenceSection: React.FC = () => {
  return (
    <section className="relative z-10 bg-[#fbf8f2] text-[#0F1319] py-20 lg:py-28 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1170px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-[72px] font-['PP_Fragment',serif] font-normal text-[#0F1319] tracking-tight leading-[1.06] mb-4 select-none">
            Expect excellence.
          </h2>
          <h3 className="text-base sm:text-lg lg:text-xl font-['Geist',sans-serif] text-[#0F1319] font-medium leading-relaxed select-none">
            Leave the car refreshed and ready for what's next.
          </h3>
        </div>

        {/* 3 Pillars Grid: ALWAYS 100% VISIBLE ice-blue #aecff3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between items-center pt-10 pb-8 px-6 sm:px-8 rounded-2xl bg-[#aecff3] text-center select-none shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[340px]"
            >
              <div className="flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl font-['Geist',sans-serif] font-medium text-[#0F1319] mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base font-['Geist',sans-serif] text-[#0F1319]/80 leading-relaxed font-normal max-w-[260px]">
                  {feature.description}
                </p>
              </div>

              {/* 3D Icon with SVG fallback */}
              <div className="h-32 sm:h-36 w-full flex items-center justify-center mt-6">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  loading="eager"
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
