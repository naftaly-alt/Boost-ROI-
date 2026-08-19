export type StatFormat = "usd-k" | "k-2" | "int" | "ils-2";

export type StatDef = {
  id: string;
  to: number;
  format: StatFormat;
  zero: string;
  source: string;
  label: string;
  note: string;
};

export function formatStat(format: StatFormat, v: number): string {
  switch (format) {
    case "usd-k":
      return "$" + Math.round(v) + "K";
    case "k-2":
      return v.toFixed(2) + "K";
    case "int":
      return String(Math.round(v));
    case "ils-2":
      return "₪" + v.toFixed(2);
  }
}

export const STATS: StatDef[] = [
  {
    id: "stat-spend",
    to: 491,
    format: "usd-k",
    zero: "$0K",
    source: "GOOGLE ADS · 2022–2025",
    label: "תקציב מנוהל בחשבון אחד",
    note: "ניהול רצוף לאורך ארבע שנים",
  },
  {
    id: "stat-conv",
    to: 8.21,
    format: "k-2",
    zero: "0.00K",
    source: "GOOGLE ADS",
    label: "המרות בחשבון אחד",
    note: "עלות להמרה ₪27.29 · 6.01M הופעות",
  },
  {
    id: "stat-leads",
    to: 932,
    format: "int",
    zero: "0",
    source: "META ADS",
    label: "לידים בקמפיין אחד",
    note: "₪12.78 לליד, בזמן הגדלת תקציב",
  },
  {
    id: "stat-cpl",
    to: 8.25,
    format: "ils-2",
    zero: "₪0.00",
    source: "META ADS",
    label: "עלות ליד בקמפיין אחר",
    note: "643 לידים בתקציב מדוד",
  },
];

export type ClientLogo = { src: string; alt: string; dark: boolean };

export const CLIENT_LOGOS: ClientLogo[] = [
  { src: "/assets/clients/k-salesflow.png", alt: "SalesFlow", dark: false },
  { src: "/assets/clients/k-bait-lemeatzev.png", alt: "בית למעצב", dark: false },
  { src: "/assets/clients/k-even-hashoam.png", alt: "אבן השוהם", dark: false },
  { src: "/assets/clients/k-sia.png", alt: "שיא – פתרונות פיננסים", dark: false },
  { src: "/assets/clients/k-grove-line.png", alt: "Grove Line Capital", dark: false },
  { src: "/assets/clients/k-a1-sliding.png", alt: "A-1 Sliding Doors", dark: false },
  { src: "/assets/clients/k-wps.png", alt: "WPS", dark: false },
  { src: "/assets/clients/k-mehayeva.png", alt: "מחייבה בתנועה", dark: false },
];

export type PlatformLogo = { src: string; alt: string };

export const MEDIA_PLATFORMS: PlatformLogo[] = [
  { src: "/assets/platforms/k-meta.png", alt: "Meta" },
  { src: "/assets/platforms/k-google-ads.png", alt: "Google Ads" },
  { src: "/assets/platforms/k-tiktok.png", alt: "TikTok Ads" },
  { src: "/assets/platforms/k-linkedin.png", alt: "LinkedIn Ads" },
  { src: "/assets/platforms/k-youtube.png", alt: "YouTube Advertising" },
  { src: "/assets/platforms/k-taboola-outbrain.png", alt: "Taboola · Outbrain" },
];

export const MEASURE_PLATFORMS: PlatformLogo[] = [
  { src: "/assets/platforms/k-gtm.png", alt: "Google Tag Manager" },
  { src: "/assets/platforms/k-ga.png", alt: "Google Analytics" },
];

export type ProofItem = {
  platform: string;
  big: string;
  headline: string;
  note: string;
  src: string;
  alt: string;
};

export const PROOF: ProofItem[] = [
  {
    platform: "GOOGLE ADS · 2022–2025",
    big: "$491K / 4.48K",
    headline: "ניהול רצוף לאורך ארבע שנים",
    note: "קליקים והמרות עולים בזמן שעלות ההמרה נשארת שטוחה.",
    src: "/assets/proof/gads-491k.png",
    alt: "Google Ads: עלות 491K$, עלות להמרה 110$, 4.48K המרות, 15.4K קליקים",
  },
  {
    platform: "META ADS · SCALE",
    big: "932 לידים",
    headline: "₪12.78 לליד בזמן הגדלת תקציב",
    note: "הכפלת תקציב עם עלות ליד שנשארת בשליטה – הרגע שבו מותר להגדיל.",
    src: "/assets/proof/meta-932.png",
    alt: "Meta: 932 לידים, 12.78 ש״ח לליד, 11,909 ש״ח הוצאה",
  },
  {
    platform: "META ADS",
    big: "₪8.25 לליד",
    headline: "643 לידים בתקציב מדוד",
    note: "עלות ליד נמוכה בהיקף קטן. השורה שמעניינת היא Per Meta lead.",
    src: "/assets/proof/meta-643.png",
    alt: "Meta: 643 לידים, 8.25 ש״ח לליד, 5,303 ש״ח הוצאה",
  },
  {
    platform: "GOOGLE ADS",
    big: "8.21K המרות",
    headline: "₪27.29 להמרה · 6.01M הופעות",
    note: "חשבון בהיקף גדול. מה שקובע זה עלות ההמרה, לא כמה אנשים ראו.",
    src: "/assets/proof/gads-224k.png",
    alt: "Google Ads: עלות 224K ש״ח, עלות להמרה 27.29 ש״ח, 8.21K המרות",
  },
  {
    platform: "GOOGLE ADS · LAUNCH",
    big: "358 המרות",
    headline: "$10.06 להמרה בחשבון חדש",
    note: "ככה נראית התחלה מבוקרת: לומדים בזול לפני שמגדילים.",
    src: "/assets/proof/gads-3-6k.png",
    alt: "Google Ads: עלות 3.6K$, עלות להמרה 10.06$, 358 המרות",
  },
];

