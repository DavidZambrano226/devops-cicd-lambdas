// eslint.config.js
module.exports = [
  {
    ignores: ["node_modules/**"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Define global variables here if needed
      },
    },
  },
  {
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "no-console": "off",
      eqeqeq: "error",
      curly: "error",
    },
  },
  {
    files: ["**/*.js"], // Apply to all JavaScript files
    languageOptions: {
      globals: {
        // Add any global variables specific to Node.js
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },
  },
];
