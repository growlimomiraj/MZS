import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const AppSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const mockupColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textColRef.current && mockupColRef.current && sectionRef.current) {
        const enterTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1.2,
          },
        });

        enterTl.from(
          textColRef.current,
          {
            x: -80,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            clearProps: 'all',
          },
          0
        );

        enterTl.from(
          mockupColRef.current,
          {
            x: 80,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            clearProps: 'all',
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
      className="relative z-10 bg-[#add0f1] text-[#0F1319] py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-12 overflow-hidden select-none"
    >
      <div className="w-full max-w-[1360px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
        {/* Left Column: Editorial Headline & Actions */}
        <div
          ref={textColRef}
          className="w-full lg:w-[42%] flex flex-col justify-center text-center lg:text-left will-change-transform z-20"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0F1319]/75 mb-3 block">
            MZS Across All Devices
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-['PP_Fragment',serif] font-normal text-[#0F1319] tracking-tight leading-[1.08] mb-5">
            We move<br className="hidden sm:inline" /> with you.
          </h2>
          <p className="text-base sm:text-lg text-[#0F1319]/85 leading-relaxed mb-8 font-normal max-w-md mx-auto lg:mx-0">
            Have all your journeys in the palm of your hand with MZS Executive Chauffeurs. Reserve, track, and manage luxury transportation seamlessly from any phone, tablet, or desktop across the United States.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <button
              onClick={scrollToBooking}
              className="px-8 py-3.5 bg-[#0F1319] hover:bg-black text-white text-sm font-medium rounded-full transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Reserve with MZS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+18888017476"
              className="px-6 py-3.5 bg-white/80 hover:bg-white text-[#0F1319] text-sm font-medium rounded-full transition-all border border-black/10 inline-flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#0F63BD]" />
              <span>(888) 801-7476</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#0F1319]/80 pt-6 border-t border-[#0F1319]/15">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0F63BD]" />
              Real-time flight radar tracking
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#0F63BD]" />
              All-inclusive upfront quotes
            </span>
          </div>
        </div>

        {/* Right Column: AI-recreated Desktop Browser & Mobile Mockup with MZS branding */}
        <div
          ref={mockupColRef}
          className="w-full lg:w-[58%] flex justify-center lg:justify-end will-change-transform"
        >
          <div className="relative w-full max-w-[760px] flex items-center justify-center">
            <img
              src="/assets/app/app-mockup.webp"
              alt="MZS Executive Chauffeurs reservation platform on desktop and mobile"
              loading="lazy"
              className="w-full h-auto drop-shadow-2xl select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
