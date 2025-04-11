// src/app/registry/text-components.ts
import TypewriterPreview from "../components/ui/text/typewriter/PreviewCode";
import TypewriterInstallation from "../components/ui/text/typewriter/InstallationCode";
import TypewriterComponent from "../components/ui/text/typewriter/ComponentCode";
import TypewriterUsage from "../components/ui/text/typewriter/UsageCode";
import TypewriterCustomization from "../components/ui/text/typewriter/CustomizationCode";

//faded-text
import FadedTextPreview from "../components/ui/text/faded-text/PreviewCode";
import FadedTextInstallation from "../components/ui/text/faded-text/InstallationCode";
import FadedTextComponent from "../components/ui/text/faded-text/ComponentCode";
import FadedTextUsage from "../components/ui/text/faded-text/UsageCode";
import FadedTextCustomization from "../components/ui/text/faded-text/CustomizationCode";

// Export the text components registry
export const textComponents = {
  typewriter: {
    preview: TypewriterPreview,
    installation: TypewriterInstallation,
    component: TypewriterComponent,
    usage: TypewriterUsage,
    customization: TypewriterCustomization,
  },
  "faded-text": {
    preview: FadedTextPreview,
    installation: FadedTextInstallation,
    component: FadedTextComponent,
    usage: FadedTextUsage,
    customization: FadedTextCustomization,
  },
  // Add more text components here as needed
};
