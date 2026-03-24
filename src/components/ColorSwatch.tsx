interface Props {
  color: string;
  active: boolean;
  onClick: () => void;
  size?: "sm" | "md";
}

export default function ColorSwatch({ color, active, onClick, size = "md" }: Props) {
  const dim = size === "sm" ? "w-6 h-6" : "w-8 h-8";
  return (
    <button
      onClick={onClick}
      className={`${dim} rounded-full transition-transform duration-150 border-2 relative
        ${active ? "scale-110 border-stone-800" : "border-transparent hover:scale-110"}`}
      style={{ backgroundColor: color }}
    >
      {active && (
        <span className="absolute inset-[3px] rounded-full border-2 border-white/60 pointer-events-none" />
      )}
    </button>
  );
}
