import { TICKER_WORDS } from "@/lib/content";

export default function Ticker() {
  const loop = [0, 1];

  return (
    <div dir="ltr" className="flex w-max animate-mleft gap-0">
      {loop.map((row) => (
        <div key={row} className="flex items-center gap-[clamp(18px,3vw,42px)] pe-[clamp(18px,3vw,42px)]">
          {TICKER_WORDS.map((w, i) => (
            <span
              key={w}
              className={`font-mono text-[clamp(13px,1.6vw,17px)] font-medium leading-none tracking-[.2em] ${
                i % 2 ? "text-paper/40" : "text-lime"
              }`}
            >
              {w}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
