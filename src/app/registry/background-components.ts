// src/app/registry/background-components.ts
import GradientBackgroundPreview from "../components/ui/background/gradient-background/PreviewCode";
import GradientBackgroundInstallation from "../components/ui/background/gradient-background/InstallationCode";
import GradientBackgroundComponent from "../components/ui/background/gradient-background/ComponentCode";
import GradientBackgroundUsage from "../components/ui/background/gradient-background/UsageCode";
import GradientBackgroundCustomization from "../components/ui/background/gradient-background/CustomizationCode";

//wave-bg-1
import WaveBackgroundPreview from "../components/ui/background/wave-bg/PreviewCode";
import WaveBackgroundInstallation from "../components/ui/background/wave-bg/InstallationCode";
import WaveBackgroundComponent from "../components/ui/background/wave-bg/ComponentCode";
import WaveBackgroundUsage from "../components/ui/background/wave-bg/UsageCode";
import WaveBackgroundCustomization from "../components/ui/background/wave-bg/CustomizationCode";

//wave-bg-2
import WaveBackground2Preview from "../components/ui/background/wave-bg-2/PreviewCode";
import WaveBackground2Installation from "../components/ui/background/wave-bg-2/InstallationCode";
import WaveBackground2Component from "../components/ui/background/wave-bg-2/ComponentCode";
import WaveBackground2Usage from "../components/ui/background/wave-bg-2/UsageCode";
import WaveBackground2Customization from "../components/ui/background/wave-bg-2/CustomizationCode";

//wave-bg-3
import WaveBackground3Preview from "../components/ui/background/wave-bg-3/PreviewCode";
import WaveBackground3Installation from "../components/ui/background/wave-bg-3/InstallationCode";
import WaveBackground3Component from "../components/ui/background/wave-bg-3/ComponentCode";
import WaveBackground3Usage from "../components/ui/background/wave-bg-3/UsageCode";
import WaveBackground3Customization from "../components/ui/background/wave-bg-3/CustomizationCode";

// Export the background components registry
export const backgroundComponents = {
  "gradient-background": {
    preview: GradientBackgroundPreview,
    installation: GradientBackgroundInstallation,
    component: GradientBackgroundComponent,
    usage: GradientBackgroundUsage,
    customization: GradientBackgroundCustomization,
  },
  "wave-bg": {
    preview: WaveBackgroundPreview,
    installation: WaveBackgroundInstallation,
    component: WaveBackgroundComponent,
    usage: WaveBackgroundUsage,
    customization: WaveBackgroundCustomization,
  },
  "wave-bg-2": {
    preview: WaveBackground2Preview,
    installation: WaveBackground2Installation,
    component: WaveBackground2Component,
    usage: WaveBackground2Usage,
    customization: WaveBackground2Customization,
  },
  "wave-bg-3": {
    preview: WaveBackground3Preview,
    installation: WaveBackground3Installation,
    component: WaveBackground3Component,
    usage: WaveBackground3Usage,
    customization: WaveBackground3Customization,
  },
  // Add more background components here as needed
};
