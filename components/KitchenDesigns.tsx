"use client";

import React, { useState } from "react";
import { KITCHEN_DESIGNS } from "@/lib/constants";
import { Check, ArrowRight, Sparkles } from "lucide-react";

interface KitchenDesignsProps {
  currentLocationName?: string;
}

export default function KitchenDesigns({ currentLocationName }: KitchenDesignsProps) {
  const [activeTab, setActiveTab] = useState(KITCHEN_DESIGNS[0].id);
  const selectedDesign =
    KITCHEN_DESIGNS.find((d) => d.id === activeTab) || KITCHEN_DESIGNS[0];

  return (
    <section id="designs" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Ergonomic Spatial Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141414] tracking-tight">
            Popular Modular Kitchen Layouts
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed">
            {currentLocationName
              ? `Tailored to popular apartment floor plans and high-rise layouts across ${currentLocationName}, Mumbai.`
              : "Calibrated to optimize floor plans in Mumbai apartments, balancing work triangles, prep zones, and heavy storage capacity."}
          </p>
        </div>

        {/* Layout Navigation Tabs with smooth touch scrolling on mobile */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto scrollbar-none pb-3 mb-8 sm:mb-12 px-1">
          {KITCHEN_DESIGNS.map((design) => {
            const isActive = design.id === activeTab;
            return (
              <button
                key={design.id}
                onClick={() => setActiveTab(design.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-sm text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-[#141414] text-white shadow-md scale-100"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-black"
                }`}
              >
                {design.name}
              </button>
            );
          })}
        </div>

        {/* Selected Layout Feature Card with Keyframe FadeIn */}
        <div
          key={selectedDesign.id}
          className="bg-[#FAF8F5] rounded-lg border border-stone-200 overflow-hidden shadow-sm animate-fadeIn"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Visual with hover zoom */}
            <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[380px] lg:min-h-[480px] overflow-hidden group">
              <img
                src={selectedDesign.imageUrl}
                alt={selectedDesign.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
              <div className="absolute top-4 left-4 bg-[#141414]/90 text-white text-xs px-3 py-1.5 rounded backdrop-blur-sm shadow">
                {selectedDesign.name}
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-[#C5A880]">
                    Layout Profile
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141414] mt-1">
                    {selectedDesign.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-stone-700 mt-1 italic">
                    "{selectedDesign.tagline}"
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {selectedDesign.description}
                </p>

                <div className="p-3.5 bg-stone-100/90 rounded border border-stone-200/90">
                  <span className="text-xs font-semibold text-stone-900 block mb-1">
                    Recommended For:
                  </span>
                  <span className="text-xs text-stone-700 leading-normal">
                    {selectedDesign.bestFor}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 block mb-2">
                    Key Engineering Features:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                    {selectedDesign.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200 flex items-center justify-between">
                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#141414] hover:text-[#C5A880] transition-colors group"
                >
                  <span>Customize this layout in your home</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
