import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationSearch from "@/components/LocationSearch";
import EnquiryForm from "@/components/EnquiryForm";
import { getAllLocations } from "@/lib/locations";
import { SITE_CONFIG } from "@/lib/constants";
import { MapPin, Phone, ExternalLink, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Modular Kitchen Locations in Mumbai (50+ Localities Directory)",
  description:
    "Explore all 50 Mumbai localities served by Miiday Studio. Modular kitchen design, manufacturing, and installation across Western Suburbs, South Mumbai, and Central Suburbs.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Mumbai Modular Kitchen Locations Directory | Miiday Studio",
    description:
      "Search modular kitchen design and installation services across 50 Mumbai neighbourhoods with instant local pages.",
    url: `${SITE_CONFIG.baseUrl}/locations`,
  },
};

export default function LocationsDirectoryPage() {
  const locations = getAllLocations();

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="border-b border-stone-200/80 bg-white">
        <Breadcrumbs items={[{ label: "Mumbai Locations Directory" }]} />
      </div>

      {/* Directory Hero Header */}
      <section className="pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-18 bg-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 border border-stone-200 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Greater Mumbai Service Coverage</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141414] tracking-tight">
              Mumbai Modular Kitchen Directory
            </h1>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-stone-600 leading-relaxed">
              Explore dynamic localized modular kitchen solutions tailored to individual Mumbai
              neighbourhoods. Use the search bar or regional filters below to view localized layout
              recommendations, nearby areas, and site consultation details.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-stone-600">
              <span className="flex items-center gap-1 font-semibold text-stone-900">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                50 Active Verified Localities
              </span>
              <span className="text-stone-300 hidden sm:inline">•</span>
              <span className="bg-stone-100 px-2 py-0.5 rounded text-stone-700">Western Suburbs</span>
              <span className="bg-stone-100 px-2 py-0.5 rounded text-stone-700">South Mumbai</span>
              <span className="bg-stone-100 px-2 py-0.5 rounded text-stone-700">Central Suburbs</span>
              <span className="bg-stone-100 px-2 py-0.5 rounded text-stone-700">Eastern Suburbs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Directory Grid Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LocationSearch initialLocations={locations} />
        </div>
      </section>

      {/* Directory Bottom Contact & Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
                Can't find your exact society?
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141414]">
                We Cover Every Residential Zone in Mumbai
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-stone-600 leading-relaxed">
                Even if your specific housing society or micro-enclave is not listed in this 50-locality sample,
                our design and installation crew covers all pin codes across Mumbai, Thane, and Navi Mumbai.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={SITE_CONFIG.telLink}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-sm bg-[#141414] text-white text-xs sm:text-sm font-semibold hover:bg-stone-800 transition-colors shadow-sm active:scale-98"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </a>
                <a
                  href={SITE_CONFIG.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-sm border border-stone-300 text-stone-800 text-xs sm:text-sm font-medium hover:border-black transition-colors bg-white shadow-xs"
                >
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                  <span>Google Business Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EnquiryForm sourceContext="Locations Directory" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
