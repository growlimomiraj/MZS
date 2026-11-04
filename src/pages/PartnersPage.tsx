import React, { useState } from 'react';
import { PageRoute } from '../types';
import { DollarSign, Calendar, Users, ShieldCheck, CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';

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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const partnerFaqs = [
    {
      q: 'Can independent drivers become an MZS partner?',
      a: 'We partner with licensed, insured chauffeur operators and fleet companies. To apply, you must meet our vehicle standards, hold active commercial chauffeur licenses, and submit company registration and proof of commercial insurance.'
    },
    {
      q: 'How does payment work for chauffeur partners?',
      a: 'All ride fares, wait time charges, and applicable airport fees are tracked digitally. Payouts are transferred automatically via direct bank deposit on a regular, reliable weekly schedule with itemized digital statements.'
    },
    {
      q: 'Do I have to accept every ride sent to me?',
      a: 'No. As an independent partner, you have 100% control over your schedule. You can accept only the rides, dates, and corridors that fit your business needs.'
    },
    {
      q: 'What vehicles qualify for MZS service classes?',
      a: 'We accept premium late-model luxury vehicles (typically under 5 years old) in black or dark finishes with black leather interiors. Qualifying models include Mercedes-Benz E-Class, S-Class, V-Class, EQE/EQS, BMW 5/7 Series, and Cadillac Escalade/CT6.'
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
              'url(https://static.blacklane.com/assets/_next/static/media/bg.e528b82bfe2bcc20.webp)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/90 via-[#0F1319]/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 border border-white/15">
            <Users className="w-4 h-4 text-[#0066FF]" />
            For Chauffeur Companies & Fleet Owners
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            Become an MZS service provider
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Unlock global demand, increase your revenue with premium international travelers, and enjoy reliable weekly direct payments.
          </p>

          <button
            onClick={() => {
              const el = document.getElementById('partner-form');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium rounded-full transition-all shadow-lg text-sm cursor-pointer"
          >
            Apply to Partner with MZS
          </button>
        </div>
      </section>

      {/* Partner Quote & Metric Card */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-4">Partner Testimonial</span>
            <blockquote className="text-2xl sm:text-3xl font-serif text-[#0F1319] leading-snug mb-6">
              &ldquo;MZS is 60% of my revenue. I&apos;ve grown from 2 to 20 chauffeurs and have 10 luxury vehicles from working with them.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0F1319] text-white font-semibold flex items-center justify-center text-sm">
                AT
              </div>
              <div>
                <div className="font-semibold text-sm text-[#0F1319]">Angel T.</div>
                <div className="text-xs text-gray-500">MZS Chauffeur Partner, Madrid</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white p-6 flex flex-col items-center">
            <img
              src="https://static.blacklane.com/assets/_next/static/media/1.9acb1b093618cb82.png"
              alt="MZS partner income growth graph"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Onboarding Visual Graphic */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-2 block">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-4">
            How partner onboarding works
          </h2>
          <p className="text-base sm:text-lg text-[#596372]">
            Start receiving bookings in as little as 48 hours after verification.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white p-4 sm:p-8 flex flex-col items-center">
          <img
            src="https://static.blacklane.com/assets/_next/static/media/onboarding.3b5c41e4fc73a8d8.webp"
            alt="MZS chauffeur onboarding roadmap"
            className="w-full max-w-4xl object-contain rounded-2xl"
          />
        </div>
      </section>

      {/* Vehicle Requirements Visual */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-2 block">
            Fleet Standards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-4">
            Vehicle & chauffeur requirements
          </h2>
          <p className="text-base sm:text-lg text-[#596372]">
            We maintain the highest fleet standards to ensure our guests enjoy an exceptional luxury experience.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white p-4 sm:p-8 flex flex-col items-center">
          <img
            src="https://static.blacklane.com/assets/_next/static/media/requirements.dbdb0d75a05d8d79.webp"
            alt="MZS vehicle requirements visual"
            className="w-full max-w-4xl object-contain rounded-2xl"
          />
        </div>
      </section>

      {/* Partner Application Form */}
      <section id="partner-form" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-gray-200">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-2">Apply Online</span>
            <h3 className="text-3xl font-serif text-[#0F1319] mb-3">Join the MZS Global Network</h3>
            <p className="text-sm text-[#596372]">
              Submit your company credentials to begin the partner onboarding process.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center">
              <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-serif text-green-900 mb-2">Application Submitted</h4>
              <p className="text-sm text-green-700">
                Thank you, {fullName}. Our Partner Operations team will review your fleet details and reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Michael Smith"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0066FF] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@fleet.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0066FF] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0066FF] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Primary City</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. London, New York, Dubai"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0066FF] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Primary Vehicle</label>
                  <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0066FF] text-sm bg-white"
                  >
                    <option value="Mercedes-Benz E-Class">Mercedes-Benz E-Class</option>
                    <option value="Mercedes-Benz S-Class">Mercedes-Benz S-Class</option>
                    <option value="Mercedes-Benz V-Class">Mercedes-Benz V-Class</option>
                    <option value="Mercedes-Benz EQE/EQS">Mercedes-Benz EQE / EQS (Electric)</option>
                    <option value="Cadillac Escalade / SUV">Cadillac Escalade / Luxury SUV</option>
                    <option value="Multiple Fleet Vehicles">Multiple Fleet Vehicles (5+ cars)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-sm transition-all shadow-md cursor-pointer mt-6"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Partner FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-serif text-center text-[#0F1319] mb-12">
          Partner FAQs
        </h2>

        <div className="space-y-4">
          {partnerFaqs.map((faq, idx) => (
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
