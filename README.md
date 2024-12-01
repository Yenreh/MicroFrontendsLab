# MicroFrontendsLab


## Setup
There is a script for executing the microfrontends.
* For Windows
```bash
run_all_windows.bat
```
* For Linux
```bash
sh run_all_linux.sh
```
## Create React Basic App with Webpack
Instructions for creating a basic webpack application.
```bash
npx create-react-app <app-name>
cd <app-name>
npm i -D webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader css-loader
```

### Create webpack.config.js in the root directory
```javascript
// home-app/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
// import ModuleFederationPlugin from webpack
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// import dependencies from package.json, which includes react and react-dom
const { dependencies } = require("./package.json");

module.exports = {
    entry: "./src/entry.js", // using /entry.js file in previous step
    mode: "development",
    devServer: {
        port: "<port>",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "<app-name>",
            filename: "remoteEntry.js", // output a js file
            exposes: { // to expose the application
                "./<app-entrypoint>": "./src/App",
            },
            shared: { // and shared
                ...dependencies, // some other dependencies
                react: { // react
                    singleton: true,
                    requiredVersion: dependencies["react"],
                },
                "react-dom": { // react-dom
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                },
            },
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    target: "web",
};
```
## Change package.json
```json
{
  "scripts": {
    "start": "webpack serve",
    "build": "webpack --mode production"
  }
}
```

## Add entry.js in src directory
```javascript
import('./index.js');
```

## Last step add entrypoint in shel app webpack.config.js
```
{
    remotes: {
        "<app-name>": "<app-name>@http://localhost:3001/remoteEntry.js",
    }
}
```

