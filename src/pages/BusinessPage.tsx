import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Building2, CreditCard, Shield, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface BusinessPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenAuth: () => void;
}

export const BusinessPage: React.FC<BusinessPageProps> = ({ onNavigate, onOpenAuth }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [estimatedRides, setEstimatedRides] = useState('10-50');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white text-[#0F1319]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-70 contrast-105 pointer-events-none"
          style={{
            backgroundImage:
              'url(https://static.blacklane.com/assets/_next/static/media/4.13f5624e9bdcc2ee.webp)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319] via-black/40 to-black/70 pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
            MZS for Business & Travel Management
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-normal text-white mb-6 leading-tight">
            Corporate travel, simplified.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-normal">
            One single, intuitive platform for enterprises and travel agencies to book, monitor, and invoice executive journeys globally.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('corporate-form');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#0F63BD] hover:bg-[#0D529C] text-white font-semibold rounded-full transition-all shadow-lg text-sm cursor-pointer"
            >
              Request Corporate Account
            </button>
            <button
              onClick={onOpenAuth}
              className="px-8 py-4 glass-pill text-white font-semibold rounded-full transition-all text-sm cursor-pointer"
            >
              Sign In to Company Portal
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-2">Centralized Corporate Portal</h3>
              <p className="text-sm text-[#666F7B] leading-relaxed">
                Book for multiple executives, VIP guests, or board members across global offices from a single dashboard.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-2">Flexible Corporate Billing</h3>
              <p className="text-sm text-[#666F7B] leading-relaxed">
                Consolidated monthly invoices, split billing by department, cost center codes, and automated expense sync.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-2">Unmatched Duty of Care</h3>
              <p className="text-sm text-[#666F7B] leading-relaxed">
                Vetted licensed professional chauffeurs, flight tracking, 24/7 dedicated corporate helpline, and live GPS ride status.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-2">Sustainability Reporting</h3>
              <p className="text-sm text-[#666F7B] leading-relaxed">
                Every kilometer is 100% carbon-neutral. Receive certified carbon offset audits for corporate ESG reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Account Request Form */}
      <section id="corporate-form" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-100">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F1319] text-white shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-3">
              Open a MZS Corporate Account
            </h2>
            <p className="text-sm text-gray-400">
              Get in touch with our enterprise mobility team for customized volume rates and invoicing terms.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-serif mb-2">Inquiry Received</h3>
              <p className="text-sm text-gray-300">
                A dedicated MZS corporate account director will contact you within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Goldman Sachs or Acme Corp"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0F63BD]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  placeholder="travel@company.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0F63BD]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Estimated Monthly Rides
                </label>
                <select
                  value={estimatedRides}
                  onChange={(e) => setEstimatedRides(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1C222C] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#0F63BD]"
                >
                  <option value="1-10">1 - 10 rides / month</option>
                  <option value="10-50">10 - 50 rides / month</option>
                  <option value="50-200">50 - 200 rides / month</option>
                  <option value="200+">200+ rides / month (Enterprise)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0F63BD] hover:bg-[#0D529C] text-white font-semibold rounded-xl text-sm transition-all shadow-lg cursor-pointer mt-6"
              >
                Submit Corporate Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

