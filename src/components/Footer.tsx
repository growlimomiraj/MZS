import React from 'react';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenCookies: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCookies }) => {
  return (
    <footer className="bg-[#0F1319] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        {/* Top App Download CTA in Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-12 mb-12 border-b border-white/10 gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl font-serif">Blacklane</span>
            <span className="text-gray-400 text-sm hidden sm:inline">|</span>
            <span className="text-gray-400 text-sm">Your chauffeur awaits worldwide</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://blacklane.onelink.me/FzXX/iOSAppDownload"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="https://static.blacklane.com/assets/_next/static/media/app-store-logo-light.5f768b87b08b58e5.svg"
                alt="App Store"
                height={35}
                width={120}
                className="h-9 w-auto"
              />
            </a>
            <a
              href="https://blacklane.onelink.me/Jxjh/androidAppDownload"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="https://static.blacklane.com/assets/_next/static/media/playstore-logo-light.2938f2b1a073fbc4.svg"
                alt="Google Play"
                height={35}
                width={120}
                className="h-9 w-auto"
              />
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
                  How Blacklane works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/career')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Career
                </button>
              </li>
              <li>
                <a
                  href="https://www.blacklane.com/en/press/releases/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors block"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="https://www.blacklane.com/en/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors block"
                >
                  Blog
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/sustainability')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Green initiatives
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
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/corporations')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Corporations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/travel-agencies')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Travel agencies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/strategic-partnerships')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Strategic partnerships
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Top cities */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
              Top cities
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/airport-transfer')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  New York
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/airport-transfer')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  London
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/airport-transfer')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Berlin
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
                  Paris
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cities')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left font-medium"
                >
                  All cities &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Explore */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
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
                  onClick={() => onNavigate('/limousine-service')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Limousine service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/chauffeur-service')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Chauffeur service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/car-service')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Private car service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/ground-transportation')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ground transportation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/airport-transfer')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Airport transfer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/countries')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left font-medium"
                >
                  All countries &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: City-to-city routes */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
              City-to-city routes
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/city-to-city/new-york-east-hampton')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  New York - East Hampton
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/city-to-city/los-angeles-san-diego')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Los Angeles - San Diego
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/city-to-city/miami-palm-beach')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Miami - Palm Beach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/city-to-city/london-bristol')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  London - Bristol
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/city-to-city/abu-dhabi-dubai')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Dubai - Abu Dhabi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/city-to-city/paris-reims')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Paris - Reims
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row & Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <span>&copy; {new Date().getFullYear()} Blacklane GmbH. All rights reserved.</span>
            <button
              onClick={() => onNavigate('/terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={() => onNavigate('/privacy-policy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy policy
            </button>
            <button
              onClick={() => onNavigate('/imprint')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Legal notice
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

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/blacklane-gmbh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V9.93H5.06v8.57h2.8z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/blacklane/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/Blacklane"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/user/blacklanelimo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

