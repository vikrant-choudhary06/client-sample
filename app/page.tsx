import React from "react";
import HeroSection from "@/components/HeroSection";
import KitchenDesigns from "@/components/KitchenDesigns";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import BenefitsSection from "@/components/BenefitsSection";
import LocationsSection from "@/components/LocationsSection";
import EnquiryForm from "@/components/EnquiryForm";
import FaqSection from "@/components/FaqSection";
import { Phone, MapPin, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Core Advantages */}
      <BenefitsSection />

      {/* Kitchen Designs & Layouts */}
      <KitchenDesigns />

      {/* Services Breakdown */}
      <ServicesSection />

      {/* Step-by-Step Turnkey Process */}
      <ProcessSection />

      {/* Material & Finish Showcase */}
      <GallerySection />

      {/* 50+ Mumbai Locations Grid */}
      <LocationsSection />

      {/* Interactive Consultation Form Section */}
      <section className="py-12 sm:py-18 lg:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Begin Your Kitchen Journey</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141414] leading-tight">
                Schedule an In-Home Laser Measurement & 3D Review
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-stone-600 leading-relaxed">
                Whether you are moving into a newly handed-over flat or modernizing a 20-year-old
                civil kitchen, our spatial team brings sample boards and laser tools directly to your home.
              </p>

              <div className="p-4 sm:p-5 rounded-md bg-[#FAF8F5] border border-stone-200 space-y-2.5 sm:space-y-3 text-xs text-stone-700 shadow-xs">
                <div className="font-semibold text-stone-900 text-xs sm:text-sm">
                  What Happens During Consultation:
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>Precise millimeter digital laser measurements of your kitchen space.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>Review of high-gloss acrylic, matte PU, and veneer samples under your room's natural lighting.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>Transparent itemized quotation based on your exact layout and internal fittings.</span>
                </div>
              </div>

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
              <EnquiryForm sourceContext="Homepage Consultation" />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FaqSection />
    </>
  );
}
