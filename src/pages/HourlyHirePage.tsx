import React, { useState } from 'react';
import { BookingWidget } from '../components/BookingWidget';
import { BookingState, PageRoute } from '../types';
import { VEHICLE_CLASSES } from '../constants/data';
import { Clock, Navigation, Briefcase, ChevronDown, Check, Sparkles, ShieldCheck } from 'lucide-react';

interface HourlyHirePageProps {
  onSearch: (bookingData: BookingState) => void;
  onNavigate: (route: PageRoute) => void;
}

export const HourlyHirePage: React.FC<HourlyHirePageProps> = ({ onSearch, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const hourlyFaqs = [
    {
      q: 'What is the minimum booking time for an hourly chauffeur?',
      a: 'The minimum booking duration is 2 hours. You can book for as many consecutive hours as required up to 24 hours per reservation.'
    },
    {
      q: 'Are mileage limits included in hourly bookings?',
      a: 'Yes. Every hourly booking includes 15 miles per reserved hour within the metropolitan area. Additional distance beyond the allowance is billed at our standard transparent per-mile rate.'
    },
    {
      q: 'Can I extend my booking while in the car?',
      a: 'Yes. If your meetings run late or plans change, simply notify your chauffeur or contact customer care. Subject to chauffeur availability, your hourly service can be seamlessly extended.'
    },
    {
      q: 'Does the chauffeur wait for me between stops?',
      a: 'Yes, your dedicated chauffeur remains stationed curbside outside your venue or meeting location ready for immediate departure whenever you are.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#0F1319]">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 contrast-105 pointer-events-none"
          style={{
            backgroundImage:
              'url(/assets/pages/hourly-hero.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/90 via-[#0F1319]/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 border border-white/15">
            <Sparkles className="w-4 h-4 text-[#0066FF]" />
            Dedicated Chauffeur on Standby
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            By-the-hour chauffeur and full-day driver hire
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Enjoy absolute freedom with an elite chauffeur on standby as long as you need. Unlimited stops, complete discretion.
          </p>

          <BookingWidget onSearch={onSearch} defaultServiceType="hourly" />
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-2 block">
            Ultimate Flexibility
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F1319] mb-4">
            Enjoy absolute schedule freedom
          </h2>
          <p className="text-base sm:text-lg text-[#596372]">
            Whether for consecutive executive meetings, financial roadshows, or private evening galas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-6">
              <Navigation className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif mb-3">Unlimited stops</h3>
            <p className="text-[#596372] text-sm sm:text-base leading-relaxed">
              Travel seamlessly from meeting to meeting or browse high-end boutiques without requesting a new car each time. Your chauffeur remains parked curbside.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-6">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif mb-3">From 2 to 24 hours</h3>
            <p className="text-[#596372] text-sm sm:text-base leading-relaxed">
              Book the exact block of hours your schedule demands. Need more time? Easily extend duration directly with your chauffeur or by calling our 24/7 dispatch desk.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-6">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif mb-3">Rolling private office</h3>
            <p className="text-[#596372] text-sm sm:text-base leading-relaxed">
              Hold confidential phone conferences with complete sound insulation and discretion. Complimentary device chargers and bottled water are provided in every cabin.
            </p>
          </div>
        </div>
      </section>

      {/* Landscape Visual Feature */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white p-6 sm:p-10 flex flex-col items-center">
          <img
            src="/assets/services/service-2.webp"
            alt="MZS Executive Chauffeurs luxury vehicle interior"
            className="w-full max-w-5xl object-cover rounded-2xl aspect-[16/9]"
          />
        </div>
      </section>

      {/* Service Classes for Hourly */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F1319] mb-4">
            Available vehicle classes for hourly hire
          </h2>
          <p className="text-base sm:text-lg text-[#596372]">
            Select the perfect premium cabin for your day of travel.
          </p>
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
                  <div className="text-[11px] uppercase tracking-wider text-gray-400">Hourly from</div>
                  <div className="text-lg font-bold text-[#0F1319]">${Math.round(vc.price * 0.75)}/hr</div>
                </div>
                <span className="text-xs font-semibold text-[#0066FF]">Min 2 hrs</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hourly FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-serif text-center text-[#0F1319] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {hourlyFaqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left font-medium text-lg text-[#0F1319] hover:bg-[#FAF8F5] cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === idx ? 'rotate-180 text-[#0066FF]' : ''}`} />
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
