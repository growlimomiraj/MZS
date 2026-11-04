import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar, Clock, ChevronDown, Check, AlertCircle } from 'lucide-react';
import { BookingState, BookingType } from '../types';
import { LOCATION_SUGGESTIONS } from '../constants/data';

interface BookingWidgetProps {
  onSearch: (bookingData: BookingState) => void;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ onSearch }) => {
  const [bookingType, setBookingType] = useState<BookingType>('transfer');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [durationHours, setDurationHours] = useState(3);
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('11:00');

  // Autocomplete dropdowns
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDropoffSuggestions, setShowDropoffSuggestions] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDurationPicker, setShowDurationPicker] = useState(false);

  // Validation
  const [error, setError] = useState<string | null>(null);

  const widgetRef = useRef<HTMLDivElement>(null);

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

  const filteredPickupSuggestions = LOCATION_SUGGESTIONS.filter(
    (s) =>
      s.title.toLowerCase().includes(pickup.toLowerCase()) ||
      s.subtitle.toLowerCase().includes(pickup.toLowerCase())
  );

  const filteredDropoffSuggestions = LOCATION_SUGGESTIONS.filter(
    (s) =>
      s.title.toLowerCase().includes(dropoff.toLowerCase()) ||
      s.subtitle.toLowerCase().includes(dropoff.toLowerCase())
  );

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
      date: pickupDate || new Date().toISOString().split('T')[0],
      time: pickupTime,
    });
  };

  // Generate 24-hr time options at 15-min intervals
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
    const d = new Date(dStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div ref={widgetRef} className="w-full max-w-[1140px] mx-auto flex flex-col items-center">
      {/* Category Selection Pill - exact replica of Blacklane SegmentedControl */}
      <div className="flex items-center justify-center mb-4">
        <div className="inline-flex items-center p-1 bg-black/40 backdrop-blur-md rounded-full border border-white/20 shadow-md">
          <button
            type="button"
            onClick={() => {
              setBookingType('transfer');
              setError(null);
            }}
            className={`px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
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
            className={`px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
              bookingType === 'hourly'
                ? 'bg-[#0F63BD] text-white shadow-sm'
                : 'text-white/85 hover:text-white'
            }`}
          >
            By the hour
          </button>
        </div>
      </div>

      {/* Main Booking Bar Window */}
      <div className="w-full bg-[#10141C]/75 backdrop-blur-2xl border border-white/20 rounded-2xl px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-all">
        <form onSubmit={handleSearchSubmit} className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-0">
          {/* Pickup location */}
          <div className="relative flex-1 px-3 py-1.5 hover:bg-white/5 rounded-xl transition-colors">
            <label className="block text-[11px] font-medium text-white/70 mb-0.5 tracking-wide">
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
                onFocus={() => setShowPickupSuggestions(true)}
                placeholder="Address, airport, hotel, ..."
                className="w-full bg-transparent text-white placeholder-white/50 text-sm font-normal focus:outline-none truncate"
              />
            </div>

            {/* Suggestions Dropdown */}
            {showPickupSuggestions && (
              <div className="absolute top-full left-0 mt-2 w-full sm:w-96 bg-[#0F1319]/98 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 z-50 shadow-2xl max-h-72 overflow-y-auto animate-slide-down">
                <div className="text-[11px] font-semibold text-gray-400 uppercase px-3 py-1.5 tracking-wider">
                  Suggested Locations
                </div>
                {filteredPickupSuggestions.length > 0 ? (
                  filteredPickupSuggestions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setPickup(item.title);
                        setShowPickupSuggestions(false);
                      }}
                      className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                    >
                      <MapPin className="w-4 h-4 text-[#0F63BD] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-medium text-white">{item.title}</div>
                        <div className="text-xs text-gray-400">{item.subtitle}</div>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="p-3 text-sm text-gray-400">No matching locations found</div>
                )}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-9 bg-white/20 mx-1 shrink-0" />

          {/* Drop-off OR Duration */}
          {bookingType === 'transfer' ? (
            <div className="relative flex-1 px-3 py-1.5 hover:bg-white/5 rounded-xl transition-colors">
              <label className="block text-[11px] font-medium text-white/70 mb-0.5 tracking-wide">
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
                  onFocus={() => setShowDropoffSuggestions(true)}
                  placeholder="Address, airport, hotel, ..."
                  className="w-full bg-transparent text-white placeholder-white/50 text-sm font-normal focus:outline-none truncate"
                />
              </div>

              {/* Dropoff Suggestions */}
              {showDropoffSuggestions && (
                <div className="absolute top-full left-0 mt-2 w-full sm:w-96 bg-[#0F1319]/98 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 z-50 shadow-2xl max-h-72 overflow-y-auto animate-slide-down">
                  <div className="text-[11px] font-semibold text-gray-400 uppercase px-3 py-1.5 tracking-wider">
                    Suggested Destinations
                  </div>
                  {filteredDropoffSuggestions.length > 0 ? (
                    filteredDropoffSuggestions.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setDropoff(item.title);
                          setShowDropoffSuggestions(false);
                        }}
                        className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                      >
                        <MapPin className="w-4 h-4 text-[#0F63BD] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm font-medium text-white">{item.title}</div>
                          <div className="text-xs text-gray-400">{item.subtitle}</div>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-3 text-sm text-gray-400">No matching locations found</div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="relative flex-1 px-3 py-1.5 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
              <label className="block text-[11px] font-medium text-white/70 mb-0.5 tracking-wide">
                Duration
              </label>
              <div
                onClick={() => setShowDurationPicker(!showDurationPicker)}
                className="flex items-center justify-between text-white text-sm font-normal"
              >
                <span>{durationHours} hours</span>
                <ChevronDown className="w-4 h-4 text-white/70" />
              </div>

              {showDurationPicker && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-[#0F1319]/98 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 z-50 shadow-2xl max-h-60 overflow-y-auto animate-slide-down">
                  {[2, 3, 4, 5, 6, 8, 10, 12, 16, 24].map((hrs) => (
                    <button
                      key={hrs}
                      type="button"
                      onClick={() => {
                        setDurationHours(hrs);
                        setShowDurationPicker(false);
                      }}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-xl"
                    >
                      <span>{hrs} hours</span>
                      {durationHours === hrs && <Check className="w-4 h-4 text-[#0F63BD]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-9 bg-white/20 mx-1 shrink-0" />

          {/* Date */}
          <div className="relative flex-1 px-3 py-1.5 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
            <label className="block text-[11px] font-medium text-white/70 mb-0.5 tracking-wide">
              Date
            </label>
            <div
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="flex items-center justify-between text-white text-sm font-normal gap-2"
            >
              <span className="whitespace-nowrap text-white/90">
                {formatDisplayDate(pickupDate)}
              </span>
              <ChevronDown className="w-4 h-4 text-white/70 ml-auto shrink-0" />
            </div>

            {showDatePicker && (
              <div className="absolute top-full left-0 mt-2 bg-[#0F1319]/98 backdrop-blur-2xl border border-white/20 rounded-2xl p-3 z-50 shadow-2xl animate-slide-down">
                <input
                  type="date"
                  value={pickupDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => {
                    setPickupDate(e.target.value);
                    setShowDatePicker(false);
                  }}
                  className="bg-transparent text-white border border-white/20 rounded-xl p-2 text-sm focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-9 bg-white/20 mx-1 shrink-0" />

          {/* Pickup time */}
          <div className="relative flex-1 px-3 py-1.5 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
            <label className="block text-[11px] font-medium text-white/70 mb-0.5 tracking-wide">
              Pickup time
            </label>
            <div
              onClick={() => setShowTimePicker(!showTimePicker)}
              className="flex items-center justify-between text-white text-sm font-medium gap-2"
            >
              <span className="whitespace-nowrap">{formatDisplayTime(pickupTime)}</span>
              <ChevronDown className="w-4 h-4 text-white/70 ml-auto shrink-0" />
            </div>

            {showTimePicker && (
              <div className="absolute top-full right-0 mt-2 w-44 bg-[#0F1319]/98 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 z-50 shadow-2xl max-h-60 overflow-y-auto animate-slide-down">
                {timeOptions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setPickupTime(t);
                      setShowTimePicker(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-1.5 text-xs text-gray-200 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer"
                  >
                    <span>{formatDisplayTime(t)}</span>
                    {pickupTime === t && <Check className="w-3.5 h-3.5 text-[#0F63BD]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-9 bg-white/20 mx-2 shrink-0" />

          {/* Action Button */}
          <div className="flex items-center pl-2">
            <button
              type="submit"
              className="w-full lg:w-auto px-7 py-3 bg-[#0F63BD] hover:bg-[#0D529C] text-white font-medium rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer text-sm whitespace-nowrap active:scale-95"
            >
              View options
            </button>
          </div>
        </form>

        {/* Error Alert if needed */}
        {error && (
          <div className="mt-3 flex items-center gap-2 text-xs text-red-300 bg-red-950/60 border border-red-800/50 px-3.5 py-1.5 rounded-xl">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};
