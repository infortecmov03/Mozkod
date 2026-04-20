
import React from 'react';

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={className}>
      <svg width="100%" height="100%" viewBox="0 0 680 420" role="img" xmlns="http://www.w3.org/2000/svg">
        <title>Codeworks Moçambique logo</title>
        <desc>Logo com nome a seguir exactamente a curvatura do círculo</desc>
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
          <path id="signalPath" d="M 356 148 Q 373 132 390 148" fill="none"/>
        </defs>

        <circle cx="340" cy="200" r="158" fill="#080C11"/>
        <circle cx="340" cy="200" r="155" fill="#0D1117"/>

        <circle cx="340" cy="200" r="155" fill="none" stroke="url(#grad)" strokeWidth="2" opacity="0.5" strokeDasharray="8 4">
          <animateTransform attributeName="transform" type="rotate" from="0 340 200" to="360 340 200" dur="20s" repeatCount="indefinite"/>
        </circle>
        <circle cx="340" cy="200" r="155" fill="none" stroke="url(#grad)" strokeWidth="3" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="r" values="152;158;152" dur="3s" repeatCount="indefinite"/>
        </circle>

        <g clipPath="url(#circ)">
          {/* LAPTOP */}
          <rect x="182" y="92" width="160" height="100" rx="7" fill="#1A2230" stroke="url(#gradS)" strokeWidth="2"/>
          <rect x="188" y="98" width="148" height="92" rx="3" fill="#060B12"/>
          <g clipPath="url(#lScreen)" fontFamily="'Courier New', Courier, monospace" fontSize="7.8">
            <text x="194" y="110" fill="#FF6B00">&lt;html&gt;</text>
            <text x="194" y="121"><tspan fill="#FFD000">  &lt;head&gt;</tspan></text>
            <text x="194" y="131"><tspan fill="#FF8C00">    &lt;title&gt;</tspan><tspan fill="#e0e0e0">CW MOZ</tspan><tspan fill="#FF8C00">&lt;/title&gt;</tspan></text>
            <text x="194" y="141"><tspan fill="#FFD000">  &lt;/head&gt;</tspan></text>
            <text x="194" y="151"><tspan fill="#FFD000">  &lt;body&gt;</tspan></text>
            <text x="194" y="161"><tspan fill="#FF6B00">    &lt;h1&gt;</tspan><tspan fill="#e0e0e0">Codeworks</tspan><tspan fill="#FF6B00">&lt;/h1&gt;</tspan></text>
            <text x="194" y="171"><tspan fill="#FFB800">    &lt;p&gt;</tspan><tspan fill="#aaa">Full-Stack</tspan><tspan fill="#FFB800">&lt;/p&gt;</tspan></text>
            <text x="194" y="181"><tspan fill="#FFD000">  &lt;/body&gt;</tspan></text>
            <rect x="194" y="183" width="5" height="8" rx="1" fill="#FFD000">
              <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite"/>
            </rect>
          </g>
          <text x="328" y="186" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="13" fontWeight="900" fill="url(#gradS)" textAnchor="end" filter="url(#glow)" opacity="0.85">CW</text>
          <rect x="175" y="192" width="174" height="10" rx="3" fill="#1E2A3A" stroke="url(#gradS)" strokeWidth="1.5"/>
          <rect x="242" y="195" width="40" height="4" rx="2" fill="#243040" opacity="0.8"/>
          <rect x="256" y="190" width="12" height="4" rx="1" fill="#FF8C00" opacity="0.5"/>

          {/* TELEMÓVEL */}
          <rect x="390" y="88" width="68" height="120" rx="10" fill="#1A2230" stroke="url(#gradS)" strokeWidth="2"/>
          <rect x="396" y="98" width="56" height="94" rx="5" fill="#060B12"/>
          <g clipPath="url(#pScreen)" fontFamily="'Courier New', Courier, monospace" fontSize="6.2">
            <text x="399" y="109" fill="#FF6B00">const app = () =&gt; {"{"}</text>
            <text x="399" y="119"><tspan fill="#FFD000">  let </tspan><tspan fill="#e0e0e0">name =</tspan></text>
            <text x="399" y="128"><tspan fill="#FFB800">    "Codeworks"</tspan><tspan fill="#aaa">;</tspan></text>
            <text x="399" y="138"><tspan fill="#FF8C00">  return (</tspan></text>
            <text x="399" y="147"><tspan fill="#FFD000">    &lt;View&gt;</tspan></text>
            <text x="399" y="156"><tspan fill="#FF6B00">      &lt;Text&gt;</tspan></text>
            <text x="399" y="165"><tspan fill="#e0e0e0">        MOZ</tspan></text>
            <text x="399" y="174"><tspan fill="#FF6B00">      &lt;/Text&gt;</tspan></text>
            <text x="399" y="183"><tspan fill="#FFD000">    &lt;/View&gt;</tspan></text>
            <text x="399" y="192" fill="#FF8C00">  );</text>
            <text x="399" y="201" fill="#FF6B00">{"}"}</text>
            <rect x="399" y="203" width="4" height="7" rx="1" fill="#FFD000">
              <animate attributeName="opacity" values="1;0;1" dur="1.1s" begin="0.5s" repeatCount="indefinite"/>
            </rect>
          </g>
          <rect x="410" y="91" width="20" height="4" rx="2" fill="#0A0F18"/>
          <circle cx="424" cy="202" r="4" fill="#243040" stroke="url(#gradS)" strokeWidth="0.8" opacity="0.8"/>
          <text x="448" y="187" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="11" fontWeight="900" fill="url(#gradS)" textAnchor="end" filter="url(#glow)" opacity="0.85">MOZ</text>

          {/* SINAL ANIMADO */}
          <circle r="3" fill="#FFD000" filter="url(#glow)">
            <animateMotion dur="1.8s" repeatCount="indefinite"><mpath href="#signalPath"/></animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite"/>
          </circle>
          <circle r="2" fill="#FF6B00" filter="url(#glow)">
            <animateMotion dur="1.8s" begin="0.9s" repeatCount="indefinite"><mpath href="#signalPath"/></animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" begin="0.9s" repeatCount="indefinite"/>
          </circle>

          {/* </> central */}
          <circle cx="340" cy="238" r="32" fill="#0D1117" stroke="url(#grad)" strokeWidth="2.5" filter="url(#softglow)"/>
          <circle cx="340" cy="238" r="29" fill="#090E15" stroke="url(#gradS)" strokeWidth="0.8" opacity="0.4"/>
          <text x="340" y="245" fontFamily="'Courier New', Courier, monospace" fontSize="17" fontWeight="bold" fill="url(#gradS)" textAnchor="middle" filter="url(#glow)">&lt;/&gt;</text>

          {/* Texto Curvado */}
          <text transform="translate(239,279) rotate(-308)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="900" fill="#ffffff" textAnchor="middle">C</text>
          <text transform="translate(251,291) rotate(-316)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="900" fill="#ffffff" textAnchor="middle">O</text>
          <text transform="translate(265,304) rotate(-324)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="900" fill="#ffffff" textAnchor="middle">D</text>
          <text transform="translate(280,313) rotate(-332)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="900" fill="#ffffff" textAnchor="middle">E</text>
          <text transform="translate(296,320) rotate(-340)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="900" fill="#FF6B00" textAnchor="middle">W</text>
          <text transform="translate(313,325) rotate(-348)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="900" fill="#ffffff" textAnchor="middle">O</text>
          <text transform="translate(331,328) rotate(-356)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="900" fill="#ffffff" textAnchor="middle">R</text>
          <text transform="translate(349,328) rotate(-4)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="900" fill="#ffffff" textAnchor="middle">K</text>
          <text transform="translate(367,325) rotate(-12)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="900" fill="#FF6B00" textAnchor="middle">S</text>
          <circle cx="384" cy="320" r="2" fill="#FFD000" opacity="0.9"/>
          <text transform="translate(400,313) rotate(-28)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="900" fill="#ffffff" textAnchor="middle">M</text>
          <text transform="translate(415,304) rotate(-36)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="900" fill="#ffffff" textAnchor="middle">O</text>
          <text transform="translate(429,291) rotate(-44)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="900" fill="#FFD000" textAnchor="middle">Z</text>

          <circle cx="232" cy="272" r="2" fill="#FF6B00" opacity="0.8"/>
          <circle cx="436" cy="284" r="2" fill="#FFD000" opacity="0.8"/>
        </g>
      </svg>
    </div>
  );
}
