"use client";

import Link from "next/link";
import { trackCustom } from "@/lib/tracking";

export default function TrackedCTA({
  href,
  event,
  params,
  className,
  children,
}: {
  href: string;
  event: string;
  params?: Record<string, unknown>;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} onClick={() => trackCustom(event, params)} className={className}>
      {children}
    </Link>
  );
}
