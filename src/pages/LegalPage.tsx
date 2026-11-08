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
    <div className="bg-[#FAF8F5] text-[#0F1319]">
      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-serif mb-4">Legal & Compliance</h1>
          <p className="text-sm text-gray-400">
            MZS Executive Chauffeurs Inc. &bull; Registered in the United States &bull; Nationwide Operations
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
                ? 'border-[#0066FF] text-[#0066FF]'
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
                ? 'border-[#0066FF] text-[#0066FF]'
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
                ? 'border-[#0066FF] text-[#0066FF]'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            Corporate Information
          </button>
          <button
            onClick={() => {
              setTab('accessibility');
              onNavigate('/accessibility');
            }}
            className={`py-2 text-sm font-semibold tracking-wide border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              tab === 'accessibility'
                ? 'border-[#0066FF] text-[#0066FF]'
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
            <p className="text-sm leading-relaxed text-[#596372]">
              These General Terms and Conditions govern the intermediation and execution of luxury passenger ground transportation facilitated by MZS Executive Chauffeurs Inc. (&ldquo;MZS Executive Chauffeurs&rdquo;) within the United States. By making a reservation through our digital platforms or concierge line, the user agrees to be bound by these Terms.
            </p>

            <h3 className="text-xl font-serif font-semibold mt-6">2. Contractual Relationship & Booking Confirmation</h3>
            <p className="text-sm leading-relaxed text-[#596372]">
              MZS Executive Chauffeurs arranges executive carriage agreements with fully licensed, commercially insured professional chauffeur partners. A binding booking confirmation is generated immediately upon reservation and delivered via email and SMS.
            </p>

            <h3 className="text-xl font-serif font-semibold mt-6">3. Guaranteed All-Inclusive Pricing</h3>
            <p className="text-sm leading-relaxed text-[#596372]">
              All quotes provided by MZS Executive Chauffeurs are all-inclusive guaranteed rates confirmed at the time of reservation, calculated based on distance or booked hourly duration. Rates cover all applicable state and federal taxes, highway tolls, statutory airport fees, flight delay monitoring, and chauffeur gratuities. No surge pricing or unexpected surcharges apply.
            </p>

            <h3 className="text-xl font-serif font-semibold mt-6">4. Cancellation & Modification Policies</h3>
            <p className="text-sm leading-relaxed text-[#596372]">
              - <strong>One-Way Point-to-Point Transfers:</strong> Free cancellation up to 1 hour prior to scheduled pickup time with immediate full refund.<br />
              - <strong>Hourly Chauffeur Bookings & Long-Distance City-to-City:</strong> Free cancellation up to 24 hours prior to scheduled departure.
            </p>
          </div>
        )}

        {tab === 'privacy' && (
          <div className="space-y-6 text-[#0F1319]">
            <h2 className="text-3xl font-serif">Privacy Policy</h2>
            <p className="text-sm text-gray-500">US Privacy Standards Compliant</p>

            <h3 className="text-xl font-serif font-semibold mt-6">1. Data Controller Overview</h3>
            <p className="text-sm leading-relaxed text-[#596372]">
              MZS Executive Chauffeurs Inc. acts as the responsible data controller for personal information processed under applicable federal and state privacy statutes.
            </p>

            <h3 className="text-xl font-serif font-semibold mt-6">2. Collection of Information</h3>
            <p className="text-sm leading-relaxed text-[#596372]">
              We collect information strictly necessary to fulfill your executive transportation: passenger names, telephone numbers, emails, flight details for delay tracking, and tokenized payment details. We do not sell or monetize personal information.
            </p>

            <h3 className="text-xl font-serif font-semibold mt-6">3. Security & Payment Processing</h3>
            <p className="text-sm leading-relaxed text-[#596372]">
              All data transmissions are encrypted using TLS 1.3 encryption. Payment transactions are processed in compliance with Level 1 PCI-DSS standards.
            </p>
          </div>
        )}

        {tab === 'imprint' && (
          <div className="space-y-6 text-[#0F1319]">
            <h2 className="text-3xl font-serif">Corporate Information</h2>
            <div className="p-8 rounded-2xl bg-white border border-gray-200 text-sm space-y-3 leading-relaxed text-[#596372] shadow-sm">
              <p><strong>Company Name:</strong> MZS Executive Chauffeurs Inc.</p>
              <p><strong>Service Territory:</strong> United States Nationwide</p>
              <p><strong>Client Inquiries Email:</strong> <a href="mailto:info@mzexecutivechauffeurs.com" className="text-[#0066FF] font-medium">info@mzexecutivechauffeurs.com</a></p>
              <p><strong>Toll-Free Client Care Line:</strong> <a href="tel:+18888017476" className="text-[#0066FF] font-medium">(888) 801-7476</a></p>
              <p><strong>Hours of Operation:</strong> 24 Hours / 7 Days a Week Nationwide</p>
            </div>
          </div>
        )}

        {tab === 'accessibility' && (
          <div className="space-y-6 text-[#0F1319]">
            <h2 className="text-3xl font-serif">Accessibility Statement</h2>
            <p className="text-sm leading-relaxed text-[#596372]">
              MZS Executive Chauffeurs is committed to ensuring full digital accessibility for all users, including individuals with disabilities. Our web properties adhere to WCAG 2.1 Level AA accessibility specifications.
            </p>
            <p className="text-sm leading-relaxed text-[#596372]">
              For accessibility assistance or to arrange ADA-compliant wheelchair accessible transportation, please contact our 24/7 guest support team at <a href="mailto:info@mzexecutivechauffeurs.com" className="text-[#0066FF]">info@mzexecutivechauffeurs.com</a> or call <a href="tel:+18888017476" className="text-[#0066FF]">(888) 801-7476</a>.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
