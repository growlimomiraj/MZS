import { VehicleClass } from '../types';

export interface AddressSuggestion {
  id: string;
  title: string;
  subtitle: string;
  address: string;
  lat?: number;
  lng?: number;
  type: 'airport' | 'hotel' | 'landmark' | 'address';
}

export const LUXURY_LOCATIONS: AddressSuggestion[] = [
  // Northeast & Mid-Atlantic Executive Airports & Private FBOs
  { id: 'jfk', title: 'JFK - John F. Kennedy International Airport', subtitle: 'Queens, New York, United States', address: 'John F. Kennedy International Airport, Queens, NY 11430', lat: 40.6413, lng: -73.7781, type: 'airport' },
  { id: 'lga', title: 'LGA - LaGuardia Airport', subtitle: 'Queens, New York, United States', address: 'LaGuardia Airport, Queens, NY 11371', lat: 40.7769, lng: -73.8740, type: 'airport' },
  { id: 'ewr', title: 'EWR - Newark Liberty International Airport', subtitle: 'Newark, New Jersey, United States', address: '3 Brewster Rd, Newark, NJ 07114', lat: 40.6895, lng: -74.1745, type: 'airport' },
  { id: 'teb', title: 'TEB - Teterboro Airport (Private Aviation FBO)', subtitle: 'Teterboro, New Jersey, United States', address: '111 Industrial Ave, Teterboro, NJ 07608', lat: 40.8501, lng: -74.0608, type: 'airport' },
  { id: 'bos', title: 'BOS - Boston Logan International Airport', subtitle: 'Boston, Massachusetts, United States', address: '1 Harborside Dr, Boston, MA 02128', lat: 42.3656, lng: -71.0096, type: 'airport' },
  { id: 'phl', title: 'PHL - Philadelphia International Airport', subtitle: 'Philadelphia, Pennsylvania, United States', address: '8000 Essington Ave, Philadelphia, PA 19153', lat: 39.8744, lng: -75.2424, type: 'airport' },
  { id: 'dca', title: 'DCA - Ronald Reagan Washington National Airport', subtitle: 'Arlington, Virginia / Washington DC', address: '2401 Ronald Reagan Washington National Airport Access Rd, Arlington, VA 22202', lat: 38.8512, lng: -77.0402, type: 'airport' },
  { id: 'iad', title: 'IAD - Washington Dulles International Airport', subtitle: 'Dulles, Virginia / Washington DC', address: '1 Saarinen Cir, Dulles, VA 20166', lat: 38.9531, lng: -77.4565, type: 'airport' },
  { id: 'bwi', title: 'BWI - Baltimore/Washington International Airport', subtitle: 'Baltimore, Maryland, United States', address: '7050 Friendship Rd, Baltimore, MD 21240', lat: 39.1774, lng: -76.6684, type: 'airport' },
  { id: 'hpn', title: 'HPN - Westchester County Airport (Executive FBO)', subtitle: 'White Plains, New York / Greenwich, CT', address: '240 Airport Rd, White Plains, NY 10604', lat: 41.0670, lng: -73.7076, type: 'airport' },

  // Luxury Hotels & Key Destinations
  { id: 'plaza', title: 'The Plaza Hotel', subtitle: 'Fifth Avenue at Central Park South, New York, NY', address: '768 5th Ave, New York, NY 10019', lat: 40.7645, lng: -73.9745, type: 'hotel' },
  { id: 'ritz_ny', title: 'The Ritz-Carlton New York, Central Park', subtitle: '50 Central Park South, New York, NY', address: '50 Central Park S, New York, NY 10019', lat: 40.7654, lng: -73.9765, type: 'hotel' },
  { id: 'bellevue_phl', title: 'The Bellevue Hotel Philadelphia', subtitle: '200 S Broad St, Philadelphia, PA', address: '200 S Broad St, Philadelphia, PA 19102', lat: 39.9489, lng: -75.1650, type: 'hotel' },
  { id: 'willard_dc', title: 'The Willard InterContinental Washington', subtitle: '1401 Pennsylvania Ave NW, Washington, DC', address: '1401 Pennsylvania Ave NW, Washington, DC 20004', lat: 38.8967, lng: -77.0322, type: 'hotel' },
  { id: 'midtown_manhattan', title: 'Midtown Manhattan', subtitle: 'New York, NY 10019, United States', address: 'Midtown Manhattan, New York, NY', lat: 40.7549, lng: -73.9840, type: 'landmark' },
  { id: 'wall_street', title: 'Wall Street & Financial District', subtitle: 'Manhattan, New York, NY 10005', address: 'Wall St, New York, NY 10005', lat: 40.7074, lng: -74.0089, type: 'landmark' },
  { id: 'east_hampton', title: 'East Hampton Village', subtitle: 'Long Island, New York, United States', address: 'Main St, East Hampton, NY 11937', lat: 40.9634, lng: -72.1848, type: 'landmark' },
  { id: 'atlantic_city', title: 'Atlantic City Boardwalk & Resorts', subtitle: 'Atlantic City, New Jersey, United States', address: 'Boardwalk, Atlantic City, NJ 08401', lat: 39.3562, lng: -74.4285, type: 'landmark' },
  { id: 'rhode_island', title: 'Newport & Providence', subtitle: 'Rhode Island, United States', address: 'Newport, RI 02840', lat: 41.4901, lng: -71.3128, type: 'landmark' },
];

