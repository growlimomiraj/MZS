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

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.history.pushState({}, '', route === '/' ? '/' : route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

    // City-to-city route details
    if (currentRoute === '/city-to-city/new-york-east-hampton') {
      return (
        <RouteDetailPage
          from="New York"
          to="East Hampton"
          duration="2h 30m"
          distance="105 miles"
          price="$490"
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
          price="$420"
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
          price="$260"
          onSearch={handleSearchSubmit}
          onNavigate={handleNavigate}
        />
      );
    }
    if (currentRoute === '/city-to-city/london-bristol') {
      return (
        <RouteDetailPage
          from="London"
          to="Bristol"
          duration="2h 20m"
          distance="118 miles"
          price="£360"
          onSearch={handleSearchSubmit}
          onNavigate={handleNavigate}
        />
      );
    }
    if (currentRoute === '/city-to-city/abu-dhabi-dubai') {
      return (
        <RouteDetailPage
          from="Dubai"
          to="Abu Dhabi"
          duration="1h 20m"
          distance="86 miles"
          price="AED 620"
          onSearch={handleSearchSubmit}
          onNavigate={handleNavigate}
        />
      );
    }
    if (currentRoute === '/city-to-city/paris-reims') {
      return (
        <RouteDetailPage
          from="Paris"
          to="Reims"
          duration="1h 45m"
          distance="90 miles"
          price="€340"
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
          }
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 150);
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

