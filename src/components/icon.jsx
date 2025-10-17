import React from 'react';

export const ProIcon = ({ color = '#C5F313', className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.66602 4.66699V11.3337" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.66602 4.66699V11.3337" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.66602 8H10.666" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StudioIcon = ({ color = 'white', className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="5" stroke={color} strokeWidth="1.5"/>
    <path d="M8 1V3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 13V15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M15 8L13 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 8L1 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const LendIcon = ({ color = '#6895FF', className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3.33301H12.6667V5.99967" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.33398 12.667H6.00065V10.0003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.666 10L10 12.666" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.33398 6.00033L6.00065 3.33366" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const UltraIcon = ({ color = '#4DFFBF', className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6" fill={color}/>
    <path d="M6 8L7.33333 9.33333L10 6.66667" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DripIcon = ({ color = '#A9B3C2', className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 13.5C10.7614 13.5 13 10.1506 13 7.66667C13 5.18274 8 1.5 8 1.5C8 1.5 3 5.18274 3 7.66667C3 10.1506 5.23858 13.5 8 13.5Z" fill={color}/>
  </svg>
);

export const PortfolioIcon = ({ color = '#4DFFBF', className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="12" height="9" rx="2" stroke={color} strokeWidth="1.5"/>
    <path d="M6 4V2.5C6 1.94772 6.44772 1.5 7 1.5H9C9.55228 1.5 10 1.94772 10 2.5V4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const PerpsIcon = ({ color = '#C5F313', className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33398 12.667L12.6673 3.33366" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.6673 10.667V3.33366H5.33398" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="3.5" cy="3.5" r="1.5" fill={color}/>
    <circle cx="12.5" cy="12.5" r="1.5" fill={color}/>
  </svg>
);

export const StakeIcon = ({ color = 'url(#stakeGradient)', className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6" fill={color} />
  </svg>
);

// --- Status Bar Icons ---
export const SignalIcon = ({ color = 'white', className = 'w-4 h-4'}) => (
  <svg className={className} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="7" width="2" height="5" rx="1" fill={color} opacity="0.3"/>
    <rect x="4.5" y="5" width="2" height="7" rx="1" fill={color} />
    <rect x="8.5" y="2" width="2" height="10" rx="1" fill={color}/>
    <rect x="12.5" y="0" width="2" height="12" rx="1" fill={color}/>
  </svg>
);

export const WifiIcon = ({ color = 'white', className = 'w-4 h-4'}) => (
  <svg className={className} viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.33464 4.8854C4.69464 1.94607 11.9746 1.94607 15.3346 4.8854" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M4.66536 7.82843C6.87536 6.07843 9.79536 6.07843 12.0054 7.82843" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8.33464" cy="10.8284" r="1.5" fill={color}/>
  </svg>
);

export const BatteryIcon = ({ color = 'white', className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 6C1 5.44772 1.44772 5 2 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H2C1.44772 19 1 18.5523 1 18V6Z" stroke={color} strokeOpacity="0.5" strokeWidth="1.5"/>
    <path d="M21 9V15" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="3" y="7" width="3" height="10" rx="1" fill={color} />
  </svg>
);
