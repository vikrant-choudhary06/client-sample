import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaBreadcrumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_CONFIG.baseUrl,
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.label,
      ...(item.href ? { item: `${SITE_CONFIG.baseUrl}${item.href}` } : {}),
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaBreadcrumbs,
  };

  return (
    <nav aria-label="Breadcrumb" className="py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center flex-wrap gap-1 sm:gap-1.5 text-xs text-stone-500">
        <li className="flex items-center gap-1 shrink-0">
          <Link
            href="/"
            className="hover:text-stone-900 transition-colors flex items-center gap-1 py-0.5"
          >
            <Home className="w-3.5 h-3.5 text-stone-400" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-stone-900 transition-colors text-stone-600 py-0.5"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-stone-900 font-medium truncate max-w-[180px] xs:max-w-[260px] sm:max-w-none">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
