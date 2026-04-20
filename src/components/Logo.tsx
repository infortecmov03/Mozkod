
import React from 'react';

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={className}>
      <svg width="100%" height="100%" viewBox="0 0 680 420" role="img" xmlns="http://www.w3.org/2000/svg">
        <title>Codeworks Moçambique logo</title>
        <desc>Logo vibrante com fundo branco e cores acesas</desc>
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
            <feGaussianBlur stdDeviation="2.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="softglow">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <clipPath id="circ"><circle cx="340" cy="200" r="155"/></clipPath>
          <clipPath id="lScreen"><rect x="188" y="98" width="148" height="92" rx="3"/></clipPath>
          <clipPath id="pScreen"><rect x="396" y="98" width="56" height="94" rx="5"/></clipPath>
          
          <style>
            {`
              .logo-bg-outer { fill: #f0f0f0; transition: fill 0.3s ease; }
              .logo-bg-inner { fill: #ffffff; transition: fill 0.3s ease; }
              .logo-text-dynamic { fill: #1A2230; transition: fill 0.3s ease; }
              .dark .logo-text-dynamic { fill: #ffffff; }
              .logo-accent { fill: #FF6B00; }
            `}
          </style>
        </defs>

        {/* Círculos de Fundo - Fundo Branco no centro conforme solicitado */}
        <circle cx="340" cy="200" r="158" className="logo-bg-outer" />
        <circle cx="340" cy="200" r="155" className="logo-bg-inner" />

        {/* Aro Animado Vibrante */}
        <circle cx="340" cy="200" r="155" fill="none" stroke="url(#grad)" strokeWidth="3" opacity="0.6" strokeDasharray="12 6">
          <animateTransform attributeName="transform" type="rotate" from="0 340 200" to="360 340 200" dur="15s" repeatCount="indefinite"/>
        </circle>
        
        <g clipPath="url(#circ)">
          {/* LAPTOP - Cores Acesas */}
          <rect x="182" y="92" width="160" height="100" rx="7" fill="#1A2230" stroke="url(#gradS)" strokeWidth="2.5"/>
          <rect x="188" y="98" width="148" height="92" rx="3" fill="#ffffff"/>
          <g clipPath="url(#lScreen)" fontFamily="'Courier New', Courier, monospace" fontSize="7.8">
            <text x="194" y="110" fill="#FF6B00" fontWeight="bold">&lt;html&gt;</text>
            <text x="194" y="121"><tspan fill="#FFD000">  &lt;head&gt;</tspan></text>
            <text x="194" y="131"><tspan fill="#FF8C00">    &lt;title&gt;</tspan><tspan fill="#1A2230">CW MOZ</tspan><tspan fill="#FF8C00">&lt;/title&gt;</tspan></text>
            <text x="194" y="141"><tspan fill="#FFD000">  &lt;/head&gt;</tspan></text>
            <text x="194" y="151"><tspan fill="#FFD000">  &lt;body&gt;</tspan></text>
            <text x="194" y="161"><tspan fill="#FF6B00">    &lt;h1&gt;</tspan><tspan fill="#1A2230">Codeworks</tspan><tspan fill="#FF6B00">&lt;/h1&gt;</tspan></text>
            <text x="194" y="171"><tspan fill="#FFB800">    &lt;p&gt;</tspan><tspan fill="#444444">Full-Stack</tspan><tspan fill="#FFB800">&lt;/p&gt;</tspan></text>
            <text x="194" y="181"><tspan fill="#FFD000">  &lt;/body&gt;</tspan></text>
            <rect x="194" y="183" width="5" height="8" rx="1" fill="#FFD000">
              <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
            </rect>
          </g>
          <text x="328" y="186" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="14" fontWeight="900" fill="url(#gradS)" textAnchor="end" filter="url(#glow)">CW</text>

          {/* TELEMÓVEL */}
          <rect x="390" y="88" width="68" height="120" rx="10" fill="#1A2230" stroke="url(#gradS)" strokeWidth="2.5"/>
          <rect x="396" y="98" width="56" height="94" rx="5" fill="#ffffff"/>
          <g clipPath="url(#pScreen)" fontFamily="'Courier New', Courier, monospace" fontSize="6.2">
            <text x="399" y="109" fill="#FF6B00">const app = () =&gt; {"{"}</text>
            <text x="399" y="119"><tspan fill="#FFD000">  let </tspan><tspan fill="#1A2230">name =</tspan></text>
            <text x="399" y="128"><tspan fill="#FFB800">    "Codeworks"</tspan><tspan fill="#444444">;</tspan></text>
            <text x="399" y="138"><tspan fill="#FF8C00">  return (</tspan></text>
            <text x="399" y="147"><tspan fill="#FFD000">    &lt;View&gt;</tspan></text>
            <text x="399" y="156"><tspan fill="#FF6B00">      &lt;Text&gt;</tspan></text>
            <text x="399" y="165"><tspan fill="#1A2230">        MOZ</tspan></text>
            <text x="399" y="174"><tspan fill="#FF6B00">      &lt;/Text&gt;</tspan></text>
            <text x="399" y="183"><tspan fill="#FFD000">    &lt;/View&gt;</tspan></text>
          </g>
          <text x="448" y="187" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="12" fontWeight="900" fill="url(#gradS)" textAnchor="end" filter="url(#glow)">MOZ</text>

          {/* </> CENTRAL - Cor Acesa */}
          <circle cx="340" cy="238" r="32" fill="#0D1117" stroke="url(#grad)" strokeWidth="3" filter="url(#softglow)"/>
          <text x="340" y="246" fontFamily="'Courier New', Courier, monospace" fontSize="18" fontWeight="bold" fill="url(#gradS)" textAnchor="middle" filter="url(#glow)">&lt;/&gt;</text>

          {/* TEXTO CURVADO - CORES ACESAS */}
          <text transform="translate(239,279) rotate(-308)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">C</text>
          <text transform="translate(251,291) rotate(-316)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">O</text>
          <text transform="translate(265,304) rotate(-324)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">D</text>
          <text transform="translate(280,313) rotate(-332)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">E</text>
          <text transform="translate(296,320) rotate(-340)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="900" fill="#FF6B00" textAnchor="middle">W</text>
          <text transform="translate(313,325) rotate(-348)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">O</text>
          <text transform="translate(331,328) rotate(-356)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">R</text>
          <text transform="translate(349,328) rotate(-4)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">K</text>
          <text transform="translate(367,325) rotate(-12)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="900" fill="#FF6B00" textAnchor="middle">S</text>
          <circle cx="384" cy="320" r="2.5" fill="#FFD000" opacity="1" filter="url(#glow)"/>
          <text transform="translate(400,313) rotate(-28)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">M</text>
          <text transform="translate(415,304) rotate(-36)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">O</text>
          <text transform="translate(429,291) rotate(-44)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="14" fontWeight="900" fill="#FFD000" textAnchor="middle">Z</text>
        </g>
      </svg>
    </div>
  );
}
