"use client";

import { trackCustom } from "@/lib/tracking";

export default function WhatsAppCTA({
  href,
  route,
  className,
  children,
}: {
  href: string;
  route: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={() => trackCustom("whatsapp_click", { route })}
      target="_blank"
      rel="noopener"
      className={className}
    >
      {children}
    </a>
  );
}
