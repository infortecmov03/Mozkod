export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B00" />
          <stop offset="100%" stopColor="#FFD000" />
        </linearGradient>
      </defs>
      
      <circle cx="50" cy="50" r="46" fill="#0D1117" />
      <circle cx="50" cy="50" r="44" fill="none" stroke="url(#bookGrad)" strokeWidth="2"/>
      
      <path 
        d="M30 35 L50 42 L70 35 L70 65 L50 72 L30 65 Z" 
        fill="none" 
        stroke="url(#bookGrad)" 
        strokeWidth="3" 
        strokeLinejoin="round"
      />
      
      <line x1="38" y1="45" x2="55" y2="48" stroke="#FFD000" strokeWidth="2" opacity="0.7"/>
      <line x1="38" y1="52" x2="50" y2="54" stroke="#FFD000" strokeWidth="2" opacity="0.5"/>
      <line x1="38" y1="59" x2="52" y2="60" stroke="#FFD000" strokeWidth="2" opacity="0.3"/>
    </svg>
  );
}
