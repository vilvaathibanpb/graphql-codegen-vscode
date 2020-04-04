import * as fs from "fs";
import * as yaml from "js-yaml";
import { currentDirectory } from "./getCurrentDirectory";
import { LoggingService } from "./LoggingService";

export const customExtensionConfig = (loggingService: LoggingService) => {
    try{
        const extensionConfig = fs.readFileSync(
            currentDirectory + "/codegen.vscode.json",
            "utf8"
          );
        loggingService.logInfo('GraphQL Codegen VS Code extension config is loaded');

          return yaml.safeLoad(extensionConfig);
    }catch(e) {
        loggingService.logWarning('GraphQL Codegen VS Code extension config file is not present or invalid');
        return null;
    }
}