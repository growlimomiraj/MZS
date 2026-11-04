import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CITIES_DATA } from '../constants/data';
import { Search, MapPin, ArrowRight, Globe } from 'lucide-react';

interface CitiesPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const CitiesPage: React.FC<CitiesPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('');

  const featuredCities = [
    { name: 'New York', country: 'United States', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80', routes: '21 routes' },
    { name: 'London', country: 'United Kingdom', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80', routes: '25 routes' },
    { name: 'Paris', country: 'France', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', routes: '16 routes' },
    { name: 'Dubai', country: 'United Arab Emirates', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', routes: '15 routes' },
    { name: 'Tokyo', country: 'Japan', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', routes: '12 routes' },
    { name: 'Los Angeles', country: 'United States', img: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=600&q=80', routes: '18 routes' }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#0F1319]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 contrast-105 pointer-events-none"
          style={{
            backgroundImage:
              'url(https://images.ctfassets.net/ov8o7v78mnye/WpnuZlA0b1Dy8QpYNyPv1/1f3b44cb49711f74aed280ac5461edaa/blue_gradient_map_be4a5e4afb664db398f8dfb3523f1f25.webp?fm=webp&w=2560&q=85)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/90 via-[#0F1319]/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 border border-white/15">
            <Globe className="w-4 h-4 text-[#0066FF]" />
            Global City Network
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white mb-6 leading-tight">
            Explore 500+ Cities Across 60+ Countries
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light mb-8">
            Experience uniform executive standards, vetted licensed chauffeurs, and guaranteed transparent rates wherever your journey takes you.
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search by city or country..."
              className="w-full pl-11 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#0066FF]"
            />
          </div>
        </div>
      </section>

      {/* Featured Cities Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-2 block">
            Most Visited
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1319]">
            Top global destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCities.map((c, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate('airport-transfer')}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-normal">{c.name}</h3>
                  <p className="text-xs text-gray-300">{c.country} &bull; {c.routes}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#0066FF] transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complete Cities Directory by Region */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="space-y-16">
          {CITIES_DATA.map((regionGroup, rIdx) => {
            const matchingCities = regionGroup.cities.filter((c) =>
              c.toLowerCase().includes(filter.toLowerCase())
            );

            if (matchingCities.length === 0) return null;

            return (
              <div key={rIdx}>
                <h3 className="text-2xl font-serif font-normal text-[#0F1319] border-b border-gray-200 pb-3 mb-8">
                  {regionGroup.region}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {matchingCities.map((city, cIdx) => (
                    <button
                      key={cIdx}
                      onClick={() => onNavigate('airport-transfer')}
                      className="p-4 rounded-2xl bg-white hover:bg-[#0066FF] text-[#0F1319] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer border border-gray-200 shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#0066FF] group-hover:text-white shrink-0" />
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
