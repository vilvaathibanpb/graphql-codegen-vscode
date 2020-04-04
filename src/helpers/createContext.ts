import * as fs from "fs";
import * as yaml from "js-yaml";
import { currentDirectory } from "./getCurrentDirectory";
import { modifyOutputFilePath } from "./modifyOutputFilePath";
import { modifySchemaAndDocumentsPath } from "./modifySchemaAndDocumentsPath";
import { LoggingService } from "./LoggingService";
import { customExtensionConfig } from "./customExtensionConfig";
import { getAbsolutePath } from "./getAbsoluteUrl";

/**
 * Create config JSON from input config
 */

export const createContext = (loggingService: LoggingService) => {
  try {
    const configFilePath =
      customExtensionConfig(loggingService) &&
      customExtensionConfig(loggingService).configFile
        ? getAbsolutePath(customExtensionConfig(loggingService).configFile)
        : currentDirectory + "/codegen.yml";
    const configFileContents = fs.readFileSync(configFilePath, "utf8");
    let config = yaml.safeLoad(configFileContents);
    config = modifyOutputFilePath(config);
    config = modifySchemaAndDocumentsPath(config);
    return config;
  } catch (error) {
    loggingService.logError("Invalid config. Check your config file", error);
  }
};
