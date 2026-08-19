"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Boost, { BoostMode } from "./Boost";
import { OUCH_LINES } from "@/lib/content";
import { waForOrigin } from "@/lib/whatsapp";
import { trackCustom } from "@/lib/tracking";

type Quip = { line: string; mood: BoostMode };

const DEFAULT_QUIP: Quip = {
  line: "היי, אני Boost. אני נשארת איתכם לאורך כל הגלילה.",
  mood: "hello",
};

function nextFrom(pool: string[], seen: React.MutableRefObject<Record<string, string[]>>, key: string) {
  const used = (seen.current[key] = seen.current[key] || []);
  let left = pool.filter((x) => used.indexOf(x) < 0);
  if (!left.length) {
    used.length = 0;
    left = pool.slice();
  }
  const pick = left[Math.floor(Math.random() * left.length)];
  used.push(pick);
  return pick;
}

export default function BoostCompanion() {
  const pathname = usePathname();
  const [narrow, setNarrow] = useState(false);
  const [shortView, setShortView] = useState(false);
  const [past, setPast] = useState(false);
  const [footerLift, setFooterLift] = useState(0);
  const [quip, setQuip] = useState<Quip>(DEFAULT_QUIP);
  const [quipOn, setQuipOn] = useState(true);
  const [ouch, setOuch] = useState(false);

  const seenRef = useRef<Record<string, string[]>>({});
  const prevQuipRef = useRef<Quip>(DEFAULT_QUIP);
  const activeSectionRef = useRef<string | null>(null);
  const ioRef = useRef<IntersectionObserver | null>(null);
  const quipTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const ouchTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const acRef = useRef<AudioContext | null>(null);
  const ouchRef = useRef(false);

  useEffect(() => {
    ouchRef.current = ouch;
  }, [ouch]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const sq = window.matchMedia("(max-height: 700px)");
    const onMq = (e: MediaQueryListEvent | MediaQueryList) => setNarrow(e.matches);
    const onSq = (e: MediaQueryListEvent | MediaQueryList) => setShortView(e.matches);
    onMq(mq);
    onSq(sq);
    mq.addEventListener?.("change", onMq);
    sq.addEventListener?.("change", onSq);

    const onScroll = () => {
      const p = window.scrollY > Math.max(240, window.innerHeight * 0.62);
      setPast((prev) => (prev === p ? prev : p));

      // Keep the floating cluster from ever sitting on top of the footer:
      // its "distance from the viewport bottom" needs to grow to at least
      // (viewport height − footer's top), otherwise the element's own
      // bottom edge dips below the footer's top edge and overlaps it.
      const footer = document.querySelector("footer");
      if (footer) {
        const baseBottom = mq.matches ? 78 : 26;
        const buffer = 16;
        const footerTop = footer.getBoundingClientRect().top;
        const requiredBottom = window.innerHeight - footerTop + buffer;
        const lift = Math.max(0, requiredBottom - baseBottom);
        setFooterLift((prev) => (Math.abs(prev - lift) > 1 ? lift : prev));
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      mq.removeEventListener?.("change", onMq);
      sq.removeEventListener?.("change", onSq);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const observeQuips = useCallback(() => {
    ioRef.current?.disconnect();
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-boost]"));
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          if (!best || en.intersectionRatio > best.intersectionRatio) best = en;
        });
        if (!best) return;
        if (ouchRef.current) return;
        const entry = best as IntersectionObserverEntry;
        const key = entry.target.getAttribute("data-boost") || "";
        const mood = (entry.target.getAttribute("data-boost-mood") as BoostMode) || "hello";
        if (activeSectionRef.current === key) return;
        activeSectionRef.current = key;
        const pool = key
          .split("|")
          .map((x) => x.trim())
          .filter(Boolean);
        if (!pool.length) return;
        const line = nextFrom(pool, seenRef, "sec:" + key);
        setQuipOn(false);
        clearTimeout(quipTimerRef.current);
        quipTimerRef.current = setTimeout(() => {
          const q = { line, mood };
          prevQuipRef.current = q;
          setQuip(q);
          setQuipOn(true);
        }, 260);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-18% 0px -30% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    ioRef.current = io;
  }, []);

  useEffect(() => {
    activeSectionRef.current = null;
    const t = setTimeout(observeQuips, 100);
    return () => {
      clearTimeout(t);
      ioRef.current?.disconnect();
    };
  }, [pathname, observeQuips]);

  useEffect(
    () => () => {
      clearTimeout(quipTimerRef.current);
      clearTimeout(ouchTimerRef.current);
    },
    []
  );

  const playOuch = useCallback(() => {
    try {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      const ac = (acRef.current = acRef.current || new AC());
      const fire = () => {
        try {
          const t = ac.currentTime;
          const o = ac.createOscillator();
          const g = ac.createGain();
          o.type = "triangle";
          o.frequency.setValueAtTime(560, t);
          o.frequency.exponentialRampToValueAtTime(190, t + 0.16);
          o.frequency.exponentialRampToValueAtTime(320, t + 0.3);
          g.gain.setValueAtTime(0.0001, t);
          g.gain.exponentialRampToValueAtTime(0.22, t + 0.02);
          g.gain.exponentialRampToValueAtTime(0.0001, t + 0.34);
          o.connect(g).connect(ac.destination);
          o.start(t);
          o.stop(t + 0.36);
        } catch {
          /* audio blocked — the squash still plays */
        }
      };
      // Mobile browsers create/suspend the context until a gesture resumes it;
      // scheduling a node before resume() resolves gets silently dropped there.
      if (ac.state === "suspended") ac.resume().then(fire).catch(() => {});
      else fire();
    } catch {
      /* audio blocked — the squash still plays */
    }
  }, []);

  const poke = useCallback(() => {
    playOuch();
    clearTimeout(ouchTimerRef.current);
    clearTimeout(quipTimerRef.current);
    if (!ouch) prevQuipRef.current = quip;
    const line = nextFrom(OUCH_LINES, seenRef, "ouch");
    setOuch(false);
    requestAnimationFrame(() => {
      setOuch(true);
      setQuip({ line, mood: "ouch" });
      setQuipOn(true);
    });
    ouchTimerRef.current = setTimeout(() => {
      setOuch(false);
      setQuip(prevQuipRef.current);
      setQuipOn(true);
    }, 3200);
  }, [playOuch, quip, ouch]);

  const showCompanion = past;
  const bubbleVisible = quipOn && (!shortView || ouch);
  const bubbleHidden = shortView && !ouch;
  const iconSize = narrow ? 56 : 74;
  const bottomOffset = narrow
    ? `calc(78px + env(safe-area-inset-bottom) + ${footerLift}px)`
    : `calc(26px + ${footerLift}px)`;

  const origin = pathname === "/managed" ? "managed" : pathname === "/self" ? "self" : "contact";
  const waCurrent = waForOrigin(origin);

  if (!showCompanion) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed left-[14px] z-[88] flex max-w-[min(220px,52vw)] items-end gap-2 min-[901px]:left-[26px] min-[901px]:max-w-[min(340px,34vw)] min-[901px]:gap-3"
        style={{ bottom: bottomOffset }}
      >
        <button
          type="button"
          onClick={poke}
          aria-label="Boost"
          className={`pointer-events-auto flex-none cursor-pointer border-none bg-transparent p-0 [filter:drop-shadow(0_10px_24px_rgba(0,0,0,0.45))] ${
            ouch ? "animate-bouch" : "animate-bfloat"
          }`}
          style={{ height: iconSize, width: iconSize }}
        >
          <Boost mode={quip.mood} />
        </button>
        {!bubbleHidden && (
          <div
            className="max-w-[150px] rounded-[18px] rounded-bl-[4px] bg-paper px-3 py-[10px] text-[12.5px] font-semibold leading-[1.45] text-ink shadow-[0_14px_34px_rgba(0,0,0,0.4)] transition-all duration-[400ms] ease-out min-[901px]:max-w-[250px] min-[901px]:px-4 min-[901px]:py-3 min-[901px]:text-sm"
            style={{
              opacity: bubbleVisible ? 1 : 0,
              transform: quipOn ? "none" : "translateY(10px) scale(.96)",
            }}
          >
            {quip.line}
          </div>
        )}
      </div>

      <a
        href={waCurrent}
        onClick={() => trackCustom("whatsapp_click", { route: pathname })}
        target="_blank"
        rel="noopener"
        aria-label="דברו איתי בוואטסאפ"
        title="דברו איתי בוואטסאפ"
        className="fixed right-[16px] z-[88] inline-flex items-center justify-center rounded-full bg-lime text-ink shadow-[0_14px_34px_rgba(200,255,77,0.3)] transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.04] hover:text-ink min-[901px]:bottom-[26px] min-[901px]:right-[26px]"
        style={{ height: iconSize, width: iconSize, bottom: bottomOffset }}
      >
        <svg viewBox="0 0 24 24" width={narrow ? 26 : 30} height={narrow ? 26 : 30} fill="#0E1112" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.1c-.25.69-1.43 1.32-1.97 1.37-.54.05-1.04.24-3.54-.94-2.5-1.18-4.06-3.84-4.18-4.02-.13-.18-.98-1.42-.94-2.66.04-1.24.71-1.83.96-2.08.25-.25.54-.31.72-.31.18 0 .36 0 .52.01.17.01.4-.06.61.48.21.54.72 1.85.78 1.98.06.13.1.28.01.46-.09.18-.35.51-.5.68-.15.17-.31.26-.13.55.18.29.66 1.06 1.42 1.72.97.85 1.78 1.11 2.06 1.24.28.13.44.11.61-.07.17-.18.71-.83.9-1.11.19-.28.38-.23.63-.14.25.09 1.56.74 1.83.87.27.13.45.2.52.31.06.11.06.68-.19 1.37z" />
        </svg>
      </a>
    </>
  );
}
