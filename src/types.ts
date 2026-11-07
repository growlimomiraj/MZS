export type BookingType = 'transfer' | 'hourly';

export interface LocationSuggestion {
  id: string;
  title: string;
  subtitle: string;
  type: 'airport' | 'station' | 'city' | 'address';
}

export interface VehicleClass {
  id: string;
  name: string;
  models: string;
  image: string;
  passengers: number;
  luggage: number;
  basePrice: number;
  perMileRate: number;
  hourlyRate: number;
  price: number;
  currency: string;
  description: string;
  features: string[];
}

export interface BookingState {
  type: BookingType;
  pickupLocation: string;
  dropoffLocation: string;
  durationHours: number;
  date: string;
  time: string;
  distanceMiles?: number;
  estimatedMinutes?: number;
  selectedVehicle?: VehicleClass;
  passengerName?: string;
  passengerEmail?: string;
  passengerPhone?: string;
  flightNumber?: string;
  notes?: string;
}

export type PageRoute =
  | '/'
  | '/airport-transfer'
  | '/hourly-car-service'
  | '/city-to-city'
  | '/business'
  | '/chauffeur-service'
  | '/limousine-service'
  | '/car-service'
  | '/ground-transportation'
  | '/help'
  | '/about'
  | '/career'
  | '/corporations'
  | '/travel-agencies'
  | '/strategic-partnerships'
  | '/cities'
  | '/countries'
  | '/city-to-city/new-york-east-hampton'
  | '/city-to-city/los-angeles-san-diego'
  | '/city-to-city/miami-palm-beach'
  | '/city-to-city/new-york-philadelphia'
  | '/city-to-city/san-francisco-napa-valley'
  | '/city-to-city/los-angeles-palm-springs'
  | '/city-to-city/london-bristol'
  | '/city-to-city/abu-dhabi-dubai'
  | '/city-to-city/paris-reims'
  | `/city-to-city/${string}`
  | '/terms'
  | '/privacy-policy'
  | '/imprint'
  | '/accessibility'
  | (string & {});

