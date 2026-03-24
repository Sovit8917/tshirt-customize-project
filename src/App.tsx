import { useState } from "react";
import TShirtSVG from "./components/TShirtSVG";
import ColorSwatch from "./components/ColorSwatch";

const SHIRT_COLORS = [
  { color: "#f0ede6" }, { color: "#1a1a1a" }, { color: "#2563eb" },
  { color: "#e84c3d" }, { color: "#10b981" }, { color: "#f59e0b" },
  { color: "#8b5cf6" }, { color: "#f97316" },
];
const TEXT_COLORS = ["#0f0f0f","#ffffff","#e84c3d","#2563eb","#f59e0b","#10b981"];
const SIZES = ["XS","S","M","L","XL"];

export default function App() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [shirtColor, setShirtColor] = useState("#f0ede6");
  const [textColor, setTextColor] = useState("#0f0f0f");
  const [fontSize, setFontSize] = useState(24);
  const [selectedSize, setSelectedSize] = useState("M");
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => { setAdded(true); setTimeout(() => setAdded(false), 2000); };

  return (
    <div className="min-h-screen bg-[#f5f2eb]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#f5f2eb]">
        <span className="text-2xl tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          THREAD<span className="text-red-500">CRAFT</span>
        </span>
        <span className="text-xs uppercase tracking-widest text-stone-400">Custom Apparel Studio</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-65px)]">
        {/* PREVIEW */}
        <div className="bg-stone-200/60 flex flex-col items-center justify-center px-8 py-12 lg:sticky lg:top-[65px] lg:h-[calc(100vh-65px)]">
          <div className="w-[260px] sm:w-[300px] animate-fade-up">
            <TShirtSVG shirtColor={shirtColor} textLine1={line1} textLine2={line2} textColor={textColor} fontSize={fontSize} />
          </div>
          <p className="mt-5 text-xs uppercase tracking-widest text-stone-400">↑ Live Preview</p>
        </div>

        {/* CONTROLS */}
        <div className="border-t lg:border-t-0 lg:border-l border-stone-200 px-8 py-10 flex flex-col gap-7 overflow-y-auto">
          <div>
            <p className="text-xs uppercase tracking-widest text-red-500 font-medium mb-2">Limited Edition Drop</p>
            <h1 className="text-5xl leading-none tracking-wide mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              DESIGN<br />YOUR TEE
            </h1>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-medium">₹899</span>
              <span className="text-xs text-stone-400">Free shipping · 7-day returns</span>
            </div>
          </div>

          <hr className="border-stone-200" />

          <div>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-3">Your Text</p>
            <div className="flex flex-col gap-3">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">Main Line</label>
                <input type="text" value={line1} onChange={e => setLine1(e.target.value)} maxLength={14} placeholder="e.g. HUSTLE"
                  className="w-full border border-stone-200 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-stone-800 transition-colors placeholder:text-stone-300" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">Sub Line</label>
                <input type="text" value={line2} onChange={e => setLine2(e.target.value)} maxLength={20} placeholder="e.g. EST. 2024"
                  className="w-full border border-stone-200 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-stone-800 transition-colors placeholder:text-stone-300" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-3">Text Size</p>
            <div className="flex items-center gap-3">
              <input type="range" min={14} max={36} value={fontSize} onChange={e => setFontSize(Number(e.target.value))}
                className="flex-1 accent-stone-800 cursor-pointer" />
              <span className="text-xs text-stone-400 w-6 text-right">{fontSize}</span>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-3">Text Color</p>
            <div className="flex gap-2 flex-wrap">
              {TEXT_COLORS.map(c => <ColorSwatch key={c} color={c} size="sm" active={textColor === c} onClick={() => setTextColor(c)} />)}
            </div>
          </div>

          <hr className="border-stone-200" />

          <div>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-3">Shirt Color</p>
            <div className="flex gap-2 flex-wrap">
              {SHIRT_COLORS.map(({ color }) => <ColorSwatch key={color} color={color} active={shirtColor === color} onClick={() => setShirtColor(color)} />)}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-3">Size</p>
            <div className="flex gap-2">
              {SIZES.map(s => (
                <button key={s} onClick={() => setSelectedSize(s)}
                  className={`w-10 h-10 border text-xs font-medium tracking-wide transition-all
                    ${selectedSize === s ? "bg-stone-900 text-[#f5f2eb] border-stone-900" : "border-stone-200 text-stone-700 hover:border-stone-700"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-stone-200" />

          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <button onClick={handleAddToCart}
                className={`flex-1 py-3 text-xs uppercase tracking-widest font-medium transition-all
                  ${added ? "bg-green-600 text-white" : "bg-stone-900 text-[#f5f2eb] hover:bg-stone-700"}`}>
                {added ? "✓ Added to Cart" : "Add to Cart — ₹899"}
              </button>
              <button className="w-12 h-12 border border-stone-200 hover:border-stone-800 flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>
            <p className="text-[11px] text-stone-400 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              100% cotton · print-on-demand · ships in 3–5 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
