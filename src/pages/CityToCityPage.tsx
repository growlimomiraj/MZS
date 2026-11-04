import React from 'react';
import { BookingWidget } from '../components/BookingWidget';
import { BookingState, PageRoute } from '../types';
import { ROUTES_DATA } from '../constants/data';
import { ArrowRight, Check, X, Shield, Clock, Wifi } from 'lucide-react';

interface CityToCityPageProps {
  onSearch: (bookingData: BookingState) => void;
  onNavigate: (route: PageRoute) => void;
}

export const CityToCityPage: React.FC<CityToCityPageProps> = ({ onSearch, onNavigate }) => {
  return (
    <div className="bg-white text-[#0F1319]">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 contrast-105 pointer-events-none"
          style={{
            backgroundImage:
              'url(https://static.blacklane.com/assets/_next/static/media/3.a05cc4329bbe2ee0.webp)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319] via-black/40 to-black/70 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
            Long-Distance Chauffeured Travel
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-normal text-white mb-6 leading-tight">
            Between cities, done better.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-normal">
            Skip crowded airports and busy train stations. Enjoy seamless door-to-door luxury between top metropolitan centers.
          </p>

          <BookingWidget onSearch={onSearch} />
        </div>
      </section>

      {/* Popular City-to-City Routes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F1319] mb-4">
            Popular City-to-City Routes
          </h2>
          <p className="text-lg text-[#666F7B]">
            Fixed guaranteed rates with zero hidden surge fees. Door-to-door comfort on your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROUTES_DATA.map((route, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl border border-gray-200 hover:border-[#0F63BD] transition-all hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F63BD] mb-2 block">
                  {route.tag}
                </span>
                <div className="flex items-center gap-2 text-2xl font-serif text-[#0F1319] mb-3">
                  <span>{route.from}</span>
                  <span className="text-gray-400">&rarr;</span>
                  <span>{route.to}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                  <span>Approx. {route.duration}</span>
                  <span>&bull;</span>
                  <span>{route.distance}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <span className="text-xs text-gray-400 block">From</span>
                  <span className="text-xl font-bold text-[#0F1319]">{route.price}</span>
                </div>
                <button
                  onClick={() => onNavigate(`/city-to-city/${route.from.toLowerCase().replace(/\s+/g, '-')}-${route.to.toLowerCase().replace(/\s+/g, '-')}` as PageRoute)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F1319] group-hover:bg-[#0F63BD] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Book route</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table: MZS vs Flights vs Trains */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-gray-100">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-12">
          Why choose City-to-City over planes or trains?
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Feature
                </th>
                <th className="py-4 px-6 text-base font-serif font-bold text-[#0F63BD]">
                  MZS Chauffeur
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Short-Haul Flight
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Regional Train
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              <tr>
                <td className="py-4 px-6 font-medium text-[#0F1319]">True Door-to-Door Service</td>
                <td className="py-4 px-6 text-[#0F63BD] font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Yes
                </td>
                <td className="py-4 px-6 text-gray-400">No (Taxi + Terminal)</td>
                <td className="py-4 px-6 text-gray-400">No (Station to Station)</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium text-[#0F1319]">Productive Private Cabin</td>
                <td className="py-4 px-6 text-[#0F63BD] font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> 100% Private
                </td>
                <td className="py-4 px-6 text-gray-400">Crowded Cabin</td>
                <td className="py-4 px-6 text-gray-400">Shared Carriage</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium text-[#0F1319]">No Security Screening Delays</td>
                <td className="py-4 px-6 text-[#0F63BD] font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Zero Wait
                </td>
                <td className="py-4 px-6 text-gray-400">2h Airport Buffer</td>
                <td className="py-4 px-6 text-gray-400">Platform Lines</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium text-[#0F1319]">Flexible Schedule on Demand</td>
                <td className="py-4 px-6 text-[#0F63BD] font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Depart Anytime
                </td>
                <td className="py-4 px-6 text-gray-400">Rigid Timetable</td>
                <td className="py-4 px-6 text-gray-400">Fixed Timetable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

