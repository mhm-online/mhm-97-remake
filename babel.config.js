module.exports = api => {
  api.cache(true);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          ignoreBrowserslistConfig: true,
          debug: false,
          targets: {
            node: "current"
          },
          modules: "commonjs"
        }
      ]
    ],
    plugins: ["@babel/plugin-proposal-object-rest-spread"]
  };
};
