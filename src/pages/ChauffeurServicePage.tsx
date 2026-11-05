import React, { useState } from 'react';
import { BookingWidget } from '../components/BookingWidget';
import { BookingState, PageRoute } from '../types';
import { VEHICLE_CLASSES } from '../constants/data';
import { Award, UserCheck, ShieldCheck, ChevronDown, Check, Star, ArrowRight } from 'lucide-react';

interface ChauffeurServicePageProps {
  onSearch: (bookingData: BookingState) => void;
  onNavigate: (route: PageRoute) => void;
}

export const ChauffeurServicePage: React.FC<ChauffeurServicePageProps> = ({ onSearch, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const chauffeurFaqs = [
    {
      q: 'What qualifications do MZS Executive Chauffeurs drivers hold?',
      a: 'All MZS Executive Chauffeurs drivers are professionally licensed, commercially insured, and thoroughly vetted. They pass rigorous background security checks, clean driving record evaluations, and complete executive hospitality training.'
    },
    {
      q: 'Are your chauffeur services available nationwide across the USA?',
      a: 'Yes. MZS Executive Chauffeurs provides professional chauffeur services in all major US metropolitan areas, financial hubs, and commercial/private FBO airports nationwide.'
    },
    {
      q: 'Is tipping required or expected?',
      a: 'No. All MZS Executive Chauffeurs fares are all-inclusive rates calculated dynamically by distance, covering driver gratuities, road tolls, and taxes with zero hidden fees. You never need to carry cash.'
    },
    {
      q: 'Can I request a child seat?',
      a: 'Yes. When completing your booking, you can add child booster or safety seats in the special requests field for Business Class, First Class, and Business Van / SUV reservations.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#0F1319]">
      {/* Hero */}
      <section className="relative z-30 min-h-[85vh] flex flex-col justify-center items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white">
        <div className="absolute inset-0 [clip-path:inset(0)] pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-75 contrast-105"
            style={{
              backgroundImage:
                'url(/assets/pages/chauffeur-hero.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/90 via-[#0F1319]/40 to-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 border border-white/15">
            <Award className="w-4 h-4 text-[#0066FF]" />
            The Gold Standard in American Ground Hospitality
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            Professional US Chauffeur Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Immaculately presented, discreet, licensed professional chauffeurs committed to delivering supreme peace of mind across the United States.
          </p>

          <BookingWidget onSearch={onSearch} />
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-6">
              <UserCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif mb-3">Vetted & Licensed</h3>
            <p className="text-[#596372] text-sm sm:text-base leading-relaxed">
              Every chauffeur is verified with thorough criminal record checks, full commercial insurance, and professional chauffeur licenses in their municipality.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif mb-3">The Chauffeur Standard</h3>
            <p className="text-[#596372] text-sm sm:text-base leading-relaxed">
              Trained in executive protocol, silent discretion, route optimization, and VIP care to guarantee your journey is smooth and productive.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-6">
              <Star className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif mb-3">Pristine Presentation</h3>
            <p className="text-[#596372] text-sm sm:text-base leading-relaxed">
              Tailored dark attire, polished footwear, and vehicles kept in showroom condition with daily interior detailing and complimentary bottled water.
            </p>
          </div>
        </div>
      </section>

      {/* World class chauffeurs going the extra mile */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-3 block">
              Dedicated Professionals
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-6 leading-tight">
              World class chauffeurs going the extra mile
            </h2>
            <p className="text-base sm:text-lg text-[#596372] leading-relaxed mb-6 font-light">
              Every day our chauffeurs go above and beyond — it is simply in their DNA. Whether adjusting a route to avoid sudden city gridlock or carrying heavy luggage with a warm smile, our chauffeurs put your comfort first.
            </p>
            <p className="text-sm sm:text-base text-[#596372] leading-relaxed mb-8">
              Trust your travel to professionals who care about your schedule as much as you do. Available for one-way journeys, city-to-city corridors, airport pickups, and full-day dedicated hire.
            </p>
            <button
              onClick={() => onNavigate('/airport-transfer')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F1319] text-white hover:bg-black font-medium text-sm transition-all"
            >
              Book an airport chauffeur <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/assets/services/service-4.jpg"
              alt="MZS professional chauffeur service"
              className="w-full h-auto object-cover rounded-3xl aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F1319] mb-4">
            Discover our service classes
          </h2>
          <p className="text-base sm:text-lg text-[#596372]">
            From sleek executive sedans to spacious luxury vans for teams and families.
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
                  <div className="text-[11px] uppercase tracking-wider text-gray-400">Rate Structure</div>
                  <div className="text-sm font-bold text-[#0F1319]">${vc.perMileRate}/mile</div>
                  <div className="text-[10px] text-gray-400">+$ {vc.basePrice} base flag drop</div>
                </div>
                <button
                  onClick={() => onNavigate('/')}
                  className="text-xs font-semibold text-[#0066FF] flex items-center gap-1 hover:underline cursor-pointer"
                >
                  Book by Miles <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chauffeur FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-serif text-center text-[#0F1319] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {chauffeurFaqs.map((faq, idx) => (
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
