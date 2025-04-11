import { Metadata } from "next";
import categories from "@/app/data/categories";
// import ComponentDetailPage from "@/app/components/ComponentDetailPage";
import ComponentDetailPage from "../../ComponentDetailPage";

// Generate static pages for all components
export async function generateStaticParams() {
  interface Path {
    categoryId: string;
    componentId: string;
  }

  const paths: Path[] = [];

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
    title: `${component.name} | ${category.name} Components`,
    description: component.description,
    openGraph: {
      title: `${component.name} | Kinetic UI Components`,
      description: component.description,
      url: `https://Kinetic-ui.vercel.app/components/${params.categoryId}/${params.componentId}`,
    },
  };
}

export default function ComponentPage({
  params,
}: {
  params: { categoryId: string; componentId: string };
}) {
  return (
    <ComponentDetailPage
      categoryId={params.categoryId}
      componentId={params.componentId}
    />
  );
}
