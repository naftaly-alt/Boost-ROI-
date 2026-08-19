"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { pageView } from "@/lib/tracking";

export default function PixelRouteTracker() {
  const pathname = usePathname();
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    pageView();
  }, [pathname]);

  return null;
}
