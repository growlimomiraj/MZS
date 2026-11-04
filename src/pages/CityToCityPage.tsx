import React, { useState } from 'react';
import { BookingWidget } from '../components/BookingWidget';
import { BookingState, PageRoute } from '../types';
import { ROUTES_DATA } from '../constants/data';
import { ArrowRight, Check, ChevronDown, Clock, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

interface CityToCityPageProps {
  onSearch: (bookingData: BookingState) => void;
  onNavigate: (route: PageRoute) => void;
}

export const CityToCityPage: React.FC<CityToCityPageProps> = ({ onSearch, onNavigate }) => {
  const [activeCityTab, setActiveCityTab] = useState<'all' | 'new-york' | 'london' | 'paris' | 'dubai'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const cityFaqs = [
    {
      q: 'How do I get a quote for a city-to-city ride?',
      a: 'Getting an instant quote is seamless: enter your pickup address and destination city in our booking widget above. You will immediately see fixed guaranteed rates for all vehicle classes. There are never any surprise tolls or surge pricing.'
    },
    {
      q: 'Can I make stops during a city-to-city journey?',
      a: 'Yes. Our city-to-city rides offer full convenience and flexibility. When booking, simply select "By the hour" if you require custom stopovers, or contact your 24/7 MZS concierge to add a midway stop along your corridor.'
    },
    {
      q: 'Is City-to-City faster than flying or taking the train?',
      a: 'When factoring in the time required to travel to the airport, arrive 2 hours prior for security, board, wait for checked luggage, and hail a ride into the city center, an MZS door-to-door chauffeur is often faster, significantly more productive, and completely stress-free.'
    },
    {
      q: 'What is included in the city-to-city fixed rate?',
      a: 'All distance rates are 100% all-inclusive: vehicle fuel, road tolls, congestion charges, driver gratuity, and 15 minutes of complimentary wait time are all covered in the price you see.'
    },
    {
      q: 'Can I work while traveling between cities?',
      a: 'Absolutely. Every MZS vehicle is equipped with high-speed onboard Wi-Fi, device charging ports, leather executive seating, and absolute privacy so you can take confidential phone calls and work uninterrupted.'
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
    london: [
      { from: 'London', to: 'Oxford', duration: '1h 45m', distance: '56 miles', price: '£280', tag: 'University Hub' },
      { from: 'London', to: 'Cambridge', duration: '1h 35m', distance: '62 miles', price: '£295', tag: 'Tech Corridor' },
      { from: 'London', to: 'Bristol', duration: '2h 20m', distance: '118 miles', price: '£360', tag: 'West Country' },
      { from: 'London', to: 'Southampton', duration: '1h 55m', distance: '78 miles', price: '£310', tag: 'Cruise Terminal' }
    ],
    paris: [
      { from: 'Paris', to: 'Reims', duration: '1h 45m', distance: '90 miles', price: '€340', tag: 'Champagne Region' },
      { from: 'Paris', to: 'Deauville / Normandy', duration: '2h 20m', distance: '125 miles', price: '€450', tag: 'Coast Retreat' },
      { from: 'Paris', to: 'Brussels', duration: '3h 30m', distance: '190 miles', price: '€680', tag: 'Cross-Border Capital' }
    ],
    dubai: [
      { from: 'Dubai', to: 'Abu Dhabi', duration: '1h 20m', distance: '86 miles', price: 'AED 620', tag: 'Capital Express' },
      { from: 'Dubai', to: 'Ras Al Khaimah', duration: '1h 15m', distance: '70 miles', price: 'AED 540', tag: 'Northern Emirates' }
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
            Long Distance Car Service
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            City-to-City Long Distance Car Service
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Skip crowded airport terminals and delayed regional trains. Arrive refreshed and on time with door-to-door luxury transportation.
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
            alt="MZS City-to-City comparison diagram"
            className="w-full max-w-4xl object-contain rounded-2xl"
          />
        </div>
      </section>

      {/* Popular City-to-City Routes & City Filter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-2 block">
              Curated Corridors
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F1319]">
              Featured City-to-City routes
            </h2>
          </div>

          {/* City Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Routes' },
              { id: 'new-york', label: 'New York' },
              { id: 'london', label: 'London' },
              { id: 'paris', label: 'Paris' },
              { id: 'dubai', label: 'Dubai' }
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

      {/* Global Reach Section with Blue Gradient Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-3 block">
              Global Reach
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-6 leading-tight">
              Premium transportation across cities worldwide
            </h2>
            <p className="text-base sm:text-lg text-[#596372] leading-relaxed mb-6 font-light">
              Available in over 60 countries, MZS ensures seamless and comfortable travel with vetted professional chauffeurs and high-quality vehicles on hundreds of intercity corridors worldwide.
            </p>
            <p className="text-sm sm:text-base text-[#596372] leading-relaxed mb-8">
              Whether traveling between European capitals, navigating the UAE highway corridor, or taking a weekend trip from Manhattan to the Hamptons, MZS offers your private rolling office.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-gray-100">
                <div className="text-3xl font-serif font-normal text-[#0066FF] mb-1">60+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Countries covered</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-100">
                <div className="text-3xl font-serif font-normal text-[#0066FF] mb-1">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Carbon offset</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-[#0A1628] p-4">
            <img
              src="https://images.ctfassets.net/ov8o7v78mnye/WpnuZlA0b1Dy8QpYNyPv1/1f3b44cb49711f74aed280ac5461edaa/blue_gradient_map_be4a5e4afb664db398f8dfb3523f1f25.webp?fm=webp&w=1200&q=85"
              alt="MZS global city-to-city map"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
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
      </section>
    </div>
  );
};
