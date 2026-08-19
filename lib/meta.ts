// Plain constant (no "use client") so Server Components can interpolate it
// directly — importing it from a "use client" module instead turns it into
// an opaque client-reference object across the server/client boundary,
// which stringifies to "[object Object]" when interpolated.
export const META_PIXEL_ID = "1392439888385913";

export const SITE_TITLE = "נפתלי כהן | Boost ROI";
export const SITE_DESCRIPTION =
  "נפתלי כהן, Performance Marketing. שתי דרכים לעבוד איתי: ניהול שיווק לחברות, או ליווי לעצמאים שרוצים לנהל את הקמפיינים שלהם בעצמם.";

export const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  "/managed": {
    title: "ניהול קמפיינים ושיווק לחברות | Boost ROI",
    description: "ניהול אישי של מערך הפרסום והשיווק הדיגיטלי עבור חברות ועסקים שכבר עובדים, מוכרים ורוצים לגדול בצורה חכמה יותר.",
  },
  "/self": {
    title: "ליווי שיווק וקמפיינים לבעלי עסקים | Boost ROI",
    description: "אני מלמד בעלי עסקים לנהל את הפרסום שלהם בעצמם – בלי להפוך לאנשי פרסום ובלי תלות לנצח במישהו אחר.",
  },
  "/about": {
    title: "נפתלי כהן | אודות",
    description: "אני חי שיווק כבר שנים. ניהלתי קמפיינים, בניתי מערכי שיווק, עבדתי עם עסקים קטנים ועם חברות, ליוויתי בעלי עסקים והעברתי סדנאות.",
  },
  "/results": {
    title: "תוצאות | Boost ROI",
    description: "מספרים אמיתיים מחשבונות אמיתיים – Google Ads ו-Meta Ads. בלי סיפורים, המסכים עצמם.",
  },
  "/contact": {
    title: "יצירת קשר | Boost ROI",
    description: "וואטסאפ זה הכי מהיר. אם נוח לכם בטופס – גם זה מגיע ישר אליי.",
  },
  "/thank-you": {
    title: "תודה | Boost ROI",
    description: "קיבלתי. נפתלי יחזור אליכם באופן אישי.",
  },
};
