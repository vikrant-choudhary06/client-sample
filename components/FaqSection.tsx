"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS_HOMEPAGE } from "@/lib/constants";

interface FaqSectionProps {
  currentLocationName?: string;
  customFaqs?: Array<{ q: string; a: string }>;
}

export default function FaqSection({ currentLocationName, customFaqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const defaultFaqs = customFaqs || [
    ...FAQS_HOMEPAGE,
    ...(currentLocationName
      ? [
          {
            q: `Can your team visit my apartment in ${currentLocationName} for on-site measurement?`,
            a: `Yes, absolutely. Our design engineers regularly conduct site surveys across ${currentLocationName} and nearby localities in Mumbai. We carry digital laser measuring devices and physical material swatch kits directly to your doorstep.`,
          },
          {
            q: `How do you handle society lift & delivery permissions in ${currentLocationName}?`,
            a: `Our logistics team coordinates directly with your residential society management. Because all cabinetry is flat-packed in modular protective cartons, modules easily fit into standard passenger and service elevators without causing lobby congestion or noise complaints.`,
          },
        ]
      : []),
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A880] mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarity & Guidance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#141414] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            {currentLocationName
              ? `Everything you need to know about designing and installing your modular kitchen in ${currentLocationName}, Mumbai.`
              : "Clear answers regarding modular kitchen planning, pricing, warranties, and turnkey execution in Mumbai."}
          </p>
        </div>

        <div className="space-y-3.5">
          {defaultFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-md border border-stone-200/90 shadow-sm overflow-hidden transition-all duration-200 hover:border-stone-400"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-4.5 flex items-center justify-between gap-4 font-medium text-stone-900 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg leading-snug">{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center bg-stone-100 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#141414] text-white" : "text-stone-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Smooth CSS Grid Accordion Transition */}
                <div className={`accordion-content ${isOpen ? "is-open" : ""}`}>
                  <div className="accordion-inner">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
