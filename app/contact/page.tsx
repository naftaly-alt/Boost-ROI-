import type { Metadata } from "next";
import Boost from "@/components/Boost";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";
import { PAGE_META } from "@/lib/meta";

export const metadata: Metadata = PAGE_META["/contact"];

export default function ContactPage() {
  return (
    <div>
      <ScrollReveal
        as="section"
        reveal={false}
        dataBoost="וואטסאפ. שנייה וחצי. קדימה.|טופס או וואטסאפ. שניהם מגיעים לאותו אדם.|אין מוקד, אין נציג, אין מוזיקה בהמתנה.|תכתבו מה העסק ומה כואב. זה מספיק להתחלה."
        dataBoostMood="pointing"
        className="pt-[clamp(32px,5vw,68px)]"
      >
        <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-[clamp(16px,4vw,48px)] text-center min-[901px]:px-[112px]">
          <div className="h-[70px] w-[70px] animate-bfloat">
            <Boost mode="hello" />
          </div>
          <h1 className="m-0 animate-rise font-display text-[clamp(38px,7.6vw,96px)] font-extrabold leading-[.95] tracking-[-.042em]">
            אז... נדבר?
          </h1>
          <p className="m-0 max-w-[30em] text-[17.5px] leading-[1.8] text-paper/66">
            וואטסאפ זה הכי מהיר. אם נוח לכם בטופס – גם זה מגיע ישר אליי.
          </p>
          <div className="mt-1 flex flex-wrap justify-center gap-[10px]">
            <a
              href="https://www.instagram.com/naftalycohen/"
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-12 items-center rounded-full border border-paper/24 px-5 text-[15px] font-semibold text-paper no-underline hover:border-lime hover:text-paper"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61563066875491&locale=he_IL"
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-12 items-center rounded-full border border-paper/24 px-5 text-[15px] font-semibold text-paper no-underline hover:border-lime hover:text-paper"
            >
              Facebook
            </a>
          </div>
        </div>
      </ScrollReveal>

      <LeadForm origin="contact" />
    </div>
  );
}
