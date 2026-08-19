const PHONE = "972543284460";

function waLink(text: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
}

export const waManaged = waLink(
  "היי נפתלי, הגעתי דרך האתר ורציתי לדבר איתך על ניהול השיווק אצלנו."
);
export const waSelf = waLink(
  "היי נפתלי, הגעתי דרך האתר ואני רוצה להבין איך אפשר ללמוד לנהל את השיווק בעצמי."
);
export const waGeneral = waLink(
  "היי נפתלי, הגעתי דרך האתר ורציתי לדבר איתך על השיווק של העסק."
);

export type Origin = "managed" | "self" | "contact";

export function waForOrigin(origin: Origin | null | undefined) {
  if (origin === "managed") return waManaged;
  if (origin === "self") return waSelf;
  return waGeneral;
}
