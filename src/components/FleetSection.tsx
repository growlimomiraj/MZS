import React, { useState } from 'react';
import { VEHICLE_CLASSES } from '../constants/data';
import { VehicleClass } from '../types';
import { Users, Briefcase, Wifi, Zap, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface FleetSectionProps {
  onSelectVehicle?: (vehicle: VehicleClass) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicle }) => {
  const [selectedId, setSelectedId] = useState<string>(VEHICLE_CLASSES[0]?.id || 'business');

  const handleBookVehicle = (vc: VehicleClass) => {
    if (onSelectVehicle) {
      onSelectVehicle(vc);
    }
    const el = document.getElementById('booking-widget');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="fleet" className="relative z-10 bg-white py-20 lg:py-28 px-4 sm:px-8 lg:px-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header matching luxury standard */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Our Luxury Fleet
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#0F1319] tracking-tight leading-tight">
              The MZS Executive Fleet
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#596372] leading-relaxed font-light">
            Explore our curated fleet of luxury sedans, executive SUVs, and Mercedes Sprinter jet vans, engineered for peerless comfort, privacy, and distinction.
          </p>
        </div>

        {/* 5-Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {VEHICLE_CLASSES.map((vc) => {
            const isSelected = selectedId === vc.id;
            return (
              <div
                key={vc.id}
                onMouseEnter={() => setSelectedId(vc.id)}
                className={`group relative rounded-3xl bg-[#FAF8F5] border transition-all duration-300 flex flex-col justify-between overflow-hidden p-5 sm:p-6 ${
                  isSelected
                    ? 'border-[#0F63BD] shadow-xl ring-1 ring-[#0F63BD]/30 -translate-y-1'
                    : 'border-gray-200/80 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#0F63BD] bg-white px-2.5 py-1 rounded-full shadow-2xs border border-gray-100">
                      {vc.name}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-500">
                      From ${vc.price}
                    </span>
                  </div>

                  {/* Vehicle Image */}
                  <div className="h-40 sm:h-44 w-full rounded-2xl bg-gradient-to-b from-white to-[#F2EFE9] flex items-center justify-center p-3 mb-4 overflow-hidden shadow-2xs">
                    <img
                      src={vc.image}
                      alt={vc.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Model */}
                  <h3 className="text-lg sm:text-xl font-serif text-[#0F1319] font-medium leading-snug mb-1">
                    {vc.name}
                  </h3>
                  <p className="text-xs text-[#71717A] font-medium mb-3 line-clamp-1">
                    {vc.models}
                  </p>
                  <p className="text-xs text-[#596372] leading-relaxed mb-4 line-clamp-3">
                    {vc.description}
                  </p>

                  {/* Capacity & Key Specs */}
                  <div className="flex items-center gap-3 py-2.5 px-3 rounded-xl bg-white border border-gray-100 text-xs text-[#0F1319] mb-4">
                    <div className="flex items-center gap-1.5" title="Maximum Passengers">
                      <Users className="w-3.5 h-3.5 text-[#0066FF]" />
                      <span className="font-semibold">Up to {vc.passengers}</span>
                    </div>
                    <span className="text-gray-300">&bull;</span>
                    <div className="flex items-center gap-1.5" title="Luggage Capacity">
                      <Briefcase className="w-3.5 h-3.5 text-[#0066FF]" />
                      <span className="font-semibold">{vc.luggage} Bags</span>
                    </div>
                  </div>

                  {/* Top Features */}
                  <ul className="space-y-1.5 mb-5 text-xs text-[#596372]">
                    {vc.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Pricing & CTA */}
                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Estimated Rate</div>
                    <div className="text-sm font-bold text-[#0F1319]">
                      ${vc.perMileRate}<span className="text-xs font-normal text-gray-500">/mi</span>
                    </div>
                    <div className="text-[10px] text-gray-400 font-light">or ${vc.hourlyRate}/hr</div>
                  </div>

                  <button
                    onClick={() => handleBookVehicle(vc)}
                    className="px-4 py-2 rounded-full bg-[#0F63BD] hover:bg-[#0D529C] text-white text-xs font-semibold transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center gap-1.5 shrink-0"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fleet Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0F1319] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#0066FF]" />
            </div>
            <div>
              <div className="text-base font-serif font-medium text-white">
                MZS Chauffeur &amp; Vehicle Standards
              </div>
              <p className="text-xs text-gray-300 font-light">
                Every vehicle in our fleet is commercially permitted, meticulously sanitized before each dispatch, and piloted by licensed career chauffeurs.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('booking-widget');
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
                window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="px-6 py-2.5 rounded-full bg-white text-[#0F1319] hover:bg-gray-100 text-xs font-semibold transition-all shadow-md shrink-0 cursor-pointer"
          >
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
};

