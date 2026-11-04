import React, { useState } from 'react';
import { BookingWidget } from '../components/BookingWidget';
import { BookingState, PageRoute } from '../types';
import { ROUTES_DATA } from '../constants/data';
import { ArrowRight, Check, ChevronDown, Clock, ShieldCheck, MapPin, Sparkles, Phone, Mail } from 'lucide-react';

interface CityToCityPageProps {
  onSearch: (bookingData: BookingState) => void;
  onNavigate: (route: PageRoute) => void;
}

export const CityToCityPage: React.FC<CityToCityPageProps> = ({ onSearch, onNavigate }) => {
  const [activeCityTab, setActiveCityTab] = useState<'all' | 'new-york' | 'california' | 'florida' | 'midwest-texas'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const cityFaqs = [
    {
      q: 'How do I get a quote for a US city-to-city ride?',
      a: 'Getting an instant quote is seamless: enter your pickup address and destination city in our booking widget above. You will immediately see fixed guaranteed rates for all vehicle classes. There are never any surprise tolls or surge pricing.'
    },
    {
      q: 'Can I make stops during a city-to-city journey?',
      a: 'Yes. Our city-to-city rides offer full convenience and flexibility. When booking, simply select "By the hour" if you require custom stopovers, or contact your 24/7 MZS Executive Chauffeurs concierge at (888) 801-7476 to add a midway stop along your corridor.'
    },
    {
      q: 'Is City-to-City faster than regional flying or Amtrak?',
      a: 'When factoring in the time required to travel to the airport, arrive 2 hours prior for TSA security, board, wait for checked luggage, and hail a ride into the city center, an MZS Executive Chauffeurs door-to-door vehicle is often faster, significantly more productive, and completely stress-free.'
    },
    {
      q: 'What is included in the city-to-city fixed rate?',
      a: 'All distance rates are 100% all-inclusive: vehicle fuel, state highway tolls, congestion charges, driver gratuity, and 15 minutes of complimentary wait time are all covered in the price you see.'
    },
    {
      q: 'Can I work while traveling between US cities?',
      a: 'Absolutely. Every MZS Executive Chauffeurs vehicle is equipped with high-speed onboard Wi-Fi, device charging ports, leather executive seating, and absolute privacy so you can take confidential conference calls and work uninterrupted.'
    }
  ];

  const cityRoutes = {
    all: ROUTES_DATA,
    'new-york': [
      { from: 'New York', to: 'East Hampton', duration: '2h 30m', distance: '105 miles', price: '$490', tag: 'Hamptons Getaway' },
      { from: 'New York', to: 'Philadelphia', duration: '1h 50m', distance: '95 miles', price: '$380', tag: 'Northeast Corridor' },
      { from: 'New York', to: 'Greenwich, CT', duration: '1h 10m', distance: '38 miles', price: '$220', tag: 'Suburban Commute' },
      { from: 'New York', to: 'Boston', duration: '4h 15m', distance: '215 miles', price: '$780', tag: 'Executive Express' }
    ],
    california: [
      { from: 'Los Angeles', to: 'San Diego', duration: '2h 15m', distance: '120 miles', price: '$420', tag: 'Southern California' },
      { from: 'Los Angeles', to: 'Palm Springs', duration: '2h 00m', distance: '108 miles', price: '$390', tag: 'Desert Oasis' },
      { from: 'Los Angeles', to: 'Santa Barbara', duration: '1h 45m', distance: '95 miles', price: '$360', tag: 'Coastal Route' },
      { from: 'San Francisco', to: 'Napa Valley', duration: '1h 20m', distance: '58 miles', price: '$320', tag: 'Wine Country' }
    ],
    florida: [
      { from: 'Miami', to: 'Palm Beach', duration: '1h 15m', distance: '72 miles', price: '$260', tag: 'South Florida Corridor' },
      { from: 'Miami', to: 'Fort Lauderdale', duration: '0h 45m', distance: '30 miles', price: '$150', tag: 'Coastal Express' },
      { from: 'Miami', to: 'Naples', duration: '2h 10m', distance: '125 miles', price: '$440', tag: 'Gulf Coast Route' },
      { from: 'Orlando', to: 'Tampa', duration: '1h 30m', distance: '85 miles', price: '$290', tag: 'Central Florida' }
    ],
    'midwest-texas': [
      { from: 'Chicago', to: 'Milwaukee', duration: '1h 35m', distance: '92 miles', price: '$340', tag: 'Midwest Express' },
      { from: 'Chicago', to: 'Lake Geneva', duration: '1h 40m', distance: '80 miles', price: '$310', tag: 'Resort Getaway' },
      { from: 'Dallas', to: 'Austin', duration: '3h 15m', distance: '195 miles', price: '$650', tag: 'Texas Tech Corridor' },
      { from: 'Houston', to: 'Austin', duration: '2h 45m', distance: '165 miles', price: '$560', tag: 'Lone Star Route' }
    ]
  };

  const currentRoutes = cityRoutes[activeCityTab] || ROUTES_DATA;

  return (
    <div className="bg-[#FAF8F5] text-[#0F1319]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 contrast-105 pointer-events-none"
          style={{
            backgroundImage:
              'url(https://images.ctfassets.net/ov8o7v78mnye/4k07hkseEOyBAOdkoEnLYu/e78453a0fd7ae64ca9a4fbdc1b70de53/arrive-in-style-hero5.webp?fm=webp&w=2560&q=85)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/90 via-[#0F1319]/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 border border-white/15">
            <Sparkles className="w-4 h-4 text-[#0066FF]" />
            Nationwide Long Distance Car Service
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            City-to-City Long Distance Car Service across the USA
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Skip crowded airport terminals and delayed regional trains. Arrive refreshed and on time with door-to-door luxury transportation anywhere in the United States.
          </p>

          <BookingWidget onSearch={onSearch} />
        </div>
      </section>

      {/* Official Blacklane Blue Diagram Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-2 block">
            A Better Way Between Cities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-4">
            Long distance car service, the better way between cities
          </h2>
          <p className="text-base sm:text-lg text-[#596372]">
            Say goodbye to security lines, missed train connections, and car rental counters. Experience true door-to-door freedom.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm flex flex-col items-center">
          <img
            src="https://images.ctfassets.net/ov8o7v78mnye/7HW6URLqYIxpjei6OCFBGt/395ca254e05ef5b2e7e1a261be87facd/blacklane_blue_diagram_0689bacfad474d9a97c5635373ae5d6f__2_.webp?fm=webp&w=1200&q=85"
            alt="MZS Executive Chauffeurs City-to-City comparison diagram"
            className="w-full max-w-4xl object-contain rounded-2xl"
          />
        </div>
      </section>

      {/* Popular City-to-City Routes & Region Filter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-2 block">
              Curated US Corridors
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F1319]">
              Featured US City-to-City routes
            </h2>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All US Routes' },
              { id: 'new-york', label: 'New York & Tri-State' },
              { id: 'california', label: 'California' },
              { id: 'florida', label: 'Florida' },
              { id: 'midwest-texas', label: 'Midwest & Texas' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCityTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCityTab === tab.id
                    ? 'bg-[#0F1319] text-white shadow-md'
                    : 'bg-white border border-gray-200 text-[#596372] hover:border-gray-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentRoutes.map((route, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-gray-200 hover:border-[#0066FF] transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066FF] mb-3 block">
                  {route.tag}
                </span>
                <div className="flex items-center gap-2 text-2xl font-serif text-[#0F1319] mb-4">
                  <span>{route.from}</span>
                  <span className="text-gray-300">&rarr;</span>
                  <span>{route.to}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#596372] mb-6 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#0066FF]" />
                    {route.duration}
                  </span>
                  <span>&bull;</span>
                  <span>{route.distance}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-medium">From</span>
                  <span className="text-xl font-bold text-[#0F1319]">{route.price}</span>
                </div>
                <button
                  onClick={() => onNavigate(`/city-to-city/${route.from.toLowerCase().replace(/\s+/g, '-')}-${route.to.toLowerCase().replace(/\s+/g, '-')}` as PageRoute)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0F1319] group-hover:bg-[#0066FF] text-white text-xs font-semibold transition-all shadow-sm"
                >
                  <span>Book route</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-serif text-center text-[#0F1319] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {cityFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 bg-white rounded-2xl overflow-hidden transition-colors shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left font-medium text-lg text-[#0F1319] hover:bg-[#FAF8F5] cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-[#0066FF]' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-sm text-[#596372] leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-[#0F1319] text-white text-center">
          <h3 className="text-xl font-serif mb-2">Need a custom US intercity itinerary?</h3>
          <p className="text-sm text-gray-300 mb-6">Our US dispatch specialists can coordinate multi-day journeys, cross-state travel, and private roadshows.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+18888017476"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#0F1319] hover:bg-gray-100 font-medium text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#0066FF]" />
              (888) 801-7476
            </a>
            <a
              href="mailto:info@mzexecutivechauffeurs.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium text-sm transition-all"
            >
              <Mail className="w-4 h-4 text-[#0066FF]" />
              info@mzexecutivechauffeurs.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
