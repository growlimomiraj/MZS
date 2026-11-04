import React from 'react';

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
  return (
    <section className="bg-white text-[#0F1319] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        {/* Headings */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-serif font-normal text-[#0F1319] tracking-tight leading-[1.1] mb-6">
            Step in. Breathe out.
          </h2>
          <h3 className="text-xl sm:text-2xl text-[#666F7B] font-normal leading-relaxed">
            Thoughtful details and discreet service transform every journey into your personal sanctuary.
          </h3>
        </div>

        {/* 3 Large Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCES.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-3xl overflow-hidden bg-transparent"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-serif font-normal text-[#0F1319] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#666F7B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
