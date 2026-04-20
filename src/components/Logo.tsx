
import React from 'react';

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={className}>
      <svg width="100%" height="100%" viewBox="0 0 680 420" role="img" xmlns="http://www.w3.org/2000/svg">
        <title>Codeworks Moçambique logo</title>
        <desc>Logo minimalista e vibrante com dispositivos e nome curvado</desc>
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00"/>
            <stop offset="100%" stopColor="#FFD000"/>
            <animateTransform attributeName="gradientTransform" type="rotate" from="0 0.5 0.5" to="360 0.5 0.5" dur="6s" repeatCount="indefinite"/>
          </linearGradient>
          <linearGradient id="gradS" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00"/>
            <stop offset="100%" stopColor="#FFD000"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="softglow">
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          
          <style>
            {`
              .logo-text-dynamic { fill: #1A2230; transition: fill 0.3s ease; }
              .dark .logo-text-dynamic { fill: #ffffff; }
              .logo-accent { fill: #FF6B00; }
              .device-outline { stroke: url(#gradS); stroke-width: 5; fill: none; }
            `}
          </style>
        </defs>

        {/* Grupo Principal sem Borda Circular */}
        <g>
          {/* LAPTOP - Contorno bem cheio e visível, fundo transparente */}
          <rect x="182" y="92" width="160" height="100" rx="7" className="device-outline" />
          <g fontFamily="'Courier New', Courier, monospace" fontSize="8" fontWeight="bold">
            <text x="194" y="115" fill="#FF6B00" filter="url(#glow)">&lt;code&gt;</text>
            <text x="194" y="135" className="logo-text-dynamic">Dev_Moz</text>
            <text x="194" y="155" fill="#FFD000" filter="url(#glow)">_Studio</text>
            <rect x="194" y="165" width="6" height="10" rx="1" fill="#FFD000">
              <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
            </rect>
          </g>
          <text x="328" y="186" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="16" fontWeight="900" fill="url(#gradS)" textAnchor="end" filter="url(#glow)">CW</text>

          {/* TELEMÓVEL - Contorno bem cheio e visível, fundo transparente */}
          <rect x="390" y="88" width="68" height="120" rx="10" className="device-outline" />
          <g fontFamily="'Courier New', Courier, monospace" fontSize="7" fontWeight="bold">
            <text x="402" y="120" fill="#FF6B00">const</text>
            <text x="402" y="135" className="logo-text-dynamic">learn</text>
            <text x="402" y="150" fill="#FFD000">() =&gt;</text>
            <text x="402" y="165" className="logo-text-dynamic">MOZ</text>
          </g>
          <text x="448" y="195" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="12" fontWeight="900" fill="url(#gradS)" textAnchor="end" filter="url(#glow)">MOZ</text>

          {/* </> central - Cor Acesa e Vibrante */}
          <circle cx="340" cy="238" r="32" fill="none" stroke="url(#grad)" strokeWidth="4" filter="url(#softglow)"/>
          <text x="340" y="246" fontFamily="'Courier New', Courier, monospace" fontSize="20" fontWeight="bold" fill="url(#gradS)" textAnchor="middle" filter="url(#glow)">&lt;/&gt;</text>

          {/* NOME: CODEWORKS MOZ - Seguindo a curvatura mas sem a borda física */}
          <text transform="translate(239,279) rotate(-308)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">C</text>
          <text transform="translate(251,291) rotate(-316)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">O</text>
          <text transform="translate(265,304) rotate(-324)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">D</text>
          <text transform="translate(280,313) rotate(-332)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">E</text>
          <text transform="translate(296,320) rotate(-340)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="900" fill="#FF6B00" textAnchor="middle">W</text>
          <text transform="translate(313,325) rotate(-348)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">O</text>
          <text transform="translate(331,328) rotate(-356)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">R</text>
          <text transform="translate(349,328) rotate(-4)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">K</text>
          <text transform="translate(367,325) rotate(-12)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="900" fill="#FF6B00" textAnchor="middle">S</text>
          <circle cx="384" cy="320" r="3.5" fill="#FFD000" filter="url(#glow)"/>
          <text transform="translate(400,313) rotate(-28)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">M</text>
          <text transform="translate(415,304) rotate(-36)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">O</text>
          <text transform="translate(429,291) rotate(-44)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="16" fontWeight="900" fill="#FFD000" textAnchor="middle">Z</text>
        </g>
      </svg>
    </div>
  );
}
