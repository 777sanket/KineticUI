// Text Components
import TypewriterPreview from "../components/ui/text/typewriter/PreviewCode";
import TypewriterInstallation from "../components/ui/text/typewriter/InstallationCode";
import TypewriterComponent from "../components/ui/text/typewriter/ComponentCode";
import TypewriterUsage from "../components/ui/text/typewriter/UsageCode";
import TypewriterCustomization from "../components/ui/text/typewriter/CustomizationCode";

// Background Components
import GradientBackgroundPreview from "../components/ui/background/gradient-background/PreviewCode";
import GradientBackgroundInstallation from "../components/ui/background/gradient-background/InstallationCode";
import GradientBackgroundComponent from "../components/ui/background/gradient-background/ComponentCode";
import GradientBackgroundUsage from "../components/ui/background/gradient-background/UsageCode";
import GradientBackgroundCustomization from "../components/ui/background/gradient-background/CustomizationCode";

// Export a registry object for component lookup
export const componentRegistry = {
  text: {
    typewriter: {
      preview: TypewriterPreview,
      installation: TypewriterInstallation,
      component: TypewriterComponent,
      usage: TypewriterUsage,
      customization: TypewriterCustomization,
    },
    // Add more text components here
  },
  background: {
    "gradient-background": {
      preview: GradientBackgroundPreview,
      installation: GradientBackgroundInstallation,
      component: GradientBackgroundComponent,
      usage: GradientBackgroundUsage,
      customization: GradientBackgroundCustomization,
    },
    // Add more background components here
  },
  // Add more categories here
};

// A function to get a specific component by category, component id, and type
export function getComponent(
  categoryId: string,
  componentId: string,
  type: string
) {
  return componentRegistry[categoryId]?.[componentId]?.[type] || null;
}
