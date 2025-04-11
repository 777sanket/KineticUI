import { ComponentCategory } from "../types";
import textComponents from "./text-components";
import backgroundComponents from "./background-components";
import buttonComponents from "./button-components";

const categories: ComponentCategory[] = [
  {
    name: "Text",
    id: "text",
    components: textComponents,
  },
  {
    name: "Background",
    id: "background",
    components: backgroundComponents,
  },
  {
    name: "Buttons",
    id: "buttons",
    components: buttonComponents,
  },
  // Add more categories here as needed
];

export default categories;
