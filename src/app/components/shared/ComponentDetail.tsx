"use client";

import { useState } from "react";
import { getComponent } from "../../registry";
import { ComponentCategory } from "../../types";
import type { RegistryCategories, ComponentType } from "../../registry"; // Import the types
import ComponentJsonLd from "../SEO/ComponentJsonLd";

interface ComponentDetailProps {
  categories: ComponentCategory[];
  categoryId: string;
  componentId: string;
}

const ComponentDetail: React.FC<ComponentDetailProps> = ({
  categories,
  categoryId,
  componentId,
}) => {
  const [activeTab, setActiveTab] = useState<ComponentType>("preview");

  // Find the selected category and component data
  const category = categories.find((cat) => cat.id === categoryId);
  if (!category)
    return <div className="p-8">Select a component from the sidebar</div>;

  const component = category.components.find((comp) => comp.id === componentId);
  if (!component)
    return <div className="p-8">Select a component from the sidebar</div>;

  // Function to load the appropriate content based on the active tab
  const renderTabContent = () => {
    const validCategoryId = categoryId as RegistryCategories;

    const ComponentToRender = getComponent(
      validCategoryId,
      componentId,
      activeTab
    );

    if (!ComponentToRender) {
      return <div>Component not found</div>;
    }

    // Render the component with the appropriate wrapper based on the tab
    switch (activeTab) {
      case "preview":
        return (
          <div className="flex justify-center p-4 bg-gray-50 rounded-lg">
            <ComponentToRender />
          </div>
        );
      case "installation":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-3">Dependencies</h3>
            <ComponentToRender />
          </div>
        );
      case "component":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-3">Component Code</h3>
            <ComponentToRender />
          </div>
        );
      case "usage":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-3">Usage Example</h3>
            <ComponentToRender />
          </div>
        );
      case "customization":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-3">Customization Tips</h3>
            <div className="prose max-w-none">
              <ComponentToRender />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Add the JSON-LD component here */}
      {component && category && (
        <ComponentJsonLd component={component} categoryName={category.name} />
      )}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">{component.name}</h2>
          <p className="text-gray-600 mt-2">{component.description}</p>
        </div>

        <div className="border-b border-gray-200">
          <div className="flex flex-wrap">
            {[
              "preview",
              "installation",
              "component",
              "usage",
              "customization",
            ].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab as ComponentType)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">{renderTabContent()}</div>
      </div>
    </>
  );
};

export default ComponentDetail;
