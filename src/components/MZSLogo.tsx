import React from 'react';

interface LogoProps {
  color?: 'white' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const MZSLogo: React.FC<LogoProps> = ({
  color = 'white',
  className = 'h-9 sm:h-11 w-auto',
}) => {
  const isDarkBg = color === 'white';
  const webpSrc = isDarkBg
    ? '/assets/logo/mzs-logo-transparent.webp'
    : '/assets/logo/mzs-logo-light.webp';
  const pngSrc = isDarkBg
    ? '/assets/logo/mzs-logo-transparent.png'
    : '/assets/logo/mzs-logo-light.png';

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <picture className="h-full w-auto inline-flex items-center">
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={pngSrc}
          alt="MZS Executive Chauffeurs - Your Journey • Our Priority"
          className="h-full w-auto max-h-full object-contain transition-transform duration-200"
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
  );
};
