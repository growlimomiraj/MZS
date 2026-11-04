import React from 'react';

export const AppSection: React.FC = () => {
  return (
    <section className="bg-white text-[#0F1319] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* Left Column: Text & Badges */}
        <div className="flex flex-col justify-center max-w-xl">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-normal text-[#0F1319] tracking-tight leading-[1.1] mb-6">
            We move with you.
          </h2>
          <p className="text-lg sm:text-xl text-[#666F7B] leading-relaxed mb-8">
            Have all your journeys in the palm of your hand with the Blacklane app.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://blacklane.onelink.me/FzXX/iOSAppDownload"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the iOS App Store"
              className="hover:opacity-85 transition-opacity"
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
              className="hover:opacity-85 transition-opacity"
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
        <div className="flex justify-center lg:justify-end">
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
