export interface ComponentFile {
  content: string;
}

export interface ComponentData {
  id: string;
  name: string;
  description: string;
  previewPath: string;
  files: {
    installationPath: string;
    componentPath: string;
    usagePath: string;
    customizationPath: string;
  };
}

export interface ComponentCategory {
  name: string;
  id: string;
  components: ComponentData[];
}
