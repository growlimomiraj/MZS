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
      // 1. Left column scrub in
      if (textColRef.current) {
        gsap.from(textColRef.current, {
          x: -60,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 40%',
            scrub: 1.5,
          },
        });
      }

      // 2. Right phone mockup scrub in
      if (imgColRef.current) {
        gsap.from(imgColRef.current, {
          y: 90,
          opacity: 0,
          scale: 0.94,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 35%',
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#eaf2fb] text-[#0F1319] py-20 sm:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* Left Column: Text & Badges */}
        <div ref={textColRef} className="flex flex-col justify-center max-w-xl will-change-transform">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-['PP_Fragment',serif] font-normal text-[#0F1319] tracking-tight leading-[1.1] mb-5">
            We move with you.
          </h2>
          <p className="text-base sm:text-xl text-gray-700 leading-relaxed mb-8 font-normal">
            Have all your journeys in the palm of your hand with the Blacklane app.
          </p>

          <div className="flex flex-wrap items-center gap-4">
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

        {/* Right Column: Phone Mockup */}
        <div ref={imgColRef} className="flex justify-center lg:justify-end will-change-transform">
          <div className="relative max-w-md w-full">
            <img
              src="https://static.blacklane.com/assets/_next/static/media/img.fc9e3e8ded216699.webp"
              alt="Blacklane mobile application"
              loading="lazy"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
