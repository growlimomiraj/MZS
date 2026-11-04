import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';

interface LegalPageProps {
  initialTab?: 'terms' | 'privacy' | 'imprint' | 'accessibility';
  onNavigate: (route: PageRoute) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'terms', onNavigate }) => {
  const [tab, setTab] = useState<'terms' | 'privacy' | 'imprint' | 'accessibility'>(initialTab);

  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  return (
    <div className="bg-white text-[#0F1319]">
      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-serif mb-4">Legal & Compliance</h1>
          <p className="text-sm text-gray-400">
            MZS GmbH &bull; Registered in Berlin, Germany &bull; Global Operations
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 bg-white sticky top-[72px] z-20">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-start space-x-2 sm:space-x-8 overflow-x-auto no-scrollbar py-3">
          <button
            onClick={() => {
              setTab('terms');
              onNavigate('/terms');
            }}
            className={`py-2 text-sm font-semibold tracking-wide border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              tab === 'terms'
                ? 'border-[#0F63BD] text-[#0F63BD]'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            Terms of Service
          </button>
          <button
            onClick={() => {
              setTab('privacy');
              onNavigate('/privacy-policy');
            }}
            className={`py-2 text-sm font-semibold tracking-wide border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              tab === 'privacy'
                ? 'border-[#0F63BD] text-[#0F63BD]'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => {
              setTab('imprint');
              onNavigate('/imprint');
            }}
            className={`py-2 text-sm font-semibold tracking-wide border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              tab === 'imprint'
                ? 'border-[#0F63BD] text-[#0F63BD]'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            Legal Notice (Imprint)
          </button>
          <button
            onClick={() => {
              setTab('accessibility');
              onNavigate('/accessibility');
            }}
            className={`py-2 text-sm font-semibold tracking-wide border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              tab === 'accessibility'
                ? 'border-[#0F63BD] text-[#0F63BD]'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            Accessibility
          </button>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto prose prose-gray">
        {tab === 'terms' && (
          <div className="space-y-6 text-[#0F1319]">
            <h2 className="text-3xl font-serif">Terms of Service</h2>
            <p className="text-sm text-gray-500">Last updated: November 2026</p>

            <h3 className="text-xl font-serif font-semibold mt-6">1. Scope and Subject Matter</h3>
            <p className="text-sm leading-relaxed text-[#666F7B]">
              These General Terms and Conditions govern the intermediation and execution of passenger transportation arrangements facilitated by MZS GmbH ("MZS"). By making a reservation through our digital channels (website, mobile application, or corporate APIs), the user agrees to be bound by these Terms.
            </p>

            <h3 className="text-xl font-serif font-semibold mt-6">2. Contractual Relationship & Booking Confirmation</h3>
            <p className="text-sm leading-relaxed text-[#666F7B]">
              MZS acts as an agent arranging carriage agreements between passengers and licensed independent transportation providers ("Chauffeur Partners"). A binding booking request is created when the user completes payment information and clicks "Confirm Booking". Confirmation is transmitted immediately by email and SMS.
            </p>

            <h3 className="text-xl font-serif font-semibold mt-6">3. Guaranteed All-Inclusive Pricing</h3>
            <p className="text-sm leading-relaxed text-[#666F7B]">
              All quotes provided by MZS are all-inclusive fixed rates guaranteed at the moment of reservation. Rates include applicable sales taxes, motorway tolls, statutory road levies, flight delay monitoring, and driver gratuity. No unexpected surge surcharges apply.
            </p>

            <h3 className="text-xl font-serif font-semibold mt-6">4. Cancellation & Modification Policies</h3>
            <p className="text-sm leading-relaxed text-[#666F7B]">
              - <strong>One-Way Point-to-Point Transfers:</strong> Cancellations made more than 1 hour prior to scheduled pickup time are 100% free with immediate full refund.<br />
              - <strong>Hourly Chauffeur Bookings & Long-Distance City-to-City:</strong> Cancellations made more than 24 hours prior to scheduled departure are completely free.
            </p>
          </div>
        )}

        {tab === 'privacy' && (
          <div className="space-y-6 text-[#0F1319]">
            <h2 className="text-3xl font-serif">Privacy Policy</h2>
            <p className="text-sm text-gray-500">GDPR & CCPA Compliant Privacy Notice</p>

            <h3 className="text-xl font-serif font-semibold mt-6">1. Data Controller Overview</h3>
            <p className="text-sm leading-relaxed text-[#666F7B]">
              MZS GmbH, Franklinstraße 28-29, 10587 Berlin, Germany, acts as the data controller responsible for personal information processed under Regulation (EU) 2016/679 (General Data Protection Regulation) and international privacy frameworks.
            </p>

            <h3 className="text-xl font-serif font-semibold mt-6">2. Collection of Information</h3>
            <p className="text-sm leading-relaxed text-[#666F7B]">
              We collect information necessary to fulfill your transportation requirements: names of lead passengers, contact details (phone, email), pickup and drop-off coordinates, flight numbers for delay monitoring, and encrypted billing tokens.
            </p>

            <h3 className="text-xl font-serif font-semibold mt-6">3. Security & Data Protection</h3>
            <p className="text-sm leading-relaxed text-[#666F7B]">
              All transmission of personal data occurs through end-to-end TLS 1.3 encryption. We strictly enforce access controls and adhere to PCI-DSS Level 1 compliance for all digital payment transactions. We never sell your personal data to third parties.
            </p>
          </div>
        )}

        {tab === 'imprint' && (
          <div className="space-y-6 text-[#0F1319]">
            <h2 className="text-3xl font-serif">Legal Notice (Imprint)</h2>
            <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-sm space-y-3 leading-relaxed text-[#666F7B]">
              <p><strong>Company:</strong> MZS GmbH</p>
              <p><strong>Address:</strong> Franklinstraße 28-29, 10587 Berlin, Germany</p>
              <p><strong>Managing Directors:</strong> Dr. Jens Wohltorf, Frank Steuer</p>
              <p><strong>Commercial Register:</strong> Amtsgericht Charlottenburg (Berlin), HRB 138350 B</p>
              <p><strong>VAT ID (USt-IdNr.):</strong> DE 280 673 249</p>
              <p><strong>Contact Email:</strong> service@blacklane.com</p>
              <p><strong>Global Headquarters Telephone:</strong> +49 30 2016 3020</p>
            </div>
          </div>
        )}

        {tab === 'accessibility' && (
          <div className="space-y-6 text-[#0F1319]">
            <h2 className="text-3xl font-serif">Accessibility Statement</h2>
            <p className="text-sm leading-relaxed text-[#666F7B]">
              MZS is committed to ensuring digital accessibility for people with disabilities. We continually enhance the user experience for everyone and apply relevant accessibility standards, conforming to WCAG 2.1 Level AA specifications across web and mobile platforms.
            </p>
            <p className="text-sm leading-relaxed text-[#666F7B]">
              Should you encounter any accessibility barrier on our website or wish to request special assistance for your journey, please contact our 24/7 accessibility coordinator at accessibility@blacklane.com.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

