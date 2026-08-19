"use client";

import { useState } from "react";
import { CLIENT_LOGOS } from "@/lib/content";

export default function ClientMarquee() {
  const [running, setRunning] = useState(true);
  const loop = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div
      dir="ltr"
      onMouseEnter={() => setRunning(false)}
      onMouseLeave={() => setRunning(true)}
      className="overflow-hidden py-1"
    >
      <div
        className="flex w-max animate-mleft gap-[14px]"
        style={{ animationPlayState: running ? "running" : "paused", animationDuration: "34s" }}
      >
        {loop.map((c, i) => (
          <div
            key={i}
            className="flex h-[clamp(100px,10.5vw,124px)] w-[clamp(210px,23vw,280px)] flex-none items-center justify-center px-6 py-[10px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.src}
              alt={c.alt}
              loading="eager"
              decoding="async"
              className="h-full w-full object-contain opacity-[.96] transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
