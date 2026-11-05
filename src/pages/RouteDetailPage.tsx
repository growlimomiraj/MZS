import React from 'react';
import { BookingWidget } from '../components/BookingWidget';
import { BookingState, PageRoute } from '../types';
import { VEHICLE_CLASSES } from '../constants/data';
import { MapPin, Clock, ShieldCheck, ArrowRight, Check, Sparkles, Phone, Mail } from 'lucide-react';

interface RouteDetailPageProps {
  from: string;
  to: string;
  duration: string;
  distance: string;
  price?: string;
  onSearch: (bookingData: BookingState) => void;
  onNavigate: (route: PageRoute) => void;
}

export const RouteDetailPage: React.FC<RouteDetailPageProps> = ({
  from,
  to,
  duration,
  distance,
  onSearch,
  onNavigate,
}) => {
  return (
    <div className="bg-[#FAF8F5] text-[#0F1319]">
      {/* Hero */}
      <section className="relative z-30 min-h-[85vh] flex flex-col justify-center items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white">
        <div className="absolute inset-0 [clip-path:inset(0)] pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-75 contrast-105"
            style={{
              backgroundImage:
                'url(/assets/services/service-3.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/90 via-[#0F1319]/40 to-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 border border-white/15">
            <Sparkles className="w-4 h-4 text-[#0066FF]" />
            Private US City-to-City Route &bull; MZS Executive Chauffeurs
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            {from} to {to}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Relax in executive comfort across {distance} in approximately {duration}. Transparent all-inclusive quotes calculated by mileage with MZS Executive Chauffeurs.
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
              <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Pricing Guarantee</div>
              <div className="text-2xl font-serif text-[#0066FF]">All-Inclusive</div>
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
              <span>US highway tolls, congestion surcharges, and chauffeur gratuities fully included</span>
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
          <p className="text-sm text-[#596372]">Select your preferred class for door-to-door private chauffeur service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLE_CLASSES.map((vc) => (
            <div key={vc.id} className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-44 flex items-center justify-center mb-4 bg-gray-50 rounded-2xl p-2 overflow-hidden">
                  <img src={vc.image} alt={vc.name} className="w-full h-full object-cover rounded-xl" />
                </div>
                <h3 className="text-xl font-serif text-[#0F1319] mb-1">{vc.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{vc.models}</p>
                <p className="text-xs text-[#596372] leading-relaxed mb-4">{vc.description}</p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400">Pricing</div>
                  <div className="text-sm font-bold text-[#0066FF]">All-Inclusive Quote</div>
                </div>
                <button
                  onClick={() => onNavigate('airport-transfer')}
                  className="text-xs font-semibold text-[#0066FF] flex items-center gap-1 hover:underline cursor-pointer"
                >
                  Reserve <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Route Contact Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0F1319] text-white text-center">
          <h3 className="text-xl font-serif mb-2">Need a custom US itinerary or multi-day chauffeur?</h3>
          <p className="text-sm text-gray-300 mb-6">Our 24/7 US dispatch desk provides personalized routing, group transfers, and custom vehicle requests.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <a href="tel:+18888017476" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium transition-all">
              <Phone className="w-4 h-4" />
              Call (888) 801-7476
            </a>
            <a href="mailto:info@mzexecutivechauffeurs.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all border border-white/20">
              <Mail className="w-4 h-4" />
              info@mzexecutivechauffeurs.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
