import React from 'react';
import { PageRoute } from '../types';
import { Globe, Users, ShieldCheck, Leaf, Award, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FAF8F5] text-[#0F1319]">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0F1319] text-white overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 contrast-105 pointer-events-none"
          style={{
            backgroundImage:
              'url(https://images.ctfassets.net/ov8o7v78mnye/7LU2kDVHQF4FxN1FDMQXSV/cc7f1d8d198feda7ed6e45e02c8e3024/01_Hero__3_.jpg?fm=webp&w=2560&q=85)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/90 via-[#0F1319]/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 border border-white/15">
            <Award className="w-4 h-4 text-[#0066FF]" />
            Our Heritage & Global Vision
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            About MZS
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Changing the travel game since 2011. Creating peace of mind for travelers across 500+ cities and 60+ countries worldwide.
          </p>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-serif font-normal text-[#0066FF] mb-1">500+</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Cities Worldwide</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-serif font-normal text-[#0066FF] mb-1">60+</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Countries Covered</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-serif font-normal text-[#0066FF] mb-1">100%</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Carbon Neutral Since 2017</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-serif font-normal text-[#0066FF] mb-1">4.9 / 5</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Guest Review Average</div>
          </div>
        </div>
      </section>

      {/* Story 1: Changing the travel game */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-3 block">
              The Genesis
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-6 leading-tight">
              Changing the travel game
            </h2>
            <p className="text-base sm:text-lg text-[#596372] leading-relaxed mb-6 font-light">
              MZS began in 2011 when frequent international travelers set out to make professional car service as predictable, seamless, and transparent as booking a flight or a premier hotel room.
            </p>
            <p className="text-sm sm:text-base text-[#596372] leading-relaxed mb-6">
              Today, MZS connects guests to licensed, vetted local chauffeurs in 60 countries and over 500 cities worldwide. We bring together top-tier independent operators under one uncompromising standard so travelers can book with total confidence wherever they land.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.ctfassets.net/ov8o7v78mnye/6lM08uJMKQGXnI6ZO1zk9P/72203226d1fdd077ae090125ca600a10/01_Innovation.jpg?fm=webp&w=1280&q=85"
              alt="MZS travel innovation history"
              className="w-full h-auto object-cover rounded-3xl aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Story 2: How MZS works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.ctfassets.net/ov8o7v78mnye/6YwP3bFqKz6Fq6Q37K0tF9/e8e6e5a0e91a0c4f34cf33a598285598/02_How_it_works.jpg?fm=webp&w=1280&q=85"
              alt="MZS booking and operations technology"
              className="w-full h-auto object-cover rounded-3xl aspect-[4/3]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-3 block">
              Global Platform
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-6 leading-tight">
              How MZS works
            </h2>
            <p className="text-base sm:text-lg text-[#596372] leading-relaxed mb-6 font-light">
              We partner with independent local chauffeur companies around the globe, empowering travelers to reserve fixed-rate, high-end journeys through our intuitive website and mobile application.
            </p>
            <p className="text-sm sm:text-base text-[#596372] leading-relaxed mb-8">
              By combining cutting-edge dispatch technology, automated flight tracking, and strict vehicle inspections, we ensure your chauffeur is waiting for you with a personalized welcome, no matter where your journey begins.
            </p>
            <button
              onClick={() => onNavigate('sustainability')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F1319] text-white hover:bg-black font-medium text-sm transition-all"
            >
              Learn about our Green Initiatives <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-gray-200">
        <blockquote className="text-2xl sm:text-4xl font-serif text-[#0F1319] leading-snug mb-8 max-w-3xl mx-auto">
          &ldquo;Wherever you are around the world, it&apos;s this special feeling of being taken care of.&rdquo;
        </blockquote>
        <div className="text-sm font-semibold text-[#0F1319] uppercase tracking-wider">
          MZS Executive Leadership
        </div>
      </section>
    </div>
  );
};
