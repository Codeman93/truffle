import { join as pathJoin } from "path";
import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import baseConfig from "../../webpack/webpack.config.base";

const config: Configuration = merge(baseConfig, {
  entry: {
    index: ["./build/someInternalModule.js", "./build/index.js"]
  },
  context: __dirname,
  output: {
    path: pathJoin(__dirname, "dist"),
    filename: "[name].js",
    library: {
      type: "commonjs2"
    },
    chunkLoading: "require"
  }
});

export default config;
