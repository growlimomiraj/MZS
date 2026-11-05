import React, { useState } from 'react';
import { PageRoute } from '../types';
import { DollarSign, Calendar, Users, ShieldCheck, CheckCircle2, ChevronDown, ArrowRight, Phone, Mail } from 'lucide-react';

interface PartnersPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [vehicle, setVehicle] = useState('Mercedes-Benz S-Class');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const partnerFaqs = [
    {
      q: 'Can independent US fleet operators become an MZS Executive Chauffeurs partner?',
      a: 'Yes. We partner with licensed, commercially insured chauffeur operators and luxury fleet companies across the United States. To apply, you must meet our late-model vehicle standards, hold active TLC / DOT commercial permits, and provide verifiable certificates of commercial auto liability insurance.'
    },
    {
      q: 'How does payment work for chauffeur partners in the US?',
      a: 'All ride fares, flight delay wait time, tolls, and tips are calculated automatically in the digital dispatch portal. Payouts are transferred automatically via direct bank deposit on a weekly schedule with itemized digital statements.'
    },
    {
      q: 'Do I have to accept every ride sent to me?',
      a: 'No. As an independent partner, you have 100% control over your schedule. You can accept only the rides, dates, and corridors that fit your business needs.'
    },
    {
      q: 'What vehicles qualify for MZS Executive Chauffeurs classes?',
      a: 'We accept premium late-model luxury vehicles (typically under 4-5 years old) in black exterior finishes with clean black or executive leather interiors. Qualifying models include Mercedes-Benz S-Class, E-Class, EQS/EQE, Cadillac Escalade ESV, Lincoln Navigator, BMW 7 Series, and executive luxury Sprinters.'
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
              'url(/assets/services/service-1.webp)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/90 via-[#0F1319]/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 border border-white/15">
            <Users className="w-4 h-4 text-[#0066FF]" />
            US Chauffeur Companies & Fleet Operators
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            Partner with MZS Executive Chauffeurs
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Connect your fleet with high-value US enterprise corporate travelers, fill empty return legs, and enjoy guaranteed on-time weekly direct deposits.
          </p>

          <button
            onClick={() => {
              const el = document.getElementById('partner-form');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium rounded-full transition-all shadow-lg text-sm cursor-pointer"
          >
            Apply to Partner with MZS Executive Chauffeurs
          </button>
        </div>
      </section>

      {/* Partner Quote & Metric Card */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-4">Partner Testimonial</span>
            <blockquote className="text-2xl sm:text-3xl font-serif text-[#0F1319] leading-snug mb-6">
              &ldquo;MZS Executive Chauffeurs represents over 60% of our fleet revenue. We grew from 2 to 14 executive sedans and SUVs servicing New York, Miami, and Los Angeles.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0F1319] text-white font-semibold flex items-center justify-center text-sm">
                AT
              </div>
              <div>
                <div className="font-semibold text-sm text-[#0F1319]">Angel T.</div>
                <div className="text-xs text-gray-500">Fleet Operations Partner &bull; New York & Miami</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-[#0F1319] text-white p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-2 block">Direct Partner Payouts</span>
              <h3 className="text-3xl font-serif text-white mb-4">Reliable Weekly Direct Deposit</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                Transparent revenue accounting with itemized ride fares, tolls, airport wait time, and 100% of tips paid directly to your bank account every week.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 text-center">
              <div>
                <span className="text-2xl sm:text-3xl font-serif text-[#0066FF] font-bold block">+65%</span>
                <span className="text-xs text-gray-400">Fleet Utilization</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif text-emerald-400 font-bold block">7 Days</span>
                <span className="text-xs text-gray-400">Weekly Payout Cycle</span>
              </div>
            </div>
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
            Start receiving dispatch bookings in as little as 48 hours after verification.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <span className="w-8 h-8 rounded-full bg-[#0066FF] text-white font-bold flex items-center justify-center text-sm mb-4">1</span>
            <h4 className="font-serif text-lg text-[#0F1319] mb-2">Apply Online</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Submit your company details, vehicle fleet list, and contact information through our simple partner form.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <span className="w-8 h-8 rounded-full bg-[#0066FF] text-white font-bold flex items-center justify-center text-sm mb-4">2</span>
            <h4 className="font-serif text-lg text-[#0F1319] mb-2">Document Verification</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Upload commercial chauffeur licenses, commercial insurance certificates, and vehicle registrations.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <span className="w-8 h-8 rounded-full bg-[#0066FF] text-white font-bold flex items-center justify-center text-sm mb-4">3</span>
            <h4 className="font-serif text-lg text-[#0F1319] mb-2">Quality Standards Call</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Complete a 15-minute briefing on MZS Executive Chauffeurs service protocols and arrivals standards.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm mb-4">4</span>
            <h4 className="font-serif text-lg text-[#0F1319] mb-2">Start Receiving Rides</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Access the MZS dispatch portal, accept incoming premium bookings, and receive weekly direct deposits.
            </p>
          </div>
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
            We maintain the highest US fleet standards to ensure our corporate and VIP guests enjoy an exceptional luxury experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h4 className="font-serif text-xl text-[#0F1319] mb-3">Vehicle Age & Exterior</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Late-model executive luxury vehicles (under 5 years old). Pristine black paint finishes, free of scratches or dents, with non-tinted front windows where required by law.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h4 className="font-serif text-xl text-[#0F1319] mb-3">Interior Detailing</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Showroom-condition black or dark executive leather interiors. Daily vacuuming, climate control, silent cabin, and complimentary passenger device chargers.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h4 className="font-serif text-xl text-[#0F1319] mb-3">Chauffeur Dress Code</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Dark tailored suit, white collared shirt, conservative dark tie, and polished dark dress shoes. Professional, courteous, and strictly discreet hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section id="partner-form" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-gray-200">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-2">Apply Online</span>
            <h3 className="text-3xl font-serif text-[#0F1319] mb-3">Join the MZS Executive Chauffeurs US Network</h3>
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
                <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Full Name / Operator Contact</label>
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
                  <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Company Email</label>
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
                  <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Direct Phone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0066FF] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Primary US Metro Market</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. New York, Miami, Los Angeles, Chicago"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0066FF] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Primary Fleet Vehicle</label>
                  <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0066FF] text-sm bg-white"
                  >
                    <option value="Mercedes-Benz S-Class">Mercedes-Benz S-Class</option>
                    <option value="Mercedes-Benz E-Class">Mercedes-Benz E-Class</option>
                    <option value="Cadillac Escalade ESV">Cadillac Escalade ESV / Luxury SUV</option>
                    <option value="Lincoln Navigator L">Lincoln Navigator L</option>
                    <option value="Mercedes-Benz EQS / EQE">Mercedes-Benz EQS / EQE (Electric)</option>
                    <option value="Executive Luxury Sprinter">Executive Luxury Sprinter</option>
                    <option value="Multi-Vehicle Fleet (5+ cars)">Multi-Vehicle Fleet (5+ cars)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-sm transition-all shadow-md cursor-pointer mt-6"
              >
                Submit Partner Application
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

        {/* Partner Support Contact Callout */}
        <div className="mt-12 p-8 rounded-2xl bg-[#0F1319] text-white text-center">
          <h3 className="text-xl font-serif mb-2">Have questions about becoming an MZS Chauffeur Partner?</h3>
          <p className="text-sm text-gray-300 mb-6">Our US Partner Operations desk is here to assist you.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <a href="tel:+18888017476" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium transition-all">
              <Phone className="w-4 h-4" />
              Call Dispatch: (888) 801-7476
            </a>
            <a href="mailto:info@mzexecutivechauffeurs.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all border border-white/20">
              <Mail className="w-4 h-4" />
              info@mzexecutivechauffeurs.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
