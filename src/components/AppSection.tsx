import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, ArrowRight, ShieldCheck, Clock, CheckCircle2, Plane, MapPin, Star, Shield } from 'lucide-react';
import { MZSLogo } from './MZSLogo';

gsap.registerPlugin(ScrollTrigger);

export const AppSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const cardColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textColRef.current && cardColRef.current && sectionRef.current) {
        const enterTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 1.5,
          },
        });

        enterTl.from(
          textColRef.current,
          {
            x: -120,
            opacity: 0,
            duration: 1.2,
            ease: 'power1.out',
          },
          0
        );

        enterTl.from(
          cardColRef.current,
          {
            x: 120,
            opacity: 0,
            duration: 1.2,
            ease: 'power1.out',
          },
          0
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToBooking = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#aecff3] text-[#0F1319] py-20 sm:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Text & Direct CTAs */}
        <div
          ref={textColRef}
          className="w-full lg:w-[46%] flex flex-col justify-center text-center lg:text-left will-change-transform"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0F1319]/75 mb-3 block">
            MZS Executive Reservation Portal
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-['PP_Fragment',serif] font-normal text-[#0F1319] tracking-tight leading-[1.08] mb-5">
            We move with you.
          </h2>
          <p className="text-base sm:text-lg text-[#0F1319]/80 leading-relaxed mb-8 font-normal max-w-md mx-auto lg:mx-0">
            Have all your journeys in the palm of your hand with MZS Executive Chauffeurs. Reserve, track, and manage luxury transportation seamlessly across the United States.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6">
            <button
              onClick={scrollToBooking}
              className="px-8 py-3.5 bg-[#0F1319] hover:bg-black text-white text-sm font-medium rounded-full transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Reserve with MZS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+18888017476"
              className="px-6 py-3.5 bg-white/80 hover:bg-white text-[#0F1319] text-sm font-medium rounded-full transition-all border border-black/10 inline-flex items-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#0F63BD]" />
              <span>(888) 801-7476</span>
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-[#0F1319]/70 pt-4 border-t border-[#0F1319]/15">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0F63BD]" />
              Real-time flight radar tracking
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0F63BD]" />
              All-inclusive fixed quotes
            </span>
          </div>
        </div>

        {/* Right Column: Custom MZS Executive Smartphone App Mockup */}
        <div
          ref={cardColRef}
          className="w-full lg:w-[50%] flex justify-center lg:justify-end will-change-transform"
        >
          {/* Smartphone Frame */}
          <div className="relative w-full max-w-[380px] bg-[#0A0D12] rounded-[48px] p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border-[4px] border-white/30 text-white select-none">
            {/* Dynamic Island / Speaker Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1A1E26]" />
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Phone Screen */}
            <div className="relative rounded-[38px] bg-[#0F1319] overflow-hidden pt-8 pb-5 px-4 flex flex-col border border-white/10">
              {/* App Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/10 pt-2">
                <MZSLogo color="white" className="h-6" showSubtitle={true} />
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Dispatch
                </span>
              </div>

              {/* Active Journey Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Active Reservation</span>
                  <span className="text-xs font-mono text-[#aecff3] font-semibold">MZS-801-7476</span>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#0F63BD] mt-1 shrink-0" />
                    <div>
                      <div className="text-[10px] text-gray-400">Pickup</div>
                      <div className="text-xs font-medium text-white truncate">JFK Intl Airport &bull; Terminal 4 Arrivals</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-white mt-1 shrink-0" />
                    <div>
                      <div className="text-[10px] text-gray-400">Destination</div>
                      <div className="text-xs font-medium text-white truncate">The Plaza Hotel &bull; 5th Ave, New York</div>
                    </div>
                  </div>
                </div>

                {/* Radar Status Bar */}
                <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/5 text-[11px]">
                  <span className="flex items-center gap-1 text-gray-300">
                    <Plane className="w-3 h-3 text-[#0F63BD]" />
                    Flight DL 412
                  </span>
                  <span className="text-emerald-400 font-medium">Radar Tracked &bull; On Time</span>
                </div>
              </div>

              {/* Chauffeur & Vehicle Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 mb-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0F63BD] to-[#3a8ef6] flex items-center justify-center font-bold text-sm text-white shrink-0">
                  MS
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-white truncate">Michael S.</span>
                    <span className="flex items-center text-[10px] text-amber-400">
                      <Star className="w-2.5 h-2.5 fill-current" /> 4.98
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-400 truncate">MZS Certified Executive Chauffeur</div>
                  <div className="text-[10px] text-[#aecff3] font-mono mt-0.5">Mercedes-Benz S-Class &bull; MZS-7476</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0F63BD] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Phone className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Service Guarantee Banner */}
              <div className="p-2.5 rounded-xl bg-[#0F63BD]/15 border border-[#0F63BD]/30 flex items-center justify-between text-[10px] text-gray-300">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0F63BD]" />
                  60 Min Free Airport Wait Time
                </span>
                <span className="text-white font-semibold">Transparent Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
