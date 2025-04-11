// src/app/registry/background-components.ts
import GradientBackgroundPreview from "../components/ui/background/gradient-background/PreviewCode";
import GradientBackgroundInstallation from "../components/ui/background/gradient-background/InstallationCode";
import GradientBackgroundComponent from "../components/ui/background/gradient-background/ComponentCode";
import GradientBackgroundUsage from "../components/ui/background/gradient-background/UsageCode";
import GradientBackgroundCustomization from "../components/ui/background/gradient-background/CustomizationCode";

// Export the background components registry
export const backgroundComponents = {
  "gradient-background": {
    preview: GradientBackgroundPreview,
    installation: GradientBackgroundInstallation,
    component: GradientBackgroundComponent,
    usage: GradientBackgroundUsage,
    customization: GradientBackgroundCustomization,
  },
  // Add more background components here as needed
};
