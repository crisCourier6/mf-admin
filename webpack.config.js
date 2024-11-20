const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");
const { hostname } = require("os");
const { Output } = require("@mui/icons-material");
const dotenv = require("dotenv")
const webpack = require("webpack")
dotenv.config()
        
        module.exports = {
          plugins: [
            new webpack.DefinePlugin({
              "process.env.REACT_APP_GATEWAY_URL": JSON.stringify(process.env.REACT_APP_GATEWAY_URL),
            }),
            new HtmlWebpackPlugin({
              template: "./public/index.html",
            }),
            new ModuleFederationPlugin({
              name: "EyesFoodAdmin", // Aqui se define el nombre de la aplicación
              remotes: {
                // NGINX
                // MFACC: `mf_accounts@http://localhost:8081/mf-accounts/remoteEntry.js`, // Nombre de la aplicación hijo + @http://ip-MF-Hijo:puerto-MF-Hijo/RemoteEntry.js
                // MFFOOD: "mf_food_profile@http://localhost:8081/mf-food-profile/remoteEntry.js",
                // MFUSER: "mf_user_profile@http://localhost:8081/mf-user-profile/remoteEntry.js",
                // MFEDIT: "mf_food_edits@http://localhost:8081/mf-food-edits/remoteEntry.js",
                // MFEXPERT: "mf_expert_profile@http://localhost:8081/mf-expert-profile/remoteEntry.js",
                // MFNOTIF: "mf_notification@http://localhost:8081/mf-notification/remoteEntry.js",

                //LOCAL
                MFACC: `mf_accounts@http://${process.env.MF_ACCOUNTS_URL}/remoteEntry.js`, // Nombre de la aplicación hijo + @http://ip-MF-Hijo:puerto-MF-Hijo/RemoteEntry.js
                MFFOOD: `mf_food_profile@http://${process.env.MF_FOOD_PROFILE_URL}/remoteEntry.js`,
                MFUSER: `mf_user_profile@http://${process.env.MF_USER_PROFILE_URL}/remoteEntry.js`,
                MFEDIT: `mf_food_edits@http://${process.env.MF_FOOD_EDIT_URL}/remoteEntry.js`,
                MFEXPERT: `mf_expert_profile@http://${process.env.MF_EXPERTS_URL}/remoteEntry.js`,
                MFNOTIF: `mf_notification@http://${process.env.MF_NOTIFICATIONS_URL}/remoteEntry.js`,
              },
              shared: {
                ...dependencies, // other dependencies
                react: {
                  singleton: true,
                  requiredVersion: dependencies["react"],
                },
                "react-dom": {
                  singleton: true,
                  requiredVersion: dependencies["react-dom"],
                },
                'react-router-dom': {
                  singleton: true,
                },
              },
            }),
          ],
          output: {
            publicPath: "http://" + process.env.REACT_APP_BASE_URL + ":" + process.env.REACT_APP_PORT + "/", // Necesario para rutas anidadas (/path/nested-path)
          },
          entry: "./src/entry",
          mode: "development",
          devServer: {
            port: process.env.REACT_APP_PORT, // Puerto donde se levanta la app
            host: "0.0.0.0",
            historyApiFallback: true, // Necesario para que funcione React Router
          },
          module: {
            rules: [
              {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: "babel-loader",
                    options: {
                      presets: [
                        "@babel/preset-env",
                        "@babel/preset-react",
                        "@babel/preset-typescript",
                      ],
                    },
                  },
                ],
              },
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                  },
                },
              },
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
            ],
          },
          
          resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
          },
          target: "web",
        };

console.log('REACT_APP_PORT:', process.env.REACT_APP_PORT);
console.log('REACT_APP_BASE_URL:', process.env.REACT_APP_BASE_URL);