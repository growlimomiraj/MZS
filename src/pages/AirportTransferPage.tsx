import React, { useState } from 'react';
import { BookingWidget } from '../components/BookingWidget';
import { BookingState, PageRoute } from '../types';
import { VEHICLE_CLASSES, FAQS_DATA } from '../constants/data';
import { Plane, Clock, ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react';

interface AirportTransferPageProps {
  onSearch: (bookingData: BookingState) => void;
  onNavigate: (route: PageRoute) => void;
}

export const AirportTransferPage: React.FC<AirportTransferPageProps> = ({ onSearch, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white text-[#0F1319]">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 contrast-105 pointer-events-none"
          style={{
            backgroundImage:
              'url(https://images.ctfassets.net/ov8o7v78mnye/2hQ4Zm5cxvBjZ8kUA2AWOV/6d895a3e1c0882df178372857afdf021/early-dept-hero-4.webp?fm=webp&w=1440&q=85)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319] via-black/40 to-black/70 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
            Global Airport Chauffeur Service
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-normal text-white mb-6 leading-tight">
            Airport transfers across the US and the globe
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-normal">
            Relax with 1 hour of complimentary wait time and flight tracking included with every airport pickup.
          </p>

          <BookingWidget onSearch={onSearch} />
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100">
            <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif mb-3">Competitive rates</h3>
            <p className="text-[#666F7B] leading-relaxed text-sm sm:text-base">
              All-inclusive rates are guaranteed at the time of booking. Taxes, tolls, and gratuity are included with no surge pricing.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100">
            <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif mb-3">Seamless airport travel</h3>
            <p className="text-[#666F7B] leading-relaxed text-sm sm:text-base">
              Flight tracking is standard. Chauffeurs adjust for early touchdowns or unexpected delays automatically.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100">
            <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif mb-3">Travel on your terms</h3>
            <p className="text-[#666F7B] leading-relaxed text-sm sm:text-base">
              Enjoy 60 minutes of complimentary wait time for airport pickups and free cancellation up to 1 hour before pickup.
            </p>
          </div>
        </div>
      </section>

      {/* Discover our service classes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F1319] mb-4">
            Discover our service classes
          </h2>
          <p className="text-lg text-[#666F7B]">
            Premium luxury vehicles tailored to individual executives, VIPs, and corporate travel groups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLE_CLASSES.map((vc) => (
            <div
              key={vc.id}
              className="p-6 rounded-3xl border border-gray-200 hover:border-black transition-all flex flex-col justify-between hover:shadow-lg"
            >
              <div>
                <div className="h-36 flex items-center justify-center mb-4">
                  <img src={vc.image} alt={vc.name} className="max-h-full object-contain" />
                </div>
                <h3 className="text-xl font-serif text-[#0F1319] mb-1">{vc.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{vc.models}</p>
                <p className="text-xs text-[#666F7B] leading-relaxed mb-4">{vc.description}</p>
              </div>

              <div>
                <div className="text-xs text-gray-500 mb-2">
                  Capacity: {vc.passengers} guests &bull; {vc.luggage} bags
                </div>
                <div className="text-lg font-bold text-[#0F63BD]">From ${vc.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-100">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left font-medium text-lg text-[#0F1319] hover:bg-gray-50 cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-sm text-[#666F7B] leading-relaxed border-t border-gray-100 pt-4">
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
