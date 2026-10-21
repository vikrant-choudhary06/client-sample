import React from "react";
import Link from "next/link";
import { Phone, MapPin, ShieldCheck, Clock, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { LocationData } from "@/types/location";

interface HeroSectionProps {
  location?: LocationData;
}

export default function HeroSection({ location }: HeroSectionProps) {
  const isLocationPage = !!location;

  return (
    <section className="relative bg-[#FAF8F5] pt-8 pb-14 sm:pt-12 sm:pb-18 lg:pt-16 lg:pb-24 border-b border-stone-200 overflow-hidden">
      {/* Subtle architectural ambient background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F3EFE6]/40 pointer-events-none -skew-x-12 translate-x-20" />
      <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#EFECE1]/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Context Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100/90 border border-stone-200 text-xs font-medium text-stone-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse"></span>
              {isLocationPage ? (
                <span className="truncate max-w-[280px] xs:max-w-none">
                  Serving <strong className="text-stone-900">{location.name}</strong> & {location.region} • PIN {location.pincode}
                </span>
              ) : (
                <span>Turnkey Modular Kitchens Across 50+ Mumbai Localities</span>
              )}
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#141414] leading-[1.14]">
              {isLocationPage ? (
                <>
                  Custom Modular Kitchens in{" "}
                  <span className="underline decoration-[#C5A880] decoration-wavy decoration-1 underline-offset-8">
                    {location.name}
                  </span>
                  , Mumbai
                </>
              ) : (
                <>
                  Architectural Modular Kitchens.{" "}
                  <span className="italic font-normal text-stone-700 block mt-1">
                    Precision Built for Mumbai Homes.
                  </span>
                </>
              )}
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed max-w-2xl">
              {isLocationPage ? (
                location.landmarkContext
                  ? `${location.landmarkContext} Engineered specifically for Mumbai's coastal climate with 100% boiling waterproof HDHMR / BWP plywood, German motion hardware, and dust-free on-site assembly.`
                  : `Tailored modular kitchen design, manufacturing, and precision installation for homeowners in ${location.name}, Mumbai. 100% boiling waterproof cores and 10-year warranty.`
              ) : (
                "From initial 3D visualization and laser measurement to CNC factory fabrication and 3-day on-site installation. Waterproof marine core boards, European soft-close hardware, and bespoke finishes."
              )}
            </p>

            {/* Key feature checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% BWP Marine Core</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>German Soft-Close</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>35–45 Days Turnkey</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Dust Assembly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Photorealistic 3D</span>
              </div>
            </div>

            {/* CTAs with Mobile-First Full-Width & Desktop Inline Styling */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={SITE_CONFIG.telLink}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#141414] hover:bg-stone-800 text-white font-medium text-sm transition-all duration-200 shadow-md group active:scale-98"
              >
                <Phone className="w-4 h-4 text-[#C5A880] group-hover:scale-110 transition-transform duration-200" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href="#enquire"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm border border-stone-300 hover:border-[#141414] bg-white text-stone-900 font-medium text-sm transition-all duration-200 active:scale-98 shadow-sm"
              >
                <span>Request 3D Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </a>

              <a
                href={SITE_CONFIG.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-sm text-stone-600 hover:text-stone-900 text-xs font-medium transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Google Profile</span>
              </a>
            </div>

            {/* Nearby localities cross-linking if on a location page */}
            {isLocationPage && location.nearbyAreas && location.nearbyAreas.length > 0 && (
              <div className="pt-4 border-t border-stone-200/80">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Nearby {location.region} Localities:
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs">
                  {location.nearbyAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/${area.slug}`}
                      className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200/80 transition-colors"
                    >
                      {area.name}
                    </Link>
                  ))}
                  <Link
                    href="/locations"
                    className="px-2.5 py-1 rounded bg-[#C5A880]/15 text-stone-900 hover:bg-[#C5A880]/25 font-semibold"
                  >
                    View all 50 localities →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame with hover zoom */}
              <div className="relative rounded-lg overflow-hidden border border-stone-300 shadow-xl bg-stone-900 aspect-[4/3] sm:aspect-[4/5] group">
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt={
                    isLocationPage
                      ? `Modern Modular Kitchen Installation in ${location.name}, Mumbai`
                      : "Architectural Modular Kitchen Design by Miiday Studio Mumbai"
                  }
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Bottom floating badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-md bg-white/95 backdrop-blur-sm border border-stone-200 shadow-lg text-[#141414]">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#141414] pb-1 border-b border-stone-200">
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Turnkey Factory Execution</span>
                    </span>
                    <span className="text-[11px] text-stone-500 font-mono">BWP IS:710</span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] text-stone-600">
                    <div>
                      <span className="block font-semibold text-stone-900 text-xs sm:text-sm">3-Day</span>
                      <span>On-Site Assembly</span>
                    </div>
                    <div>
                      <span className="block font-semibold text-stone-900 text-xs sm:text-sm">10 Years</span>
                      <span>Cabinet Warranty</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offset decorative badge */}
              <div className="hidden sm:flex absolute -top-4 -left-4 bg-[#141414] text-white p-3 sm:p-3.5 rounded shadow-lg border border-[#C5A880]/30 items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C5A880]" />
                <div className="text-left">
                  <div className="text-xs font-semibold">100% Water-Resistant</div>
                  <div className="text-[10px] text-stone-400">Engineered for Mumbai Monsoons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
