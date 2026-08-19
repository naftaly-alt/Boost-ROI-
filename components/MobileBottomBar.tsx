"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { waForOrigin } from "@/lib/whatsapp";
import { trackCustom } from "@/lib/tracking";

export default function MobileBottomBar() {
  const pathname = usePathname();
  const origin = pathname === "/managed" ? "managed" : pathname === "/self" ? "self" : "contact";
  const waCurrent = waForOrigin(origin);

  return (
    <div className="fixed inset-x-0 bottom-0 z-[85] flex gap-[9px] border-t border-paper/14 bg-ink/92 px-3 pb-[calc(9px+env(safe-area-inset-bottom))] pt-[9px] backdrop-blur-lg min-[901px]:hidden">
      <a
        href={waCurrent}
        target="_blank"
        rel="noopener"
        onClick={() => trackCustom("whatsapp_click", { route: pathname })}
        className="flex min-h-[50px] flex-1 items-center justify-center gap-2 rounded-full bg-lime text-base font-bold text-ink no-underline"
      >
        WhatsApp
      </a>
      <Link
        href="/contact"
        className="flex min-h-[50px] flex-none items-center justify-center rounded-full border border-paper/30 px-[18px] text-base font-bold text-paper no-underline"
      >
        השאירו פרטים
      </Link>
    </div>
  );
}
