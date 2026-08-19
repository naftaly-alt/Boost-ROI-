"use client";

import { useEffect, useRef } from "react";
import { trackLead } from "@/lib/tracking";

export default function ThankYouTracker({ origin }: { origin: string }) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    trackLead(origin);
  }, [origin]);

  return null;
}
