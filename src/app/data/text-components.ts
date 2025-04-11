import { ComponentData } from "../types";

const textComponents: ComponentData[] = [
  {
    id: "typewriter",
    name: "Typewriter Text",
    description:
      "A text component that types out characters one by one with a blinking cursor effect.",
    previewPath: "/ui/text/typewriter/PreviewCode",
    files: {
      installationPath: "/ui/text/typewriter/InstallationCode",
      componentPath: "/ui/text/typewriter/ComponentCode",
      usagePath: "/ui/text/typewriter/UsageCode",
      customizationPath: "/ui/text/typewriter/CustomizationCode",
    },
  },
  // Add more text components here as needed
];

export default textComponents;
