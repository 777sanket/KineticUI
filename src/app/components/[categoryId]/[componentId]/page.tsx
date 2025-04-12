// src/app/components/[categoryId]/[componentId]/page.tsx
import ComponentDetailPage from "../../ComponentDetailPage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({ params }: any) {
  return (
    <div className="px-4 md:px-12 py-10">
      <ComponentDetailPage
        categoryId={params.categoryId}
        componentId={params.componentId}
      />
    </div>
  );
}
