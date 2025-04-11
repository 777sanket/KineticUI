"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import categories from "@/app/data/categories";
import ComponentDetail from "@/app/components/shared/ComponentDetail";

interface ComponentCategoryPageProps {
  categoryId: string;
}

export default function ComponentCategoryPage({
  categoryId,
}: ComponentCategoryPageProps) {
  const category = categories.find((cat) => cat.id === categoryId);
  const [activeComponent, setActiveComponent] = useState(
    category?.components[0]?.id || ""
  );
  const router = useRouter();

  if (!category) {
    return <div className="p-8">Category not found</div>;
  }

  // When component selection changes, update the URL for better SEO
  const handleComponentChange = (componentId: string) => {
    setActiveComponent(componentId);
    router.push(`/components/${categoryId}/${componentId}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{category.name} Components</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Available Components</h2>
        <div className="flex flex-wrap gap-2">
          {category.components.map((component) => (
            <button
              key={component.id}
              className={`px-4 py-2 rounded-md ${
                activeComponent === component.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => handleComponentChange(component.id)}
            >
              {component.name}
            </button>
          ))}
        </div>
      </div>

      <ComponentDetail
        categories={categories}
        categoryId={categoryId}
        componentId={activeComponent}
      />
    </div>
  );
}
