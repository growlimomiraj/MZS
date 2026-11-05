import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Building2, CreditCard, ShieldCheck, FileText, CheckCircle2, ArrowRight, Sparkles, Clock, Globe } from 'lucide-react';

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
    <div className="bg-[#FAF8F5] text-[#0F1319]">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 contrast-105 pointer-events-none"
          style={{
            backgroundImage:
              'url(/assets/pages/business-hero.webp)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/90 via-[#0F1319]/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 border border-white/15">
            <Building2 className="w-4 h-4 text-[#0066FF]" />
            MZS Executive Chauffeurs for Business
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            Corporate travel, simplified.
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            One single, intuitive platform for enterprises and travel management teams to book, track, and reconcile executive rides across the United States.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('corporate-form');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium rounded-full transition-all shadow-lg text-sm cursor-pointer"
            >
              Request Corporate Account
            </button>
            <button
              onClick={onOpenAuth}
              className="px-8 py-4 glass-pill text-white font-medium rounded-full transition-all text-sm cursor-pointer border border-white/20 hover:bg-white/15"
            >
              Sign In to Company Portal
            </button>
          </div>
        </div>
      </section>

      {/* Booker Portal Preview Graphic */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-2 block">
            Centralized Platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-4">
            From planning to pickup
          </h2>
          <p className="text-base sm:text-lg text-[#596372]">
            Our enterprise tools are built to make your airport transfers, executive commutes, and city-to-city journeys effortless.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-[#0F1319] text-white p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-white/10 text-center md:text-left">
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">Corporate Client Portal</span>
              <span className="text-xl font-serif text-white">MZS Enterprise Dispatch</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">Billing Reconciliation</span>
              <span className="text-xl font-serif text-emerald-400">Consolidated Monthly</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">US Metro Coverage</span>
              <span className="text-xl font-serif text-[#0066FF]">All 50 States</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="font-semibold text-white mb-2">Automated Duty of Care & Tracking</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Live flight radar status, driver assignment details, and instant SMS notifications delivered to both travelers and executive travel arrangers.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="font-semibold text-white mb-2">Cost Center & Department Tagging</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Assign rides to custom project codes, employees, or external client matters with zero manual receipt chasing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored to You: 2 Solution Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-4">
            Tailored to your organization
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-2">Enterprise</span>
              <h3 className="text-2xl font-serif text-[#0F1319] mb-3">Corporate Travel</h3>
              <p className="text-[#596372] text-sm leading-relaxed mb-6">
                Arrange executive journeys for your leadership, employees, and VIP clients with consolidated billing, cost centers, and customized duty of care reporting.
              </p>
            </div>
            <img
              src="/assets/pages/business-card-1.webp"
              alt="MZS corporate travel solution"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-2">Agencies</span>
              <h3 className="text-2xl font-serif text-[#0F1319] mb-3">Travel Agencies & TMCs</h3>
              <p className="text-[#596372] text-sm leading-relaxed mb-6">
                Earn competitive commissions with a premier ground transportation provider seamlessly integrated into your corporate booking tool or GDS workflow.
              </p>
            </div>
            <img
              src="/assets/pages/business-card-2.webp"
              alt="MZS travel management partner solution"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5 Enterprise Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Globe className="w-8 h-8 text-[#0066FF] mb-4" />
            <h4 className="text-lg font-serif mb-2">Nationwide reliability</h4>
            <p className="text-xs text-[#596372] leading-relaxed">
              Instant confirmation and consistent 5-star chauffeur standards across the United States.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <CreditCard className="w-8 h-8 text-[#0066FF] mb-4" />
            <h4 className="text-lg font-serif mb-2">Competitive rates</h4>
            <p className="text-xs text-[#596372] leading-relaxed">
              Transparent distance-based rates with zero surge pricing or unannounced extras.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Clock className="w-8 h-8 text-[#0066FF] mb-4" />
            <h4 className="text-lg font-serif mb-2">Unrivaled flexibility</h4>
            <p className="text-xs text-[#596372] leading-relaxed">
              Change or cancel free of charge up to 1 hour before scheduled pickup.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[#0066FF] mb-4" />
            <h4 className="text-lg font-serif mb-2">Priority 24/7 care</h4>
            <p className="text-xs text-[#596372] leading-relaxed">
              Dedicated enterprise support reps ready to manage urgent changes around the clock.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <FileText className="w-8 h-8 text-[#0066FF] mb-4" />
            <h4 className="text-lg font-serif mb-2">Simplified invoicing</h4>
            <p className="text-xs text-[#596372] leading-relaxed">
              Monthly consolidated invoicing with department expense coding and automated exports.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Showcase Graphic */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white p-6 sm:p-10 flex flex-col items-center">
          <img
            src="/assets/pages/business-portal.png"
            alt="MZS luxury executive dispatch portal"
            className="w-full max-w-4xl object-contain rounded-2xl"
          />
        </div>
      </section>

      {/* Corporate Inquiry Form */}
      <section id="corporate-form" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-gray-200">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-2">Get Started</span>
            <h3 className="text-3xl font-serif text-[#0F1319] mb-3">Open an MZS Corporate Account</h3>
            <p className="text-sm text-[#596372]">
              Fill in your organization details to receive our corporate rate schedule and dedicated portal access.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center">
              <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-serif text-green-900 mb-2">Inquiry Received</h4>
              <p className="text-sm text-green-700">
                Thank you. An MZS Enterprise Account Director will contact you within 2 business hours with your corporate portal credentials.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Company Name</label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Goldman Sachs, McKinsey, Vogue"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0066FF] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Work Email</label>
                <input
                  type="email"
                  required
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  placeholder="executive@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0066FF] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Monthly Travel Volume</label>
                <select
                  value={estimatedRides}
                  onChange={(e) => setEstimatedRides(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0066FF] text-sm bg-white"
                >
                  <option value="1-10">1 - 10 rides / month</option>
                  <option value="10-50">10 - 50 rides / month</option>
                  <option value="50-200">50 - 200 rides / month</option>
                  <option value="200+">200+ rides / month (Enterprise tier)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-sm transition-all shadow-md cursor-pointer mt-6"
              >
                Submit Corporate Request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
