"use client";

import React, { useState, useEffect } from "react";
import { Phone, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past the first 200px
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden transition-all duration-300 ease-out transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-[#141414]/95 backdrop-blur-md border-t border-stone-800 px-3.5 py-2.5 shadow-2xl">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          <a
            href={SITE_CONFIG.telLink}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-white text-[#141414] font-semibold text-xs transition-transform active:scale-95 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Call Expert</span>
          </a>

          <a
            href="#enquire"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded bg-[#C5A880] text-[#141414] font-semibold text-xs transition-transform active:scale-95 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#141414]" />
            <span>Get 3D Quote</span>
          </a>
        </div>
      </div>
    </div>
  );
}
