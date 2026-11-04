import React from 'react';

interface LogoProps {
  color?: 'white' | 'dark';
  className?: string;
}

export const BlacklaneLogo: React.FC<LogoProps> = ({ color = 'white', className = 'h-7 w-auto' }) => {
  const fillColor = color === 'white' ? '#FFFFFF' : '#0F1319';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <span
        style={{ color: fillColor }}
        className="text-2xl sm:text-[28px] font-['PP_Fragment',serif] font-bold tracking-[0.08em] transition-colors"
      >
        MZS
      </span>
    </div>
  );
};
