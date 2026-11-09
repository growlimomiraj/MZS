import { LocationSuggestion, VehicleClass } from '../types';

export const LOCATION_SUGGESTIONS: LocationSuggestion[] = [
  { id: '1', title: 'John F. Kennedy International Airport (JFK)', subtitle: 'Queens, New York, NY, USA', type: 'airport' },
  { id: '2', title: 'Newark Liberty International Airport (EWR)', subtitle: 'Newark, NJ, USA', type: 'airport' },
  { id: '3', title: 'LaGuardia Airport (LGA)', subtitle: 'Queens, New York, NY, USA', type: 'airport' },
  { id: '4', title: 'Teterboro Airport (TEB - Private Aviation FBO)', subtitle: 'Teterboro, NJ, USA', type: 'airport' },
  { id: '5', title: 'Boston Logan International Airport (BOS)', subtitle: 'Boston, MA, USA', type: 'airport' },
  { id: '6', title: 'Philadelphia International Airport (PHL)', subtitle: 'Philadelphia, PA, USA', type: 'airport' },
  { id: '7', title: 'Ronald Reagan Washington National Airport (DCA)', subtitle: 'Arlington, VA / Washington DC', type: 'airport' },
  { id: '8', title: 'Washington Dulles International Airport (IAD)', subtitle: 'Dulles, VA / Washington DC', type: 'airport' },
  { id: '9', title: 'Baltimore/Washington International Airport (BWI)', subtitle: 'Baltimore, MD, USA', type: 'airport' },
  { id: '10', title: 'Westchester County Airport (HPN)', subtitle: 'White Plains, NY / Greenwich, CT', type: 'airport' },
  { id: '11', title: 'The Plaza Hotel', subtitle: '768 5th Ave, New York, NY 10019', type: 'address' },
  { id: '12', title: 'Grand Central Terminal', subtitle: '89 E 42nd St, New York, NY 10017', type: 'station' },
  { id: '13', title: 'Manhattan, New York', subtitle: 'New York, NY, USA', type: 'city' },
  { id: '14', title: 'East Hampton', subtitle: 'Long Island, NY, USA', type: 'city' },
  { id: '15', title: 'Atlantic City Boardwalk', subtitle: 'Atlantic City, NJ, USA', type: 'city' },
  { id: '16', title: 'Newport & Providence', subtitle: 'Rhode Island, USA', type: 'city' }
];

