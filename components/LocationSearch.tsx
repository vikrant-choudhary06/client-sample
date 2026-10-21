"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, MapPin, X, ArrowUpRight, Filter } from "lucide-react";
import { LocationData } from "@/types/location";

interface LocationSearchProps {
  initialLocations: LocationData[];
}

export default function LocationSearch({ initialLocations }: LocationSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  // Distinct regions
  const regions = useMemo(() => {
    const set = new Set<string>();
    initialLocations.forEach((loc) => {
      if (loc.region) set.add(loc.region);
    });
    return ["All", ...Array.from(set).sort()];
  }, [initialLocations]);

  // Available initial letters
  const alphabet = useMemo(() => {
    const letters = new Set<string>();
    initialLocations.forEach((loc) => {
      letters.add(loc.name.charAt(0).toUpperCase());
    });
    return Array.from(letters).sort();
  }, [initialLocations]);

  // Filtered list
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return initialLocations
      .filter((loc) => {
        // Region filter
        if (selectedRegion !== "All" && loc.region !== selectedRegion) {
          return false;
        }

        // Letter filter
        if (selectedLetter && loc.name.charAt(0).toUpperCase() !== selectedLetter) {
          return false;
        }

        // Search text
        if (!q) return true;
        return (
          loc.name.toLowerCase().includes(q) ||
          loc.region.toLowerCase().includes(q) ||
          loc.pincode.includes(q) ||
          loc.city.toLowerCase().includes(q) ||
          loc.landmarkContext.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [initialLocations, searchQuery, selectedRegion, selectedLetter]);

  // Alphabetical groupings
  const grouped = useMemo(() => {
    const map: Record<string, LocationData[]> = {};
    filtered.forEach((loc) => {
      const letter = loc.name.charAt(0).toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(loc);
    });
    return map;
  }, [filtered]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedRegion("All");
    setSelectedLetter(null);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Search Input Bar with Smooth Focus & Transitions */}
      <div className="bg-white p-4 sm:p-6 rounded-lg border border-stone-200/90 shadow-sm space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-stone-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by locality, region, or pincode (e.g. Andheri, Bandra, 400050)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 sm:pl-12 pr-10 py-3 sm:py-3.5 rounded-sm border border-stone-300 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#141414] focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 transition-colors"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Region Filter Buttons: Scrollable on mobile, wrapping on tablet/desktop */}
        <div className="flex items-center gap-2 pt-1 text-xs overflow-x-auto scrollbar-none pb-1">
          <span className="text-stone-500 flex items-center gap-1 font-medium shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Region:</span>
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-sm transition-all duration-200 font-medium ${
                  selectedRegion === reg
                    ? "bg-[#141414] text-white shadow-sm"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-black"
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Alphabet jump bar with touch-friendly targets */}
        <div className="flex items-center gap-1 pt-2 border-t border-stone-100 text-xs overflow-x-auto scrollbar-none pb-1">
          <span className="text-stone-500 font-medium shrink-0 mr-1">A–Z Index:</span>
          <button
            onClick={() => setSelectedLetter(null)}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all duration-150 shrink-0 ${
              selectedLetter === null
                ? "bg-[#C5A880] text-[#141414] shadow-sm"
                : "text-stone-600 hover:bg-stone-100"
            }`}
          >
            All
          </button>
          <div className="flex items-center gap-1 shrink-0">
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
                className={`min-w-[28px] h-7 px-1.5 flex items-center justify-center rounded text-[11px] font-semibold transition-all duration-150 ${
                  selectedLetter === letter
                    ? "bg-[#141414] text-white shadow-sm"
                    : "text-stone-600 hover:bg-stone-200"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs sm:text-sm text-stone-600">
        <div>
          Showing <strong className="text-stone-900">{filtered.length}</strong> of{" "}
          <strong>{initialLocations.length}</strong> Mumbai localities
          {selectedRegion !== "All" && ` in ${selectedRegion}`}
          {selectedLetter && ` starting with "${selectedLetter}"`}
        </div>

        {(searchQuery || selectedRegion !== "All" || selectedLetter) && (
          <button
            onClick={resetFilters}
            className="text-xs text-[#C5A880] hover:underline font-semibold flex items-center gap-1 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset all filters</span>
          </button>
        )}
      </div>

      {/* Localities Directory Grid Grouped by Letter */}
      {filtered.length === 0 ? (
        <div className="p-10 sm:p-14 text-center bg-white rounded-lg border border-stone-200 shadow-sm animate-fadeIn">
          <MapPin className="w-10 h-10 text-stone-300 mx-auto mb-3" />
          <h3 className="font-serif text-lg font-bold text-stone-800">
            No Mumbai localities match your search
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-sm mx-auto leading-relaxed">
            Try checking your spelling or reset the region filter. Our design team serves all
            residential addresses across Greater Mumbai.
          </p>
          <button
            onClick={resetFilters}
            className="mt-4 px-4 py-2 rounded bg-[#141414] hover:bg-stone-800 text-white text-xs font-semibold transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-8 sm:space-y-10">
          {Object.keys(grouped)
            .sort()
            .map((letter) => (
              <div key={letter} className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-sm bg-[#141414] text-[#FAF8F5] flex items-center justify-center font-serif text-base font-bold shadow-sm">
                    {letter}
                  </span>
                  <div className="h-[1px] flex-1 bg-stone-200" />
                  <span className="text-xs text-stone-400 font-mono">
                    {grouped[letter].length} {grouped[letter].length === 1 ? "area" : "areas"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
                  {grouped[letter].map((loc) => (
                    <Link
                      key={loc.id}
                      href={`/${loc.slug}`}
                      className="group p-4 bg-white rounded-md border border-stone-200/90 hover-lift hover:border-[#141414] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C5A880]">
                            {loc.region}
                          </span>
                          <span className="text-[10px] text-stone-400 font-mono">
                            PIN {loc.pincode}
                          </span>
                        </div>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-[#141414] group-hover:text-black flex items-center justify-between">
                          <span>{loc.name}</span>
                          <ArrowUpRight className="w-4 h-4 text-stone-300 group-hover:text-[#141414] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </h4>
                        <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                          {loc.landmarkContext}
                        </p>
                      </div>

                      <div className="mt-3.5 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-600">
                        <span className="text-stone-400">Custom layouts</span>
                        <span className="font-medium text-stone-900 group-hover:underline">
                          View details →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
