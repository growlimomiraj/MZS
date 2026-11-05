import React, { useState, useEffect } from 'react';
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

export function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    const path = window.location.pathname.replace(/^\/en/, '').replace(/\/$/, '') || '/';
    return (path as PageRoute) || '/';
  });

  const [bookingData, setBookingData] = useState<BookingState | null>(null);
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  // Sync route with browser history
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/en/, '').replace(/\/$/, '') || '/';
      setCurrentRoute((path as PageRoute) || '/');
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
      '/chauffeur-service': 'Professional Chauffeurs USA | MZS Executive Chauffeurs',
      '/limousine-service': 'Luxury Limousine Service USA | MZS Executive Chauffeurs',
      '/partners': 'Chauffeur Partner Network | MZS Executive Chauffeurs',
      '/about': 'About Us | MZS Executive Chauffeurs',
      '/sustainability': '100% Carbon-Neutral Travel | MZS Executive Chauffeurs',
      '/cities': 'Service Cities Nationwide | MZS Executive Chauffeurs',
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

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.history.pushState({}, '', route === '/' ? '/' : route);
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
    if (currentRoute === '/chauffeur-service' || currentRoute === '/car-service' || currentRoute === '/ground-transportation') {
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

    // City-to-city route details (USA routes)
    if (currentRoute === '/city-to-city/new-york-east-hampton') {
      return (
        <RouteDetailPage
          from="New York"
          to="East Hampton"
          duration="2h 30m"
          distance="105 miles"
          onSearch={handleSearchSubmit}
          onNavigate={handleNavigate}
        />
      );
    }
    if (currentRoute === '/city-to-city/los-angeles-san-diego') {
      return (
        <RouteDetailPage
          from="Los Angeles"
          to="San Diego"
          duration="2h 15m"
          distance="120 miles"
          onSearch={handleSearchSubmit}
          onNavigate={handleNavigate}
        />
      );
    }
    if (currentRoute === '/city-to-city/miami-palm-beach') {
      return (
        <RouteDetailPage
          from="Miami"
          to="Palm Beach"
          duration="1h 15m"
          distance="72 miles"
          onSearch={handleSearchSubmit}
          onNavigate={handleNavigate}
        />
      );
    }
    if (currentRoute === '/city-to-city/new-york-philadelphia') {
      return (
        <RouteDetailPage
          from="New York"
          to="Philadelphia"
          duration="1h 50m"
          distance="95 miles"
          onSearch={handleSearchSubmit}
          onNavigate={handleNavigate}
        />
      );
    }
    if (currentRoute === '/city-to-city/san-francisco-napa-valley') {
      return (
        <RouteDetailPage
          from="San Francisco"
          to="Napa Valley"
          duration="1h 20m"
          distance="58 miles"
          onSearch={handleSearchSubmit}
          onNavigate={handleNavigate}
        />
      );
    }
    if (currentRoute === '/city-to-city/los-angeles-palm-springs') {
      return (
        <RouteDetailPage
          from="Los Angeles"
          to="Palm Springs"
          duration="2h 00m"
          distance="108 miles"
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

      {/* Main Page Content */}
      <div className="flex-1">{renderCurrentPage()}</div>

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

