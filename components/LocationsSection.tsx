import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Compass } from "lucide-react";
import rawLocations from "@/data/locations.json";

export default function LocationsSection() {
  const locations = rawLocations;
  // Top 16 diverse locations for quick homepage scanning
  const featured = locations.slice(0, 16);

  return (
    <section id="locations" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A880] mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>City-Wide Coverage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141414] tracking-tight">
              Turnkey Modular Kitchens Across Mumbai
            </h2>
            <p className="mt-2 text-xs sm:text-sm lg:text-base text-stone-600 max-w-2xl leading-relaxed">
              Serving residential societies, standalone towers, and luxury penthouses across
              Western Suburbs, South Mumbai, and Central Suburbs.
            </p>
          </div>

          <Link
            href="/locations"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#141414] text-white text-xs sm:text-sm font-semibold hover:bg-stone-800 transition-all duration-200 shadow-sm shrink-0 active:scale-98"
          >
            <span>Explore All 50+ Localities Directory</span>
            <ArrowRight className="w-4 h-4 text-[#C5A880]" />
          </Link>
        </div>

        {/* Localities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {featured.map((loc) => (
            <Link
              key={loc.id}
              href={`/${loc.slug}`}
              className="group p-4 rounded-md border border-stone-200 hover-lift hover:border-[#141414] hover:bg-[#FAF8F5] transition-all duration-200 bg-white shadow-xs"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C5A880] block">
                    {loc.region}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#141414]">
                    {loc.name}
                  </h3>
                </div>
                <MapPin className="w-4 h-4 text-stone-400 group-hover:text-[#C5A880] transition-colors shrink-0" />
              </div>
              <p className="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed">
                {loc.landmarkContext}
              </p>
              <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-medium text-stone-700 group-hover:text-[#141414]">
                <span>View local designs</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Directory Banner */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-lg bg-[#FAF8F5] border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base sm:text-lg font-bold text-stone-900">
              Looking for your specific Mumbai neighbourhood?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Browse our complete searchable directory featuring 50 Mumbai localities with instant alphabetical and regional filters.
            </p>
          </div>
          <Link
            href="/locations"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-sm bg-[#C5A880] hover:bg-[#B38F5F] text-[#141414] font-semibold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap active:scale-98 shadow-sm"
          >
            Open Locations Directory (50 Localities)
          </Link>
        </div>
      </div>
    </section>
  );
}
