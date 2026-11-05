import React, { useState } from 'react';
import { X, Users, Briefcase, CheckCircle2, Shield, ArrowRight, ArrowLeft, Clock, MapPin, Calendar, Check } from 'lucide-react';
import { BookingState, VehicleClass } from '../types';
import { VEHICLE_CLASSES } from '../constants/data';

interface VehicleSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: BookingState | null;
}

export const VehicleSelectionModal: React.FC<VehicleSelectionModalProps> = ({
  isOpen,
  onClose,
  bookingData,
}) => {
  const [step, setStep] = useState<'vehicles' | 'details' | 'confirmed'>('vehicles');
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleClass>(VEHICLE_CLASSES[0]);
  const [passengerName, setPassengerName] = useState('');
  const [passengerEmail, setPassengerEmail] = useState('');
  const [passengerPhone, setPassengerPhone] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen || !bookingData) return null;

  const handleSelectVehicle = (vehicle: VehicleClass) => {
    setSelectedVehicle(vehicle);
    setStep('details');
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'MZS-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(code);
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('vehicles');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0F1319] border border-white/15 rounded-3xl text-white shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            {step === 'details' && (
              <button
                onClick={() => setStep('vehicles')}
                className="p-1 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <h3 className="text-lg sm:text-xl font-serif">
                {step === 'vehicles' && 'Select your service class'}
                {step === 'details' && 'Passenger & Journey Details'}
                {step === 'confirmed' && 'Booking Confirmed'}
              </h3>
              <p className="text-xs text-gray-400">
                {bookingData.type === 'transfer' ? 'Point-to-point transfer' : `Hourly hire (${bookingData.durationHours} hrs)`} &bull; All-inclusive guaranteed pricing
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Journey Summary Bar */}
        <div className="px-6 py-3 bg-white/5 border-b border-white/10 flex flex-wrap items-center gap-4 text-xs text-gray-300">
          <div className="flex items-center gap-1.5 truncate max-w-xs">
            <MapPin className="w-3.5 h-3.5 text-[#0F63BD] shrink-0" />
            <span className="truncate">{bookingData.pickupLocation}</span>
          </div>
          <span className="text-gray-500">&rarr;</span>
          <div className="flex items-center gap-1.5 truncate max-w-xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">{bookingData.dropoffLocation}</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
            <span>{bookingData.date}</span>
            <Clock className="w-3.5 h-3.5 text-gray-400 ml-2" />
            <span>{bookingData.time}</span>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {step === 'vehicles' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {VEHICLE_CLASSES.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    onClick={() => handleSelectVehicle(vehicle)}
                    className="group relative p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0F63BD] transition-all duration-200 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="text-lg font-serif text-white group-hover:text-[#4A9CFF] transition-colors">
                            {vehicle.name}
                          </h4>
                          <p className="text-xs text-gray-400 line-clamp-1">{vehicle.models}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-white">
                            ${vehicle.price}
                          </span>
                          <span className="text-[10px] text-gray-400 block uppercase">All-inclusive</span>
                        </div>
                      </div>

                      {/* Vehicle Image Placeholder / Realistic Graphic */}
                      <div className="w-full h-32 my-3 rounded-xl bg-gradient-to-tr from-black/60 to-white/5 border border-white/5 flex items-center justify-center p-3 overflow-hidden">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="max-h-full w-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Capacities */}
                      <div className="flex items-center gap-4 text-xs text-gray-300 mb-3">
                        <div className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-gray-400" />
                          <span>Max {vehicle.passengers}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                          <span>Max {vehicle.luggage} bags</span>
                        </div>
                      </div>

                      {/* Features list */}
                      <ul className="space-y-1 mb-4">
                        {vehicle.features.slice(0, 2).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1.5 text-xs text-gray-400">
                            <CheckCircle2 className="w-3 h-3 text-[#0F63BD] shrink-0" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      className="w-full py-2.5 rounded-xl bg-[#0F63BD] group-hover:bg-[#0D529C] text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <span>Select {vehicle.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* MZS Guarantee Note */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-gray-400">
                <Shield className="w-5 h-5 text-[#0F63BD] shrink-0" />
                <span>
                  <strong>MZS Guarantee:</strong> 100% carbon-neutral rides, complimentary 60 min airport wait time, flight tracking, and full refund for cancellations up to 1 hour prior to pickup.
                </span>
              </div>
            </div>
          )}

          {step === 'details' && (
            <form onSubmit={handleConfirmBooking} className="max-w-2xl mx-auto space-y-5">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Selected Vehicle</div>
                  <div className="text-lg font-serif text-white">{selectedVehicle.name}</div>
                  <div className="text-xs text-gray-400">{selectedVehicle.models}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">${selectedVehicle.price}</div>
                  <div className="text-[10px] text-emerald-400 font-medium">Guaranteed fixed rate</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider border-b border-white/10 pb-2">
                  Passenger Contact Details
                </h4>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Lead Passenger Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0F63BD]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">
                      Email Address (for booking confirmation) *
                    </label>
                    <input
                      type="email"
                      required
                      value={passengerEmail}
                      onChange={(e) => setPassengerEmail(e.target.value)}
                      placeholder="eleanor@example.com"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0F63BD]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">
                      Mobile Number (for chauffeur SMS alerts) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={passengerPhone}
                      onChange={(e) => setPassengerPhone(e.target.value)}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0F63BD]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Flight Number (optional — enables automated flight delay tracking)
                  </label>
                  <input
                    type="text"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                    placeholder="e.g. BA 178 or DL 412"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0F63BD]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Special Chauffeur Requests (e.g. child seat, luggage assistance)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Optional notes for your chauffeur..."
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0F63BD]"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep('vehicles')}
                  className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-semibold text-gray-300 hover:text-white"
                >
                  Change vehicle
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#0F63BD] hover:bg-[#0D529C] text-sm font-semibold text-white shadow-lg transition-all"
                >
                  Confirm & Reserve Journey
                </button>
              </div>
            </form>
          )}

          {step === 'confirmed' && (
            <div className="max-w-xl mx-auto py-8 text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-9 h-9" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-medium text-gray-300 mb-2">
                  Confirmation #{bookingCode}
                </span>
                <h3 className="text-3xl font-serif text-white">Your Chauffeur is Reserved</h3>
                <p className="text-sm text-gray-300 mt-2">
                  Confirmation and dispatch updates have been sent to <strong>{passengerEmail || 'your email'}</strong>.
                </p>
              </div>

              {/* Voucher Card */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left space-y-3">
                <div className="flex justify-between items-center text-xs pb-3 border-b border-white/10">
                  <span className="text-gray-400">Class</span>
                  <span className="font-semibold text-white">{selectedVehicle.name}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-3 border-b border-white/10">
                  <span className="text-gray-400">Lead Passenger</span>
                  <span className="font-semibold text-white">{passengerName || 'Executive Guest'}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-3 border-b border-white/10">
                  <span className="text-gray-400">Pickup Date & Time</span>
                  <span className="font-semibold text-white">{bookingData.date} at {bookingData.time}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-3 border-b border-white/10">
                  <span className="text-gray-400">Pickup Location</span>
                  <span className="font-semibold text-white truncate max-w-[280px]">{bookingData.pickupLocation}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-3 border-b border-white/10">
                  <span className="text-gray-400">Destination</span>
                  <span className="font-semibold text-white truncate max-w-[280px]">{bookingData.dropoffLocation}</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-2 font-semibold">
                  <span>Total Amount Paid</span>
                  <span className="text-[#4A9CFF]">${selectedVehicle.price} USD</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-[#0F63BD] hover:bg-[#0D529C] text-xs font-semibold text-white shadow-md cursor-pointer"
                >
                  Book Another Ride
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full border border-white/20 hover:border-white text-xs font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Close Voucher
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

