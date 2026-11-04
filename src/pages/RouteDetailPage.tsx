import React from 'react';
import { BookingWidget } from '../components/BookingWidget';
import { BookingState, PageRoute } from '../types';
import { MapPin, Clock, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface RouteDetailPageProps {
  from: string;
  to: string;
  duration: string;
  distance: string;
  price: string;
  onSearch: (bookingData: BookingState) => void;
  onNavigate: (route: PageRoute) => void;
}

export const RouteDetailPage: React.FC<RouteDetailPageProps> = ({
  from,
  to,
  duration,
  distance,
  price,
  onSearch,
  onNavigate,
}) => {
  return (
    <div className="bg-white text-[#0F1319]">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-70 contrast-105 pointer-events-none"
          style={{
            backgroundImage:
              'url(https://static.blacklane.com/assets/_next/static/media/3.a05cc4329bbe2ee0.webp)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319] via-black/40 to-black/70 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
            Private City-to-City Route
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-tight">
            {from} to {to}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-normal">
            Relax in executive comfort across {distance} in approximately {duration}. Fixed guaranteed rate starting from {price}.
          </p>

          <BookingWidget onSearch={onSearch} />
        </div>
      </section>

      {/* Route Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F8F9FA] border border-gray-200">
          <h2 className="text-3xl font-serif mb-6">Route Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Total Distance</div>
              <div className="text-2xl font-serif text-[#0F1319]">{distance}</div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Estimated Journey Time</div>
              <div className="text-2xl font-serif text-[#0F1319]">{duration}</div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <div className="text-xs text-gray-500 uppercase font-semibold mb-1">All-Inclusive Fixed Rate</div>
              <div className="text-2xl font-serif text-[#0F63BD]">{price}</div>
            </div>
          </div>

          <div className="space-y-3 text-sm text-[#666F7B]">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Door-to-door direct pickup at your exact address or hotel lobby</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Free cancellation up to 24 hours prior to scheduled departure</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Bottled water, mobile device chargers, and peaceful cabin guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
