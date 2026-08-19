"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Boost, { BoostMode } from "./Boost";
import ScrollReveal from "./ScrollReveal";
import { GOAL_LABELS, BUDGET_LABELS } from "@/lib/content";
import { trackCustom, captureUtm } from "@/lib/tracking";
import { waForOrigin, type Origin } from "@/lib/whatsapp";

const COPY: Record<Origin, { headline: string; sub: string; noteLabel: string; boostMode: BoostMode }> = {
  managed: {
    headline: "אולי הגיע הזמן שמישהו יחזיק את זה באמת.",
    sub: "טופס קצר לסינון הדדי. אם יש התאמה – נקבע שיחה ונדבר על מה שאפשר לשפר.",
    noteLabel: "מה הייתם רוצים לשפר?",
    boostMode: "pointing",
  },
  self: {
    headline: "לא מבטיח שזה תמיד יהיה כיף. אבל תדעו לאן הכסף הולך.",
    sub: "תשאירו פרטים ואחזור אליכם להבין מה אתם מנהלים היום ואיפה אפשר להיכנס.",
    noteLabel: "מה אתם מנהלים היום?",
    boostMode: "learning",
  },
  contact: {
    headline: "ספרו לי בקצרה על העסק.",
    sub: "שלוש דקות, ואני חוזר אליכם באופן אישי.",
    noteLabel: "משהו שכדאי שאדע?",
    boostMode: "pointing",
  },
};

const ROUTE_NAME: Record<Origin, string> = {
  managed: "ניהול שיווק לחברות",
  self: "ליווי לעצמאים",
  contact: "יצירת קשר",
};

const LEAD_ENDPOINT = "https://formsubmit.co/ajax/naftaly@boostroi.co.il";

type FormState = {
  name: string;
  phone: string;
  goal: string;
  budget: string;
  note: string;
};

const EMPTY_FORM: FormState = { name: "", phone: "", goal: "", budget: "", note: "" };

