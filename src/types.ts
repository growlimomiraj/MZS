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
  | '/city-to-city/new-york-rhode-island'
  | '/city-to-city/new-york-atlantic-city'
  | '/city-to-city/new-york-philadelphia'
  | '/city-to-city/new-york-washington-dc'
  | '/city-to-city/new-york-boston'
  | `/city-to-city/${string}`
  | '/terms'
  | '/privacy-policy'
  | '/imprint'
  | '/accessibility'
  | (string & {});

