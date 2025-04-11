// src/app/registry/button-components.ts
import AnimatedBorderButtonPreview from "../components/ui/buttons/animated-border/PreviewCode";
import AnimatedBorderButtonInstallation from "../components/ui/buttons/animated-border/InstallationCode";
import AnimatedBorderButtonComponent from "../components/ui/buttons/animated-border/ComponentCode";
import AnimatedBorderButtonUsage from "../components/ui/buttons/animated-border/UsageCode";
import AnimatedBorderButtonCustomization from "../components/ui/buttons/animated-border/CustomizationCode";

export const buttonComponents = {
  "animated-border": {
    preview: AnimatedBorderButtonPreview,
    installation: AnimatedBorderButtonInstallation,
    component: AnimatedBorderButtonComponent,
    usage: AnimatedBorderButtonUsage,
    customization: AnimatedBorderButtonCustomization,
  },
  // Add more button components here as needed
};
