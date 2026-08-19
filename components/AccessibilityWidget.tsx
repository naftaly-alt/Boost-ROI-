"use client";

import { useEffect, useId, useRef, useState } from "react";

type FontLevel = "normal" | "lg" | "xl";

type A11yState = {
  font: FontLevel;
  contrast: boolean;
  noMotion: boolean;
  underline: boolean;
};

const DEFAULT_STATE: A11yState = { font: "normal", contrast: false, noMotion: false, underline: false };
const STORAGE_KEY = "boostroi_a11y";

function applyState(s: A11yState) {
  const root = document.documentElement;
  root.classList.remove("a11y-font-lg", "a11y-font-xl");
  if (s.font === "lg") root.classList.add("a11y-font-lg");
  if (s.font === "xl") root.classList.add("a11y-font-xl");
  root.classList.toggle("a11y-contrast", s.contrast);
  root.classList.toggle("a11y-no-motion", s.noMotion);
  root.classList.toggle("a11y-underline", s.underline);
}

function AccessibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" strokeWidth="1.6" />
      <circle cx="12" cy="7.4" r="1.7" fill="currentColor" stroke="none" />
      <rect x="11.05" y="9.6" width="1.9" height="7.2" rx="0.95" fill="currentColor" stroke="none" />
      <rect x="6.3" y="10.7" width="11.4" height="1.9" rx="0.95" fill="currentColor" stroke="none" />
      <line x1="12" y1="16.4" x2="8.4" y2="20.2" strokeWidth="1.7" strokeLinecap="round" />
      <line x1="12" y1="16.4" x2="15.6" y2="20.2" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(DEFAULT_STATE);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<A11yState>;
        const merged = { ...DEFAULT_STATE, ...parsed };
        setState(merged);
        applyState(merged);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const update = (patch: Partial<A11yState>) => {
    setState((prev) => {
      const next = { ...prev, ...patch };
      applyState(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const reset = () => update(DEFAULT_STATE);

  const toggleBtnClass = (active: boolean) =>
    `flex min-h-[46px] items-center justify-between gap-3 rounded-xl border px-4 text-[15px] font-semibold transition-colors duration-150 ${
      active ? "border-forest bg-forest/15 text-paper" : "border-paper/18 bg-transparent text-paper/85"
    }`;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="פתיחת תפריט נגישות"
        className="fixed left-0 top-1/2 z-[95] flex -translate-y-1/2 flex-col items-center gap-1 rounded-l-none rounded-r-xl border border-l-0 border-paper/20 bg-ink px-2 py-3 text-lime shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform duration-150 hover:bg-[#171b1d]"
      >
        <AccessibilityIcon />
        <span className="[writing-mode:vertical-rl] text-[11px] font-bold tracking-[.05em]">נגישות</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="max-h-[85vh] w-full max-w-[380px] overflow-y-auto rounded-[20px] bg-ink p-6 text-paper shadow-[0_24px_60px_rgba(0,0,0,0.5)] outline-none"
          >
            <div className="flex items-center justify-between">
              <h2 id={titleId} className="m-0 font-display text-xl font-extrabold">
                אפשרויות נגישות
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="סגירה"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper hover:border-lime hover:text-lime"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <div className="text-sm font-semibold text-paper/60">גודל טקסט</div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => update({ font: "normal" })}
                  className={toggleBtnClass(state.font === "normal") + " flex-1 justify-center"}
                >
                  רגיל
                </button>
                <button
                  type="button"
                  onClick={() => update({ font: "lg" })}
                  className={toggleBtnClass(state.font === "lg") + " flex-1 justify-center"}
                >
                  גדול
                </button>
                <button
                  type="button"
                  onClick={() => update({ font: "xl" })}
                  className={toggleBtnClass(state.font === "xl") + " flex-1 justify-center"}
                >
                  גדול מאוד
                </button>
              </div>

              <button type="button" onClick={() => update({ contrast: !state.contrast })} className={toggleBtnClass(state.contrast)}>
                ניגודיות גבוהה
                <span aria-hidden="true">{state.contrast ? "מופעל" : "כבוי"}</span>
              </button>

              <button type="button" onClick={() => update({ noMotion: !state.noMotion })} className={toggleBtnClass(state.noMotion)}>
                עצירת אנימציות
                <span aria-hidden="true">{state.noMotion ? "מופעל" : "כבוי"}</span>
              </button>

              <button type="button" onClick={() => update({ underline: !state.underline })} className={toggleBtnClass(state.underline)}>
                הדגשת קישורים
                <span aria-hidden="true">{state.underline ? "מופעל" : "כבוי"}</span>
              </button>

              <button
                type="button"
                onClick={reset}
                className="mt-2 min-h-[46px] rounded-xl border border-paper/18 text-[15px] font-semibold text-paper/70 hover:border-paper hover:text-paper"
              >
                איפוס הגדרות
              </button>
            </div>

            <p className="mt-6 border-t border-paper/14 pt-4 text-[13px] leading-[1.6] text-paper/50">
              אנו פועלים לשפר את הנגישות באתר. נתקלתם בבעיה או שיש לכם בקשה להתאמה? כתבו לנו ב-WhatsApp ונטפל בזה בהקדם.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
