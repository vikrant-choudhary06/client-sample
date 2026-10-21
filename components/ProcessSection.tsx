import React from "react";
import { Compass, Palette, Cog, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Laser Survey & Needs Analysis",
      desc: "Our spatial designer visits your Mumbai residence with precision digital laser meters to map pipe entries, electrical conduits, window reveals, and wall plumb.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Photorealistic 3D & Swatch Curation",
      desc: "We engineer your layout in high-fidelity 3D, allowing you to walk through cabinet elevations, select finishes (Acrylic, PU, Ceramic, Quartz), and review exact storage configurations.",
      icon: Palette,
    },
    {
      num: "03",
      title: "Automated Factory CNC Fabrication",
      desc: "Cabinet carcases are cut with German CNC machinery and edge-banded with hot PUR waterproof glue. No manual hammering or dusty cutting happens on your floor.",
      icon: Cog,
    },
    {
      num: "04",
      title: "Clean 3 to 5 Day Site Assembly",
      desc: "Pre-fabricated flatpack modules arrive securely wrapped. Certified installers assemble, level, fit countertops, integrate appliances, and hand over a ready-to-cook kitchen.",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="process" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880] block mb-2">
            The Execution Blueprint
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141414] tracking-tight">
            How We Deliver Your Modular Kitchen
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed">
            A disciplined engineering process designed to eliminate on-site carpentry delays,
            dust pollution, and hidden cost surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="relative p-6 sm:p-7 rounded-lg bg-[#FAF8F5] border border-stone-200/80 hover-lift hover:border-stone-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C5A880]">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-stone-200/80 flex items-center justify-center text-stone-800 shadow-xs">
                      <Icon className="w-5 h-5 text-stone-800" />
                    </div>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#141414] mb-2 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
