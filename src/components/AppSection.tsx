import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  RotateCw,
  Plus,
  Users,
  Briefcase,
  ChevronLeft,
  Check,
  CreditCard,
  Menu,
  Sparkles,
} from 'lucide-react';
import { MZSLogo } from './MZSLogo';

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
      className="relative z-10 bg-[#aecff3] text-[#0F1319] py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-12 overflow-hidden select-none"
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
          <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-['PP_Fragment',serif] font-normal text-[#0F1319] tracking-tight leading-[1.08] mb-5">
            We move with you.
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

        {/* Right Column: Exact Blacklane-style Desktop Browser + Overlapping iPhone Mockup */}
        <div
          ref={mockupColRef}
          className="w-full lg:w-[58%] flex justify-center lg:justify-end will-change-transform relative"
        >
          {/* Main Visual Container */}
          <div className="relative w-full max-w-[760px]">
            {/* 1. Desktop Browser Window */}
            <div className="w-full bg-[#FAF8F5] rounded-2xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.35)] border border-black/10 overflow-hidden text-[#0F1319]">
              {/* Browser Chrome Header */}
              <div className="bg-[#EBE7DF] px-4 py-2.5 border-b border-black/10 flex items-center justify-between gap-3">
                {/* 3 macOS Window Dots */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10" />
                </div>

                {/* Browser URL Search Bar */}
                <div className="flex-1 max-w-[360px] mx-auto bg-white/80 rounded-lg px-3 py-1 flex items-center justify-center gap-1.5 text-xs text-gray-700 border border-black/10 shadow-inner">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="font-mono text-[11px] tracking-tight">mzexecutivechauffeurs.com</span>
                  <RotateCw className="w-3 h-3 text-gray-400 ml-auto" />
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-2 text-gray-400 text-xs shrink-0">
                  <Plus className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* In-Browser Navbar */}
              <div className="px-6 py-3.5 border-b border-black/5 bg-[#FAF8F5] flex items-center justify-between">
                <MZSLogo color="dark" className="h-5" showSubtitle={false} />

                {/* Route Pill in Browser */}
                <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 shadow-xs text-xs">
                  <span className="font-medium text-gray-900">JFK Intl Airport (JFK)</span>
                  <ArrowRight className="w-3 h-3 text-gray-400" />
                  <span className="font-medium text-gray-900">The Plaza Hotel, 5th Ave</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500 text-[11px]">Today, 11:40 AM</span>
                </div>

                <div className="w-7 h-7 rounded-full bg-black/5 flex items-center justify-center text-gray-600">
                  <Menu className="w-4 h-4" />
                </div>
              </div>

              {/* In-Browser Main Content Grid */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-serif text-[#0F1319] mb-5 tracking-tight">
                  Choose your experience
                </h3>

                <div className="grid grid-cols-12 gap-5 items-start">
                  {/* Vehicle Fleet Cards Area (Cols 1-8) */}
                  <div className="col-span-12 md:col-span-8 grid grid-cols-3 gap-3">
                    {/* Card 1: Business Van / SUV (2026 Escalade) */}
                    <div className="rounded-xl border border-black/10 bg-white p-2.5 flex flex-col justify-between hover:shadow-md transition-shadow">
                      <div className="h-20 sm:h-24 w-full flex items-center justify-center bg-gray-50 rounded-lg p-1 overflow-hidden mb-2">
                        <img
                          src="/assets/vehicles/business-van.jpg"
                          alt="2026 Cadillac Escalade"
                          className="max-h-full w-auto object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-serif font-semibold text-[#0F1319] truncate">Business SUV</div>
                        <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-1">
                          <span className="flex items-center gap-0.5"><Users className="w-2.5 h-2.5" /> 5</span>
                          <span className="flex items-center gap-0.5"><Briefcase className="w-2.5 h-2.5" /> 5</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: First Class (2026 S-Class) - SELECTED */}
                    <div className="rounded-xl border-2 border-[#0F63BD] bg-white p-2.5 flex flex-col justify-between shadow-md relative ring-2 ring-[#0F63BD]/20">
                      <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#0F63BD] text-white flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <div className="h-20 sm:h-24 w-full flex items-center justify-center bg-sky-50/50 rounded-lg p-1 overflow-hidden mb-2">
                        <img
                          src="/assets/vehicles/first-class.jpg"
                          alt="2026 Mercedes S-Class"
                          className="max-h-full w-auto object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-serif font-bold text-[#0F63BD] truncate">First Class</div>
                        <div className="flex items-center gap-2 text-[10px] text-gray-600 mt-1 font-medium">
                          <span className="flex items-center gap-0.5"><Users className="w-2.5 h-2.5" /> 3</span>
                          <span className="flex items-center gap-0.5"><Briefcase className="w-2.5 h-2.5" /> 2</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Business Class (2026 E-Class) */}
                    <div className="rounded-xl border border-black/10 bg-white p-2.5 flex flex-col justify-between hover:shadow-md transition-shadow">
                      <div className="h-20 sm:h-24 w-full flex items-center justify-center bg-gray-50 rounded-lg p-1 overflow-hidden mb-2">
                        <img
                          src="/assets/vehicles/business-class.jpg"
                          alt="2026 Mercedes E-Class"
                          className="max-h-full w-auto object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-serif font-semibold text-[#0F1319] truncate">Business Class</div>
                        <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-1">
                          <span className="flex items-center gap-0.5"><Users className="w-2.5 h-2.5" /> 3</span>
                          <span className="flex items-center gap-0.5"><Briefcase className="w-2.5 h-2.5" /> 2</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Google Maps & Booking Sidebar (Cols 9-12) */}
                  <div className="hidden md:flex col-span-4 flex-col gap-3">
                    {/* Google Maps Route Box */}
                    <div className="relative h-28 rounded-xl overflow-hidden border border-black/10 bg-slate-100 flex flex-col justify-between p-2.5 shadow-inner">
                      {/* Stylized Vector Map Background */}
                      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 200 120" fill="none">
                        <path d="M-10 40 Q40 30 70 60 T140 40 T210 70" stroke="#CBD5E1" strokeWidth="6" />
                        <path d="M30 -10 Q50 60 90 80 T180 130" stroke="#CBD5E1" strokeWidth="8" />
                        <path d="M-10 90 Q60 80 110 50 T210 20" stroke="#94A3B8" strokeWidth="4" />
                        {/* Dynamic Blue Route Polyline */}
                        <path d="M35 85 Q75 55 110 50 T165 30" stroke="#0066FF" strokeWidth="3.5" strokeDasharray="3 3" />
                      </svg>

                      {/* Map Pins */}
                      <div className="relative z-10 flex items-center justify-between text-[10px]">
                        <span className="px-1.5 py-0.5 rounded bg-white font-medium text-gray-800 shadow-xs border border-gray-200">
                          JFK Airport
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-[#0F1319] font-medium text-white shadow-xs">
                          5th Ave
                        </span>
                      </div>

                      <div className="relative z-10 flex items-center justify-between text-[9px] text-gray-500">
                        <span className="font-semibold text-gray-600">Google Maps</span>
                        <span className="text-[#0066FF] font-medium">18.5 mi &bull; 32 min</span>
                      </div>
                    </div>

                    {/* Checkout Card Box */}
                    <div className="p-3 rounded-xl bg-white border border-black/10 shadow-xs">
                      <div className="text-xs font-serif font-bold text-[#0F1319] mb-0.5">First Class</div>
                      <div className="text-[10px] text-gray-500 mb-2">2026 Mercedes-Benz S-Class</div>

                      {/* Radio Selection */}
                      <div className="p-1.5 rounded-lg border border-[#0F63BD] bg-sky-50/50 flex items-center gap-2 mb-2 text-[10px]">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0F63BD]" />
                        <span className="font-medium text-gray-800">Book for myself</span>
                      </div>

                      <button
                        onClick={scrollToBooking}
                        className="w-full py-2 rounded-lg bg-[#0F63BD] hover:bg-[#0D529C] text-white text-[11px] font-semibold transition-colors shadow-sm cursor-pointer"
                      >
                        Reserve First Class
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Overlapping Modern Smartphone Mockup in Foreground (Blacklane 1:1 Layout) */}
            <div className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-6 w-[220px] sm:w-[270px] bg-black rounded-[42px] p-2.5 sm:p-3 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] border-[3.5px] border-slate-300 z-30 select-none">
              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 bg-black rounded-full z-40 flex items-center justify-between px-2.5">
                <div className="w-2 h-2 rounded-full bg-[#18181B]" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>

              {/* iPhone Screen Container */}
              <div className="relative rounded-[32px] bg-white text-[#0F1319] overflow-hidden pt-6 pb-3 px-3 flex flex-col border border-gray-200">
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                  <div className="flex items-center gap-1 text-[11px] font-medium text-gray-700">
                    <ChevronLeft className="w-3.5 h-3.5 text-gray-500" />
                    <span>Confirm reservation</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400">9:41</span>
                </div>

                {/* Mobile Map View Graphic */}
                <div className="relative h-24 rounded-xl overflow-hidden bg-slate-100 border border-gray-200 mb-2.5">
                  <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 150 90" fill="none">
                    <path d="M-10 20 Q40 50 80 40 T160 60" stroke="#CBD5E1" strokeWidth="6" />
                    <path d="M20 -10 Q50 60 70 80 T140 100" stroke="#CBD5E1" strokeWidth="8" />
                    <path d="M20 70 Q50 45 90 40 T135 25" stroke="#0066FF" strokeWidth="3" />
                  </svg>
                  <div className="absolute bottom-1 left-2 text-[8px] font-semibold text-gray-500">Google Maps</div>
                  <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black text-white text-[8px] font-semibold">
                    35 min
                  </div>
                </div>

                {/* Mobile Route Stop Card */}
                <div className="p-2 rounded-lg bg-gray-50 border border-gray-100 mb-2 text-[10px]">
                  <div className="flex items-center justify-between text-gray-500 text-[9px] mb-1">
                    <span>JFK Airport</span>
                    <span>&bull; &bull; &bull;</span>
                    <span>The Plaza Hotel</span>
                  </div>
                  <div className="flex items-center justify-between font-semibold text-gray-900">
                    <span>11:40 AM</span>
                    <span className="text-[#0066FF] font-medium">Flight Tracked</span>
                    <span>12:15 PM</span>
                  </div>
                </div>

                {/* Mobile Selected Class & Payment */}
                <div className="flex items-center justify-between py-1 mb-2 text-[10px]">
                  <div>
                    <div className="font-serif font-bold text-gray-900">First Class</div>
                    <div className="text-[8px] text-gray-500">Mercedes-Benz S-Class</div>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-mono text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                    <CreditCard className="w-2.5 h-2.5" />
                    <span>&bull;&bull;&bull;&bull; 4242</span>
                  </div>
                </div>

                {/* Mobile Action Button */}
                <button
                  onClick={scrollToBooking}
                  className="w-full py-2 rounded-xl bg-[#0F63BD] text-white text-[11px] font-semibold shadow-md flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Book now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
