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
  {
    id: "faded-text",
    name: "Faded Text",
    description:
      "A text component that smoothly fades in and out with customizable timing.",
    previewPath: "/ui/text/faded-text/PreviewCode",
    files: {
      installationPath: "/ui/text/faded-text/InstallationCode",
      componentPath: "/ui/text/faded-text/ComponentCode",
      usagePath: "/ui/text/faded-text/UsageCode",
      customizationPath: "/ui/text/faded-text/CustomizationCode",
    },
  },

  // Add more text components here as needed
];

export default textComponents;
