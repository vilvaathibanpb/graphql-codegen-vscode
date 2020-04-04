import * as vscode from "vscode";

/**
   * Current workspace directory
   */
  
export const currentDirectory =
  vscode.workspace.workspaceFolders &&
  vscode.workspace.workspaceFolders[0].uri.fsPath;

