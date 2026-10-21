import React from "react";
import { SERVICES } from "@/lib/constants";
import { Ruler, Factory, Wrench, RefreshCw, CheckCircle2 } from "lucide-react";

interface ServicesSectionProps {
  currentLocationName?: string;
}

export default function ServicesSection({ currentLocationName }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Ruler":
        return <Ruler className="w-6 h-6 text-[#C5A880]" />;
      case "Factory":
        return <Factory className="w-6 h-6 text-[#C5A880]" />;
      case "Wrench":
        return <Wrench className="w-6 h-6 text-[#C5A880]" />;
      case "RefreshCw":
      default:
        return <RefreshCw className="w-6 h-6 text-[#C5A880]" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880] block mb-2">
            End-To-End Craftsmanship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141414] tracking-tight">
            Comprehensive Modular Kitchen Services
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed">
            {currentLocationName
              ? `From site surveys in ${currentLocationName} to custom factory production and precision fitting.`
              : "One unified team handling your design, factory fabrication, and clean on-site installation with complete accountability."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-lg border border-stone-200/90 p-6 sm:p-8 shadow-sm hover-lift hover:border-stone-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#141414] flex items-center justify-center mb-5 sm:mb-6 shadow-sm">
                  {getIcon(srv.icon)}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141414]">
                  {srv.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A880] mt-1 mb-3">
                  {srv.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 block mb-2.5">
                  Scope & Deliverables:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                  {srv.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
