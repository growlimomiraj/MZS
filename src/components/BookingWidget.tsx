import React, { useState, useRef, useEffect } from 'react';
import {
  MapPin,
  Plane,
  Building2,
  Calendar as CalendarIcon,
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  AlertCircle,
  X,
} from 'lucide-react';
import { BookingState, BookingType } from '../types';

interface BookingWidgetProps {
  onSearch: (bookingData: BookingState) => void;
}

const LUXURY_LOCATIONS = [
  // Airports
  { id: 'jfk', title: 'JFK - John F. Kennedy International Airport', subtitle: 'Queens, New York, United States', type: 'airport' },
  { id: 'lga', title: 'LGA - LaGuardia Airport', subtitle: 'Queens, New York, United States', type: 'airport' },
  { id: 'ewr', title: 'EWR - Newark Liberty International Airport', subtitle: 'Newark, New Jersey, United States', type: 'airport' },
  { id: 'lhr', title: 'LHR - London Heathrow Airport', subtitle: 'Hounslow, London, United Kingdom', type: 'airport' },
  { id: 'lgw', title: 'LGW - London Gatwick Airport', subtitle: 'Horley, Gatwick, United Kingdom', type: 'airport' },
  { id: 'cdg', title: 'CDG - Paris Charles de Gaulle Airport', subtitle: 'Roissy-en-France, Paris, France', type: 'airport' },
  { id: 'ory', title: 'ORY - Paris Orly Airport', subtitle: 'Orly, Paris, France', type: 'airport' },
  { id: 'dxb', title: 'DXB - Dubai International Airport', subtitle: 'Garhoud, Dubai, United Arab Emirates', type: 'airport' },
  { id: 'lax', title: 'LAX - Los Angeles International Airport', subtitle: 'Los Angeles, California, United States', type: 'airport' },
  { id: 'sfo', title: 'SFO - San Francisco International Airport', subtitle: 'San Mateo County, California, United States', type: 'airport' },
  { id: 'fra', title: 'FRA - Frankfurt Airport', subtitle: 'Frankfurt am Main, Germany', type: 'airport' },
  { id: 'muc', title: 'MUC - Munich Airport', subtitle: 'Munich, Bavaria, Germany', type: 'airport' },
  { id: 'hnd', title: 'HND - Tokyo Haneda Airport', subtitle: 'Ota City, Tokyo, Japan', type: 'airport' },
  { id: 'nrt', title: 'NRT - Tokyo Narita International Airport', subtitle: 'Narita, Chiba, Japan', type: 'airport' },

  // Hotels & Landmarks
  { id: 'plaza', title: 'The Plaza Hotel', subtitle: 'Fifth Avenue at Central Park South, New York', type: 'hotel' },
  { id: 'ritz_ny', title: 'The Ritz-Carlton New York, Central Park', subtitle: '50 Central Park South, New York', type: 'hotel' },
  { id: 'fourseasons_ny', title: 'Four Seasons Hotel New York Downtown', subtitle: '27 Barclay Street, New York', type: 'hotel' },
  { id: 'savoy_lon', title: 'The Savoy', subtitle: 'Strand, London, United Kingdom', type: 'hotel' },
  { id: 'claridges_lon', title: "Claridge's", subtitle: 'Brook Street, Mayfair, London, United Kingdom', type: 'hotel' },
  { id: 'ritz_paris', title: 'Ritz Paris', subtitle: '15 Place Vendôme, 75001 Paris, France', type: 'hotel' },
  { id: 'george_v', title: 'Four Seasons Hotel George V', subtitle: '31 Avenue George V, Paris, France', type: 'hotel' },
  { id: 'burj_al_arab', title: 'Burj Al Arab Jumeirah', subtitle: 'Jumeirah Beach Road, Dubai, United Arab Emirates', type: 'hotel' },
  { id: 'armani_dxb', title: 'Armani Hotel Dubai', subtitle: 'Burj Khalifa, Downtown Dubai, United Arab Emirates', type: 'hotel' },
  { id: 'beverly_hills', title: 'The Beverly Hills Hotel', subtitle: '9641 Sunset Boulevard, Beverly Hills, California', type: 'hotel' },
  { id: 'chateau_marmont', title: 'Chateau Marmont', subtitle: '8221 Sunset Boulevard, West Hollywood, California', type: 'hotel' },
  { id: 'financial_dist', title: 'Financial District / Wall Street', subtitle: 'Manhattan, New York, NY 10005', type: 'landmark' },
  { id: 'midtown_manhattan', title: 'Midtown Manhattan', subtitle: 'New York, NY 10019, United States', type: 'landmark' },
  { id: 'mayfair_london', title: 'Mayfair', subtitle: 'City of Westminster, London W1K, United Kingdom', type: 'landmark' },
];

