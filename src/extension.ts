import * as vscode from "vscode";
import { generate } from "@graphql-codegen/cli";
import { createContext } from "./helpers/createContext";
import { LoggingService } from "./helpers/LoggingService";
import { customExtensionConfig } from "./helpers/customExtensionConfig";

export function activate(context: vscode.ExtensionContext) {
  const loggingService = new LoggingService();
  loggingService.logInfo(`Extension Name: Graphql Codegen VS-Code`);

  vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
    const customConfig = customExtensionConfig(loggingService);
    if(customConfig && customConfig.onSave) {
      generateTypes(loggingService);
    }
	});

  let disposable = vscode.commands.registerCommand(
    "extension.graphQLCodegen",
    () => {
      vscode.window.showInformationMessage("Hello Vikva!");
      generateTypes(loggingService);
    }
  );
  context.subscriptions.push(disposable);
}

/**
 * Runs codegen with input config
 */

const generateTypes = (loggingService: LoggingService) => {
  loggingService.logInfo("Started parsing config");
  const configContext = createContext(loggingService);
  loggingService.logInfo("Parsed config", configContext);
  return generate(configContext, true)
    .then(() => loggingService.logInfo("Code generation successful"))
    .catch(async (error: any) => {
      loggingService.logError('Code generation failed', error);
      throw error;
    });
};

export function deactivate() {}
