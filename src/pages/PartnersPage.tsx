import React, { useState } from 'react';
import { PageRoute } from '../types';
import { DollarSign, Calendar, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PartnersPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [vehicle, setVehicle] = useState('Mercedes-Benz E-Class');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-[#0F1319]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-70 contrast-105 pointer-events-none"
          style={{
            backgroundImage:
              'url(https://static.blacklane.com/assets/_next/static/media/bg.01a8f1ce1808c5e8.webp)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319] via-black/40 to-black/70 pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
            For Chauffeurs & Fleet Owners
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-normal text-white mb-6 leading-tight">
            Become a MZS Chauffeur Partner
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-normal">
            Grow your professional chauffeuring business with high-value executive bookings, reliable weekly payouts, and respectful global guests.
          </p>

          <button
            onClick={() => {
              const el = document.getElementById('partner-form');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#0F63BD] hover:bg-[#0D529C] text-white font-semibold rounded-full transition-all shadow-lg text-sm cursor-pointer"
          >
            Apply to Drive with MZS
          </button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-2">Premium Earnings</h3>
              <p className="text-sm text-[#666F7B] leading-relaxed">
                Enjoy transparent guaranteed earnings, airport wait-time compensation, and punctual weekly bank deposits.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-2">Total Schedule Control</h3>
              <p className="text-sm text-[#666F7B] leading-relaxed">
                Accept pre-scheduled journeys days in advance or accept immediate city rides based on your availability.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-2">Respectful Global Guests</h3>
              <p className="text-sm text-[#666F7B] leading-relaxed">
                Drive Fortune 500 executives, international travelers, and VIPs who value safety, punctuality, and discretion.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-2">Partner Support 24/7</h3>
              <p className="text-sm text-[#666F7B] leading-relaxed">
                Our operations team is available around the clock via dispatch chat and phone to assist you on the road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="partner-form" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-gray-100">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F1319] text-white shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif mb-2">Driver Partner Application</h2>
            <p className="text-xs text-gray-400">Join our network of elite global chauffeurs</p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-serif mb-2">Application Submitted!</h3>
              <p className="text-sm text-gray-300">
                Our local partner onboarding team will review your commercial license and vehicle specs within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Marcus Sterling"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#0F63BD]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcus@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#0F63BD]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 234-5678"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#0F63BD]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Operating City *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. New York, London, Dubai"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#0F63BD]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Primary Vehicle *
                  </label>
                  <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full px-4 py-3 bg-[#1C222C] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#0F63BD]"
                  >
                    <option value="Mercedes-Benz E-Class">Mercedes-Benz E-Class (or equiv)</option>
                    <option value="Mercedes-Benz S-Class">Mercedes-Benz S-Class (First Class)</option>
                    <option value="Mercedes-Benz V-Class">Mercedes-Benz V-Class / SUV</option>
                    <option value="BMW 7 Series">BMW 7 Series / Audi A8</option>
                    <option value="Electric Luxury (Lucid/EQS)">Electric Luxury (EQS/Lucid Air)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0F63BD] hover:bg-[#0D529C] text-white font-semibold rounded-xl text-sm transition-all shadow-lg cursor-pointer mt-6"
              >
                Submit Partner Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

