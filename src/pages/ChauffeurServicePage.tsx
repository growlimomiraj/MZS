import React from 'react';
import { BookingWidget } from '../components/BookingWidget';
import { BookingState, PageRoute } from '../types';
import { Award, UserCheck, Shield, Sparkles, Clock, Compass } from 'lucide-react';

interface ChauffeurServicePageProps {
  onSearch: (bookingData: BookingState) => void;
  onNavigate: (route: PageRoute) => void;
}

export const ChauffeurServicePage: React.FC<ChauffeurServicePageProps> = ({ onSearch, onNavigate }) => {
  return (
    <div className="bg-white text-[#0F1319]">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-70 contrast-105 pointer-events-none"
          style={{
            backgroundImage:
              'url(https://static.blacklane.com/assets/_next/static/media/ride-1.510c61ecb0d86e20.webp)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319] via-black/40 to-black/70 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
            The Pinnacle of Professional Driving
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-normal text-white mb-6 leading-tight">
            Professional Chauffeur Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-normal">
            Immaculately presented, discreet, English-speaking chauffeurs dedicated to delivering your peace of mind.
          </p>

          <BookingWidget onSearch={onSearch} />
        </div>
      </section>

      {/* Chauffeur Standards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F1319] mb-4">
            The Blacklane Chauffeur Standard
          </h2>
          <p className="text-lg text-[#666F7B]">
            We recruit only the top 10% of licensed professional drivers in every market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Vetted & Licensed</h3>
              <p className="text-[#666F7B] text-sm sm:text-base leading-relaxed">
                Comprehensive criminal history background checks, commercial driving licenses, and clean safety records are mandatory.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Chauffeur Academy</h3>
              <p className="text-[#666F7B] text-sm sm:text-base leading-relaxed">
                Trained in defensive driving, executive etiquette, VIP confidentiality, luggage handling, and local city navigation.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Flawless Presentation</h3>
              <p className="text-[#666F7B] text-sm sm:text-base leading-relaxed">
                Dark tailored suits, polished footwear, and vehicles kept in showroom condition with daily interior sanitization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