export default function LeadForm({ origin }: { origin: Origin }) {
  const router = useRouter();
  const copy = COPY[origin];
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const set = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) e.name = "נשמח לדעת איך לקרוא לך";
    if (form.phone.replace(/\D/g, "").length < 9) e.phone = "מספר טלפון לא נראה תקין";
    if (origin === "contact" && !form.goal) e.goal = "בחרו מה מתאים לכם";
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    const routeName = ROUTE_NAME[origin];
    const utm = captureUtm(window.location.search);
    const lead = {
      _subject: "ליד חדש מהאתר · " + routeName,
      שם: form.name,
      טלפון: form.phone,
      "מה מחפשים": form.goal || routeName,
      "תקציב חודשי": form.budget || "—",
      הערות: form.note || "—",
      מסלול: origin,
      utm_source: utm.utm_source || "—",
      utm_medium: utm.utm_medium || "—",
      utm_campaign: utm.utm_campaign || "—",
      utm_content: utm.utm_content || "—",
      utm_term: utm.utm_term || "—",
      "נשלח ב": new Date().toLocaleString("he-IL"),
    };

    trackCustom(origin + "_form_submit", { origin });
    setSubmitting(true);
    try {
      await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(lead),
      }).catch(() => {});
    } finally {
      router.push(`/thank-you?from=${origin}`);
    }
  };

  const waCurrent = waForOrigin(origin);
  const fieldClass =
    "h-[54px] rounded-xl border border-ink/16 bg-white px-[15px] text-base text-ink outline-none transition-colors duration-150 focus:border-forest";

  return (
    <ScrollReveal
      as="section"
      id="form"
      dataBoost="תמלאו, זה לא בגרות. חמישה שדות ואני עפה מפה.|אין ניוזלטר, אין דיוור, אין רימרקטינג מטריד. יש שיחה.|תקציב זה לא חובה, אבל זה חוסך לשנינו שיחה מיותרת.|תכתבו בכמה מילים מה כואב. נפתלי קורא את זה בעצמו."
      dataBoostMood="learning"
      className="scroll-mt-[84px] py-[clamp(44px,7vw,100px)] pb-[clamp(84px,10vw,120px)]"
    >
      <div className="mx-auto grid max-w-content grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(26px,4vw,56px)] px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
        <div>
          <div className="mb-[18px] h-[62px] w-[62px] animate-bfloat">
            <Boost mode={copy.boostMode} />
          </div>
          <h2 className="m-0 max-w-[16em] font-display text-[clamp(28px,5vw,58px)] font-extrabold leading-[1.02] tracking-[-.035em]">
            {copy.headline}
          </h2>
          <p className="mt-5 max-w-[30em] text-[17px] leading-[1.8] text-paper/66">{copy.sub}</p>
          <a
            href={waCurrent}
            onClick={() => trackCustom("whatsapp_click", { route: origin })}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex min-h-[56px] items-center gap-[10px] rounded-full border border-lime/50 px-[28px] text-[17px] font-bold text-lime no-underline transition-colors duration-150 hover:bg-lime/10 hover:text-lime"
          >
            <span className="h-2 w-2 rounded-full bg-lime" />
            או פשוט בוואטסאפ
          </a>
          <div className="mt-7 border-t border-paper/14 pt-[22px] text-[15.5px] leading-[1.7] text-paper/50">
            הפרטים מגיעים אליי בלבד. אין ניוזלטר ואין דיוור.
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="flex flex-col gap-[15px] rounded-[22px] bg-paper p-[clamp(20px,2.8vw,34px)] text-ink"
        >
          <label className="flex flex-col gap-[7px]">
            <span className="text-sm font-semibold">שם</span>
            <input
              type="text"
              autoComplete="name"
              placeholder="השם שלך"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className={fieldClass}
            />
            {errors.name && <span className="text-[13.5px] text-error">{errors.name}</span>}
          </label>

          <label className="flex flex-col gap-[7px]">
            <span className="text-sm font-semibold">טלפון</span>
            <input
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="050-0000000"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              className={fieldClass}
            />
            {errors.phone && <span className="text-[13.5px] text-error">{errors.phone}</span>}
          </label>

          {origin === "contact" && (
            <div className="flex flex-col gap-[9px]">
              <span className="text-sm font-semibold">מה אתם מחפשים?</span>
              <div className="flex flex-col gap-2">
                {GOAL_LABELS.map((label) => {
                  const active = form.goal === label;
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => set("goal", label)}
                      className={`min-h-[52px] rounded-xl border px-4 py-[14px] text-right text-base leading-[1.4] text-ink transition-colors duration-150 ${
                        active ? "border-forest bg-white font-bold" : "border-ink/16 bg-transparent font-medium"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              {errors.goal && <span className="text-[13.5px] text-error">{errors.goal}</span>}
            </div>
          )}

          <div className="flex flex-col gap-[9px]">
            <span className="text-sm font-semibold">
              תקציב פרסום חודשי <span className="font-normal text-[#7A7E82]">(לא חובה)</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {BUDGET_LABELS.map((label) => {
                const active = form.budget === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => set("budget", label)}
                    className={`min-h-11 rounded-full border px-4 font-mono text-[15px] leading-none text-ink ${
                      active ? "border-forest bg-white font-bold" : "border-ink/16 bg-transparent font-medium"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <label className="flex flex-col gap-[7px]">
            <span className="text-sm font-semibold">
              {copy.noteLabel} <span className="font-normal text-[#7A7E82]">(לא חובה)</span>
            </span>
            <textarea
              rows={3}
              placeholder="בכמה מילים"
              value={form.note}
              onChange={(e) => set("note", e.target.value)}
              className="resize-y rounded-xl border border-ink/16 bg-white px-[15px] py-[13px] text-base text-ink outline-none transition-colors duration-150 focus:border-forest"
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="relative mt-1 min-h-[58px] cursor-pointer overflow-hidden rounded-full border-none bg-ink text-[17.5px] font-bold text-paper transition-colors duration-150 hover:bg-forest disabled:cursor-wait disabled:opacity-70"
          >
            {submitting ? "שולח…" : "שלחו לי"}
          </button>
        </form>
      </div>
    </ScrollReveal>
  );
}
