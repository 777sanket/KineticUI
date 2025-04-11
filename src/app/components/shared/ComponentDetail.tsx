// // src/app/components/shared/ComponentDetail.tsx
// "use client";

// import { useState } from "react";
// import CodeBlock from "./CodeBlock";
// import { ComponentCategory } from "../../types";

// // Import all component files statically
// import TypewriterPreview from "../ui/text/typewriter/PreviewCode";
// import TypewriterInstallation from "../ui/text/typewriter/InstallationCode";
// import TypewriterComponent from "../ui/text/typewriter/ComponentCode";
// import TypewriterUsage from "../ui/text/typewriter/UsageCode";
// import TypewriterCustomization from "../ui/text/typewriter/CustomizationCode";

// import GradientBackgroundPreview from "../ui/background/gradient-background/PreviewCode";
// import GradientBackgroundInstallation from "../ui/background/gradient-background/InstallationCode";
// import GradientBackgroundComponent from "../ui/background/gradient-background/ComponentCode";
// import GradientBackgroundUsage from "../ui/background/gradient-background/UsageCode";
// import GradientBackgroundCustomization from "../ui/background/gradient-background/CustomizationCode";

// // Component registry to map IDs to components
// const componentRegistry = {
//   text: {
//     typewriter: {
//       preview: TypewriterPreview,
//       installation: TypewriterInstallation,
//       component: TypewriterComponent,
//       usage: TypewriterUsage,
//       customization: TypewriterCustomization,
//     },
//   },
//   background: {
//     "gradient-background": {
//       preview: GradientBackgroundPreview,
//       installation: GradientBackgroundInstallation,
//       component: GradientBackgroundComponent,
//       usage: GradientBackgroundUsage,
//       customization: GradientBackgroundCustomization,
//     },
//   },
// };

// interface ComponentDetailProps {
//   categories: ComponentCategory[];
//   categoryId: string;
//   componentId: string;
// }

// const ComponentDetail: React.FC<ComponentDetailProps> = ({
//   categories,
//   categoryId,
//   componentId,
// }) => {
//   const [activeTab, setActiveTab] = useState("preview");

//   // Find the selected category and component
//   const category = categories.find((cat) => cat.id === categoryId);
//   if (!category)
//     return <div className="p-8">Select a component from the sidebar</div>;

//   const component = category.components.find((comp) => comp.id === componentId);
//   if (!component)
//     return <div className="p-8">Select a component from the sidebar</div>;

//   // Get component from registry
//   const componentModules = componentRegistry[categoryId]?.[componentId];
//   if (!componentModules)
//     return <div className="p-8">Component not found in registry</div>;

//   // Function to load the appropriate content based on the active tab
//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "preview": {
//         const PreviewComponent = componentModules.preview;
//         return (
//           <div className="flex justify-center p-4 bg-gray-50 rounded-lg">
//             <PreviewComponent />
//           </div>
//         );
//       }
//       case "installation": {
//         const InstallationCode = componentModules.installation;
//         return (
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Dependencies</h3>
//             <InstallationCode />
//           </div>
//         );
//       }
//       case "component": {
//         const ComponentCode = componentModules.component;
//         return (
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Component Code</h3>
//             <ComponentCode />
//           </div>
//         );
//       }
//       case "usage": {
//         const UsageCode = componentModules.usage;
//         return (
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Usage Example</h3>
//             <UsageCode />
//           </div>
//         );
//       }
//       case "customization": {
//         const CustomizationCode = componentModules.customization;
//         return (
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Customization Tips</h3>
//             <div className="prose max-w-none">
//               <CustomizationCode />
//             </div>
//           </div>
//         );
//       }
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="border border-gray-200 rounded-lg overflow-hidden">
//       <div className="bg-sky-300 p-4 border-b border-gray-200">
//         <h2 className="text-2xl font-bold text-gray-800">{component.name}</h2>
//         <p className="text-black mt-2">{component.description}</p>
//       </div>

//       <div className="border-b border-gray-200">
//         <div className="flex flex-wrap">
//           {[
//             "preview",
//             "installation",
//             "component",
//             "usage",
//             "customization",
//           ].map((tab) => (
//             <button
//               key={tab}
//               className={`px-4 py-2 ${
//                 activeTab === tab
//                   ? "bg-blue-500 text-white"
//                   : "text-gray-600 hover:bg-sky-300"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="p-6">{renderTabContent()}</div>
//     </div>
//   );
// };

// export default ComponentDetail;

"use client";

import { useState } from "react";
import { getComponent } from "../../registry";
import { ComponentCategory } from "../../types";

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
  const [activeTab, setActiveTab] = useState("preview");

  // Find the selected category and component data
  const category = categories.find((cat) => cat.id === categoryId);
  if (!category)
    return <div className="p-8">Select a component from the sidebar</div>;

  const component = category.components.find((comp) => comp.id === componentId);
  if (!component)
    return <div className="p-8">Select a component from the sidebar</div>;

  // Function to load the appropriate content based on the active tab
  const renderTabContent = () => {
    // Get the appropriate component from the registry
    const ComponentToRender = getComponent(categoryId, componentId, activeTab);

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
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">{renderTabContent()}</div>
    </div>
  );
};

export default ComponentDetail;
