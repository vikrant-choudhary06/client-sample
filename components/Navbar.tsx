"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MapPin, Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top micro-bar with subtle animation */}
      <div className="bg-[#141414] text-[#E7E2D8] text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="tracking-wide text-stone-300">
              Turnkey Modular Kitchens Across <strong className="text-white">50+ Mumbai Localities</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-stone-300 text-[11px] sm:text-xs">
            <a
              href={SITE_CONFIG.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors duration-200"
            >
              <MapPin className="w-3 h-3 text-[#C5A880]" />
              <span className="hidden xs:inline">Google Profile</span>
              <span className="xs:hidden">GBP</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>
            <span className="text-stone-700">|</span>
            <a
              href={SITE_CONFIG.telLink}
              className="hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors duration-200"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`bg-[#FAF8F5]/95 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled
            ? "border-stone-300 shadow-md py-0"
            : "border-stone-200/80 py-0.5 sm:py-1"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group select-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#141414] text-[#FAF8F5] flex items-center justify-center font-serif text-lg sm:text-xl tracking-wider border border-[#C5A880]/40 group-hover:border-[#C5A880] transition-colors duration-300 shadow-sm">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl tracking-wide font-bold text-[#141414] group-hover:text-stone-800 transition-colors">
                  Miiday Studio
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-stone-500 font-medium">
                  Modular Kitchens
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links (Laptop / PC) */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-sm font-medium text-stone-700">
              <Link
                href="/"
                className="relative py-1 hover:text-[#141414] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#C5A880] after:transition-all after:duration-300"
              >
                Home
              </Link>
              <Link
                href="/#designs"
                className="relative py-1 hover:text-[#141414] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#C5A880] after:transition-all after:duration-300"
              >
                Kitchen Designs
              </Link>
              <Link
                href="/#services"
                className="relative py-1 hover:text-[#141414] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#C5A880] after:transition-all after:duration-300"
              >
                Services
              </Link>
              <Link
                href="/#process"
                className="relative py-1 hover:text-[#141414] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#C5A880] after:transition-all after:duration-300"
              >
                How It Works
              </Link>
              <Link
                href="/locations"
                className="relative py-1 hover:text-[#141414] transition-colors duration-200 flex items-center gap-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#C5A880] after:transition-all after:duration-300"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Mumbai Locations</span>
                <span className="px-1.5 py-0.5 text-[10px] bg-stone-200 text-stone-800 rounded-full font-bold">
                  50+
                </span>
              </Link>
              <Link
                href="/#faq"
                className="relative py-1 hover:text-[#141414] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#C5A880] after:transition-all after:duration-300"
              >
                FAQ
              </Link>
            </nav>

            {/* Action CTAs (Laptop / Tablet) */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={SITE_CONFIG.telLink}
                className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-sm border border-stone-300 text-stone-800 text-xs sm:text-sm font-medium hover:border-[#141414] hover:bg-stone-100 transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="hidden md:inline">Call Now</span>
                <span className="md:hidden">Call</span>
              </a>

              <a
                href="#enquire"
                className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-sm bg-[#141414] text-[#FAF8F5] text-xs sm:text-sm font-semibold hover:bg-stone-800 transition-all duration-200 shadow-sm active:scale-98"
              >
                <span>Get 3D Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </a>
            </div>

            {/* Mobile / Small Tablet Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={SITE_CONFIG.telLink}
                className="sm:hidden p-2 rounded-sm bg-[#141414] text-white active:scale-95 transition-transform"
                aria-label="Direct Phone Call"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-sm text-stone-800 hover:bg-stone-200/80 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 transition-transform duration-200 rotate-90" />
                ) : (
                  <Menu className="w-6 h-6 transition-transform duration-200" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Animated Slide-Down Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[97px] bottom-0 bg-[#141414]/60 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`bg-[#FAF8F5] border-b border-stone-300 px-5 pt-4 pb-8 shadow-2xl max-h-[85vh] overflow-y-auto transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-6"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col space-y-1 text-base font-medium text-stone-800 divide-y divide-stone-200/60">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 flex items-center justify-between hover:text-black transition-colors"
            >
              <span>Home</span>
              <span className="text-xs text-stone-400">01</span>
            </Link>
            <Link
              href="/#designs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 flex items-center justify-between hover:text-black transition-colors"
            >
              <span>Kitchen Designs & Layouts</span>
              <span className="text-xs text-stone-400">02</span>
            </Link>
            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 flex items-center justify-between hover:text-black transition-colors"
            >
              <span>Services & Manufacturing</span>
              <span className="text-xs text-stone-400">03</span>
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 flex items-center justify-between hover:text-black transition-colors"
            >
              <span>How It Works (4 Steps)</span>
              <span className="text-xs text-stone-400">04</span>
            </Link>
            <Link
              href="/locations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 flex items-center justify-between text-[#141414] font-bold transition-colors"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880]" />
                <span>All 50+ Mumbai Locations</span>
              </span>
              <span className="px-2 py-0.5 text-xs bg-[#141414] text-white rounded-full">
                Directory
              </span>
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 flex items-center justify-between hover:text-black transition-colors"
            >
              <span>Frequently Asked Questions</span>
              <span className="text-xs text-stone-400">06</span>
            </Link>
          </nav>

          <div className="pt-6 flex flex-col gap-3">
            <a
              href={SITE_CONFIG.telLink}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-sm bg-[#141414] text-white font-semibold text-sm active:scale-98 transition-all shadow-md"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href={SITE_CONFIG.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-sm border border-stone-300 text-stone-800 font-medium text-xs bg-white hover:bg-stone-50 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Google Business Profile (Verified)</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
