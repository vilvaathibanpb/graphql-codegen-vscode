import { currentDirectory } from "./getCurrentDirectory";

/**
   * Append current working directory to the relative file path
   *
   * @param path The relative file path
   */
  
export const getAbsolutePath = (path: string) => {
  if (path.includes("./")) {
    path = currentDirectory + path.slice(1);
    return path;
  } else if (path[0] === "/") {
    path = currentDirectory + path;
    return path;
  }
  return currentDirectory + "/" + path;
};