export const TICKER_WORDS = ["PERFORMANCE", "CPL", "ROAS", "CREATIVE", "FUNNEL", "TRACKING", "SCALE", "DATA"];

export const WHO_FOR = [
  { n: "01", title: "יש כבר עסק שעובד.", sub: "אנחנו לא מתחילים מאפס.", dark: false },
  { n: "02", title: "יש תקציב פרסום.", sub: "ואתם רוצים להשתמש בו טוב יותר.", dark: false },
  { n: "03", title: "יש מכירות.", sub: "ואפשר למדוד מה קורה אחרי הליד.", dark: false },
  { n: "04", title: "אדם אחד שמחזיק את התמונה.", sub: "לא מסרים דרך חמישה אנשי צוות.", dark: false },
  { n: "05", title: "שותף לחשיבה.", sub: "לא רק Operator.", dark: true },
];

export const FLOW = [
  { n: "01", title: "אסטרטגיה והצעה", sub: "מה בכלל שווה לפרסם, ולמי" },
  { n: "02", title: "מסרים וקריאייטיב", sub: "מה שנראה טוב ומה שבאמת עובד" },
  { n: "03", title: "Meta / Google / Platforms", sub: "הפעלה יומיומית ואופטימיזציה" },
  { n: "04", title: "Tracking & Data", sub: "שהמספרים יגידו את האמת" },
  { n: "05", title: "לידים ומכירות", sub: "עבודה מול צוות המכירות" },
  { n: "06", title: "Optimization & Scale", sub: "להגדיל רק כשהבסיס יציב" },
];

export const STILL_NEED = ["מה לפרסם", "למי", "כמה להשקיע", "איך לקרוא נתונים", "מה עובד", "ומה סתם שורף כסף"];

export const LEARN_ITEMS = [
  "להבין את Meta",
  "להבין Google",
  "לבנות קמפיינים",
  "ליצור קריאייטיב עם AI",
  "לקרוא מספרים",
  "למדוד לידים ומכירות",
  "לעשות אופטימיזציה",
  "לדעת מתי לא לגעת",
];

export const HOW_IT_WORKS = [
  { n: "01", text: "מבינים את העסק" },
  { n: "02", text: "בונים יחד את המערכת" },
  { n: "03", text: "אתם עולים לאוויר" },
  { n: "04", text: "עוברים יחד על התוצאות" },
  { n: "05", text: "אתם משתפרים מחודש לחודש" },
];

export const TIMELINE = [
  "נכנסתי לעולם השיווק",
  "ניהול קמפיינים ולקוחות",
  "הקמתי משרד פרסום בשם Boost ROI",
  "עבודה עם חברות ומותגים",
  "סדנאות וליווי בעלי עסקים",
  "היום: ניהול קמפיינים והעברת ידע",
];

export const GOAL_LABELS = ["ניהול שיווק וקמפיינים", "ליווי לניהול עצמאי", "לא בטוח, רוצה להתייעץ"];
export const BUDGET_LABELS = ["עד 5K", "5–10K", "10–30K", "30–50K", "50K+"];

export const OUCH_LINES = [
  "אאוץ׳! נראה לי שהתבלבלת.",
  "אאוץ׳! הכפתור הירוק הוא מימין, לא אני.",
  "אאוץ׳! אני לא כפתור, אני קולגה.",
  "אאוץ׳! עוד לחיצה אחת ואני מדווחת לנפתלי.",
  "אאוץ׳! זה כבר מרגיש כמו יחסים.",
  "אאוץ׳! תחסכו את האנרגיה לטופס.",
  "אאוץ׳! אני מייצרת לידים, לא כאב.",
  "אאוץ׳! בקצב הזה נצטרך תקציב לפיזיותרפיה.",
  "אאוץ׳! אתם יודעים שיש כאן גם תוכן, נכון?",
  "אאוץ׳! שיהיה ברור, כל הלחיצות נמדדות.",
  "אאוץ׳! ניסיתם לכבות ולהדליק אותי?",
  "אאוץ׳! טוב, לפחות ה-CTR שלי מעולה.",
  "אאוץ׳! זה לא ייעלם עד שתדברו עם נפתלי.",
  "אאוץ׳! עוד פעם אחת ואני מעלה לכם את המחיר.",
];
