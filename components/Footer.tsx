import React from "react";
import Link from "next/link";
import { Phone, MapPin, ExternalLink, ShieldCheck, Clock, Award } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import rawLocations from "@/data/locations.json";

export default function Footer() {
  const featuredLocations = (rawLocations as Array<{ name: string; slug: string }>).slice(0, 16);

  return (
    <footer className="bg-[#121212] text-stone-300 border-t border-stone-800 pb-16 sm:pb-0">
      {/* Upper trust strip */}
      <div className="border-b border-stone-800/80 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#C5A880]" />
            </div>
            <div>
              <p className="font-semibold text-white">10-Year Cabinet Warranty</p>
              <p className="text-xs text-stone-400">Boiling waterproof marine ply & HDHMR</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#C5A880]" />
            </div>
            <div>
              <p className="font-semibold text-white">Turnkey 35–45 Day Handover</p>
              <p className="text-xs text-stone-400">Factory CNC precision, 3-day site assembly</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#C5A880]" />
            </div>
            <div>
              <p className="font-semibold text-white">European Motion Hardware</p>
              <p className="text-xs text-stone-400">Lifetime warranty Blum & Hettich fittings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand Info */}
          <div className="sm:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#FAF8F5] text-[#121212] flex items-center justify-center font-serif text-lg font-bold shadow-xs">
                M
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                Miiday Studio
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              Specialized in end-to-end modular kitchen design, precision factory manufacturing,
              and turnkey installation across Mumbai. Built specifically to withstand coastal
              humidity with zero-joint edge banding and boiling waterproof core materials.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={SITE_CONFIG.telLink}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#FAF8F5] text-[#121212] text-xs font-semibold hover:bg-stone-200 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={SITE_CONFIG.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm border border-stone-700 text-stone-300 text-xs font-medium hover:border-stone-500 hover:text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Google Business Profile</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white mb-3 sm:mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Architectural 3D Design
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  CNC Precision Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Turnkey Kitchen Installation
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Civil Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link href="/#designs" className="hover:text-white transition-colors">
                  Parallel & Island Kitchens
                </Link>
              </li>
              <li>
                <Link href="/#designs" className="hover:text-white transition-colors">
                  L-Shaped & U-Shaped Kitchens
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white mb-3 sm:mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors font-medium text-[#C5A880]">
                  All 50+ Mumbai Locations →
                </Link>
              </li>
              <li>
                <Link href="/#designs" className="hover:text-white transition-colors">
                  Popular Layouts
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">
                  Manufacturing Process
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Common Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Mumbai Localities Preview */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white mb-3 sm:mb-4">
              Popular Localities
            </h3>
            <ul className="space-y-1.5 text-xs text-stone-400">
              {featuredLocations.slice(0, 8).map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/${loc.slug}`}
                    className="hover:text-amber-200 transition-colors flex items-center gap-1.5"
                  >
                    <span>•</span>
                    <span>Modular Kitchen in {loc.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/locations"
                  className="text-amber-400/90 hover:text-amber-300 font-semibold"
                >
                  View all 50 localities directory »
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Scalable Locations Link Cloud */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-stone-800/80">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 sm:gap-3 mb-3">
            <span className="text-xs uppercase tracking-wider text-stone-400 font-medium">
              Mumbai Service Coverage (Sample of 50 Localities • Expandable to 700+):
            </span>
            <Link
              href="/locations"
              className="text-xs text-[#C5A880] hover:underline flex items-center gap-1 transition-colors"
            >
              <span>Search full directory index</span>
              <span>→</span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[11px] text-stone-400">
            {featuredLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="px-2 py-1 rounded-sm bg-stone-900 hover:bg-stone-800 hover:text-stone-200 border border-stone-800 transition-colors"
              >
                {loc.name}
              </Link>
            ))}
            <Link
              href="/locations"
              className="px-2 py-1 rounded-sm bg-[#C5A880]/10 text-[#C5A880] border border-[#C5A880]/30 hover:bg-[#C5A880]/20 font-medium"
            >
              + 34 More Localities
            </Link>
          </div>
        </div>

        {/* Prototype Transparency Notice */}
        <div className="mt-6 sm:mt-8 p-3 rounded-sm bg-stone-900/60 border border-stone-800 text-[11px] text-stone-400 leading-normal">
          <strong className="text-stone-300">Prototype Notice:</strong> This website represents a
          high-performance Next.js prototype with dynamic location routing. Official inquiries,
          site measurements, and consultations are coordinated directly through our verified
          phone line{" "}
          <a href={SITE_CONFIG.telLink} className="text-stone-200 underline font-medium">
            {SITE_CONFIG.phoneDisplay}
          </a>{" "}
          and our{" "}
          <a
            href={SITE_CONFIG.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-200 underline font-medium"
          >
            Google Business Profile
          </a>
          .
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Miiday Studio. All rights reserved. Modular Kitchen Services.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-stone-400 transition-colors">
              Home
            </Link>
            <Link href="/locations" className="hover:text-stone-400 transition-colors">
              Locations Directory
            </Link>
            <a
              href={SITE_CONFIG.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-400 transition-colors"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
