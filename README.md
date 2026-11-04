# MZS — Blacklane Website Recreation

A pixel-level visual and functional replica of [Blacklane](https://www.blacklane.com/en/).

## Live Preview
The development server is running at:
- **Local:** `http://localhost:3000/`
- **Network:** `http://192.168.100.34:3000/`

---

## Architecture & Features

### 1. Typography & Tokens
- **Display & Headings**: `PP Fragment` (Glare Regular, serif luxury font directly from Blacklane CDN).
- **Body & UI**: `Geist` (Regular, Medium, SemiBold).
- **Brand Palette**:
  - Dark Charcoal: `#0F1319`
  - Electric Blue: `#0F63BD` (Hover: `#0D529C`)
  - Warm White / Light Muted: `#FFFFFF`, `#F8F9FA`, `#F4F5F6`
  - Glassmorphic backdrop filters (`backdrop-blur-md`, subtle border highlights).

### 2. Homepage Sections (100% Recreated)
1. **Global Header**:
   - Official Blacklane SVG Logo.
   - Dropdown menus: *Our services*, *For business*, *Language selector* (10 locales).
   - Direct navigation: *For chauffeurs*, *Help*.
   - *Sign In* glass button & *Book Now* smooth-scroll CTA.
   - Responsive mobile navigation drawer with expandable accordions.
2. **Hero Section ("Your chauffeur awaits.")**:
   - High-definition Mercedes-Benz chauffeur background (responsive desktop/mobile).
   - Interactive booking widget with *One way* vs *By the hour* selection.
   - Autocomplete pickup and drop-off location suggestions.
   - Date picker & 15-minute interval time selection.
   - Trust badge: *"Set your pickup in over 64 countries. We'll be there on time."*
3. **Services Introduction ("Arrive at your best.")**:
   - Four interactive service cards with smooth carousel controls:
     - Airport Transfers (*Smooth landings, every time.*)
     - Hourly & Full Day Hire (*Seize the day.*)
     - City-to-City (*Between cities, done better.*)
     - Enterprise & Agency Solutions (*Corporate travel, simplified.*)
4. **Mobile Application ("We move with you.")**:
   - Blacklane mobile smartphone mockup with interactive visual app interface.
   - App Store & Google Play download badges.
5. **Premium Experience ("Step in. Breathe out.")**:
   - Three luxury photographic experience pillars:
     - *A welcome like no other*
     - *You set the tone*
     - *Recharge your batteries*
6. **Excellence Section ("Expect excellence.")**:
   - 3D glassmorphic vector iconography.
   - *Available worldwide* (500+ cities).
   - *High-end vehicles* (Only the best recent models).
   - *Safe travels* (Trained professionals and reliable pickups).
7. **Sustainability Partners ("Sustainability partners")**:
   - Certified partners: *The Climate Pledge*, *Leaders for Climate Action*, *South Pole*.
8. **Complete Multi-Column Footer**:
   - Links for Company, Business solutions, Top cities, Explore, City-to-city routes, Legal notice, Privacy policy, Accessibility, and Cookie Preferences.

### 3. Complete Internal Pages Recreated
- **Airport Transfers** (`/airport-transfer`): Flight delay tracking guarantee, 60-min complimentary wait time, vehicle service classes, global airports directory, FAQ accordion.
- **Hourly Chauffeur** (`/hourly-car-service`): By-the-hour and full-day standby hire, multi-stop itineraries, roadshows.
- **City-to-City** (`/city-to-city`): Popular long-distance routes, fixed pricing, comparison table vs flights and trains.
- **Business Travel** (`/business`): Centralized portal, corporate billing, traveler duty of care, enterprise demo request.
- **Chauffeur Services** (`/chauffeur-service`): Driver vetting standards, Chauffeur Academy, executive etiquette.
- **Limousine Services** (`/limousine-service`): Flagship luxury sedans, VIP hospitality, red-carpet transfers.
- **For Chauffeurs** (`/partners`): Driver partner onboarding, vehicle requirements, weekly payouts.
- **Help Center** (`/help`): Searchable knowledge base, FAQs, 24/7 global support contacts.
- **About Us** (`/about`): Founder story, global footprint in 500+ cities, executive leadership.
- **Sustainability** (`/sustainability`): Carbon offset metrics, fleet electrification roadmap, Climate Pledge.
- **Cities Directory** (`/cities`): 500+ global cities across North America, Europe, Middle East, and Asia-Pacific.
- **City Route Detail** (`/city-to-city/new-york-east-hampton`, etc.): Distance, journey duration, all-inclusive pricing.
- **Legal Suite** (`/terms`, `/privacy-policy`, `/imprint`, `/accessibility`).

### 4. Interactive Booking Flow
- Form validation on pickup/dropoff.
- Step 2: Service class selection (*Business Class*, *First Class*, *Business Van / SUV*, *Electric Class*) with passenger/luggage capacities and fixed rates.
- Step 3: Lead passenger details, contact phone, flight delay tracking number, and chauffeur notes.
- Step 4: Instant booking confirmation voucher with confirmation number, dispatch notice, and free cancellation reminder.

---

## Development & Build Commands

```bash
# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
