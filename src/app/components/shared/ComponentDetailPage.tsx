"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import categories from "@/app/data/categories";
import ComponentDetail from "@/app/components/shared/ComponentDetail";

interface ComponentDetailPageProps {
  categoryId: string;
  componentId: string;
}

export default function ComponentDetailPage({
  categoryId,
  componentId,
}: ComponentDetailPageProps) {
  const category = categories.find((cat) => cat.id === categoryId);
  const component = category?.components.find(
    (comp) => comp.id === componentId
  );

  if (!category || !component) {
    return <div className="p-8">Component not found</div>;
  }

  return (
    <div className="p-6">
      {/* Breadcrumb for navigation and SEO */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <ChevronRight size={14} className="mx-2" />
        <Link href="/components" className="hover:text-blue-600">
          Components
        </Link>
        <ChevronRight size={14} className="mx-2" />
        <Link
          href={`/components/${categoryId}`}
          className="hover:text-blue-600"
        >
          {category.name}
        </Link>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-gray-700">{component.name}</span>
      </div>

      <h1 className="text-3xl font-bold mb-2">{component.name}</h1>
      <p className="text-gray-600 mb-8">{component.description}</p>

      <ComponentDetail
        categories={categories}
        categoryId={categoryId}
        componentId={componentId}
      />

      {/* Add JSON-LD structured data for this component */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: `${component.name} | Kinetic UI`,
            description: component.description,
            applicationCategory: "Web Component",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </div>
  );
}
