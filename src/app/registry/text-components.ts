// src/app/registry/text-components.ts
import TypewriterPreview from "../components/ui/text/typewriter/PreviewCode";
import TypewriterInstallation from "../components/ui/text/typewriter/InstallationCode";
import TypewriterComponent from "../components/ui/text/typewriter/ComponentCode";
import TypewriterUsage from "../components/ui/text/typewriter/UsageCode";
import TypewriterCustomization from "../components/ui/text/typewriter/CustomizationCode";

// Export the text components registry
export const textComponents = {
  typewriter: {
    preview: TypewriterPreview,
    installation: TypewriterInstallation,
    component: TypewriterComponent,
    usage: TypewriterUsage,
    customization: TypewriterCustomization,
  },
  // Add more text components here as needed
};
