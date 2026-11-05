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
import { PartnersPage } from './pages/PartnersPage';
import { HelpPage } from './pages/HelpPage';
import { AboutPage } from './pages/AboutPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { CitiesPage } from './pages/CitiesPage';
import { RouteDetailPage } from './pages/RouteDetailPage';
import { LegalPage } from './pages/LegalPage';

import { BookingState, PageRoute } from './types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Curated US and International City-to-City Route Details
const KNOWN_CITY_ROUTES: Record<string, { from: string; to: string; duration: string; distance: string }> = {
  'new-york-east-hampton': { from: 'New York', to: 'East Hampton', duration: '2h 30m', distance: '105 miles' },
  'los-angeles-san-diego': { from: 'Los Angeles', to: 'San Diego', duration: '2h 15m', distance: '120 miles' },
  'miami-palm-beach': { from: 'Miami', to: 'Palm Beach', duration: '1h 15m', distance: '72 miles' },
  'new-york-philadelphia': { from: 'New York', to: 'Philadelphia', duration: '1h 50m', distance: '95 miles' },
  'san-francisco-napa-valley': { from: 'San Francisco', to: 'Napa Valley', duration: '1h 20m', distance: '58 miles' },
  'los-angeles-palm-springs': { from: 'Los Angeles', to: 'Palm Springs', duration: '2h 00m', distance: '108 miles' },
  'new-york-greenwich,-ct': { from: 'New York', to: 'Greenwich, CT', duration: '1h 10m', distance: '38 miles' },
  'new-york-greenwich-ct': { from: 'New York', to: 'Greenwich, CT', duration: '1h 10m', distance: '38 miles' },
  'new-york-boston': { from: 'New York', to: 'Boston', duration: '4h 15m', distance: '215 miles' },
  'los-angeles-santa-barbara': { from: 'Los Angeles', to: 'Santa Barbara', duration: '1h 45m', distance: '95 miles' },
  'miami-fort-lauderdale': { from: 'Miami', to: 'Fort Lauderdale', duration: '0h 45m', distance: '30 miles' },
  'miami-naples': { from: 'Miami', to: 'Naples', duration: '2h 10m', distance: '125 miles' },
  'orlando-tampa': { from: 'Orlando', to: 'Tampa', duration: '1h 30m', distance: '85 miles' },
  'chicago-milwaukee': { from: 'Chicago', to: 'Milwaukee', duration: '1h 35m', distance: '92 miles' },
  'chicago-lake-geneva': { from: 'Chicago', to: 'Lake Geneva', duration: '1h 40m', distance: '80 miles' },
  'dallas-austin': { from: 'Dallas', to: 'Austin', duration: '3h 15m', distance: '195 miles' },
  'houston-austin': { from: 'Houston', to: 'Austin', duration: '2h 45m', distance: '165 miles' },
  'london-bristol': { from: 'London', to: 'Bristol', duration: '2h 10m', distance: '118 miles' },
  'abu-dhabi-dubai': { from: 'Abu Dhabi', to: 'Dubai', duration: '1h 25m', distance: '87 miles' },
  'paris-reims': { from: 'Paris', to: 'Reims', duration: '1h 45m', distance: '90 miles' },
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

  // Sync route with browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(normalizeRoutePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Recalibrate ScrollTrigger and update browser title whenever route changes
  useEffect(() => {
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
      '/partners': 'Chauffeur Partner Network | MZS Executive Chauffeurs',
      '/about': 'About Us | MZS Executive Chauffeurs',
      '/career': 'Careers | MZS Executive Chauffeurs',
      '/sustainability': '100% Carbon-Neutral Travel | MZS Executive Chauffeurs',
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
      ScrollTrigger.refresh();
    }, 200);
    return () => clearTimeout(t);
  }, [currentRoute]);

  const handleNavigate = (route: string) => {
    const normalized = normalizeRoutePath(route);
    setCurrentRoute(normalized);
    window.history.pushState({}, '', normalized === '/' ? '/' : normalized);
    window.scrollTo(0, 0);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
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
      return <BusinessPage onNavigate={handleNavigate} onOpenAuth={() => setIsAuthModalOpen(true)} />;
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
    if (currentRoute === '/partners') {
      return <PartnersPage onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/help') {
      return <HelpPage onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/about' || currentRoute === '/career') {
      return <AboutPage onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/sustainability') {
      return <SustainabilityPage onNavigate={handleNavigate} />;
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
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onBookNowClick={() => {
          if (currentRoute !== '/') {
            handleNavigate('/');
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />

      {/* Main Page Content wrapped in Error Boundary */}
      <div className="flex-1">
        <ErrorBoundary onReset={() => handleNavigate('/')}>
          {renderCurrentPage()}
        </ErrorBoundary>
      </div>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} onOpenCookies={() => setIsCookieModalOpen(true)} />

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

