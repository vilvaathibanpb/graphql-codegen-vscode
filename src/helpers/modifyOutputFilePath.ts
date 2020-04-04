import { getAbsolutePath } from "./getAbsoluteUrl";
import { Types } from "@graphql-codegen/plugin-helpers";

/**
   * Modifies Output/Generated File paths to absolute paths
   *
   * @param config Input config as JSON
   */

export const modifyOutputFilePath = (config: Types.Config) => {
    const { generates } = config;
    for (const path in generates) {
      generates[getAbsolutePath(path)] = generates[path];
      delete generates[path];
    }
    config.generates = generates;
    return config;
  };