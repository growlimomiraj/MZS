import React from 'react';
import { PageRoute } from '../types';
import { Globe, Users, Shield, Leaf, Award } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-[#0F1319]">
      {/* Hero */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
            Our Story & Global Mission
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-tight">
            Peace of mind for every journey.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Founded in Berlin in 2011, MZS has connected discerning travelers with licensed, top-tier chauffeurs across 500+ cities worldwide.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-16 bg-[#F8F9FA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-serif font-bold text-[#0F63BD] mb-1">500+</div>
            <div className="text-sm text-[#666F7B]">Global Cities</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-serif font-bold text-[#0F63BD] mb-1">64+</div>
            <div className="text-sm text-[#666F7B]">Countries Worldwide</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-serif font-bold text-[#0F63BD] mb-1">100%</div>
            <div className="text-sm text-[#666F7B]">Carbon Neutral Since 2017</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-serif font-bold text-[#0F63BD] mb-1">4.9/5</div>
            <div className="text-sm text-[#666F7B]">Guest Satisfaction Rating</div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0F1319] mb-4">
              Redefining global executive mobility
            </h2>
            <p className="text-[#666F7B] leading-relaxed mb-4 text-base">
              Travel should be an experience of absolute calm and elevated productivity, not friction and uncertainty. When you step off a flight in an unfamiliar city, you shouldn't have to worry about taxi lines, language barriers, or surge pricing spikes.
            </p>
            <p className="text-[#666F7B] leading-relaxed text-base">
              With MZS, you are met by a courteous professional in a pristine luxury vehicle who knows the city intimately, tracks your flight in real time, and guarantees your comfort from touchdown to final destination.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-xl">
            <img
              src="https://static.blacklane.com/assets/_next/static/media/bg.01a8f1ce1808c5e8.webp"
              alt="MZS Executive Chauffeur"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

