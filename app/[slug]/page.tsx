import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroSection from "@/components/HeroSection";
import KitchenDesigns from "@/components/KitchenDesigns";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import EnquiryForm from "@/components/EnquiryForm";
import FaqSection from "@/components/FaqSection";
import { getAllLocations, getLocationBySlug } from "@/lib/locations";
import { SITE_CONFIG } from "@/lib/constants";
import { MapPin, Phone, ExternalLink, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

// Generate static params for all 50 Mumbai localities at build time
export async function generateStaticParams() {
  const locations = getAllLocations();
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

// Generate dynamic SEO metadata for each individual location
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams.slug);

  if (!location) {
    return {
      title: "Location Not Found",
      description: "The requested Mumbai modular kitchen service location could not be found.",
    };
  }

  const canonicalUrl = `${SITE_CONFIG.baseUrl}/${location.slug}`;

  return {
    title: location.seoTitle,
    description: location.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: location.seoTitle,
      description: location.metaDescription,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
          width: 1200,
          height: 630,
          alt: `Custom Modular Kitchen in ${location.name}, Mumbai`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.seoTitle,
      description: location.metaDescription,
      images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"],
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams.slug);

  if (!location) {
    notFound();
  }

  // Location-specific structured schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Modular Kitchen Design, Manufacturing and Installation",
    provider: {
      "@type": "HomeGoodsStore",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      telephone: SITE_CONFIG.phoneRaw,
      sameAs: [SITE_CONFIG.googleBusinessProfileUrl],
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${location.name}, Mumbai`,
    },
    description: location.metaDescription,
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-stone-200/80">
        <Breadcrumbs
          items={[
            { label: "Mumbai Locations", href: "/locations" },
            { label: `Modular Kitchen in ${location.name}` },
          ]}
        />
      </div>

      {/* Dynamic Location Hero */}
      <HeroSection location={location} />

      {/* Localized Design Context & Floorplan Consultation */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Localized Planning in {location.name}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141414] leading-snug">
                Modular Kitchen Solutions for Homes in {location.name}
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-stone-600 leading-relaxed">
                {location.landmarkContext}{" "}
                Whether you own a high-rise flat, an independent floor, or a newly redeveloped apartment
                in {location.name}, our kitchens are measured on-site with laser precision and manufactured
                in our automated factory to eliminate on-site carpentry dust.
              </p>

              {/* Popular Layouts for this Area */}
              <div className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 block mb-2">
                  Popular Layouts Configured for {location.name} Residences:
                </span>
                <div className="flex flex-wrap gap-2">
                  {location.popularLayouts.map((layout, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#FAF8F5] border border-stone-200 text-xs font-medium text-stone-800"
                    >
                      <Sparkles className="w-3 h-3 text-[#C5A880]" />
                      <span>{layout}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Local benefits checklist */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Doorstep Laser Survey in {location.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>35–45 Day Turnkey Handover</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>BWP Marine Core (IS:710 Certified)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Blum & Hettich Motion Hardware</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Callout Card */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-5 sm:p-7 lg:p-8 rounded-lg border border-stone-200 space-y-4 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
                Direct Coordination
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141414]">
                Book a Site Visit in {location.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Our spatial designers provide on-site laser measurements across PIN {location.pincode}{" "}
                and neighboring areas in {location.region}.
              </p>

              <div className="space-y-2.5 pt-1">
                <a
                  href={SITE_CONFIG.telLink}
                  className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-sm bg-[#141414] hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm active:scale-98"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </a>
                <a
                  href={SITE_CONFIG.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-sm border border-stone-300 hover:border-black bg-white text-stone-800 text-xs sm:text-sm font-medium transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                  <span>View Google Business Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Kitchen Designs Showcase */}
      <KitchenDesigns currentLocationName={location.name} />

      {/* Services Section */}
      <ServicesSection currentLocationName={location.name} />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Nearby Areas Deep-Linking Section */}
      {location.nearbyAreas && location.nearbyAreas.length > 0 && (
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-6 sm:mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880] block mb-1">
                  Local Connectivity
                </span>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#141414]">
                  Serving Neighbouring Areas Around {location.name}
                </h3>
              </div>
              <Link
                href="/locations"
                className="text-xs sm:text-sm font-semibold text-stone-900 hover:text-[#C5A880] flex items-center gap-1 transition-colors"
              >
                <span>View all 50 Mumbai localities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {location.nearbyAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/${area.slug}`}
                  className="p-3.5 sm:p-4 rounded border border-stone-200 hover-lift hover:border-[#141414] hover:bg-[#FAF8F5] transition-all duration-200 bg-white group shadow-xs"
                >
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
                    {location.region}
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-stone-900 group-hover:text-[#141414] block mt-0.5">
                    {area.name}
                  </span>
                  <span className="text-[11px] text-[#C5A880] mt-1.5 block font-medium group-hover:translate-x-0.5 transition-transform duration-200">
                    Kitchen designs →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry Form Pre-Configured for this Locality */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Transparent Turnkey Process</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141414]">
                Get a Customized Estimate for {location.name}
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-stone-600 leading-relaxed">
                Fill out the form to request a complimentary 3D elevation layout and material quotation.
                We coordinate site visits directly around your schedule in {location.name}.
              </p>

              <div className="p-4 rounded bg-white border border-stone-200 space-y-2 text-xs text-stone-600 shadow-xs">
                <div className="font-semibold text-stone-900 text-xs sm:text-sm">What We Bring:</div>
                <p>• Digital laser meters for millimetric wall and pipe scans.</p>
                <p>• Physical swatch kit with acrylic, matte PU, and ceramic samples.</p>
                <p>• Honest advice on modular layouts suitable for Mumbai high-rise kitchens.</p>
              </div>

              <div className="pt-2">
                <a
                  href={SITE_CONFIG.telLink}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#141414] hover:text-[#C5A880] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call {SITE_CONFIG.phoneDisplay} to discuss immediately</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EnquiryForm initialLocationName={location.name} sourceContext={`Landing Page: ${location.name}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Localized FAQ Section */}
      <FaqSection currentLocationName={location.name} />
    </div>
  );
}
