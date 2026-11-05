import React, { useState } from 'react';
import { BookingWidget } from '../components/BookingWidget';
import { BookingState, PageRoute } from '../types';
import { VEHICLE_CLASSES } from '../constants/data';
import { ChevronDown, ArrowRight, ShieldCheck, Check, Phone, Mail, Clock, Sparkles } from 'lucide-react';

interface AirportTransferPageProps {
  onSearch: (bookingData: BookingState) => void;
  onNavigate: (route: PageRoute) => void;
}

export const AirportTransferPage: React.FC<AirportTransferPageProps> = ({ onSearch, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedClass, setSelectedClass] = useState<string>('business');

  const airportFaqs = [
    {
      q: 'Which US airport locations does MZS Executive Chauffeurs serve?',
      a: 'MZS Executive Chauffeurs operates across all major commercial and private FBO aviation airports throughout the United States, including JFK, LGA, EWR, LAX, SFO, MIA, ORD, DFW, ATL, BOS, LAS, IAD, DCA, SEA, and PHX. Your journey begins and ends with the highest standard of American ground transportation.'
    },
    {
      q: 'How does airport pickup work?',
      a: 'Your chauffeur tracks your incoming flight in real time. Once your wheels touch down, you enjoy 60 minutes of complimentary wait time to disembark and claim luggage. Your chauffeur will be waiting inside the terminal holding a personalized digital name sign, ready to assist with bags.'
    },
    {
      q: 'What if my flight is delayed or arrives early?',
      a: 'Automatic radar flight tracking is fully integrated into our dispatch center. If your flight is delayed or lands early, your pickup time automatically updates without any action required on your part. There are never extra charges for flight delays.'
    },
    {
      q: 'Can I cancel or modify my airport transfer?',
      a: 'Yes. You can cancel or modify your reservation free of charge up to 1 hour prior to scheduled pickup time for one-way transfers, right from your account dashboard or by calling our 24/7 concierge at (888) 801-7476.'
    },
    {
      q: 'Are airport access fees, parking, tolls, and tips included?',
      a: 'Yes, 100%. All MZS Executive Chauffeurs fares are all-inclusive upfront rates calculated dynamically by distance. State taxes, airport access fees, toll roads, and chauffeur gratuities are completely covered with zero surge pricing spikes.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#0F1319]">
      {/* Hero Section */}
      <section className="relative z-30 min-h-[85vh] flex flex-col justify-center items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white">
        <div className="absolute inset-0 [clip-path:inset(0)] pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-75 contrast-105"
            style={{
              backgroundImage:
                'url(/assets/pages/airport-hero.webp)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/90 via-[#0F1319]/40 to-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 border border-white/15">
            <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
            Nationwide US Airport Chauffeur Service
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            Airport transfers across the United States
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Relax with 1 hour of complimentary wait time and automatic flight tracking included with every US airport pickup.
          </p>

          <BookingWidget onSearch={onSearch} />
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-[#0066FF]" />
            </div>
            <h3 className="text-2xl font-serif text-[#0F1319] mb-3">Guaranteed all-inclusive rates</h3>
            <p className="text-[#596372] leading-relaxed text-sm sm:text-base">
              All-inclusive rates are guaranteed at the time of booking. Taxes, airport parking fees, tolls, and chauffeur gratuities are all included with zero surge pricing.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-[#0066FF]" />
            </div>
            <h3 className="text-2xl font-serif text-[#0F1319] mb-3">Live flight tracking</h3>
            <p className="text-[#596372] leading-relaxed text-sm sm:text-base">
              Real-time flight tracking is standard. Your chauffeur receives live radar updates and automatically adjusts pickup times for early touchdowns or air delays.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mb-6">
              <Sparkles className="w-7 h-7 text-[#0066FF]" />
            </div>
            <h3 className="text-2xl font-serif text-[#0F1319] mb-3">Travel on your terms</h3>
            <p className="text-[#596372] leading-relaxed text-sm sm:text-base">
              Enjoy 60 minutes of complimentary wait time for all airport pickups, and cancel free of charge up to 1 hour before scheduled departure.
            </p>
          </div>
        </div>
      </section>

      {/* Discover our service classes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F1319] mb-4">
            Discover our service classes
          </h2>
          <p className="text-base sm:text-lg text-[#596372]">
            Tailored vehicle standards for solo executives, VIP dignitaries, and corporate family groups across the US.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLE_CLASSES.map((vc) => (
            <div
              key={vc.id}
              onClick={() => setSelectedClass(vc.id)}
              className={`p-6 rounded-3xl bg-white border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                selectedClass === vc.id
                  ? 'border-[#0066FF] shadow-[0_12px_32px_rgba(0,102,255,0.12)] ring-1 ring-[#0066FF]'
                  : 'border-gray-200 hover:border-gray-400 hover:shadow-md'
              }`}
            >
              <div>
                <div className="h-40 flex items-center justify-center mb-6 bg-gradient-to-b from-[#FAF8F5] to-white rounded-2xl p-4">
                  <img src={vc.image} alt={vc.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="text-xl font-serif text-[#0F1319] mb-1">{vc.name}</h3>
                <p className="text-xs text-[#71717A] mb-3 font-medium">{vc.models}</p>
                <p className="text-xs text-[#596372] leading-relaxed mb-6">{vc.description}</p>

                <div className="space-y-2 mb-6">
                  {vc.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#374151]">
                      <Check className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
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

      {/* Editorial Story 1: Private airport transfers across the US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-3 block">
              Seamless City Connection
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-6 leading-tight">
              Private airport transfers across the US
            </h2>
            <p className="text-base sm:text-lg text-[#596372] leading-relaxed mb-6 font-light">
              From an executive transfer into Manhattan from JFK or Newark to an oceanfront arrival in Miami, Los Angeles, or San Francisco, MZS Executive Chauffeurs helps you transition from runway to destination with absolute serenity.
            </p>
            <p className="text-sm sm:text-base text-[#596372] leading-relaxed mb-8">
              Reserve your private transfer in advance and enjoy a sanctuary where you can catch up on emails, review your presentation, or simply unwind in quiet luxury. Available at all commercial terminals and private aviation FBOs throughout the United States.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                'New York (JFK / LGA / EWR)',
                'Los Angeles (LAX / VNY)',
                'Miami (MIA / FLL / OPF)',
                'Chicago (ORD / MDW)',
                'San Francisco (SFO / OAK)',
                'Dallas (DFW / DAL)',
                'Atlanta (ATL)',
                'Boston (BOS)'
              ].map((city, cIdx) => (
                <span
                  key={cIdx}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs text-[#374151] font-medium shadow-sm"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/assets/pages/airport-faq.jpg"
              alt="MZS Executive Chauffeurs airport transfer greeting passenger"
              className="w-full h-auto object-cover rounded-3xl aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Editorial Story 2: Executive airport transfers across major US metro hubs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/assets/pages/family-transit.jpg"
              alt="MZS Executive Chauffeurs luxury travel"
              className="w-full h-auto object-cover rounded-3xl aspect-[4/3]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-3 block">
              American Hospitality
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-6 leading-tight">
              Executive airport transfers across major US metro hubs
            </h2>
            <p className="text-base sm:text-lg text-[#596372] leading-relaxed mb-6 font-light">
              Stepping off a coast-to-coast flight is demanding. There is no better feeling than knowing a dedicated, professional chauffeur is waiting specifically for you inside the arrivals hall.
            </p>
            <p className="text-sm sm:text-base text-[#596372] leading-relaxed mb-8">
              Bypass taxi queues, avoid rideshare parking structure walks, and skip dynamic surge pricing spikes. MZS Executive Chauffeurs delivers effortless curbside elegance across all 50 states.
            </p>
            <button
              onClick={() => onNavigate('/cities')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F1319] text-white hover:bg-black font-medium text-sm transition-all"
            >
              Explore all US service cities <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* How MZS Executive Chauffeurs Airport Transfer Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm my-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-2 block">
            Effortless Precision
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319]">
            How MZS Executive Chauffeurs airport transfers work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center px-4">
            <div className="w-12 h-12 rounded-full bg-[#0F1319] text-white font-serif text-lg font-bold flex items-center justify-center mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-serif text-[#0F1319] mb-3">Book in advance</h3>
            <p className="text-sm text-[#596372] leading-relaxed">
              Enter your pickup airport, arrival flight number, and destination. Receive guaranteed all-inclusive pricing immediately with instant confirmation.
            </p>
          </div>

          <div className="text-center px-4">
            <div className="w-12 h-12 rounded-full bg-[#0F1319] text-white font-serif text-lg font-bold flex items-center justify-center mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-serif text-[#0F1319] mb-3">Automated flight tracking</h3>
            <p className="text-sm text-[#596372] leading-relaxed">
              Your chauffeur monitors your actual wheels-down time. You receive live SMS updates with chauffeur details and vehicle registration before you land.
            </p>
          </div>

          <div className="text-center px-4">
            <div className="w-12 h-12 rounded-full bg-[#0F1319] text-white font-serif text-lg font-bold flex items-center justify-center mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-serif text-[#0F1319] mb-3">VIP meet & greet</h3>
            <p className="text-sm text-[#596372] leading-relaxed">
              Meet your chauffeur in arrivals holding a personalized digital signboard. Enjoy luggage escort to your waiting luxury car and glide smoothly to your destination.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-serif text-center text-[#0F1319] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {airportFaqs.map((faq, idx) => (
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

        <div className="mt-12 p-8 rounded-3xl bg-[#0F1319] text-white text-center">
          <h3 className="text-xl font-serif mb-2">Have a question regarding your airport transfer?</h3>
          <p className="text-sm text-gray-300 mb-6">Our 24/7 US customer concierge team is always on hand to assist you.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+18888017476"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#0F1319] hover:bg-gray-100 font-medium text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#0066FF]" />
              (888) 801-7476
            </a>
            <a
              href="mailto:info@mzexecutivechauffeurs.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium text-sm transition-all"
            >
              <Mail className="w-4 h-4 text-[#0066FF]" />
              info@mzexecutivechauffeurs.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
