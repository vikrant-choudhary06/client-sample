import React from "react";
import { ShieldCheck, Droplet, Sparkles, Sliders, Layers, Award } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Droplet,
      title: "Engineered for Mumbai Coastal Humidity",
      desc: "Mumbai's high humidity causes ordinary particleboard to swell. We build exclusively with IS:710 Boiling Waterproof (BWP) Marine Ply and high-density moisture-resistant HDHMR, sealed with PUR waterproof glue.",
    },
    {
      icon: Sliders,
      title: "German Motion Hardware",
      desc: "Fitted with genuine Blum, Hettich, or Hafele soft-closing drawer runners, concealed hinges, and bi-fold lift-up mechanisms tested for over 200,000 smooth opening cycles.",
    },
    {
      icon: Layers,
      title: "Zero-Joint Laser Edge Banding",
      desc: "Our automated factory machines bond edge-bands seamlessly, creating an impenetrable barrier against steam, boiling water spills, and termite penetration.",
    },
    {
      icon: Sparkles,
      title: "Clean, Dust-Free Installation",
      desc: "No cutting sawdust or hazardous glue fumes in your home. All modules are pre-cut and pre-bored at our facility and assembled on-site in just 3 to 5 working days.",
    },
    {
      icon: Award,
      title: "10-Year Structural Warranty",
      desc: "Complete peace of mind. We stand firmly behind our cabinet carcasses and hardware with structured warranties and complimentary alignment inspections.",
    },
    {
      icon: ShieldCheck,
      title: "Direct-From-Manufacturer Pricing",
      desc: "By designing, cutting, and installing directly with our in-house craftsmen, we eliminate retail dealer margins and deliver luxury materials at transparent rates.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880] block mb-2">
            The Quality Benchmark
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141414] tracking-tight">
            Why Mumbai Homeowners Choose Miiday Studio
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed">
            Civil carpentry deteriorates within 3 to 5 years under Mumbai's moisture.
            Our factory-manufactured modular systems provide decade-long resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-lg bg-[#FAF8F5] border border-stone-200/90 hover-lift hover:border-stone-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#141414] flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6 text-[#C5A880]" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#141414] mb-2.5">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {b.desc}
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
