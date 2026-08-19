"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { pageView } from "@/lib/tracking";

declare global {
  interface Window {
    __metaPixelFirstViewClaimed?: boolean;
  }
}

export default function PixelRouteTracker() {
  const pathname = usePathname();
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      // The base pixel script already fires the PageView for the very first
      // page load. Only skip *once* globally — guards this component against
      // ever double-counting that first view, even if something (Strict Mode,
      // a remount) causes this effect to run more than its normal one time.
      if (!window.__metaPixelFirstViewClaimed) {
        window.__metaPixelFirstViewClaimed = true;
        return;
      }
    }
    pageView();
  }, [pathname]);

  return null;
}
