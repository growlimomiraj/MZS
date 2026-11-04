import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CITIES_DATA } from '../constants/data';
import { Search, MapPin, ArrowRight } from 'lucide-react';

interface CitiesPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const CitiesPage: React.FC<CitiesPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('');

  return (
    <div className="bg-white text-[#0F1319]">
      {/* Hero */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
            Worldwide Footprint
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white mb-6 leading-tight">
            Explore 500+ Cities Across 64 Countries
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-normal mb-8">
            Enjoy uniform executive standards, vetted licensed chauffeurs, and fixed transparent pricing wherever you travel.
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search by city or country..."
              className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#0F63BD]"
            />
          </div>
        </div>
      </section>

      {/* Cities by Region */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-16">
          {CITIES_DATA.map((regionGroup, rIdx) => {
            const matchingCities = regionGroup.cities.filter((c) =>
              c.toLowerCase().includes(filter.toLowerCase())
            );

            if (matchingCities.length === 0) return null;

            return (
              <div key={rIdx}>
                <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F1319] border-b border-gray-200 pb-3 mb-8">
                  {regionGroup.region}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {matchingCities.map((city, cIdx) => (
                    <button
                      key={cIdx}
                      onClick={() => onNavigate('/airport-transfer')}
                      className="p-4 rounded-2xl bg-[#F8F9FA] hover:bg-[#0F63BD] text-[#0F1319] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer border border-gray-100"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#0F63BD] group-hover:text-white shrink-0" />
                        <span className="text-sm font-medium">{city}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
