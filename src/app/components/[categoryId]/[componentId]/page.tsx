// src/app/components/[categoryId]/[componentId]/page.tsx
import { Metadata } from "next";
import categories from "@/app/data/categories";

// This generates dynamic metadata for each component page
export async function generateMetadata({ params }): Promise<Metadata> {
  const { categoryId, componentId } = params;

  const category = categories.find((cat) => cat.id === categoryId);
  const component = category?.components.find(
    (comp) => comp.id === componentId
  );

  if (!component) {
    return {
      title: "Component Not Found | Kinetic UI",
      description: "The requested component could not be found.",
    };
  }

  return {
    title: `${component.name} | Kinetic UI Components`,
    description: component.description,
    openGraph: {
      title: `${component.name} | Kinetic UI`,
      description: component.description,
      images: [
        {
          url: `/images/components/${categoryId}/${componentId}.png`,
          width: 1200,
          height: 630,
          alt: `${component.name} Component Preview`,
        },
      ],
    },
  };
}
