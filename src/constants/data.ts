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
    models: '2026 Mercedes-Benz E-Class, BMW 5 Series, Cadillac CT6 or similar',
    image: '/assets/vehicles/business-class.jpg',
    passengers: 3,
    luggage: 2,
    basePrice: 65,
    perMileRate: 3.85,
    hourlyRate: 95,
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
    models: 'New 2026 Mercedes-Benz S-Class, BMW 7 Series, Audi A8 or similar',
    image: '/assets/vehicles/first-class.jpg',
    passengers: 3,
    luggage: 2,
    basePrice: 95,
    perMileRate: 5.50,
    hourlyRate: 145,
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
    models: 'New 2026 Cadillac Escalade ESV, Lincoln Navigator or similar',
    image: '/assets/vehicles/business-van.jpg',
    passengers: 5,
    luggage: 5,
    basePrice: 85,
    perMileRate: 4.85,
    hourlyRate: 125,
    price: 185,
    currency: 'USD',
    description: 'Spacious luxury seating for executive teams, roadshows, family travel, and extra luggage.',
    features: [
      'New 2026 Cadillac Escalade ESV & luxury flagship SUVs',
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
    models: 'New 2026 Mercedes-Benz EQS, Lucid Air, Porsche Taycan or similar',
    image: '/assets/vehicles/electric-class.jpg',
    passengers: 3,
    luggage: 2,
    basePrice: 75,
    perMileRate: 4.20,
    hourlyRate: 110,
    price: 162,
    currency: 'USD',
    description: '100% emission-free zero-impact luxury journeys in leading electric vehicles across the USA.',
    features: [
      'Zero emissions on all rides',
      'Ultra-quiet acoustic cabin experience',
      'Complimentary 60 minutes airport wait time',
      '100% carbon-neutral luxury executive travel'
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

// Flat quote prices removed per client instruction - custom quotes calculated on request
export const ROUTES_DATA = [
  { from: 'New York', to: 'East Hampton', duration: '2h 30m', distance: '105 miles', price: 'Custom quote', tag: 'Hamptons Getaway' },
  { from: 'Los Angeles', to: 'San Diego', duration: '2h 15m', distance: '120 miles', price: 'Custom quote', tag: 'Southern California' },
  { from: 'Miami', to: 'Palm Beach', duration: '1h 15m', distance: '72 miles', price: 'Custom quote', tag: 'South Florida Corridor' },
  { from: 'New York', to: 'Philadelphia', duration: '1h 50m', distance: '95 miles', price: 'Custom quote', tag: 'Northeast Corridor' },
  { from: 'San Francisco', to: 'Napa Valley', duration: '1h 20m', distance: '58 miles', price: 'Custom quote', tag: 'Wine Country' },
  { from: 'Los Angeles', to: 'Palm Springs', duration: '2h 00m', distance: '108 miles', price: 'Custom quote', tag: 'Desert Oasis' }
];

export const FAQS_DATA = [
  {
    question: 'How does airport pickup work?',
    answer: 'Your licensed executive chauffeur tracks your flight in real time using official FAA radar data. Once you land, you receive an automated SMS with your chauffeur’s direct contact and vehicle details. Chauffeurs wait in the arrivals hall with an personalized executive greeting sign and assist with your luggage. 60 minutes of complimentary wait time is included.'
  },
  {
    question: 'Can I cancel or change my reservation?',
    answer: 'Yes. All one-way rides can be modified or cancelled free of charge up to 1 hour before scheduled pickup. For hourly reservations, free cancellation applies up to 24 hours prior to departure.'
  },
  {
    question: 'What is included in the fare?',
    answer: 'Every reservation includes commercial vehicle insurance, licensed professional chauffeur, state taxes, highway tolls, airport access surcharges, and chauffeur gratuity. There are zero surprise fees or hidden add-ons.'
  },
  {
    question: 'Are child seats available?',
    answer: 'Yes, forward-facing, rear-facing, and booster child safety seats are available upon request during booking across our luxury SUV and sedan classes.'
  },
  {
    question: 'Do you offer direct corporate billing and 24/7 phone dispatch?',
    answer: 'Yes. Corporate accounts receive monthly centralized invoicing, dedicated account management, and priority dispatch. You can also reach our 24/7 executive dispatch line at (888) 801-7476 or email info@mzexecutivechauffeurs.com anytime.'
  }
];
