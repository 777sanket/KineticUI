import { Metadata } from "next";
import categories from "@/app/data/categories";
// import ComponentCategoryPage from "../ComponentCategoryPage";
import ComponentCategoryPage from "../ComponentCategoryPage";

// Generate static pages for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    categoryId: category.id,
  }));
}

// Generate metadata for each category page
export async function generateMetadata({
  params,
}: {
  params: { categoryId: string };
}): Promise<Metadata> {
  const category = categories.find((cat) => cat.id === params.categoryId);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Components`,
    description: `Explore our collection of ${category.name.toLowerCase()} components for your Next.js and React applications.`,
    openGraph: {
      title: `${category.name} Components | Kinetic UI`,
      description: `Explore our collection of ${category.name.toLowerCase()} components for your Next.js and React applications.`,
    },
  };
}

export default function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  return <ComponentCategoryPage categoryId={params.categoryId} />;
}
