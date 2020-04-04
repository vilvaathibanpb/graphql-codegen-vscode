# VS code extenion: graphql-codegen - README

[GraphQL Codegen](https://graphql-code-generator.com/) is one of the best tools to achieve E2E type safe GraphQL apps. This project is a simple VS code extensions that makes it easier to use the tool in VS code.

## Features

This VS code extension is built on top of graphql-codegen and hence inherits almost all the features of graphql-codegen.

Few key features are:

* All the dependencies and plugins are pre-installed and hence it requires **zero configuration** to start with

* Once you are familiar with the graphql-codegen tool, you may install the VS code extension, add config file and start using the benefits already.

* It has a dedicated Output screen with `Info` / `Error` Logs with time and detailed message about all the steps. It will be easy to debug based on which step it fails. 

\!\[Success Info\]\(images/success_info.png\)

\!\[Error Log\]\(https://github.com/vilvaathibanpb/graphql-codegen-vscode/blob/master/images/error_log.png\)

* Types/code can be generated or updated in one of the following methods: 

    * Press `Ctrl`+`F1` for Windows or `CMD`+`F1` for Mac

    * Enabling `onSave` flag in the `extension config` will generate types automatically on every save. Useful during development phase

    * Press `CMD/Ctrl`+`Shift`+`P` and select `GraphQL Codegen` command

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

-----------------------------------------------------------------------------------------------------------

## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
