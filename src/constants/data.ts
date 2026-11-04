import { LocationSuggestion, VehicleClass } from '../types';

export const LOCATION_SUGGESTIONS: LocationSuggestion[] = [
  { id: '1', title: 'John F. Kennedy International Airport (JFK)', subtitle: 'Queens, New York, NY, USA', type: 'airport' },
  { id: '2', title: 'Newark Liberty International Airport (EWR)', subtitle: 'Newark, NJ, USA', type: 'airport' },
  { id: '3', title: 'LaGuardia Airport (LGA)', subtitle: 'Queens, New York, NY, USA', type: 'airport' },
  { id: '4', title: 'Los Angeles International Airport (LAX)', subtitle: 'Los Angeles, CA, USA', type: 'airport' },
  { id: '5', title: 'San Francisco International Airport (SFO)', subtitle: 'San Francisco, CA, USA', type: 'airport' },
  { id: '6', title: 'Miami International Airport (MIA)', subtitle: 'Miami, FL, USA', type: 'airport' },
  { id: '7', title: 'Chicago O\'Hare International Airport (ORD)', subtitle: 'Chicago, IL, USA', type: 'airport' },
  { id: '8', title: 'Boston Logan International Airport (BOS)', subtitle: 'Boston, MA, USA', type: 'airport' },
  { id: '9', title: 'Dallas/Fort Worth International Airport (DFW)', subtitle: 'Dallas, TX, USA', type: 'airport' },
  { id: '10', title: 'The Plaza Hotel', subtitle: '768 5th Ave, New York, NY 10019', type: 'address' },
  { id: '11', title: 'Grand Central Terminal', subtitle: '89 E 42nd St, New York, NY 10017', type: 'station' },
  { id: '12', title: 'Manhattan, New York', subtitle: 'New York, NY, USA', type: 'city' },
  { id: '13', title: 'East Hampton', subtitle: 'Long Island, NY, USA', type: 'city' },
  { id: '14', title: 'Beverly Hills Hotel', subtitle: '9641 Sunset Blvd, Beverly Hills, CA', type: 'address' },
  { id: '15', title: 'Palm Beach International Airport (PBI)', subtitle: 'West Palm Beach, FL, USA', type: 'airport' }
];

export const VEHICLE_CLASSES: VehicleClass[] = [
  {
    id: 'business',
    name: 'Business Class',
    models: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac CT6 or similar',
    image: 'https://images.ctfassets.net/ov8o7v78mnye/1qi5aJOpeVFSTrDdktsQZJ/46d90531fa90f413ea93d293abe7deea/Mobile_Business_Class_Carousel_1_1x.png?fm=webp&w=768&q=85',
    passengers: 3,
    luggage: 2,
    price: 148,
    currency: 'USD',
    description: 'Our most popular service for corporate business travel and seamless airport transfers across the USA.',
    features: [
      'Complimentary 60 minutes airport wait time',
      'Free cancellation up to 1 hour before pickup',
      'Professional licensed US chauffeur',
      'Complimentary bottled water and Wi-Fi'
    ]
  },
  {
    id: 'first',
    name: 'First Class',
    models: 'Mercedes-Benz S-Class, BMW 7 Series, Audi A8 or similar',
    image: 'https://images.ctfassets.net/ov8o7v78mnye/5ukDCmGk3pJNq48IAoPz1b/d16dd73d44ca71f9a8a442e952f994d6/Mobile_First_Class_Carousel_1_1x.png?fm=webp&w=768&q=85',
    passengers: 3,
    luggage: 2,
    price: 225,
    currency: 'USD',
    description: 'Uncompromising luxury for special occasions, high-profile executives, and VIP hospitality nationwide.',
    features: [
      'Top-tier flagship luxury vehicles',
      'VIP meet & greet inside airport terminal',
      'Complimentary 60 minutes airport wait time',
      'Highest chauffeur vetting rating',
      'Onboard phone fast-chargers and climate tailored'
    ]
  },
  {
    id: 'van',
    name: 'Business Van / SUV',
    models: 'Mercedes-Benz V-Class, Cadillac Escalade, Chevrolet Suburban or similar',
    image: 'https://images.ctfassets.net/ov8o7v78mnye/6vZRlxdXyChu5uMiZIUAZz/ac5eeb950de8b50ef1d5ac687e9efdeb/Mobile_Van_Class_Carousel_1_1x.png?fm=webp&w=768&q=85',
    passengers: 5,
    luggage: 5,
    price: 185,
    currency: 'USD',
    description: 'Spacious luxury seating for executive teams, roadshows, family travel, and extra luggage.',
    features: [
      'Spacious luxury seating for up to 5 passengers',
      'Generous luggage room for 5 full-size suitcases',
      'Complimentary 60 minutes airport wait time',
      'Ideal for airport transfers and multi-city roadshows',
      'Free cancellation up to 1 hour before pickup'
    ]
  },
  {
    id: 'electric',
    name: 'Electric Class',
    models: 'Mercedes-Benz EQE, Lucid Air, Porsche Taycan or similar',
    image: 'https://images.ctfassets.net/ov8o7v78mnye/28Yv0dLuUknHV9Lztkstua/94d3caf5477c0e8e3128ca372430c152/EQE_Luggage_Standard_v001_carousel.png?fm=webp&w=768&q=85',
    passengers: 3,
    luggage: 2,
    price: 162,
    currency: 'USD',
    description: '100% emission-free zero-impact luxury journeys in leading electric vehicles across the USA.',
    features: [
      'Zero emissions on all rides',
      'Ultra-quiet acoustic cabin experience',
      'Complimentary 60 minutes airport wait time',
      'Certified sustainable partner of The Climate Pledge'
    ]
  }
];

