import React, { useState } from 'react';
import { PageRoute } from '../types';
import { FAQS_DATA } from '../constants/data';
import { Search, ChevronDown, MessageSquare, Phone, Mail, HelpCircle } from 'lucide-react';

interface HelpPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HelpPage: React.FC<HelpPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredFaqs = FAQS_DATA.filter(
    (f) =>
      f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#FAF8F5] text-[#0F1319]">
      {/* Hero with Search */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
            MZS Executive Chauffeurs Concierge
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white mb-6">
            How can we assist you today?
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-8 font-light">
            Browse answers to common questions or reach our 24/7 US guest concierge team.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search airport wait time, flight delays, luggage, cancellations..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#0066FF] transition-all"
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-4">
              <MessageSquare className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-serif mb-1">Live Concierge Chat</h3>
            <p className="text-xs text-[#596372] mb-5">Chat with our 24/7 guest specialists</p>
            <button className="px-6 py-2.5 rounded-full bg-[#0066FF] text-white text-xs font-semibold hover:bg-[#0052CC] transition-colors cursor-pointer">
              Start Live Chat
            </button>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-4">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-serif mb-1">Toll-Free USA Support</h3>
            <p className="text-xs text-[#596372] mb-5">24/7 Nationwide assistance</p>
            <a
              href="tel:+18888017476"
              className="px-6 py-2.5 rounded-full border border-gray-300 text-xs font-semibold hover:bg-gray-50 transition-colors"
            >
              (888) 801-7476
            </a>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-4">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-serif mb-1">Email Inquiries</h3>
            <p className="text-xs text-[#596372] mb-5">Guaranteed response within 2 hours</p>
            <a
              href="mailto:info@mzexecutivechauffeurs.com"
              className="px-6 py-2.5 rounded-full border border-gray-300 text-xs font-semibold hover:bg-gray-50 transition-colors"
            >
              info@mzexecutivechauffeurs.com
            </a>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
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
            ))
          ) : (
            <div className="text-center py-12 text-gray-500 text-sm">
              No matching answers found for &ldquo;{searchTerm}&rdquo;. Please contact our 24/7 support team above.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
