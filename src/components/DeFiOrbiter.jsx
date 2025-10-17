import React from 'react';
import { ProIcon, StudioIcon, LendIcon, UltraIcon, DripIcon, PortfolioIcon, PerpsIcon, StakeIcon } from './icon';
import logo from "../assets/logo.png";

const features = [
  { name: 'Pro', icon: ProIcon, position: 'top-[8%] left-[-5%]', textColor: 'text-[#C5F313]', iconColor: '#C5F313' },
  { name: 'Studio', icon: StudioIcon, position: 'top-[38%] left-[-22%]', textColor: 'text-white', iconColor: 'white' },
  { name: 'Lend', icon: LendIcon, position: 'top-[68%] left-[-8%]', textColor: 'text-[#6895FF]', iconColor: '#6895FF' },
  { name: 'Ultra', icon: UltraIcon, position: 'top-[20%] left-[35%]', textColor: 'text-white', iconColor: '#4DFFBF' },
  { name: 'DRIP', icon: DripIcon, position: 'top-[4%] right-[8%]', textColor: 'text-white', iconColor: '#A9B3C2' },
  { name: 'Portfolio', icon: PortfolioIcon, position: 'top-[38%] right-[-22%]', textColor: 'text-[#4DFFBF]', iconColor: '#4DFFBF' },
  { name: 'Perps', icon: PerpsIcon, position: 'top-[68%] right-[-8%]', textColor: 'text-[#C5F313]', iconColor: '#C5F313' },
  { name: 'Stake', icon: StakeIcon, position: 'top-[88%] left-[28%]', textColor: 'text-white', iconColor: '#C5F313' },
];

const FeaturePill = ({ name, icon: Icon, position, textColor, iconColor, animationDelay }) => (
  <div
    className={`absolute ${position} z-20 animate-fadeIn`}
    style={{
      animationDelay,
      animationFillMode: 'forwards',
    }}
  >
<button className="flex items-center gap-2 px-3 py-1.5 bg-black/30 border-[0.5px] border-white/10 rounded-full backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_5px_15px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-colors">
  <Icon
    className="w-4 h-4 shrink-0"
    style={{
      color: iconColor,
      fill: iconColor,
      stroke: iconColor,
    }}
  />
  <span className={`text-sm font-semibold ${textColor}`}>{name}</span>
</button>

  </div>
);

const DeFiOrbiter = () => {
  return (
    <div className="flex-grow flex items-center justify-center my-8">
      <div className="relative w-64 h-64">
        {/* Background Glowing Shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(77,255,191,0.08)_0%,_rgba(0,0,0,0)_70%)]"></div>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 overflow-visible"
          >
            <circle cx="128" cy="128" r="140" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
            <g transform="translate(128, 128)">
              {[
  { scale: 1.0, opacity: 0.02, stroke: 2 },
  { scale: 0.8, opacity: 0.04, stroke: 1.5 },
  { scale: 0.6, opacity: 0.08, stroke: 1.5 },
].map((shape, i) => {
  const baseSide = 256; // ✅ khớp với viewBox
  const baseRx = 78;     // ✅ nhẹ nhàng hơn, nhìn đều tâm hơn

  const side = baseSide * shape.scale;
  const rx = baseRx * shape.scale;

  return (
    <rect
      key={i}
      x={-side / 2}
      y={-side / 2}
      width={side}
      height={side}
      rx={rx}
      fill="none"
      stroke="white"
      strokeOpacity={shape.opacity}
      strokeWidth={shape.stroke}
    />
  );
})}

            </g>
          </svg>
        </div>

        {/* Central Logo */}
        <div
          className="absolute inset-[28%] z-10 flex items-center justify-center opacity-1 animate-fadeIn"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          {/* <div className="relative w-full h-full rounded-3xl shadow-2xl backdrop-blur-md flex items-center justify-center border border-white/20"> */}
              <img
    src={logo}
    alt="logo"
    className="w-[60px] h-[60px] opacity-95 drop-shadow-[0_0_5px_rgba(0,255,200,0.35)]"
  />
          {/* </div> */}
        </div>

        {/* Feature Pills */}
        <svg className="absolute w-0 h-0">
          <defs>
            <linearGradient id="stakeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4DFFBF" />
              <stop offset="100%" stopColor="#6895FF" />
            </linearGradient>
          </defs>
        </svg>
        {features.map((feature, index) => (
          <FeaturePill
            key={feature.name}
            {...feature}
            animationDelay={`${200 + index * 100}ms`}
          />
        ))}
      </div>
    </div>
  );
};

export default DeFiOrbiter;