export const CITIES_DATA = [
  {
    region: 'Northeast & Mid-Atlantic',
    cities: ['New York City', 'Boston', 'Philadelphia', 'Washington D.C.', 'Baltimore', 'Pittsburgh', 'Greenwich', 'Atlantic City', 'Providence']
  },
  {
    region: 'West Coast & Pacific',
    cities: ['Los Angeles', 'San Francisco', 'San Diego', 'Las Vegas', 'Seattle', 'Phoenix', 'Scottsdale', 'San Jose', 'Portland', 'Palm Springs', 'Orange County']
  },
  {
    region: 'South & Southeast',
    cities: ['Miami', 'Fort Lauderdale', 'Palm Beach', 'Orlando', 'Tampa', 'Atlanta', 'Charlotte', 'Nashville', 'New Orleans', 'Naples', 'Boca Raton']
  },
  {
    region: 'Midwest & Central',
    cities: ['Chicago', 'Dallas', 'Houston', 'Austin', 'Denver', 'Minneapolis', 'Detroit', 'Indianapolis', 'San Antonio', 'Columbus']
  }
];

export const ROUTES_DATA = [
  { from: 'New York', to: 'East Hampton', duration: '2h 30m', distance: '105 miles', price: '$490', tag: 'Hamptons Getaway' },
  { from: 'Los Angeles', to: 'San Diego', duration: '2h 15m', distance: '120 miles', price: '$420', tag: 'Southern California' },
  { from: 'Miami', to: 'Palm Beach', duration: '1h 15m', distance: '72 miles', price: '$260', tag: 'South Florida Corridor' },
  { from: 'New York', to: 'Philadelphia', duration: '1h 50m', distance: '95 miles', price: '$380', tag: 'Northeast Corridor' },
  { from: 'San Francisco', to: 'Napa Valley', duration: '1h 20m', distance: '58 miles', price: '$320', tag: 'Wine Country' },
  { from: 'Los Angeles', to: 'Palm Springs', duration: '2h 00m', distance: '108 miles', price: '$390', tag: 'Desert Oasis' }
];

export const FAQS_DATA = [
  {
    q: 'How does pickup work at US airports?',
    a: 'Your MZS Executive Chauffeurs driver will meet you inside the arrivals terminal holding a personalized digital name sign once you claim baggage. Automated flight tracking is standard, so whether your flight touches down early or is delayed, your chauffeur will be waiting. You also receive 60 minutes of complimentary wait time from actual wheels-down.'
  },
  {
    q: 'Can I cancel or modify my booking?',
    a: 'Yes. You can cancel or modify your reservation free of charge up to 1 hour before scheduled pickup for one-way rides, or up to 24 hours before pickup for by-the-hour and long-distance city-to-city trips.'
  },
  {
    q: 'What is included in the MZS Executive Chauffeurs price?',
    a: 'All MZS Executive Chauffeurs fares are guaranteed all-inclusive rates confirmed at booking. They cover all US highway tolls, airport access fees, parking, taxes, and chauffeur gratuities with zero surge pricing.'
  },
  {
    q: 'What is the difference between One Way and By the Hour?',
    a: 'A One Way ride is a direct point-to-point transfer from your pickup address to your destination. By the Hour reserves a dedicated luxury vehicle and chauffeur on standby for an agreed duration (2 to 24 hours) with unlimited stops within the metropolitan region.'
  },
  {
    q: 'How can I reach customer support?',
    a: 'Our US-based client concierge team is available 24/7 by toll-free phone at (888) 801-7476 or by email at info@mzexecutivechauffeurs.com.'
  }
];