export const BookingWidget: React.FC<BookingWidgetProps> = ({ onSearch }) => {
  const [bookingType, setBookingType] = useState<BookingType>('transfer');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [durationHours, setDurationHours] = useState(3);

  // Initialize date to today in YYYY-MM-DD
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const [pickupDate, setPickupDate] = useState(todayStr);

  // Default time 11:00 AM
  const [pickupTime, setPickupTime] = useState('11:00');

  // Calendar State
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());

  // Dropdown states
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDropoffSuggestions, setShowDropoffSuggestions] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDurationPicker, setShowDurationPicker] = useState(false);

  // Validation
  const [error, setError] = useState<string | null>(null);

  const widgetRef = useRef<HTMLDivElement>(null);
  const timePickerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setShowPickupSuggestions(false);
        setShowDropoffSuggestions(false);
        setShowDatePicker(false);
        setShowTimePicker(false);
        setShowDurationPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter location suggestions
  const filterLocations = (query: string) => {
    if (!query.trim()) return LUXURY_LOCATIONS.slice(0, 7);
    const q = query.toLowerCase();
    return LUXURY_LOCATIONS.filter(
      (l) => l.title.toLowerCase().includes(q) || l.subtitle.toLowerCase().includes(q)
    );
  };

  const filteredPickups = filterLocations(pickup);
  const filteredDropoffs = filterLocations(dropoff);

  // Handle Form Submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup.trim()) {
      setError('Please enter a pickup location');
      return;
    }
    if (bookingType === 'transfer' && !dropoff.trim()) {
      setError('Please enter a drop-off location');
      return;
    }

    setError(null);
    onSearch({
      type: bookingType,
      pickupLocation: pickup,
      dropoffLocation: bookingType === 'transfer' ? dropoff : `By the Hour (${durationHours} hours)`,
      durationHours: durationHours,
      date: pickupDate,
      time: pickupTime,
    });
  };

  // Time formatters & options
  const timeOptions: string[] = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      const hh = h.toString().padStart(2, '0');
      const mm = m.toString().padStart(2, '0');
      timeOptions.push(`${hh}:${mm}`);
    }
  }

  const formatDisplayTime = (t24: string) => {
    const [h, m] = t24.split(':').map(Number);
    const period = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return `${h12}:${m.toString().padStart(2, '0')} ${period}`;
  };

  const formatDisplayDate = (dStr: string) => {
    if (!dStr) return 'Select a date';
    const [y, m, d] = dStr.split('-').map(Number);
    const dateObj = new Date(y, m - 1, d);
    return dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  // Calendar helpers
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month: number, year: number) => {
    const day = new Date(year, month, 1).getDay();
    // 0 is Sunday, make Monday 0
    return day === 0 ? 6 : day - 1;
  };

  const handlePrevMonth = () => {
    if (calMonth === 0) {
      setCalMonth(11);
      setCalYear(calYear - 1);
    } else {
      setCalMonth(calMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (calMonth === 11) {
      setCalMonth(0);
      setCalYear(calYear + 1);
    } else {
      setCalMonth(calMonth + 1);
    }
  };

  const isPastDate = (day: number) => {
    const checkDate = new Date(calYear, calMonth, day);
    const currToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return checkDate < currToday;
  };

  const isSelectedDate = (day: number) => {
    const checkStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return checkStr === pickupDate;
  };

  const handleSelectDay = (day: number) => {
    if (isPastDate(day)) return;
    const selectedStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setPickupDate(selectedStr);
    setShowDatePicker(false);
  };

  return (
    <div ref={widgetRef} className="w-full max-w-[1170px] mx-auto flex flex-col items-center">
      {/* 1. Category Selection Pill - exact SegmentedControl from Blacklane reference */}
      <div className="flex items-center justify-center mb-4 sm:mb-5">
        <div className="inline-grid grid-flow-col gap-1 p-1 bg-black/40 backdrop-blur-xl rounded-full border border-white/25 shadow-lg select-none">
          <button
            type="button"
            onClick={() => {
              setBookingType('transfer');
              setError(null);
            }}
            className={`px-6 py-2 text-sm font-['Geist',sans-serif] font-medium rounded-full transition-all duration-200 cursor-pointer ${
              bookingType === 'transfer'
                ? 'bg-[#0F63BD] text-white shadow-sm'
                : 'text-white/85 hover:text-white'
            }`}
          >
            One way
          </button>
          <button
            type="button"
            onClick={() => {
              setBookingType('hourly');
              setError(null);
            }}
            className={`px-6 py-2 text-sm font-['Geist',sans-serif] font-medium rounded-full transition-all duration-200 cursor-pointer ${
              bookingType === 'hourly'
                ? 'bg-[#0F63BD] text-white shadow-sm'
                : 'text-white/85 hover:text-white'
            }`}
          >
            By the hour
          </button>
        </div>
      </div>

      {/* 2. Main Booking Window Bar */}
      <div className="w-full relative backdrop-blur-2xl bg-[#0f1319]/50 border border-white/25 rounded-2xl p-3 sm:p-4 lg:p-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all">
        <form
          onSubmit={handleSearchSubmit}
          className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 lg:gap-0"
        >
          {/* A. Pickup Location */}
          <div className="relative flex-1 px-3 sm:px-4 py-2 hover:bg-white/5 rounded-xl transition-colors">
            <label className="block text-[11px] font-['Geist',sans-serif] font-medium text-[#aeaeae] uppercase tracking-wider mb-0.5">
              Pickup location
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value);
                  setShowPickupSuggestions(true);
                  setError(null);
                }}
                onFocus={() => {
                  setShowPickupSuggestions(true);
                  setShowDropoffSuggestions(false);
                  setShowDatePicker(false);
                  setShowTimePicker(false);
                  setShowDurationPicker(false);
                }}
                placeholder="Address, airport, hotel, ..."
                className="w-full bg-transparent text-white placeholder-[#aeaeae]/70 text-sm sm:text-base font-normal focus:outline-none truncate"
              />
              {pickup && (
                <button
                  type="button"
                  onClick={() => setPickup('')}
                  className="text-white/50 hover:text-white ml-2 focus:outline-none cursor-pointer"
                  aria-label="Clear pickup location"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Suggestions Dropdown */}
            {showPickupSuggestions && (
              <div className="absolute top-full left-0 mt-2 w-full sm:w-[380px] bg-[#0F1319]/98 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 z-50 shadow-2xl max-h-80 overflow-y-auto animate-in fade-in zoom-in-95">
                <div className="text-[10px] font-semibold text-gray-400 uppercase px-3 py-1.5 tracking-wider">
                  Popular Locations
                </div>
                {filteredPickups.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setPickup(item.title);
                      setShowPickupSuggestions(false);
                    }}
                    className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                  >
                    {item.type === 'airport' ? (
                      <Plane className="w-4 h-4 text-[#0F63BD] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    ) : (
                      <MapPin className="w-4 h-4 text-[#0F63BD] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    )}
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-gray-400">{item.subtitle}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-10 bg-white/20 mx-1 shrink-0 self-center" />

          {/* B. Drop-off Location OR Duration */}
          {bookingType === 'transfer' ? (
            <div className="relative flex-1 px-3 sm:px-4 py-2 hover:bg-white/5 rounded-xl transition-colors">
              <label className="block text-[11px] font-['Geist',sans-serif] font-medium text-[#aeaeae] uppercase tracking-wider mb-0.5">
                Drop-off location
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={dropoff}
                  onChange={(e) => {
                    setDropoff(e.target.value);
                    setShowDropoffSuggestions(true);
                    setError(null);
                  }}
                  onFocus={() => {
                    setShowDropoffSuggestions(true);
                    setShowPickupSuggestions(false);
                    setShowDatePicker(false);
                    setShowTimePicker(false);
                    setShowDurationPicker(false);
                  }}
                  placeholder="Address, airport, hotel, ..."
                  className="w-full bg-transparent text-white placeholder-[#aeaeae]/70 text-sm sm:text-base font-normal focus:outline-none truncate"
                />
                {dropoff && (
                  <button
                    type="button"
                    onClick={() => setDropoff('')}
                    className="text-white/50 hover:text-white ml-2 focus:outline-none cursor-pointer"
                    aria-label="Clear drop-off location"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Suggestions Dropdown */}
              {showDropoffSuggestions && (
                <div className="absolute top-full left-0 mt-2 w-full sm:w-[380px] bg-[#0F1319]/98 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 z-50 shadow-2xl max-h-80 overflow-y-auto animate-in fade-in zoom-in-95">
                  <div className="text-[10px] font-semibold text-gray-400 uppercase px-3 py-1.5 tracking-wider">
                    Popular Destinations
                  </div>
                  {filteredDropoffs.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setDropoff(item.title);
                        setShowDropoffSuggestions(false);
                      }}
                      className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                    >
                      {item.type === 'airport' ? (
                        <Plane className="w-4 h-4 text-[#0F63BD] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      ) : (
                        <MapPin className="w-4 h-4 text-[#0F63BD] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      )}
                      <div>
                        <div className="text-sm font-medium text-white">{item.title}</div>
                        <div className="text-xs text-gray-400">{item.subtitle}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="relative flex-1 px-3 sm:px-4 py-2 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
              <label className="block text-[11px] font-['Geist',sans-serif] font-medium text-[#aeaeae] uppercase tracking-wider mb-0.5">
                Duration
              </label>
              <div
                onClick={() => {
                  setShowDurationPicker(!showDurationPicker);
                  setShowPickupSuggestions(false);
                  setShowDropoffSuggestions(false);
                  setShowDatePicker(false);
                  setShowTimePicker(false);
                }}
                className="flex items-center justify-between text-white text-sm sm:text-base font-normal"
              >
                <span>{durationHours} hours</span>
                <ChevronDown className="w-4 h-4 text-white/70" />
              </div>

              {showDurationPicker && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#0F1319]/98 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 z-50 shadow-2xl max-h-64 overflow-y-auto animate-in fade-in zoom-in-95">
                  <div className="text-[10px] font-semibold text-gray-400 uppercase px-3 py-1.5 tracking-wider">
                    Hire Duration
                  </div>
                  {[2, 3, 4, 5, 6, 8, 10, 12, 16, 24].map((hrs) => (
                    <button
                      key={hrs}
                      type="button"
                      onClick={() => {
                        setDurationHours(hrs);
                        setShowDurationPicker(false);
                      }}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-xl cursor-pointer"
                    >
                      <span>{hrs} hours {hrs === 8 && '(Full Day)'}</span>
                      {durationHours === hrs && <Check className="w-4 h-4 text-[#0F63BD]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-10 bg-white/20 mx-1 shrink-0 self-center" />

          {/* C. Date Picker */}
          <div className="relative flex-1 px-3 sm:px-4 py-2 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
            <label className="block text-[11px] font-['Geist',sans-serif] font-medium text-[#aeaeae] uppercase tracking-wider mb-0.5">
              Date
            </label>
            <div
              onClick={() => {
                setShowDatePicker(!showDatePicker);
                setShowPickupSuggestions(false);
                setShowDropoffSuggestions(false);
                setShowTimePicker(false);
                setShowDurationPicker(false);
              }}
              className="flex items-center justify-between text-white text-sm sm:text-base font-normal gap-2"
            >
              <span className="whitespace-nowrap text-white font-normal">
                {formatDisplayDate(pickupDate)}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-white/70 transition-transform ${
                  showDatePicker ? 'rotate-180' : ''
                }`}
              />
            </div>

            {/* Custom Interactive Calendar Popover */}
            {showDatePicker && (
              <div className="absolute top-full left-0 sm:left-auto sm:right-0 lg:left-0 mt-2 w-[310px] bg-[#0F1319]/98 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 z-50 shadow-2xl animate-in fade-in zoom-in-95 select-none">
                {/* Month & Year Navigation Header */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/15">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    className="p-1 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-sm font-semibold text-white">
                    {monthNames[calMonth]} {calYear}
                  </span>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="p-1 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                    aria-label="Next month"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Day Names Row */}
                <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-gray-400 mb-2">
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                  <span>Sa</span>
                  <span>Su</span>
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {/* Empty cells before day 1 */}
                  {Array.from({ length: firstDayOfMonth(calMonth, calYear) }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-8 w-8" />
                  ))}

                  {/* Days of month */}
                  {Array.from({ length: daysInMonth(calMonth, calYear) }).map((_, i) => {
                    const day = i + 1;
                    const past = isPastDate(day);
                    const selected = isSelectedDate(day);

                    return (
                      <button
                        key={day}
                        type="button"
                        disabled={past}
                        onClick={() => handleSelectDay(day)}
                        className={`h-8 w-8 flex items-center justify-center text-xs rounded-full transition-all cursor-pointer ${
                          selected
                            ? 'bg-[#0F63BD] text-white font-bold shadow-md'
                            : past
                            ? 'text-gray-600 cursor-not-allowed'
                            : 'text-white hover:bg-white/20'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-10 bg-white/20 mx-1 shrink-0 self-center" />

          {/* D. Pickup Time Picker */}
          <div className="relative flex-1 px-3 sm:px-4 py-2 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
            <label className="block text-[11px] font-['Geist',sans-serif] font-medium text-[#aeaeae] uppercase tracking-wider mb-0.5">
              Pickup time
            </label>
            <div
              onClick={() => {
                setShowTimePicker(!showTimePicker);
                setShowPickupSuggestions(false);
                setShowDropoffSuggestions(false);
                setShowDatePicker(false);
                setShowDurationPicker(false);
              }}
              className="flex items-center justify-between text-white text-sm sm:text-base font-normal gap-2"
            >
              <span className="whitespace-nowrap font-normal">{formatDisplayTime(pickupTime)}</span>
              <ChevronDown
                className={`w-4 h-4 text-white/70 transition-transform ${
                  showTimePicker ? 'rotate-180' : ''
                }`}
              />
            </div>

            {/* Time List Popover */}
            {showTimePicker && (
              <div
                ref={timePickerRef}
                className="absolute top-full right-0 mt-2 w-48 bg-[#0F1319]/98 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 z-50 shadow-2xl max-h-64 overflow-y-auto animate-in fade-in zoom-in-95"
              >
                <div className="text-[10px] font-semibold text-gray-400 uppercase px-3 py-1.5 tracking-wider">
                  Select Time
                </div>
                {timeOptions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setPickupTime(t);
                      setShowTimePicker(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-xl cursor-pointer transition-colors ${
                      pickupTime === t
                        ? 'bg-[#0F63BD]/20 text-[#0F63BD] font-semibold'
                        : 'text-gray-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{formatDisplayTime(t)}</span>
                    {pickupTime === t && <Check className="w-4 h-4 text-[#0F63BD]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-10 bg-white/20 mx-1 shrink-0 self-center" />

          {/* E. Action Button ("View options") */}
          <div className="flex items-center lg:pl-3">
            <button
              type="submit"
              className="w-full lg:w-auto px-8 py-3.5 bg-[#0F63BD] hover:bg-[#0D529C] text-white font-medium text-sm sm:text-base rounded-full transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap active:scale-95"
            >
              View options
            </button>
          </div>
        </form>

        {/* Validation Error Alert */}
        {error && (
          <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-red-200 bg-red-950/80 border border-red-700/60 px-4 py-2 rounded-xl animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* 3. Official Companion InfoCard matching Blacklane DOM */}
      <div className="hidden sm:flex items-center justify-center gap-3 mt-6 text-white/90 select-none opacity-85 hover:opacity-100 transition-opacity">
        <img
          src="/assets/hero/nav-plane.svg"
          alt=""
          className="w-8 h-8 object-contain shrink-0 drop-shadow"
          onError={(e) => {
            // fallback if svg fails
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="text-xs sm:text-sm font-['Geist',sans-serif] font-normal leading-tight text-center sm:text-left">
          <span className="block text-white/90">Set your pickup in over 64 countries.</span>
          <span className="block text-white/70">We'll be there on time.</span>
        </div>
      </div>
    </div>
  );
};
