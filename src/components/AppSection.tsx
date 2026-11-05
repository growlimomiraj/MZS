import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

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
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
        {/* Left Column: Text & Direct CTAs (no external app links) */}
        <div
          ref={textColRef}
          className="w-full lg:w-[48%] flex flex-col justify-center text-center lg:text-left will-change-transform"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0F1319]/70 mb-3 block">
            Executive Reservation Portal
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-['PP_Fragment',serif] font-normal text-[#0F1319] tracking-tight leading-[1.08] mb-5">
            We move with you.
          </h2>
          <p className="text-base sm:text-lg text-[#0F1319]/80 leading-relaxed mb-8 font-normal max-w-md mx-auto lg:mx-0">
            Book online from any phone, tablet, or desktop. Receive real-time FAA flight tracking, automated chauffeur updates, and itemized corporate receipts.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button
              onClick={scrollToBooking}
              className="px-8 py-3.5 bg-[#0F1319] hover:bg-black text-white text-sm font-medium rounded-full transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Reserve a Chauffeur</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+18888017476"
              className="px-6 py-3.5 bg-white/70 hover:bg-white text-[#0F1319] text-sm font-medium rounded-full transition-all border border-black/10 inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0F63BD]" />
              <span>(888) 801-7476</span>
            </a>
          </div>
        </div>

        {/* Right Column: Custom MZS Executive Reservation Card Preview */}
        <div
          ref={cardColRef}
          className="w-full lg:w-[48%] flex justify-center lg:justify-end will-change-transform"
        >
          <div className="w-full max-w-[460px] bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/60 text-[#0F1319]">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block">Upcoming Journey</span>
                <span className="text-lg font-serif font-bold text-[#0F1319]">MZS Executive Chauffeur</span>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-[#0F63BD] mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Pickup Location</div>
                  <div className="text-sm font-medium text-[#0F1319]">JFK International Airport &bull; Terminal 4 Arrivals</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-[#0F1319] mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Drop-off Destination</div>
                  <div className="text-sm font-medium text-[#0F1319]">The Plaza Hotel &bull; Fifth Ave, New York, NY</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 p-4 bg-[#FAF8F5] rounded-2xl border border-gray-100 text-xs mb-5">
              <div>
                <span className="text-gray-500 block">Flight Radar</span>
                <span className="font-semibold text-[#0F1319]">Tracked (On Time)</span>
              </div>
              <div>
                <span className="text-gray-500 block">Wait Time</span>
                <span className="font-semibold text-[#0F1319]">60 Min Included</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0F63BD]" />
                Commercial US Chauffeur
              </span>
              <span className="font-mono text-gray-400">MZS-801-7476</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
