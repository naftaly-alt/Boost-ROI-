"use client";

import { useEffect, useRef, useState } from "react";
import { formatStat, type StatDef } from "@/lib/content";

export default function AnimatedStat({ stat }: { stat: StatDef }) {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState(stat.zero);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setText(formatStat(stat.format, stat.to));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          io.unobserve(en.target);
          const t0 = performance.now();
          const dur = 1500;
          const step = (now: number) => {
            const k = Math.min(1, (now - t0) / dur);
            const eased = 1 - Math.pow(1 - k, 3);
            setText(formatStat(stat.format, stat.to * eased));
            if (k < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stat]);

  return (
    <div
      ref={ref}
      id={stat.id}
      dir="ltr"
      className="mt-4 font-display text-[clamp(34px,5vw,58px)] font-extrabold leading-none tracking-[-.03em] text-lime"
    >
      {text}
    </div>
  );
}