export const VEHICLE_CLASSES: VehicleClass[] = [
  {
    id: 'business',
    name: 'Premium Sedan',
    models: '2026 BMW 5 Series, Mercedes-Benz E-Class, Cadillac CT6 or similar',
    image: '/assets/vehicles/business-class.jpg',
    passengers: 3,
    luggage: 2,
    basePrice: 65,
    perMileRate: 3.85,
    hourlyRate: 95,
    price: 148,
    currency: 'USD',
    description: 'Enjoy comfortable, stylish executive transportation in our premium sedan category, ideal for business travel and private rides.',
    features: [
      '2026 BMW 5 Series & Mercedes-Benz E-Class executive sedans',
      'Up to 3 passengers with 2 full-size bags',
      'Complimentary 60 minutes airport wait time',
      'Complimentary bottled water and Wi-Fi',
      'Free cancellation up to 1 hour before pickup'
    ]
  },
  {
    id: 'van',
    name: 'Business SUV',
    models: 'New 2026 Cadillac Escalade ESV, Lincoln Navigator L, Chevrolet Suburban or similar',
    image: '/assets/vehicles/business-van.jpg',
    passengers: 6,
    luggage: 5,
    basePrice: 85,
    perMileRate: 4.85,
    hourlyRate: 125,
    price: 185,
    currency: 'USD',
    description: 'Enjoy spacious comfort in our extended wheelbase premium SUVs, ideal for airport transfers, family travel, and corporate delegations.',
    features: [
      'New 2026 Cadillac Escalade ESV & luxury flagship SUVs',
      'Up to 6 passengers with spacious captain chairs',
      'Massive luggage capacity for 5 full-size bags',
      '110V power outlets & in-cabin refreshment cooler',
      'Complimentary 60 minutes airport wait time'
    ]
  },
  {
    id: 'first',
    name: 'First Class',
    models: 'New 2026 BMW i7, BMW 7 Series, Mercedes-Benz S-Class or similar',
    image: '/assets/vehicles/first-class.jpg',
    passengers: 3,
    luggage: 2,
    basePrice: 95,
    perMileRate: 5.50,
    hourlyRate: 145,
    price: 225,
    currency: 'USD',
    description: 'Travel in premier comfort and style in our flagship executive sedans with high-speed 5G Wi-Fi and chilled refreshments.',
    features: [
      'New 2026 BMW i7 & flagship executive sedans',
      'High-speed 5G Wi-Fi & device charging',
      'Ambient-lit cabin with chilled bottled mineral water',
      'VIP meet & greet inside airport terminal',
      'Complimentary 60 minutes airport wait time'
    ]
  },
  {
    id: 'sprinter',
    name: 'Sprinter',
    models: 'New 2026 Mercedes-Benz Sprinter Executive Jet Van (Up to 14 Passengers)',
    image: '/assets/vehicles/executive-sprinter.jpg',
    passengers: 14,
    luggage: 10,
    basePrice: 150,
    perMileRate: 7.20,
    hourlyRate: 195,
    price: 295,
    currency: 'USD',
    description: 'Comfortable luxury group transportation for airport transfers, corporate outings, private aviation, and special VIP events.',
    features: [
      'Executive Mercedes-Benz Sprinter seating up to 14 passengers',
      'Generous dedicated luggage compartment for 10 full-size bags',
      'Hand-stitched leather captain chairs with center walk-in aisle',
      'In-cabin cellarette & refreshment bar amenities',
      '110V power outlets, high-speed 5G Wi-Fi & 6ft 4in standing headroom'
    ]
  },
  {
    id: 'electric',
    name: 'Electric',
    models: 'New 2026 BMW i7 xDrive60, Mercedes-Benz EQS, Lucid Air or similar',
    image: '/assets/vehicles/electric-class.jpg',
    passengers: 3,
    luggage: 2,
    basePrice: 75,
    perMileRate: 4.20,
    hourlyRate: 110,
    price: 165,
    currency: 'USD',
    description: 'Ultra-modern, whisper-quiet luxury journeys in leading premium electric flagship sedans.',
    features: [
      'New 2026 BMW i7 electric flagship sedan',
      'Whisper-quiet electric powertrain and zero tailpipe emissions',
      'Ultra-quiet acoustic glass cabin experience',
      'Complimentary 60 minutes airport wait time',
      'Onboard high-speed USB-C charging & 5G connectivity'
    ]
  }
];

export const CITIES_DATA = [
  {
    region: 'New York',
    cities: ['New York City', 'Manhattan', 'Brooklyn', 'Queens', 'The Hamptons', 'East Hampton', 'Westchester', 'Long Island', 'Albany']
  },
  {
    region: 'Connecticut',
    cities: ['Greenwich', 'Stamford', 'Hartford', 'New Haven', 'Westport', 'Darien', 'Norwalk']
  },
  {
    region: 'Massachusetts',
    cities: ['Boston', 'Cambridge', 'Martha\'s Vineyard', 'Nantucket', 'Cape Cod', 'Worcester', 'Newton']
  },
  {
    region: 'New Jersey',
    cities: ['Jersey City', 'Hoboken', 'Newark', 'Princeton', 'Atlantic City', 'Teterboro', 'Paramus', 'Morristown']
  },
  {
    region: 'Pennsylvania',
    cities: ['Philadelphia', 'King of Prussia', 'Main Line', 'Pittsburgh', 'Harrisburg', 'Allentown', 'Bucks County']
  },
  {
    region: 'Maryland',
    cities: ['Baltimore', 'Bethesda', 'Annapolis', 'Silver Spring', 'Rockville', 'Chevy Chase', 'Potomac']
  },
  {
    region: 'Washington DC',
    cities: ['Downtown Washington D.C.', 'Georgetown', 'Capitol Hill', 'Dupont Circle', 'Tysons / McLean Corridor']
  }
];

