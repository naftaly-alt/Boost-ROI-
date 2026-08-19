import type { Metadata } from "next";
import { Assistant, Heebo, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BoostCompanion from "@/components/BoostCompanion";
import ScrollProgress from "@/components/ScrollProgress";
import PixelRouteTracker from "@/components/PixelRouteTracker";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { SITE_TITLE, SITE_DESCRIPTION, META_PIXEL_ID } from "@/lib/meta";

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-assistant",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-heebo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boostroi.co.il"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: "לחברות אני מנהל את השיווק. לעצמאים אני מלמד לעשות את זה לבד.",
    images: ["/assets/naftaly-portrait.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${assistant.variable} ${heebo.variable} ${plexMono.variable}`}>
      <body className="relative min-h-screen bg-ink font-body text-paper">
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (!window.__metaPixelBooted) {
                window.__metaPixelBooted = true;
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              }
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <PixelRouteTracker />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <BoostCompanion />
        <Footer />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
