import { FC } from "react";
import { textComponents } from "./text-components";
import { backgroundComponents } from "./background-components";
import { buttonComponents } from "./button-components";

// Define types for our component structure
export type ComponentType =
  | "preview"
  | "installation"
  | "component"
  | "usage"
  | "customization";

// Define registry categories type
export type RegistryCategories = "text" | "background" | "buttons";

// Create a type for the component registry
type ComponentRegistry = {
  [K in RegistryCategories]: {
    [componentId: string]: {
      [T in ComponentType]: FC<object>;
    };
  };
};

// Define the componentRegistry with proper types
export const componentRegistry: ComponentRegistry = {
  text: textComponents,
  background: backgroundComponents,
  buttons: buttonComponents,
  // Add more categories as needed
};

export function getComponent(
  categoryId: RegistryCategories,
  componentId: string,
  type: ComponentType
) {
  return componentRegistry[categoryId]?.[componentId]?.[type] || null;
}
