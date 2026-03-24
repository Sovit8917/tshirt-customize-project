interface Props {
  shirtColor: string;
  textLine1: string;
  textLine2: string;
  textColor: string;
  fontSize: number;
}

export default function TShirtSVG({ shirtColor, textLine1, textLine2, textColor, fontSize }: Props) {
  return (
    <svg viewBox="0 0 400 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
      <ellipse cx="200" cy="415" rx="120" ry="8" fill="rgba(0,0,0,0.08)" />
      <path
        d="M110 80 L50 150 L100 170 L90 400 H310 L300 170 L350 150 L290 80 C270 100 250 110 200 110 C150 110 130 100 110 80Z"
        fill={shirtColor}
        style={{ transition: "fill 0.4s ease" }}
      />
      <path d="M155 78 C165 100 180 112 200 112 C220 112 235 100 245 78" stroke="rgba(0,0,0,0.12)" strokeWidth="2" fill="none" />
      <line x1="200" y1="112" x2="200" y2="400" stroke="rgba(0,0,0,0.05)" strokeWidth="1.5" strokeDasharray="6 6" />
      <path d="M100 170 L200 185 L300 170" stroke="rgba(0,0,0,0.05)" strokeWidth="1.5" />
      <path d="M130 100 L80 160 L105 172" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
      <text
        x="200" y="222" textAnchor="middle"
        fill={textColor}
        fontFamily="'Bebas Neue', sans-serif"
        fontSize={fontSize}
        letterSpacing="3"
        style={{ transition: "fill 0.3s, font-size 0.2s" }}
      >
        {textLine1.toUpperCase() || "YOUR TEXT"}
      </text>
      <text
        x="200" y="244" textAnchor="middle"
        fill={textColor}
        fontFamily="'DM Sans', sans-serif"
        fontSize="11"
        letterSpacing="4"
        opacity="0.7"
        style={{ transition: "fill 0.3s" }}
      >
        {textLine2.toUpperCase() || "CUSTOM TEE"}
      </text>
    </svg>
  );
}
