import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: "Miiday Studio | Modular Kitchen Design, Manufacturing & Installation in Mumbai",
    template: "%s | Miiday Studio",
  },
  description:
    "Architectural modular kitchens in Mumbai. 100% boiling waterproof HDHMR & marine ply, German soft-close hardware, 3D visualization, and turnkey factory installation with 10-year warranty.",
  keywords: [
    "modular kitchen mumbai",
    "modular kitchen design mumbai",
    "modular kitchen manufacturer mumbai",
    "turnkey kitchen installation mumbai",
    "german modular kitchens mumbai",
    "waterproof modular kitchen mumbai",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.baseUrl }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Miiday Studio | Modular Kitchen Design & Turnkey Installation Mumbai",
    description:
      "Precision-manufactured modular kitchens for Mumbai homes. German hardware, boiling waterproof core boards, and 10-year warranty.",
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Miiday Studio Architectural Modular Kitchens Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miiday Studio | Modular Kitchens Mumbai",
    description:
      "Precision-manufactured modular kitchens for Mumbai homes. German hardware and 100% waterproof materials.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Verified business structured data schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    "@id": `${SITE_CONFIG.baseUrl}/#business`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    telephone: SITE_CONFIG.phoneRaw,
    sameAs: [SITE_CONFIG.googleBusinessProfileUrl],
    priceRange: "₹₹₹",
    description:
      "Modular kitchen design, precision factory manufacturing, and turnkey installation across Mumbai, Maharashtra.",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.serviceCity,
      addressRegion: SITE_CONFIG.serviceState,
      addressCountry: SITE_CONFIG.serviceCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.0760",
      longitude: "72.8777",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Mumbai",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:30",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#141414] antialiased selection:bg-[#C5A880] selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