// Curated Top Regional Routes specified by client
export const ROUTES_DATA = [
  { from: 'New York', to: 'East Hampton', duration: '2h 30m', distance: '105 miles', price: 'Custom quote', tag: 'Hamptons Getaway' },
  { from: 'New York', to: 'Rhode Island', duration: '3h 15m', distance: '180 miles', price: 'Custom quote', tag: 'Ocean State Coastal' },
  { from: 'New York', to: 'Atlantic City', duration: '2h 10m', distance: '128 miles', price: 'Custom quote', tag: 'Jersey Shore Getaway' },
  { from: 'New York', to: 'Philadelphia', duration: '1h 50m', distance: '95 miles', price: 'Custom quote', tag: 'Northeast Corridor' },
  { from: 'New York', to: 'Washington DC', duration: '4h 00m', distance: '225 miles', price: 'Custom quote', tag: 'Capital Express' },
  { from: 'New York', to: 'Boston', duration: '4h 15m', distance: '215 miles', price: 'Custom quote', tag: 'New England Executive' }
];

export const FAQS_DATA = [
  {
    q: 'How does airport pickup work?',
    a: 'Your licensed executive chauffeur tracks your flight in real time using official FAA radar data. Once you land, you receive an automated SMS with your chauffeur’s direct contact and vehicle details. Chauffeurs wait in the arrivals hall with a personalized executive greeting sign and assist with your luggage. 60 minutes of complimentary wait time is included.',
    question: 'How does airport pickup work?',
    answer: 'Your licensed executive chauffeur tracks your flight in real time using official FAA radar data. Once you land, you receive an automated SMS with your chauffeur’s direct contact and vehicle details. Chauffeurs wait in the arrivals hall with a personalized executive greeting sign and assist with your luggage. 60 minutes of complimentary wait time is included.'
  },
  {
    q: 'Can I cancel or change my reservation?',
    a: 'Yes. All one-way rides can be modified or cancelled free of charge up to 1 hour before scheduled pickup. For hourly reservations, free cancellation applies up to 24 hours prior to departure.',
    question: 'Can I cancel or change my reservation?',
    answer: 'Yes. All one-way rides can be modified or cancelled free of charge up to 1 hour before scheduled pickup. For hourly reservations, free cancellation applies up to 24 hours prior to departure.'
  },
  {
    q: 'What is included in the fare?',
    a: 'Every reservation includes commercial vehicle insurance, licensed professional chauffeur, state taxes, highway tolls, airport access surcharges, and chauffeur gratuity. There are zero surprise fees or hidden add-ons.',
    question: 'What is included in the fare?',
    answer: 'Every reservation includes commercial vehicle insurance, licensed professional chauffeur, state taxes, highway tolls, airport access surcharges, and chauffeur gratuity. There are zero surprise fees or hidden add-ons.'
  },
  {
    q: 'Are child seats available?',
    a: 'Yes, forward-facing, rear-facing, and booster child safety seats are available upon request during booking across our luxury SUV and sedan classes.',
    question: 'Are child seats available?',
    answer: 'Yes, forward-facing, rear-facing, and booster child safety seats are available upon request during booking across our luxury SUV and sedan classes.'
  },
  {
    q: 'Do you offer direct corporate billing and 24/7 phone dispatch?',
    a: 'Yes. Corporate accounts receive monthly centralized invoicing, dedicated account management, and priority dispatch. You can also reach our 24/7 executive dispatch line at (888) 801-7476 or email info@mzexecutivechauffeurs.com anytime.',
    question: 'Do you offer direct corporate billing and 24/7 phone dispatch?',
    answer: 'Yes. Corporate accounts receive monthly centralized invoicing, dedicated account management, and priority dispatch. You can also reach our 24/7 executive dispatch line at (888) 801-7476 or email info@mzexecutivechauffeurs.com anytime.'
  }
];
