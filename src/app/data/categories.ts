import { ComponentCategory } from "../types";
import textComponents from "./text-components";
import backgroundComponents from "./background-components";

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
  // Add more categories here as needed
];

export default categories;
