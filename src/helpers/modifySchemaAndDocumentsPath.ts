import { getAbsolutePath } from "./getAbsoluteUrl";

/**
   * Modifies Schema/Documents File paths to absolute paths
   *
   * @param config Input config as JSON
   */

export const modifySchemaAndDocumentsPath = (config: any) => {
  if (typeof config !== "object") {
    return config; // Recursion break point
  }

  for (const key in config) {
    config[key] = modifySchemaAndDocumentsPath(config[key]);

    // Modify Schema Path including multiple schema and globs
    if (key === "schema") {
      const filePath = config[key];
      // Modify if its not URL
      if (typeof filePath === "string" && !filePath.includes("http")) {
        config[key] = getAbsolutePath(filePath);
      }
    }

    // Modify Documents Path
    if (key === "documents") {
      let documentPath = config[key];

      if (typeof documentPath === "string") {
        config[key] = getAbsolutePath(documentPath);
      } else if (Array.isArray(documentPath)) {
        config[key] = documentPath.map(document => {
          if (typeof document === "string") {
            return getAbsolutePath(document);
          }
          return document;
        });
      }
    }
  }
  return config;
};
