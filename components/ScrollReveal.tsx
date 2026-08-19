"use client";

import { useEffect, useRef, useState, createElement, type ElementType, type ReactNode } from "react";

export default function ScrollReveal({
  children,
  as: Tag = "div",
  className = "",
  dataBoost,
  dataBoostMood,
  id,
  reveal = true,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  dataBoost?: string;
  dataBoostMood?: string;
  id?: string;
  reveal?: boolean;
}) {
  const ref = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [visible, setVisible] = useState(!reveal);

  useEffect(() => {
    if (!reveal) return;
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          setVisible(true);
          io.unobserve(en.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reveal]);

  return createElement(
    Tag,
    {
      ref,
      id,
      "data-boost": dataBoost,
      "data-boost-mood": dataBoostMood,
      "data-reveal": reveal ? "1" : undefined,
      className,
      style: reveal
        ? {
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
            transition: "opacity .7s ease, transform .7s ease",
          }
        : undefined,
    },
    children
  );
}
