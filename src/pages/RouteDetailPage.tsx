import React from 'react';
import { BookingWidget } from '../components/BookingWidget';
import { BookingState, PageRoute } from '../types';
import { VEHICLE_CLASSES } from '../constants/data';
import { MapPin, Clock, ShieldCheck, ArrowRight, Check, Sparkles } from 'lucide-react';

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
    <div className="bg-[#FAF8F5] text-[#0F1319]">
      {/* Hero */}
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
            Private City-to-City Route
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            {from} to {to}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Relax in executive comfort across {distance} in approximately {duration}. Guaranteed all-inclusive fixed rate starting from {price}.
          </p>

          <BookingWidget onSearch={onSearch} />
        </div>
      </section>

      {/* Route Details & Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200 shadow-md">
          <h2 className="text-3xl font-serif mb-6 text-[#0F1319]">Route Highlights & Inclusions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-100">
              <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Total Distance</div>
              <div className="text-2xl font-serif text-[#0F1319]">{distance}</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-100">
              <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Estimated Travel Time</div>
              <div className="text-2xl font-serif text-[#0F1319]">{duration}</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-100">
              <div className="text-xs text-gray-500 uppercase font-semibold mb-1">All-Inclusive Price</div>
              <div className="text-2xl font-serif text-[#0066FF]">{price}</div>
            </div>
          </div>

          <div className="space-y-4 text-sm text-[#596372]">
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#0066FF] shrink-0" />
              <span>Door-to-door direct pickup at your private residence, hotel lobby, or office</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#0066FF] shrink-0" />
              <span>Free cancellation up to 24 hours prior to scheduled departure</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#0066FF] shrink-0" />
              <span>Tolls, congestion charges, and chauffeur gratuities fully covered</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#0066FF] shrink-0" />
              <span>Complimentary bottled water, high-speed mobile chargers, and silent cabin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet for this route */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0F1319] mb-4">
            Available vehicle classes for {from} &rarr; {to}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLE_CLASSES.map((vc) => (
            <div key={vc.id} className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-36 flex items-center justify-center mb-4 bg-[#FAF8F5] rounded-2xl p-3">
                  <img src={vc.image} alt={vc.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="text-xl font-serif text-[#0F1319] mb-1">{vc.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{vc.models}</p>
                <p className="text-xs text-[#596372] leading-relaxed mb-4">{vc.description}</p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400">All-Inclusive</div>
                  <div className="text-lg font-bold text-[#0F1319]">{price}</div>
                </div>
                <span className="text-xs font-semibold text-[#0066FF] flex items-center gap-1">
                  Book <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
