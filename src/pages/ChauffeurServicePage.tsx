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
      q: 'What qualifications do MZS chauffeurs hold?',
      a: 'All MZS chauffeurs are professionally licensed, insured, and thoroughly vetted commercial drivers. They pass background security checks, driving record evaluations, and complete rigorous customer service and etiquette training.'
    },
    {
      q: 'Do chauffeurs speak English?',
      a: 'Yes, English proficiency is mandatory for all MZS chauffeurs worldwide, ensuring clear, polite, and seamless communication regardless of which country you travel in.'
    },
    {
      q: 'Is tipping required or expected?',
      a: 'No. All MZS fares include all chauffeur gratuities, road tolls, and taxes. You are never expected to carry cash or pay extra at the conclusion of your journey.'
    },
    {
      q: 'Can I request a child seat?',
      a: 'Yes. When completing your booking, you can add child booster or safety seats in the special requests field for Business Class, First Class, and Business Van / SUV reservations.'
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
              'url(https://images.ctfassets.net/ov8o7v78mnye/YAk8zZ91CzLlOomEG4sp4/8af6decc4193c9e279d279170d1a84e6/visionary-at-dusk-hero6.webp?fm=webp&w=2560&q=85)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/90 via-[#0F1319]/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 border border-white/15">
            <Award className="w-4 h-4 text-[#0066FF]" />
            The Gold Standard in Ground Hospitality
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            Your Professional Chauffeur Service
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Immaculately presented, discreet, English-speaking chauffeurs committed to delivering supreme peace of mind in 500+ cities.
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
              onClick={() => onNavigate('airport-transfer')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F1319] text-white hover:bg-black font-medium text-sm transition-all"
            >
              Book an airport chauffeur <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.ctfassets.net/ov8o7v78mnye/2cN4KlwmCE4EEmaYuQU6KE/e5712e3383d4145cb44c02025f769f07/Copy_of_visionary-at-dusk-SEO-large6__1_.jpg?fm=webp&w=1280&q=85"
              alt="MZS professional chauffeur opening car door"
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
                  <div className="text-[11px] uppercase tracking-wider text-gray-400">Fixed rate from</div>
                  <div className="text-lg font-bold text-[#0F1319]">${vc.price}</div>
                </div>
                <span className="text-xs font-semibold text-[#0066FF] flex items-center gap-1">
                  Book <ArrowRight className="w-3.5 h-3.5" />
                </span>
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
