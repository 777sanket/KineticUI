"use client";

import { useState, useEffect } from "react";
import ComponentDetail from "./shared/ComponentDetail";
import categories from "../data/categories";

interface ComponentDetailPageProps {
  categoryId: string;
  componentId: string;
}

export default function ComponentDetailPage({
  categoryId,
  componentId,
}: ComponentDetailPageProps) {
  // Add JSON-LD structured data for SEO
  const category = categories.find((cat) => cat.id === categoryId);
  const component = category?.components.find(
    (comp) => comp.id === componentId
  );

  useEffect(() => {
    // This will update the title for better SEO
    if (component && category) {
      document.title = `${component.name} | Kinetic UI Components`;
    }
  }, [component, category]);

  return (
    <>
      {/* Add structured data for SEO */}
      {component && category && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              category: category.name,
            }),
          }}
        />
      )}

      <ComponentDetail
        categories={categories}
        categoryId={categoryId}
        componentId={componentId}
      />
    </>
  );
}
