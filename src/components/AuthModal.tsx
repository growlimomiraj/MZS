import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, Check } from 'lucide-react';
import { MZSLogo } from './MZSLogo';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'signin' | 'register'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0F1319] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo & Heading */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <MZSLogo color="white" className="h-12 sm:h-14 w-auto" />
          </div>
          <h3 className="text-2xl font-serif">
            {tab === 'signin' ? 'Sign in to MZS Executive Chauffeurs' : 'Create your account'}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Access your booked rides, receipts, and personal preferences
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex p-1 bg-white/5 rounded-full mb-6 border border-white/10">
          <button
            onClick={() => setTab('signin')}
            className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              tab === 'signin' ? 'bg-[#0F63BD] text-white shadow-md' : 'text-gray-400 hover:text-white'
            }`}
          >
            Sign in
          </button>
          <button
            onClick={() => setTab('register')}
            className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              tab === 'register' ? 'bg-[#0F63BD] text-white shadow-md' : 'text-gray-400 hover:text-white'
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        {isSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center text-center animate-in zoom-in duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-medium text-white mb-1">
              {tab === 'signin' ? 'Welcome back!' : 'Account created successfully!'}
            </h4>
            <p className="text-xs text-gray-400">Loading your luxury profile...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === 'register' && (
              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <User className="absolute left-3.5 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Lord / Lady / Executive"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0F63BD] transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3.5 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="executive@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0F63BD] transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Password
                </label>
                {tab === 'signin' && (
                  <a href="#reset" className="text-xs text-[#0F63BD] hover:underline">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative flex items-center">
                <Lock className="absolute left-3.5 w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0F63BD] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0F63BD] hover:bg-[#0D529C] text-white font-medium rounded-xl text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer mt-6"
            >
              <span>{tab === 'signin' ? 'Sign in' : 'Create account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

