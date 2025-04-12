import { Metadata } from "next";
import categories from "@/app/data/categories";
import ComponentDetailPage from "../../ComponentDetailPage";

// Generate static paths for all components
export async function generateStaticParams() {
  const paths = [];

  categories.forEach((category) => {
    category.components.forEach((component) => {
      paths.push({
        categoryId: category.id,
        componentId: component.id,
      });
    });
  });

  return paths;
}

// Generate metadata for each component page
export async function generateMetadata({
  params,
}: {
  params: { categoryId: string; componentId: string };
}): Promise<Metadata> {
  const category = categories.find((cat) => cat.id === params.categoryId);
  if (!category) return { title: "Component Not Found" };

  const component = category.components.find(
    (comp) => comp.id === params.componentId
  );
  if (!component) return { title: "Component Not Found" };

  return {
    title: `${component.name} | Kinetic UI Components`,
    description: component.description,
    openGraph: {
      title: `${component.name} | Kinetic UI Components`,
      description: component.description,
      url: `https://kinetic-ui.vercel.app/components/${params.categoryId}/${params.componentId}`,
      siteName: "Kinetic UI",
      images: [
        {
          url: "/og-image.png", // Create this image in your public folder
          width: 1200,
          height: 630,
          alt: `${component.name} Component Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${component.name} | Kinetic UI Components`,
      description: component.description,
    },
  };
}

// Fixed component definition to avoid type errors
export default function ComponentPage({
  params,
}: {
  params: { categoryId: string; componentId: string };
}) {
  return (
    <div className="px-4 md:px-12 py-10">
      <ComponentDetailPage
        categoryId={params.categoryId}
        componentId={params.componentId}
      />
    </div>
  );
}
