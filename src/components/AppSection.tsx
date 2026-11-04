import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AppSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imgColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance animation: Text from left (-160px) and Image from right (+160px) come closer to middle on scroll
      if (textColRef.current && imgColRef.current && sectionRef.current) {
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
            x: -160,
            opacity: 0,
            duration: 1.2,
            ease: 'power1.out',
          },
          0
        );

        enterTl.from(
          imgColRef.current,
          {
            x: 160,
            opacity: 0,
            duration: 1.2,
            ease: 'power1.out',
          },
          0
        );

        // 2. Exit scrub animation: Text and image slide away as user scrolls past
        const exitTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'bottom 65%',
            end: 'bottom 20%',
            scrub: 1.5,
          },
        });

        exitTl.to(
          textColRef.current,
          {
            x: -160,
            opacity: 0,
            duration: 1,
            ease: 'power1.in',
          },
          0
        );

        exitTl.to(
          imgColRef.current,
          {
            x: 160,
            opacity: 0,
            duration: 1,
            ease: 'power1.in',
          },
          0
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#aecff3] text-[#0F1319] py-20 sm:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
        {/* Left Column: Text & Badges (approx 35% width matching Blacklane) */}
        <div
          ref={textColRef}
          className="w-full lg:w-[38%] flex flex-col justify-center text-center lg:text-left will-change-transform"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-['PP_Fragment',serif] font-normal text-[#0F1319] tracking-tight leading-[1.08] mb-5">
            We move with you.
          </h2>
          <p className="text-base sm:text-xl text-[#0F1319]/80 leading-relaxed mb-8 font-normal max-w-md mx-auto lg:mx-0">
            Have all your journeys in the palm of your hand with the MZS app.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="https://blacklane.onelink.me/FzXX/iOSAppDownload"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the iOS App Store"
              className="hover:scale-105 transition-transform"
            >
              <img
                src="https://static.blacklane.com/assets/_next/static/media/app-store-logo-dark.5dc6643c29136385.svg"
                alt="Download on the App Store"
                width={140}
                height={42}
                className="h-10 sm:h-11 w-auto"
              />
            </a>
            <a
              href="https://blacklane.onelink.me/Jxjh/androidAppDownload"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              className="hover:scale-105 transition-transform"
            >
              <img
                src="https://static.blacklane.com/assets/_next/static/media/playstore-logo-dark.083f89dd5c62e18d.svg"
                alt="Get it on Google Play"
                width={140}
                height={42}
                className="h-10 sm:h-11 w-auto"
              />
            </a>
          </div>
        </div>

        {/* Right Column: Platform Web & Phone Mockup (approx 62% width matching Blacklane) */}
        <div
          ref={imgColRef}
          className="w-full lg:w-[62%] flex justify-center lg:justify-end will-change-transform"
        >
          <div className="relative w-full max-w-[700px]">
            <img
              src="https://static.blacklane.com/assets/_next/static/media/img.fc9e3e8ded216699.webp"
              alt="MZS mobile and desktop platform"
              loading="lazy"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
