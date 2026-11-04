import React, { useState } from 'react';
import { X, ShieldCheck, Check } from 'lucide-react';

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookieModal: React.FC<CookieModalProps> = ({ isOpen, onClose }) => {
  const [functional, setFunctional] = useState(true);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1000);
  };

  const handleAcceptAll = () => {
    setFunctional(true);
    setAnalytics(true);
    setMarketing(true);
    handleSave();
  };

  const handleRejectAll = () => {
    setFunctional(false);
    setAnalytics(false);
    setMarketing(false);
    handleSave();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0F1319] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="w-6 h-6 text-[#0F63BD]" />
          <h3 className="text-2xl font-serif">Privacy & Cookie Preferences</h3>
        </div>

        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          We use cookies and similar technologies to remember your preferences, provide security, analyze website traffic, and offer personalized advertisements. You can customize your preferences below.
        </p>

        {saved ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-medium text-white">Preferences Saved</h4>
          </div>
        ) : (
          <div className="space-y-4 mb-8">
            {/* Essential */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-white">Strictly Necessary Cookies</h4>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/10 text-gray-300">
                    Always Active
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Required for basic site navigation, booking functions, and secure authentication.
                </p>
              </div>
              <div className="w-10 h-6 bg-[#0F63BD] rounded-full opacity-60 cursor-not-allowed shrink-0" />
            </div>

            {/* Functional */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start justify-between gap-4">
              <div>
                <h4 className="text-sm font-semibold text-white">Functional Cookies</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Enables helpful features like saved pickup points, language selection, and currency.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setFunctional(!functional)}
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                  functional ? 'bg-[#0F63BD]' : 'bg-white/20'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                    functional ? 'left-6' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Analytics */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start justify-between gap-4">
              <div>
                <h4 className="text-sm font-semibold text-white">Analytics & Performance Cookies</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Allows us to measure website traffic and improve vehicle booking response times.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setAnalytics(!analytics)}
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                  analytics ? 'bg-[#0F63BD]' : 'bg-white/20'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                    analytics ? 'left-6' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Marketing */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start justify-between gap-4">
              <div>
                <h4 className="text-sm font-semibold text-white">Marketing & Personalization</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Used to tailor offers and exclusive partner benefits based on your journeys.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMarketing(!marketing)}
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                  marketing ? 'bg-[#0F63BD]' : 'bg-white/20'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                    marketing ? 'left-6' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={handleRejectAll}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-white/20 text-xs font-medium text-gray-300 hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            Reject non-essential
          </button>
          <button
            onClick={handleSave}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-white/40 text-xs font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            Save preferences
          </button>
          <button
            onClick={handleAcceptAll}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0F63BD] hover:bg-[#0D529C] text-xs font-semibold text-white shadow-md transition-colors cursor-pointer"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};
