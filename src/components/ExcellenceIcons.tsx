import React from 'react';

// Available Worldwide: Blue avatar behind frosted glass speech bubble with heart & "1"
export const WorldwideIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="220"
    height="130"
    fill="none"
    viewBox="0 0 292 200"
    className={className}
  >
    {/* Background Blue Avatar Profile */}
    <path
      fill="#0F63BD"
      d="M136.326 141.162c0-34.681 28.114-62.795 62.795-62.795h29.513c34.68 0 62.794 28.114 62.794 62.795 0 10.404-8.434 18.838-18.838 18.838H155.164c-10.404 0-18.838-8.434-18.838-18.838M246.531 32.653c0 18.034-14.62 32.653-32.653 32.653s-32.653-14.62-32.653-32.653S195.844 0 213.878 0s32.653 14.62 32.653 32.653"
    />
    {/* Frosted Glass Speech Bubble */}
    <g filter="drop-shadow(0 8px 16px rgba(0,0,0,0.08))">
      <path
        fill="#FFFFFF"
        fillOpacity="0.45"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeOpacity="0.8"
        d="M204.082 71.735c0-19.33-15.67-35-35-35H35c-19.33 0-35 15.67-35 35v66.687c0 19.33 15.67 35 35 35h26.243a35 35 0 0 1 24.962 10.466l8.704 8.856c3.919 3.987 10.345 3.987 14.264 0l8.704-8.856a35 35 0 0 1 24.961-10.466h26.244c19.33 0 35-15.67 35-35z"
      />
      {/* Heart Icon */}
      <path
        fill="#FFFFFF"
        d="M85.95 93.674c0 8.453-6.815 15.306-15.22 15.306s-15.22-6.853-15.22-15.306c0-8.454 6.814-15.307 15.22-15.307 8.405 0 15.22 6.853 15.22 15.307"
      />
      <path
        fill="#FFFFFF"
        d="M110.3 93.674c0 8.453-6.814 15.306-15.22 15.306-8.405 0-15.219-6.853-15.219-15.306 0-8.454 6.814-15.307 15.22-15.307 8.405 0 15.219 6.853 15.219 15.307"
      />
      <path fill="#FFFFFF" d="M82.905 127.347 59.18 103.623h47.45z" />
      {/* Number "1" */}
      <path
        fill="#FFFFFF"
        d="M147.756 78.367v48.98h-5.86V84.586h-.284l-11.815 7.94v-6.027l12.099-8.132z"
      />
    </g>
  </svg>
);

// High-End Vehicles: Blue sun behind frosted glass cloud
export const HighEndVehiclesIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="220"
    height="130"
    fill="none"
    viewBox="0 0 271 182"
    className={className}
  >
    {/* Blue Sun behind */}
    <path
      fill="#0F63BD"
      d="M271 64.5c0 35.622-28.878 64.5-64.5 64.5S142 100.122 142 64.5 170.878 0 206.5 0 271 28.878 271 64.5"
    />
    {/* Frosted Glass Cloud in Front */}
    <g filter="drop-shadow(0 8px 16px rgba(0,0,0,0.08))">
      <path
        fill="#FFFFFF"
        fillOpacity="0.5"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeOpacity="0.8"
        d="M224 181.997c26.003-.268 47-21.43 47-47.497 0-26.234-21.266-47.5-47.5-47.5q-2.449 0-4.833.243C212.724 69.659 196.09 57 176.5 57c-4.99 0-9.788.821-14.267 2.336C157.875 33.6 135.477 14 108.5 14 78.4 14 54 38.4 54 68.5q.001 2.787.274 5.5H54C24.177 74 0 98.177 0 128s24.177 54 54 54h170z"
      />
    </g>
  </svg>
);

// Safe Travels: Blue shackle with frosted glass lock body & white keyhole
export const SafeTravelsIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="173"
    height="140"
    fill="none"
    viewBox="0 0 173 215"
    className={className}
  >
    {/* Blue Lock Shackle */}
    <path
      fill="#0F63BD"
      d="M48.572 103.025a6.428 6.428 0 1 1-12.855 0V55.888a50.889 50.889 0 0 1 86.87-35.984 50.9 50.9 0 0 1 14.904 35.983l-.001.001v47.137a6.428 6.428 0 0 1-12.855 0V55.889l.001-.001.002-.002a38.04 38.04 0 0 0-38.033-38.031 38.033 38.033 0 0 0-38.033 38.033z"
    />
    {/* Frosted Glass Lock Body */}
    <g filter="drop-shadow(0 8px 16px rgba(0,0,0,0.08))">
      <rect
        x="18"
        y="90"
        width="137"
        height="115"
        rx="24"
        fill="#FFFFFF"
        fillOpacity="0.5"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeOpacity="0.8"
      />
      {/* White Keyhole Dot */}
      <circle cx="86.5" cy="142" r="9" fill="#FFFFFF" />
      <path
        d="M86.5 145v18"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

