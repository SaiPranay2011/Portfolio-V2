/** @type {import('next').NextConfig} */
require("dotenv").config();
const webpack = require("webpack");
const nextConfig = {
  output: "export",
  basePath: "https://saipranay2011.github.io/Portfolio-V2/",
};

module.exports = {
//   nextConfig,
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
};
