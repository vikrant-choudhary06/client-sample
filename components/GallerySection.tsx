import React from "react";
import { Sparkles } from "lucide-react";

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Monolithic Quartz Island & Smoked Glass",
      finish: "Matte Charcoal PU & Natural Quartz",
      category: "Island Layout",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Scandi Minimalist Parallel Kitchen",
      finish: "Anti-Fingerprint Warm White Acrylic",
      category: "Parallel Layout",
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Natural Walnut Veneer & Brass Hardware",
      finish: "Bookmatched Veneer with Polyurethane Sealer",
      category: "L-Shaped Layout",
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Handleless J-Pull High Storage Kitchen",
      finish: "German Gola Profile with Satin Laminates",
      category: "Modern High-Rise",
      img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Architectural Ceramic Slabs & Hidden Hood",
      finish: "Heat-Proof Sintered Porcelain benchtops",
      category: "Luxury Duplex",
      img: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Fluted Oak Wall Cabinetry with Warm LED",
      finish: "Fluted Natural Oak & Black Aluminum Profiles",
      category: "Open Studio",
      img: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A880] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Material & Finish Gallery</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141414] tracking-tight">
              Craftsmanship & Material Finishes
            </h2>
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-stone-600 max-w-md leading-relaxed">
            Explore our architectural palettes — from resilient anti-fingerprint acrylics and
            lacquered PU finishes to sintered stone countertops and warm timber veneers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-lg overflow-hidden bg-stone-900 border border-stone-200/90 aspect-[4/3] shadow-sm hover-lift hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#C5A880] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold leading-snug group-hover:text-amber-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  {item.finish}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
