import { LocationSuggestion, VehicleClass } from '../types';

export const LOCATION_SUGGESTIONS: LocationSuggestion[] = [
  { id: '1', title: 'John F. Kennedy International Airport (JFK)', subtitle: 'Queens, NY, USA', type: 'airport' },
  { id: '2', title: 'Newark Liberty International Airport (EWR)', subtitle: 'Newark, NJ, USA', type: 'airport' },
  { id: '3', title: 'LaGuardia Airport (LGA)', subtitle: 'Queens, NY, USA', type: 'airport' },
  { id: '4', title: 'London Heathrow Airport (LHR)', subtitle: 'Hounslow, London, UK', type: 'airport' },
  { id: '5', title: 'Paris Charles de Gaulle Airport (CDG)', subtitle: 'Roissy-en-France, France', type: 'airport' },
  { id: '6', title: 'Dubai International Airport (DXB)', subtitle: 'Dubai, United Arab Emirates', type: 'airport' },
  { id: '7', title: 'Frankfurt Airport (FRA)', subtitle: 'Frankfurt, Germany', type: 'airport' },
  { id: '8', title: 'The Plaza Hotel', subtitle: '768 5th Ave, New York, NY 10019', type: 'address' },
  { id: '9', title: 'Grand Central Terminal', subtitle: '89 E 42nd St, New York, NY 10017', type: 'station' },
  { id: '10', title: 'Manhattan, New York', subtitle: 'New York, NY, USA', type: 'city' },
  { id: '11', title: 'East Hampton', subtitle: 'Long Island, NY, USA', type: 'city' },
  { id: '12', title: 'The Ritz-Carlton, London', subtitle: '150 Piccadilly, St. James\'s, London', type: 'address' },
  { id: '13', title: 'Beverly Hills Hotel', subtitle: '9641 Sunset Blvd, Beverly Hills, CA', type: 'address' },
  { id: '14', title: 'Los Angeles International Airport (LAX)', subtitle: 'Los Angeles, CA, USA', type: 'airport' },
  { id: '15', title: 'Burj Khalifa / Downtown Dubai', subtitle: '1 Sheikh Mohammed bin Rashid Blvd, Dubai', type: 'address' }
];

export const VEHICLE_CLASSES: VehicleClass[] = [
  {
    id: 'business',
    name: 'Business Class',
    models: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac CT6 or similar',
    image: 'https://images.ctfassets.net/ov8o7v78mnye/1qi5aJOpeVFSTrDdktsQZJ/46d90531fa90f413ea93d293abe7deea/Mobile_Business_Class_Carousel_1_1x.png?fm=webp&w=500&q=85',
    passengers: 3,
    luggage: 2,
    price: 148,
    currency: 'USD',
    description: 'Our most popular service for everyday business travel and seamless airport transfers.',
    features: [
      'Complimentary 60 minutes airport wait time',
      'Free cancellation up to 1 hour before pickup',
      'Professional English-speaking chauffeur',
      'Complimentary bottled water and Wi-Fi'
    ]
  },
  {
    id: 'first',
    name: 'First Class',
    models: 'Mercedes-Benz S-Class, BMW 7 Series, Audi A8 or similar',
    image: 'https://images.ctfassets.net/ov8o7v78mnye/6s8K2f5V9o3h7L9Y4w1e8G/Mobile_First_Class_Carousel_1_1x.png?fm=webp&w=500&q=85',
    passengers: 3,
    luggage: 2,
    price: 225,
    currency: 'USD',
    description: 'Uncompromising luxury for special occasions, high-profile executives, and VIP hospitality.',
    features: [
      'Top-tier flagship luxury vehicles',
      'VIP meet & greet inside airport terminal',
      'Complimentary 60 minutes airport wait time',
      'Highest chauffeur vetting rating',
      'Onboard phone chargers and climate tailored'
    ]
  },
  {
    id: 'van',
    name: 'Business Van / SUV',
    models: 'Mercedes-Benz V-Class, Cadillac Escalade, Chevrolet Suburban or similar',
    image: 'https://images.ctfassets.net/ov8o7v78mnye/4k9L3m2N8p1o5Q7v6x9Y3z/Mobile_Business_Van_Carousel_1_1x.png?fm=webp&w=500&q=85',
    passengers: 5,
    luggage: 5,
    price: 185,
    currency: 'USD',
    description: 'Ample space for executive groups, family travel, and extra luggage without sacrificing luxury.',
    features: [
      'Spacious luxury seating for up to 5 passengers',
      'Generous luggage room for 5 suitcases',
      'Complimentary 60 minutes airport wait time',
      'Ideal for airport transfers and roadshows',
      'Free cancellation up to 1 hour before pickup'
    ]
  },
  {
    id: 'electric',
    name: 'Electric Class',
    models: 'Mercedes-Benz EQE, Lucid Air, Porsche Taycan or similar',
    image: 'https://images.ctfassets.net/ov8o7v78mnye/1qi5aJOpeVFSTrDdktsQZJ/46d90531fa90f413ea93d293abe7deea/Mobile_Business_Class_Carousel_1_1x.png?fm=webp&w=500&q=85',
    passengers: 3,
    luggage: 2,
    price: 162,
    currency: 'USD',
    description: '100% emission-free zero-impact luxury journeys in leading electric vehicles.',
    features: [
      'Zero emissions on all rides',
      'Ultra-quiet cabin experience',
      'Complimentary 60 minutes airport wait time',
      'Certified sustainable partner of The Climate Pledge'
    ]
  }
];

