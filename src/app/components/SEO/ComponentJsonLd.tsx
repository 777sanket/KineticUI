// src/app/components/SEO/ComponentJsonLd.tsx
"use client";

import { ComponentData } from "../../types";

interface ComponentJsonLdProps {
  component: ComponentData;
  categoryName: string;
}

export default function ComponentJsonLd({
  component,
  categoryName,
}: ComponentJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${component.name} | Kinetic UI`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: component.description,
    category: categoryName,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
