import React from 'react';

interface LogoProps {
  color?: 'white' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const BlacklaneLogo: React.FC<LogoProps> = ({
  color = 'white',
  className = 'h-7 w-auto',
  showSubtitle = true,
}) => {
  const fillColor = color === 'white' ? '#FFFFFF' : '#0F1319';
  const subColor = color === 'white' ? 'rgba(255,255,255,0.85)' : '#4B5563';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div className="flex flex-col justify-center leading-none">
        <span
          style={{ color: fillColor }}
          className="text-2xl sm:text-[26px] font-['PP_Fragment',serif] font-bold tracking-[0.08em] transition-colors leading-none"
        >
          MZS
        </span>
        {showSubtitle && (
          <span
            style={{ color: subColor }}
            className="text-[8px] sm:text-[9px] font-sans font-semibold uppercase tracking-[0.22em] mt-1 whitespace-nowrap transition-colors"
          >
            Executive Chauffeurs
          </span>
        )}
      </div>
    </div>
  );
};
