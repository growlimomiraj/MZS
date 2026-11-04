import React from 'react';
import { BookingWidget } from '../components/BookingWidget';
import { BookingState, PageRoute } from '../types';
import { Clock, Navigation, Coffee, Briefcase, Award, Shield } from 'lucide-react';

interface HourlyHirePageProps {
  onSearch: (bookingData: BookingState) => void;
  onNavigate: (route: PageRoute) => void;
}

export const HourlyHirePage: React.FC<HourlyHirePageProps> = ({ onSearch, onNavigate }) => {
  return (
    <div className="bg-white text-[#0F1319]">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 contrast-105 pointer-events-none"
          style={{
            backgroundImage:
              'url(https://static.blacklane.com/assets/_next/static/media/2.9ae17562d88c590d.webp)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319] via-black/40 to-black/70 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
            Dedicated Chauffeur on Standby
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-normal text-white mb-6 leading-tight">
            By-the-hour chauffeur and full-day driver hire
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-normal">
            Enjoy absolute freedom with an elite chauffeur on standby as long as you need them. Unlimited stops, total privacy.
          </p>

          <BookingWidget onSearch={onSearch} />
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F1319] mb-4">
            Enjoy absolute freedom
          </h2>
          <p className="text-lg text-[#666F7B]">
            Whether you have consecutive business appointments, an intensive roadshow, or a tailored city shopping day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Unlimited stops</h3>
              <p className="text-[#666F7B] text-sm sm:text-base leading-relaxed">
                Travel from meeting to meeting or shop at your leisure without having to request a new ride each time. Your driver waits at the curb.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif mb-3">From 2 to 24 hours</h3>
              <p className="text-[#666F7B] text-sm sm:text-base leading-relaxed">
                Book hourly blocks tailored to your exact calendar. Extend hours on the fly directly with your chauffeur or in the mobile app.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Mobile executive office</h3>
              <p className="text-[#666F7B] text-sm sm:text-base leading-relaxed">
                Take confidential conference calls in tranquil silence. High-speed mobile chargers and bottled water are provided in every cabin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

