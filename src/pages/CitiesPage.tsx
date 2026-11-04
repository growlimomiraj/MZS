import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CITIES_DATA } from '../constants/data';
import { Search, MapPin, ArrowRight, ShieldCheck, Phone, Mail } from 'lucide-react';

interface CitiesPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const CitiesPage: React.FC<CitiesPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('');

  const featuredCities = [
    {
      name: 'New York City',
      state: 'New York',
      img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
      routes: '28+ regional routes',
      airports: 'JFK • LGA • EWR • TEB FBO',
    },
    {
      name: 'Los Angeles',
      state: 'California',
      img: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=800&q=80',
      routes: '24+ regional routes',
      airports: 'LAX • BUR • VNY FBO • SNA',
    },
    {
      name: 'Miami & Palm Beach',
      state: 'Florida',
      img: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=800&q=80',
      routes: '18+ regional routes',
      airports: 'MIA • FLL • PBI • OPF FBO',
    },
    {
      name: 'Chicago',
      state: 'Illinois',
      img: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=800&q=80',
      routes: '16+ regional routes',
      airports: 'ORD • MDW • PWK FBO',
    },
    {
      name: 'San Francisco & Bay Area',
      state: 'California',
      img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
      routes: '20+ regional routes',
      airports: 'SFO • OAK • SJC • PAO',
    },
    {
      name: 'Las Vegas',
      state: 'Nevada',
      img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
      routes: '12+ regional routes',
      airports: 'LAS • HND • VGT FBO',
    },
  ];

  const filteredRegions = CITIES_DATA.map((reg) => ({
    ...reg,
    cities: reg.cities.filter((c) =>
      c.toLowerCase().includes(filter.toLowerCase()) ||
      reg.region.toLowerCase().includes(filter.toLowerCase())
    ),
  })).filter((reg) => reg.cities.length > 0);

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
            <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
            US Nationwide Executive Coverage
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white mb-6 leading-tight">
            Chauffeur Services in Premier US Cities
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light mb-8">
            Experience uniform executive standards, licensed commercial chauffeurs, and transparent fixed pricing across every major metropolitan market in the United States.
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search US cities or regions..."
              className="w-full pl-11 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#0066FF]"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300">
            <a href="tel:+18888017476" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 transition-all text-white">
              <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
              (888) 801-7476
            </a>
            <a href="mailto:info@mzexecutivechauffeurs.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 transition-all text-white">
              <Mail className="w-3.5 h-3.5 text-[#0066FF]" />
              info@mzexecutivechauffeurs.com
            </a>
          </div>
        </div>
      </section>

      {/* Featured Cities Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-2 block">
            Nationwide Hubs
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1319]">
            Top US Metros & Airport Hubs
          </h2>
          <p className="text-sm text-[#596372] mt-2">
            Seamless private ground transfers with MZS Executive Chauffeurs
          </p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-normal">{c.name}</h3>
                  <p className="text-xs text-gray-300 mb-1">{c.state} &bull; {c.routes}</p>
                  <p className="text-[11px] text-gray-400 font-mono">{c.airports}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#0066FF] transition-colors shrink-0 ml-3">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complete US Cities Directory by Region */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="space-y-16">
          {filteredRegions.map((regionGroup, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-6 h-6 text-[#0066FF]" />
                <h3 className="text-2xl sm:text-3xl font-serif text-[#0F1319]">
                  {regionGroup.region}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {regionGroup.cities.map((city, cIdx) => (
                  <div
                    key={cIdx}
                    onClick={() => onNavigate('city-to-city')}
                    className="p-4 rounded-2xl bg-white border border-gray-200 hover:border-[#0066FF] hover:shadow-md transition-all cursor-pointer group"
                  >
                    <span className="text-sm font-medium text-gray-800 group-hover:text-[#0066FF] transition-colors block">
                      {city}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                      MZS Executive <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Bar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-gray-200">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F1319] text-white">
          <h3 className="text-2xl sm:text-3xl font-serif mb-3">
            Looking for a customized US route or city?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-8 font-light">
            Our 24/7 US dispatch desk can arrange licensed executive chauffeurs for any city, private airport, or bespoke multi-city itinerary.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+18888017476"
              className="px-6 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-sm transition-all shadow-md inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call (888) 801-7476
            </a>
            <a
              href="mailto:info@mzexecutivechauffeurs.com"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/20 inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              info@mzexecutivechauffeurs.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