export const CITIES_DATA = [
  { region: 'North America', cities: ['New York', 'Los Angeles', 'San Francisco', 'Miami', 'Chicago', 'Boston', 'Las Vegas', 'Washington D.C.', 'Toronto', 'Vancouver', 'Montreal'] },
  { region: 'Europe', cities: ['London', 'Paris', 'Berlin', 'Munich', 'Frankfurt', 'Rome', 'Milan', 'Madrid', 'Barcelona', 'Amsterdam', 'Vienna', 'Zurich', 'Geneva'] },
  { region: 'Middle East & Africa', cities: ['Dubai', 'Abu Dhabi', 'Riyadh', 'Doha', 'Muscat', 'Cape Town', 'Johannesburg'] },
  { region: 'Asia-Pacific', cities: ['Tokyo', 'Singapore', 'Hong Kong', 'Sydney', 'Melbourne', 'Seoul', 'Bangkok', 'Kuala Lumpur'] }
];

export const ROUTES_DATA = [
  { from: 'New York', to: 'East Hampton', duration: '2h 30m', distance: '105 miles', price: '$490', tag: 'Popular in US' },
  { from: 'Los Angeles', to: 'San Diego', duration: '2h 15m', distance: '120 miles', price: '$420', tag: 'Coast route' },
  { from: 'Miami', to: 'Palm Beach', duration: '1h 15m', distance: '72 miles', price: '$260', tag: 'Fast transfer' },
  { from: 'London', to: 'Bristol', duration: '2h 20m', distance: '118 miles', price: '£360', tag: 'UK Corridor' },
  { from: 'Dubai', to: 'Abu Dhabi', duration: '1h 20m', distance: '86 miles', price: 'AED 620', tag: 'Express Highway' },
  { from: 'Paris', to: 'Reims', duration: '1h 45m', distance: '90 miles', price: '€340', tag: 'Champagne region' }
];

export const FAQS_DATA = [
  {
    q: 'How does pickup work at the airport?',
    a: 'Your chauffeur will meet you inside the arrivals hall holding a personalized name board once you clear customs or baggage claim. Flight tracking is automatically included, so even if your flight is early or delayed, your chauffeur will adjust their arrival accordingly. You also receive 60 minutes of complimentary wait time starting from actual touchdown.'
  },
  {
    q: 'Can I cancel or modify my booking?',
    a: 'Yes. You can cancel or change your booking free of charge up to 1 hour before pickup for one-way rides, or up to 24 hours before pickup for by-the-hour and long-distance bookings.'
  },
  {
    q: 'What is included in the MZS price?',
    a: 'All MZS prices are all-inclusive fixed rates guaranteed at the time of booking. They include all taxes, tolls, fees, gratuities, flight tracking, and complimentary wait time. There are no surge pricing spikes or hidden surprises.'
  },
  {
    q: 'What is the difference between One Way and By the Hour?',
    a: 'A One Way ride is a direct point-to-point transfer from your pickup location to your destination. By the Hour reserves a dedicated chauffeur and luxury vehicle for an agreed duration (from 2 to 24 hours) with unlimited stops within the city perimeter.'
  },
  {
    q: 'How does MZS offset carbon emissions?',
    a: 'MZS was the first global chauffeur service to offset 100% of carbon emissions from all rides since 2017 in partnership with South Pole and The Climate Pledge. We are also accelerating the electrification of our global fleet.'
  }
];

