import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { AppSection } from '../components/AppSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ExcellenceSection } from '../components/ExcellenceSection';
import { BookingState, PageRoute } from '../types';

interface HomePageProps {
  onSearch: (bookingData: BookingState) => void;
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSearch, onNavigate }) => {
  return (
    <main>
      <HeroSection onSearch={onSearch} />
      <ServicesSection onNavigate={onNavigate} />
      <AppSection />
      <ExperienceSection />
      <ExcellenceSection />
    </main>
  );
};

