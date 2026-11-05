import React, { useState } from 'react';
import { BookingWidget } from '../components/BookingWidget';
import { BookingState, PageRoute } from '../types';
import { VEHICLE_CLASSES } from '../constants/data';
import { Crown, Sparkles, HeartHandshake, ChevronDown, Check, ArrowRight } from 'lucide-react';

interface LimousineServicePageProps {
  onSearch: (bookingData: BookingState) => void;
  onNavigate: (route: PageRoute) => void;
}

export const LimousineServicePage: React.FC<LimousineServicePageProps> = ({ onSearch, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const limoFaqs = [
    {
      q: 'What is considered a luxury limousine service with MZS Executive Chauffeurs?',
      a: 'At MZS Executive Chauffeurs, limousine service means pristine executive sedans (such as the Mercedes-Benz S-Class, BMW 7 Series, Audi A8) and spacious luxury SUVs (Cadillac Escalade, Lincoln Navigator) driven by commercially certified chauffeurs in tailored business suits, rather than stretched novelty limousines.'
    },
    {
      q: 'How far in advance can I book a limousine?',
      a: 'You can book months in advance for important events, weddings, and galas, or as little as 30 to 60 minutes prior to pickup depending on vehicle availability in your US city.'
    },
    {
      q: 'Can I book a limousine for several hours or the entire day?',
      a: 'Yes. Simply select "By the hour" on our booking bar. You can reserve an executive vehicle for any duration between 2 and 24 hours with an agreed mileage allowance and unlimited stops.'
    },
    {
      q: 'Does MZS Executive Chauffeurs offer airport limousine transfers?',
      a: 'Yes. Every airport limousine booking includes flight tracking, 60 minutes of complimentary wait time after landing, and an inside-terminal meet & greet with luggage assistance.'
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
              'url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/90 via-[#0F1319]/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 border border-white/15">
            <Crown className="w-4 h-4 text-[#0066FF]" />
            First-Class Flagship Mobility
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            Luxury Limo Service across the United States
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Mercedes-Benz S-Class, BMW 7 Series, Cadillac Escalade, and flagship prestige vehicles for distinguished arrivals across the USA.
          </p>

          <BookingWidget onSearch={onSearch} />
        </div>
      </section>

      {/* 3 Luxury Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-6">
              <Crown className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif mb-3">Flagship Sedans</h3>
            <p className="text-[#596372] text-sm sm:text-base leading-relaxed">
              Only latest-generation executive sedans featuring acoustic noise cancellation, heated massage leather seats, and private climate zones.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-6">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif mb-3">VIP Concierge Service</h3>
            <p className="text-[#596372] text-sm sm:text-base leading-relaxed">
              Customized cabin temperature pre-set, chilled bottled water, device fast-chargers, and personalized arrivals signage.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-6">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif mb-3">Complete Discretion</h3>
            <p className="text-[#596372] text-sm sm:text-base leading-relaxed">
              Every MZS chauffeur observes strict confidentiality protocols, protecting your personal privacy and commercial conversations.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial: Limo service in the city */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-3 block">
              Sophisticated Transit
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-6 leading-tight">
              Limo service in the city
            </h2>
            <p className="text-base sm:text-lg text-[#596372] leading-relaxed mb-6 font-light">
              Wherever you are traveling, once you have arrived, exploring your new surroundings in an MZS limousine ensures you make the best possible impression.
            </p>
            <p className="text-sm sm:text-base text-[#596372] leading-relaxed mb-8">
              From business dinners in Manhattan to Beverly Hills galas, private FBO departures, and high-profile US corporate summits, our limousine fleet is tailored to your taste and stature.
            </p>
            <button
              onClick={() => onNavigate('city-to-city')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F1319] text-white hover:bg-black font-medium text-sm transition-all"
            >
              Explore City-to-City Limousines <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
              alt="MZS limousine passenger arrival"
              className="w-full h-auto object-cover rounded-3xl aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F1319] mb-4">
            Discover our service classes
          </h2>
          <p className="text-base sm:text-lg text-[#596372]">
            Select your preferred limousine standard.
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
                  <div className="text-[11px] uppercase tracking-wider text-gray-400">Fixed rate</div>
                  <div className="text-lg font-bold text-[#0F1319]">${vc.price}</div>
                </div>
                <span className="text-xs font-semibold text-[#0066FF] flex items-center gap-1">
                  Select <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-serif text-center text-[#0F1319] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {limoFaqs.map((faq, idx) => (
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
