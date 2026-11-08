import React, { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { CookieModal } from './components/CookieModal';
import { VehicleSelectionModal } from './components/VehicleSelectionModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AirportTransferPage } from './pages/AirportTransferPage';
import { HourlyHirePage } from './pages/HourlyHirePage';
import { CityToCityPage } from './pages/CityToCityPage';
import { BusinessPage } from './pages/BusinessPage';
import { ChauffeurServicePage } from './pages/ChauffeurServicePage';
import { LimousineServicePage } from './pages/LimousineServicePage';
import { HelpPage } from './pages/HelpPage';
import { AboutPage } from './pages/AboutPage';
import { CitiesPage } from './pages/CitiesPage';
import { RouteDetailPage } from './pages/RouteDetailPage';
import { LegalPage } from './pages/LegalPage';

import { BookingState, PageRoute } from './types';
import { ArrowUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Curated Regional City-to-City Route Details
const KNOWN_CITY_ROUTES: Record<string, { from: string; to: string; duration: string; distance: string }> = {
  'new-york-east-hampton': { from: 'New York', to: 'East Hampton', duration: '2h 30m', distance: '105 miles' },
  'new-york-rhode-island': { from: 'New York', to: 'Rhode Island', duration: '3h 15m', distance: '180 miles' },
  'new-york-atlantic-city': { from: 'New York', to: 'Atlantic City', duration: '2h 10m', distance: '128 miles' },
  'new-york-philadelphia': { from: 'New York', to: 'Philadelphia', duration: '1h 50m', distance: '95 miles' },
  'new-york-washington-dc': { from: 'New York', to: 'Washington DC', duration: '4h 00m', distance: '225 miles' },
  'new-york-boston': { from: 'New York', to: 'Boston', duration: '4h 15m', distance: '215 miles' },
  'new-york-greenwich-ct': { from: 'New York', to: 'Greenwich, CT', duration: '1h 10m', distance: '38 miles' },
  'philadelphia-washington-dc': { from: 'Philadelphia', to: 'Washington DC', duration: '2h 30m', distance: '140 miles' },
  'boston-rhode-island': { from: 'Boston', to: 'Rhode Island', duration: '1h 15m', distance: '50 miles' },
};

function normalizeRoutePath(rawPath: string): PageRoute {
  if (!rawPath || rawPath === '/index.html') return '/';
  const cleaned = rawPath.replace(/^\/en/, '').replace(/\/$/, '') || '/';
  return (cleaned.startsWith('/') ? cleaned : `/${cleaned}`) as PageRoute;
}

// Top-Level Error Boundary preventing any blank screen
interface ErrorBoundaryProps {
  children: ReactNode;
  onReset: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('MZS Application Error Boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] bg-[#FAF8F5] text-[#0F1319] flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mx-auto mb-6">
              <span className="text-xl font-serif font-bold">MZS</span>
            </div>
            <h2 className="text-2xl font-serif text-[#0F1319] mb-3">Service Temporarily Unavailable</h2>
            <p className="text-sm text-[#596372] mb-6 font-light leading-relaxed">
              We encountered an unexpected display issue while loading this page. Our executive chauffeur network and 24/7 US dispatch desk remain active nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={this.handleReset}
                className="px-6 py-3 rounded-full bg-[#0F1319] hover:bg-black text-white text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-md"
              >
                Return to Home
              </button>
              <a
                href="tel:+18888017476"
                className="px-6 py-3 rounded-full bg-white border border-gray-300 hover:border-gray-400 text-gray-800 text-xs font-semibold tracking-wide transition-all"
              >
                Call (888) 801-7476
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    return normalizeRoutePath(window.location.pathname);
  });

  const [bookingData, setBookingData] = useState<BookingState | null>(null);
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync route with browser history and always scroll to top on history navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(normalizeRoutePath(window.location.pathname));
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Monitor scroll distance for back-to-top floating control
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Recalibrate ScrollTrigger, ensure page scrolls to top, and update title on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const titles: Record<string, string> = {
      '/': 'MZS Executive Chauffeurs | Premier Nationwide Chauffeur Service USA',
      '/airport-transfer': 'Airport Transfers across USA | MZS Executive Chauffeurs',
      '/city-to-city': 'City-to-City Long Distance Chauffeur Service | MZS Executive Chauffeurs',
      '/hourly-car-service': 'By-the-Hour Chauffeur Service | MZS Executive Chauffeurs',
      '/business': 'Enterprise Corporate Travel Solutions | MZS Executive Chauffeurs',
      '/corporations': 'Enterprise Corporate Programs | MZS Executive Chauffeurs',
      '/travel-agencies': 'Travel Agencies & TMC Partnerships | MZS Executive Chauffeurs',
      '/strategic-partnerships': 'Strategic Partnerships & VIP Aviation | MZS Executive Chauffeurs',
      '/chauffeur-service': 'Professional Chauffeurs USA | MZS Executive Chauffeurs',
      '/limousine-service': 'Luxury Limousine Service USA | MZS Executive Chauffeurs',
      '/about': 'About Us | MZS Executive Chauffeurs',
      '/career': 'Careers | MZS Executive Chauffeurs',
      '/cities': 'Service Cities Nationwide | MZS Executive Chauffeurs',
      '/countries': 'Service Regions | MZS Executive Chauffeurs',
      '/help': '24/7 Guest Concierge & Help | MZS Executive Chauffeurs',
      '/terms': 'Terms of Service | MZS Executive Chauffeurs',
      '/privacy-policy': 'Privacy Policy | MZS Executive Chauffeurs',
      '/imprint': 'Legal Notice | MZS Executive Chauffeurs',
      '/accessibility': 'Accessibility Statement | MZS Executive Chauffeurs',
    };

    if (titles[currentRoute]) {
      document.title = titles[currentRoute];
    } else if (currentRoute.startsWith('/city-to-city/')) {
      document.title = 'City-to-City Route | MZS Executive Chauffeurs';
    } else {
      document.title = 'MZS Executive Chauffeurs | Nationwide USA';
    }

    const t = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      ScrollTrigger.refresh();
    }, 50);
    return () => clearTimeout(t);
  }, [currentRoute]);

  // Navigate to route and immediately scroll page to top
  const handleNavigate = (route: string) => {
    const normalized = normalizeRoutePath(route);
    setCurrentRoute(normalized);
    window.history.pushState({}, '', normalized === '/' ? '/' : normalized);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      ScrollTrigger.refresh();
    }, 20);
  };

  // Direct redirection to booking card widget with smooth scrolling and subtle highlight
  const scrollToBookingWidget = () => {
    const el = document.getElementById('booking-widget');
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
      el.classList.add('ring-2', 'ring-[#0F63BD]', 'transition-all', 'duration-500');
      setTimeout(() => {
        el.classList.remove('ring-2', 'ring-[#0F63BD]');
      }, 1600);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    const pagesWithWidget = [
      '/',
      '/airport-transfer',
      '/hourly-car-service',
      '/city-to-city',
      '/chauffeur-service',
      '/limousine-service',
    ];

    const hasWidgetOnCurrentPage =
      pagesWithWidget.includes(currentRoute) || currentRoute.startsWith('/city-to-city/');

    if (hasWidgetOnCurrentPage) {
      scrollToBookingWidget();
    } else {
      handleNavigate('/');
      setTimeout(() => {
        scrollToBookingWidget();
      }, 150);
    }
  };

  const handleSearchSubmit = (data: BookingState) => {
    setBookingData(data);
    setIsVehicleModalOpen(true);
  };

  // Render the appropriate page
  const renderCurrentPage = () => {
    if (currentRoute === '/') {
      return <HomePage onSearch={handleSearchSubmit} onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/airport-transfer') {
      return <AirportTransferPage onSearch={handleSearchSubmit} onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/hourly-car-service') {
      return <HourlyHirePage onSearch={handleSearchSubmit} onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/city-to-city') {
      return <CityToCityPage onSearch={handleSearchSubmit} onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === '/business' ||
      currentRoute === '/corporations' ||
      currentRoute === '/travel-agencies' ||
      currentRoute === '/strategic-partnerships'
    ) {
      return <BusinessPage onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === '/chauffeur-service' ||
      currentRoute === '/car-service' ||
      currentRoute === '/ground-transportation'
    ) {
      return <ChauffeurServicePage onSearch={handleSearchSubmit} onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/limousine-service') {
      return <LimousineServicePage onSearch={handleSearchSubmit} onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/help') {
      return <HelpPage onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/about' || currentRoute === '/career' || currentRoute === '/sustainability') {
      return <AboutPage onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/cities' || currentRoute === '/countries') {
      return <CitiesPage onNavigate={handleNavigate} />;
    }

    // Dynamic City-to-City Route Details (covers all USA and international routes)
    if (currentRoute.startsWith('/city-to-city/')) {
      const slug = currentRoute.replace('/city-to-city/', '').toLowerCase();
      const matched = KNOWN_CITY_ROUTES[slug];

      if (matched) {
        return (
          <RouteDetailPage
            from={matched.from}
            to={matched.to}
            duration={matched.duration}
            distance={matched.distance}
            onSearch={handleSearchSubmit}
            onNavigate={handleNavigate}
          />
        );
      }

      // Dynamic fallback for any custom city-to-city slug
      const parts = slug.split('-');
      const mid = Math.max(1, Math.floor(parts.length / 2));
      const fromName = parts.slice(0, mid).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Origin';
      const toName = parts.slice(mid).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Destination';

      return (
        <RouteDetailPage
          from={fromName}
          to={toName}
          duration="2h 00m"
          distance="100 miles"
          onSearch={handleSearchSubmit}
          onNavigate={handleNavigate}
        />
      );
    }

    // Legal routes
    if (currentRoute === '/terms') {
      return <LegalPage initialTab="terms" onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/privacy-policy') {
      return <LegalPage initialTab="privacy" onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/imprint') {
      return <LegalPage initialTab="imprint" onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/accessibility') {
      return <LegalPage initialTab="accessibility" onNavigate={handleNavigate} />;
    }

    // Fallback to Homepage
    return <HomePage onSearch={handleSearchSubmit} onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1319] text-[#0F1319]">
      {/* Global Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onBookNowClick={handleBookNow}
      />

      {/* Main Page Content wrapped in Error Boundary */}
      <div className="flex-1">
        <ErrorBoundary onReset={() => handleNavigate('/')}>
          {renderCurrentPage()}
        </ErrorBoundary>
      </div>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} onOpenCookies={() => setIsCookieModalOpen(true)} />

      {/* Floating Scroll-to-Top Control */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0F1319]/90 hover:bg-[#0066FF] text-white border border-white/20 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-1.5 animate-in fade-in zoom-in-90"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4 text-white" />
          <span className="text-[11px] font-semibold pr-1 hidden sm:inline uppercase tracking-wider">Top</span>
        </button>
      )}

      {/* Modals & Overlays */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <CookieModal isOpen={isCookieModalOpen} onClose={() => setIsCookieModalOpen(false)} />
      <VehicleSelectionModal
        isOpen={isVehicleModalOpen}
        onClose={() => setIsVehicleModalOpen(false)}
        bookingData={bookingData}
      />
    </div>
  );
}

export default App;

