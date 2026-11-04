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
    <div className="bg-white text-[#0F1319]">
      {/* Hero with Search */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
            Blacklane Help Center
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white mb-6">
            How can we assist you today?
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-8 font-normal">
            Browse answers to common questions or reach our 24/7 multilingual support team.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for airport wait time, cancellations, child seats, luggage..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#0F63BD] transition-all"
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-gray-100 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif mb-1">Live Chat Support</h3>
            <p className="text-xs text-[#666F7B] mb-4">Chat with our 24/7 care specialists</p>
            <button className="px-5 py-2 rounded-full bg-[#0F63BD] text-white text-xs font-semibold hover:bg-[#0D529C] transition-colors cursor-pointer">
              Start Live Chat
            </button>
          </div>

          <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-gray-100 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif mb-1">Global Telephone</h3>
            <p className="text-xs text-[#666F7B] mb-4">Toll-free priority assistance</p>
            <a
              href="tel:+18557342928"
              className="px-5 py-2 rounded-full border border-gray-300 text-xs font-semibold hover:bg-gray-100 transition-colors"
            >
              +1 (855) 734-2928
            </a>
          </div>

          <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-gray-100 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-[#0F63BD]/10 text-[#0F63BD] flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif mb-1">Email Inquiries</h3>
            <p className="text-xs text-[#666F7B] mb-4">Guaranteed response within 4 hours</p>
            <a
              href="mailto:service@blacklane.com"
              className="px-5 py-2 rounded-full border border-gray-300 text-xs font-semibold hover:bg-gray-100 transition-colors"
            >
              service@blacklane.com
            </a>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-10">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-medium text-lg text-[#0F1319] hover:bg-gray-50 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-[#666F7B] leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              No articles found matching "{searchTerm}". Please try a different query or contact 24/7 support.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
