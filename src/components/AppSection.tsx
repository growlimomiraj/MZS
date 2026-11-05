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

        {/* Right Column: Platform Web & Phone Mockup */}
        <div
          ref={cardColRef}
          className="w-full lg:w-[58%] flex justify-center lg:justify-end will-change-transform"
        >
          <div className="relative w-full max-w-[680px]">
            <img
              src="/assets/app/app-mockup.webp"
              alt="MZS Executive Chauffeurs reservation platform"
              loading="lazy"
              className="w-full h-auto drop-shadow-2xl pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
