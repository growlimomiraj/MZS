import React, { useState, useEffect, useRef } from 'react';
import { BlacklaneLogo } from './BlacklaneLogo';
import { ChevronDown, User, Menu, X, Globe, Check } from 'lucide-react';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenAuth: () => void;
  onBookNowClick?: () => void;
  colorMode?: 'dark' | 'light';
}

const LANGUAGES = [
  { code: 'en-US', label: 'English (US)' },
  { code: 'en-GB', label: 'English (UK)' },
  { code: 'en-CA', label: 'English (CA)' },
  { code: 'en-AU', label: 'English (AU)' },
  { code: 'en-AE', label: 'English (AE)' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '简体中文' },
];

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenAuth,
  onBookNowClick,
  colorMode = 'dark',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'business' | 'lang' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<'services' | 'business' | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('English (US)');

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (route: PageRoute) => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    onNavigate(route);
  };

  const isLightPage = colorMode === 'light' && !isScrolled;
  const textColor = isLightPage ? 'text-[#0F1319]' : 'text-white';
  const logoColor = isLightPage ? 'dark' : 'white';

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F1319]/90 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 h-[72px] flex items-center justify-between">
        {/* Left: Official Blacklane Logo */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center focus:outline-none cursor-pointer"
            aria-label="Go to Homepage"
          >
            <BlacklaneLogo color={logoColor} className="h-6 sm:h-7 w-auto transition-transform hover:opacity-90" />
          </button>
        </div>

        {/* Right Nav & Actions matching reference screenshot */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 mr-2">
            {/* Our Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-normal text-white/90 hover:text-white transition-colors cursor-pointer`}
                aria-expanded={activeDropdown === 'services'}
              >
                <span>Our services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#0F1319]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-2 shadow-2xl animate-slide-down">
                  <button
                    onClick={() => handleNavClick('/city-to-city')}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                  >
                    City-to-City rides
                  </button>
                  <button
                    onClick={() => handleNavClick('/chauffeur-service')}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                  >
                    Chauffeur hailing
                  </button>
                  <button
                    onClick={() => handleNavClick('/airport-transfer')}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                  >
                    Airport transfers
                  </button>
                  <button
                    onClick={() => handleNavClick('/hourly-car-service')}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                  >
                    Hourly hire
                  </button>
                  <button
                    onClick={() => handleNavClick('/chauffeur-service')}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                  >
                    Chauffeur service
                  </button>
                  <button
                    onClick={() => handleNavClick('/limousine-service')}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                  >
                    Limousine service
                  </button>
                </div>
              )}
            </div>

            {/* For Business Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'business' ? null : 'business')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-normal text-white/90 hover:text-white transition-colors cursor-pointer`}
                aria-expanded={activeDropdown === 'business'}
              >
                <span>For business</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${
                    activeDropdown === 'business' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'business' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#0F1319]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-2 shadow-2xl animate-slide-down">
                  <button
                    onClick={() => handleNavClick('/business')}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => handleNavClick('/corporations')}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                  >
                    Corporations
                  </button>
                  <button
                    onClick={() => handleNavClick('/travel-agencies')}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                  >
                    Travel agencies
                  </button>
                  <button
                    onClick={() => handleNavClick('/strategic-partnerships')}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                  >
                    Strategic partnerships
                  </button>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <button
              onClick={() => handleNavClick('/partners')}
              className="px-3 py-2 text-sm font-normal text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              For chauffeurs
            </button>
            <button
              onClick={() => handleNavClick('/help')}
              className="px-3 py-2 text-sm font-normal text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              Help
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'lang' ? null : 'lang')}
                className="flex items-center gap-1 px-3 py-2 text-sm font-normal text-white/90 hover:text-white transition-colors cursor-pointer"
                aria-label="Select language"
              >
                <span>{selectedLanguage}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-70 transition-transform ${
                    activeDropdown === 'lang' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'lang' && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-[#0F1319]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-2 shadow-2xl max-h-80 overflow-y-auto animate-slide-down">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLanguage(lang.label);
                        setActiveDropdown(null);
                      }}
                      className="w-full flex items-center justify-between px-3.5 py-2 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                    >
                      <span>{lang.label}</span>
                      {selectedLanguage === lang.label && <Check className="w-4 h-4 text-[#0F63BD]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Sign in Button: Glass Pill with User Icon */}
          <button
            type="button"
            onClick={onOpenAuth}
            className="flex items-center gap-2 px-4 py-2 text-sm font-normal text-white glass-pill rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:bg-white/20"
          >
            <User className="w-4 h-4 opacity-90" />
            <span>Sign in</span>
          </button>

          {/* Book Now Button: Only visible on scrolled state or internal pages */}
          {(isScrolled || currentRoute !== '/') && (
            <button
              type="button"
              onClick={() => {
                if (onBookNowClick) {
                  onBookNowClick();
                } else {
                  handleNavClick('/');
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="px-5 py-2 text-sm font-semibold text-white bg-[#0F63BD] hover:bg-[#0D529C] rounded-full transition-all duration-200 shadow-md cursor-pointer animate-in fade-in zoom-in-95"
            >
              Book now
            </button>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-[#0F1319]/98 backdrop-blur-2xl z-40 overflow-y-auto px-6 py-6 border-t border-white/10 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            <div>
              <button
                onClick={() =>
                  setMobileExpandedSection(mobileExpandedSection === 'services' ? null : 'services')
                }
                className="w-full flex items-center justify-between py-3 text-lg font-medium text-white border-b border-white/10 cursor-pointer"
              >
                <span>Our services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileExpandedSection === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileExpandedSection === 'services' && (
                <div className="pl-4 py-2 space-y-3 border-l-2 border-[#0F63BD] mt-2">
                  <button
                    onClick={() => handleNavClick('/city-to-city')}
                    className="block text-base text-gray-300 hover:text-white"
                  >
                    City-to-City rides
                  </button>
                  <button
                    onClick={() => handleNavClick('/chauffeur-service')}
                    className="block text-base text-gray-300 hover:text-white"
                  >
                    Chauffeur hailing
                  </button>
                  <button
                    onClick={() => handleNavClick('/airport-transfer')}
                    className="block text-base text-gray-300 hover:text-white"
                  >
                    Airport transfers
                  </button>
                  <button
                    onClick={() => handleNavClick('/hourly-car-service')}
                    className="block text-base text-gray-300 hover:text-white"
                  >
                    Hourly hire
                  </button>
                  <button
                    onClick={() => handleNavClick('/chauffeur-service')}
                    className="block text-base text-gray-300 hover:text-white"
                  >
                    Chauffeur service
                  </button>
                  <button
                    onClick={() => handleNavClick('/limousine-service')}
                    className="block text-base text-gray-300 hover:text-white"
                  >
                    Limousine service
                  </button>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() =>
                  setMobileExpandedSection(mobileExpandedSection === 'business' ? null : 'business')
                }
                className="w-full flex items-center justify-between py-3 text-lg font-medium text-white border-b border-white/10 cursor-pointer"
              >
                <span>For business</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileExpandedSection === 'business' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileExpandedSection === 'business' && (
                <div className="pl-4 py-2 space-y-3 border-l-2 border-[#0F63BD] mt-2">
                  <button
                    onClick={() => handleNavClick('/business')}
                    className="block text-base text-gray-300 hover:text-white"
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => handleNavClick('/corporations')}
                    className="block text-base text-gray-300 hover:text-white"
                  >
                    Corporations
                  </button>
                  <button
                    onClick={() => handleNavClick('/travel-agencies')}
                    className="block text-base text-gray-300 hover:text-white"
                  >
                    Travel agencies
                  </button>
                  <button
                    onClick={() => handleNavClick('/strategic-partnerships')}
                    className="block text-base text-gray-300 hover:text-white"
                  >
                    Strategic partnerships
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('/partners')}
              className="text-left py-3 text-lg font-medium text-white border-b border-white/10 cursor-pointer"
            >
              For chauffeurs
            </button>
            <button
              onClick={() => handleNavClick('/help')}
              className="text-left py-3 text-lg font-medium text-white border-b border-white/10 cursor-pointer"
            >
              Help
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