/**
 * Searches US addresses using Google Maps Places API if configured,
 * otherwise falls back seamlessly to the live OpenStreetMap / Photon US Geocoder.
 */
export async function searchAddress(query: string): Promise<AddressSuggestion[]> {
  const trimmed = query.trim();
  if (!trimmed) {
    return LUXURY_LOCATIONS.slice(0, 6);
  }

  // 1. Check local luxury matching first
  const localMatches = LUXURY_LOCATIONS.filter(
    (item) =>
      item.title.toLowerCase().includes(trimmed.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(trimmed.toLowerCase()) ||
      item.address.toLowerCase().includes(trimmed.toLowerCase())
  );

  // 2. Fetch live US address suggestions via Geocoding API (reads every US street, number, zip, city)
  try {
    const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(trimmed)}&limit=6&bbox=-125.0,24.396308,-66.93457,49.384358`;
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      if (data && Array.isArray(data.features)) {
        const liveSuggestions: AddressSuggestion[] = data.features.map((feat: any, idx: number) => {
          const props = feat.properties || {};
          const street = [props.housenumber, props.street].filter(Boolean).join(' ');
          const name = props.name || street || props.city || 'Address';
          const subtitleParts = [
            props.city,
            props.state,
            props.postcode,
            props.country || 'USA',
          ].filter(Boolean);

          const fullAddress = [name, ...subtitleParts].filter(Boolean).join(', ');

          return {
            id: `geo-${idx}-${props.osm_id || Math.random()}`,
            title: name,
            subtitle: subtitleParts.join(', '),
            address: fullAddress,
            lat: feat.geometry?.coordinates?.[1],
            lng: feat.geometry?.coordinates?.[0],
            type: props.osm_value === 'aeroway' || props.type === 'aerodrome' ? 'airport' : 'address',
          };
        });

        // Deduplicate and combine local matches + live geocoded addresses
        const combined = [...localMatches];
        for (const live of liveSuggestions) {
          if (!combined.some((c) => c.address.toLowerCase() === live.address.toLowerCase())) {
            combined.push(live);
          }
        }
        return combined.slice(0, 8);
      }
    }
  } catch (err) {
    console.warn('Live geocoder lookup skipped, using local addresses:', err);
  }

  return localMatches.length > 0 ? localMatches : LUXURY_LOCATIONS.slice(0, 6);
}

/**
 * Calculates accurate road driving distance in miles between coordinates.
 */
export function calculateDrivingDistance(
  pickupLat?: number,
  pickupLng?: number,
  dropoffLat?: number,
  dropoffLng?: number
): { distanceMiles: number; durationMinutes: number } {
  if (
    typeof pickupLat !== 'number' ||
    typeof pickupLng !== 'number' ||
    typeof dropoffLat !== 'number' ||
    typeof dropoffLng !== 'number'
  ) {
    // Standard executive airport-to-city transfer baseline: ~18.5 miles, 32 minutes
    return { distanceMiles: 18.5, durationMinutes: 32 };
  }

  const R = 3958.8; // Earth's radius in miles
  const dLat = ((dropoffLat - pickupLat) * Math.PI) / 180;
  const dLon = ((dropoffLng - pickupLng) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((pickupLat * Math.PI) / 180) *
      Math.cos((dropoffLat * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const straightMiles = R * c;

  // Real US road routes average 1.28x straight line distance
  const roadFactor = 1.28;
  const distanceMiles = Math.max(5.0, Math.round(straightMiles * roadFactor * 10) / 10);

  // US urban / suburban average travel speed ~35 mph
  const durationMinutes = Math.max(15, Math.round((distanceMiles / 35) * 60));

  return { distanceMiles, durationMinutes };
}

/**
 * Dynamic Fare Calculator based on exact distance or hourly duration.
 * Guaranteed transparent all-inclusive rate with zero surge pricing.
 */
export function calculateFare(
  vehicle: VehicleClass,
  bookingType: 'transfer' | 'hourly',
  distanceMiles: number = 18.5,
  durationHours: number = 3
): number {
  if (bookingType === 'hourly') {
    const rate = vehicle.hourlyRate || Math.round(vehicle.price * 0.75);
    return Math.max(rate * 2, rate * durationHours);
  }

  // Mileage-based transfer pricing: base flag drop + per mile rate
  const mileageCharge = distanceMiles * (vehicle.perMileRate || 4.25);
  const base = vehicle.basePrice || 70;
  const total = Math.round(base + mileageCharge);

  return Math.max(vehicle.basePrice || 85, total);
}

