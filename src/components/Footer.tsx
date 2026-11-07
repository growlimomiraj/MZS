import React from 'react';
import { PageRoute } from '../types';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenCookies: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCookies }) => {
  return (
    <footer className="relative z-10 bg-[#0F1319] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Branding & Direct Contact Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-12 mb-12 border-b border-white/10 gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="flex flex-col">
              <span className="text-2xl font-['PP_Fragment',serif] font-bold tracking-[0.08em] leading-none">
                MZS
              </span>
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-gray-300 mt-1">
                Executive Chauffeurs
              </span>
            </div>
            <span className="text-gray-500 text-sm hidden sm:inline">|</span>
            <span className="text-gray-300 text-sm font-light">
              Premier Nationwide Luxury Chauffeur Service
            </span>
          </div>

          {/* Direct Contact Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+18888017476"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>(888) 801-7476</span>
            </a>
            <a
              href="mailto:info@mzexecutivechauffeurs.com"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition-all shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>info@mzexecutivechauffeurs.com</span>
            </a>
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 pb-16">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  About MZS Executive Chauffeurs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/career')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/partners')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Become a chauffeur partner
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/help')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Client support & FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Business solutions */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
              Business solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/business')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Corporate travel portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/corporations')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Enterprise programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/travel-agencies')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Travel management & TMCs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/strategic-partnerships')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  VIP & private aviation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Top US Cities */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
              Top US Destinations
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/airport-transfer')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  New York City
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/airport-transfer')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Los Angeles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/airport-transfer')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Miami & Palm Beach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/airport-transfer')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Chicago
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/airport-transfer')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  San Francisco
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cities')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left font-medium text-[#0066FF]"
                >
                  All US cities &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/airport-transfer')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  US airport transfers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/city-to-city')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  City-to-city rides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/hourly-car-service')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  By-the-hour hire
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/limousine-service')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Luxury limousine service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/chauffeur-service')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Executive chauffeur service
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Featured US Routes */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
              Top US Routes
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/city-to-city/new-york-east-hampton')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  New York &rarr; East Hampton
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/city-to-city/los-angeles-san-diego')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Los Angeles &rarr; San Diego
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/city-to-city/miami-palm-beach')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Miami &rarr; Palm Beach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/city-to-city')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  New York &rarr; Philadelphia
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/city-to-city')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  San Francisco &rarr; Napa Valley
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/city-to-city')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Los Angeles &rarr; Palm Springs
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <span>&copy; {new Date().getFullYear()} MZS Executive Chauffeurs Inc. All rights reserved.</span>
            <button
              onClick={() => onNavigate('/terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onNavigate('/privacy-policy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('/imprint')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Legal Notice
            </button>
            <button
              onClick={() => onNavigate('/accessibility')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Accessibility
            </button>
            <button
              onClick={onOpenCookies}
              className="hover:text-white transition-colors cursor-pointer underline underline-offset-2"
            >
              Cookie Preferences
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>24/7 US Support:</span>
            <a href="tel:+18888017476" className="text-white hover:text-[#0066FF] font-medium">
              (888) 801-7476
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
