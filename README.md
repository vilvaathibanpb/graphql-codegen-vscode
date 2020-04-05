# VS code extension: graphql-codegen - README

[GraphQL Codegen](https://graphql-code-generator.com/) is one of the best tools to achieve E2E type safe GraphQL apps. This project is a simple VS code extensions that makes it easier to use the tool in VS code.

## Features

This VS code extension is built on top of graphql-codegen and hence inherits almost all the features of graphql-codegen.

Few key features are:

* All the dependencies and plugins are pre-installed and hence it requires **zero configuration** to start with

* Once you are familiar with the graphql-codegen tool, you may install the VS code extension, add config file and start using the benefits already.

#### Extension Configuration 

* Extension configuration. The following two things can be configured by creating a JSON file `codegen.vscode.json`:
    * By default the extension looks for `codegen.yml` at the root directory. To use any other file as config file, add `"configFile": "newFilePath"` tot he JSON file
    * By default, the types/code are generated only on Keyboard shortcuts or Command as mentioned below. To generate types on every save of the files, add `"onSave": true` to the JSON.

    #### Sample codegen.vscode.json

    ```sh
    {
        "configFile": "./customFile.yml",
        "onSave": true
    }
    ```

* It has a dedicated Output screen with `Info` / `Error` Logs with time and detailed message about all the steps. It will be easy to debug based on which step it fails. 

    #### Success logs

    ![Success Info](https://raw.githubusercontent.com/vilvaathibanpb/graphql-codegen-vscode/master/images/success_info.png)

    #### Error logs

    ![Error Log](https://raw.githubusercontent.com/vilvaathibanpb/graphql-codegen-vscode/master/images/error_log.png)

* Types/code can be generated or updated in one of the following methods: 

    * Press `Ctrl`+`F1` for Windows or `CMD`+`F1` for Mac

    * Enabling `onSave` flag in the `extension config` will generate types automatically on every save. Useful during development phase

    * Press `CMD/Ctrl`+`Shift`+`P` and select `GraphQL Codegen` command

    #### VS Code Command
    ![VS Code Command](https://raw.githubusercontent.com/vilvaathibanpb/graphql-codegen-vscode/master/images/command.png)


## Requirements

Basic knowledge of GraphQL Code generator is required to make the best use of this extension.

## Known Issues / TODO

* Add support for `custom-plugins` 
* Limit `onSave` type generation to specific file extension, 
* Bundle using `webpack` to reduce the size and startup time

## Release Notes

This is the initial release of the extension. I expect the users to send feedback and file issues to the repo. Also, contributions are welcome.

### 1.0.0

Initial release

### License

MIT License