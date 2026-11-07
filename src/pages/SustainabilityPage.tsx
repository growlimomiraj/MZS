import React from 'react';
import { PageRoute } from '../types';
import { AboutPage } from './AboutPage';

interface SustainabilityPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate }) => {
  return <AboutPage onNavigate={onNavigate} />;
};
