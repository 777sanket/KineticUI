// src/app/registry/index.ts
import { textComponents } from "./text-components";
import { backgroundComponents } from "./background-components";
import { buttonComponents } from "./button-components";

export const componentRegistry = {
  text: textComponents,
  background: backgroundComponents,
  buttons: buttonComponents,
  // Add more categories as needed
};

export function getComponent(
  categoryId: string,
  componentId: string,
  type: string
) {
  return componentRegistry[categoryId]?.[componentId]?.[type] || null;
}
