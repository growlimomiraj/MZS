import React from 'react';
import { PageRoute } from '../types';
import { Globe, Users, ShieldCheck, Leaf, Award, ArrowRight, Phone, Mail } from 'lucide-react';

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
              'url(https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1319]/90 via-[#0F1319]/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 border border-white/15">
            <Award className="w-4 h-4 text-[#0066FF]" />
            Our Heritage & Mission
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 leading-[1.08] tracking-tight">
            About MZS Executive Chauffeurs
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Delivering peerless chauffeured ground transportation, punctuality, and discreet hospitality across major metropolitan markets and airports in the United States.
          </p>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-serif font-normal text-[#0066FF] mb-1">Top 50</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">US Metro Hubs Served</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-serif font-normal text-[#0066FF] mb-1">100%</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">US Commercial & FBO Airports</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-serif font-normal text-[#0066FF] mb-1">100%</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Carbon Neutral Since 2017</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-serif font-normal text-[#0066FF] mb-1">4.9 / 5</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Executive Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Story 1: Redefining American Chauffeur Travel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-3 block">
              The Standard
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-6 leading-tight">
              Redefining executive travel in the USA
            </h2>
            <p className="text-base sm:text-lg text-[#596372] leading-relaxed mb-6 font-light">
              MZS Executive Chauffeurs was established to make private ground travel as predictable, dignified, and luxurious as flying private or staying at a 5-star hotel.
            </p>
            <p className="text-sm sm:text-base text-[#596372] leading-relaxed mb-6">
              Today, MZS Executive Chauffeurs connects business leaders, celebrities, and discerning travelers to commercially licensed, background-checked chauffeurs across the United States. We unite top-tier operators under one uncompromising standard so you can travel with complete certainty.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
              alt="MZS Executive Chauffeurs travel innovation"
              className="w-full h-auto object-cover rounded-3xl aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Story 2: How MZS Executive Chauffeurs works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="MZS Executive Chauffeurs booking technology"
              className="w-full h-auto object-cover rounded-3xl aspect-[4/3]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-widest text-[#0066FF] uppercase mb-3 block">
              Precision Operations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F1319] mb-6 leading-tight">
              How MZS Executive Chauffeurs works
            </h2>
            <p className="text-base sm:text-lg text-[#596372] leading-relaxed mb-6 font-light">
              We partner with elite, insured chauffeur companies across the nation, empowering executives to reserve guaranteed fixed-rate journeys through our seamless web platform.
            </p>
            <p className="text-sm sm:text-base text-[#596372] leading-relaxed mb-8">
              By combining real-time flight tracking, strict vehicle standards, and 24/7 US dispatch support, we ensure your chauffeur is waiting for you with a personalized welcome, whether in New York, Miami, Chicago, or Los Angeles.
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

      {/* Quote Banner & Direct Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-gray-200">
        <blockquote className="text-2xl sm:text-4xl font-serif text-[#0F1319] leading-snug mb-8 max-w-3xl mx-auto">
          &ldquo;Wherever you travel across the United States, it&apos;s this special feeling of being taken care of.&rdquo;
        </blockquote>
        <div className="text-sm font-semibold text-[#0F1319] uppercase tracking-wider mb-8">
          MZS Executive Chauffeurs Leadership
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+18888017476"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0066FF] text-white hover:bg-[#0052CC] font-medium text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-white" />
            (888) 801-7476
          </a>
          <a
            href="mailto:info@mzexecutivechauffeurs.com"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-300 hover:border-black text-[#0F1319] font-medium text-sm transition-all bg-white"
          >
            <Mail className="w-4 h-4 text-[#0066FF]" />
            info@mzexecutivechauffeurs.com
          </a>
        </div>
      </section>
    </div>
  );
};
