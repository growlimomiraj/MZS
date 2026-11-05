# MZS Executive Chauffeurs

The premier US executive chauffeur service. Nationwide coverage across all 50 US states, offering bespoke airport transfers, city-to-city private travel, and hourly bookings.

## Contact Information
- **Phone:** (888) 801-7476
- **Email:** info@mzexecutivechauffeurs.com
- **Territory:** Nationwide United States (Northeast, West Coast, South, Midwest)

---

## Architecture & Features

### 1. Typography & Tokens
- **Display & Headings**: `PP Fragment` (Glare Regular, serif luxury font)
- **Body & UI**: `Geist` (Regular, Medium, SemiBold)
- **Brand Palette**:
  - Dark Charcoal: `#0F1319`
  - Electric Blue: `#0F63BD` (Hover: `#0D529C`)
  - Warm White / Light Muted: `#FFFFFF`, `#F8F9FA`, `#F4F5F6`
  - Glassmorphic backdrop filters (`backdrop-blur-md`, subtle border highlights)

### 2. Homepage Sections
1. **Global Header**:
   - MZS Executive Chauffeurs SVG Logo
   - Navigation menus: *Our services*, *For business*, *Language selector*
   - Direct navigation: *For chauffeurs*, *Help*
   - *Sign In* modal button & *Book Now* reservation CTA
   - Responsive mobile navigation drawer with expandable accordions
2. **Hero Section ("Your chauffeur awaits.")**:
   - High-definition luxury chauffeur background
   - Interactive booking widget with *One way* vs *By the hour* selection
   - Autocomplete US airport, FBO, and luxury hotel suggestions
   - Date picker & 15-minute interval time selection
   - Trust badge: *"Nationwide US executive chauffeur coverage across all 50 US states."*
3. **Services Introduction ("Arrive at your best.")**:
   - Four interactive service cards:
     - Airport Transfers (*Smooth landings, every time.*)
     - Hourly & Full Day Hire (*Seize the day.*)
     - City-to-City (*Between cities, done better.*)
     - Enterprise & Agency Solutions (*Corporate travel, simplified.*)
4. **Executive Portal & 24/7 Dispatch**:
   - VIP chauffeur reservation portal with real-time flight tracking
   - 24/7 priority concierge telephone dispatch: (888) 801-7476
5. **Premium Experience ("Step in. Breathe out.")**:
   - Three luxury photographic experience pillars:
     - *A welcome like no other*
     - *You set the tone*
     - *Recharge your batteries*
6. **Excellence Section ("Expect excellence.")**:
   - 3D glassmorphic vector iconography
   - *Nationwide coverage* (Licensed professional chauffeurs across the USA)
   - *High-end vehicles* (Only the best recent models)
   - *Safe travels* (Trained professionals and reliable pickups)
7. **Sustainability Commitment**:
   - 100% carbon-offset rides across all 50 US states
8. **Complete Multi-Column Footer**:
   - Links for Company, Business solutions, Top US cities, Explore, US City-to-city routes, Legal notice, Privacy policy, Accessibility, and Cookie Preferences

---

## Tech Stack
- **Framework:** React 18 with TypeScript & Vite
- **Styling:** Tailwind CSS & Custom CSS Variables
- **Animations:** GSAP & ScrollTrigger
- **Icons:** Lucide React & Handcrafted SVG Vector Assets
- **Deployment:** Vercel SPA

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Production build
npm run build
```
