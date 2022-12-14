module.exports = {
  plugins: ["react", "import", "jsx-a11y"],
  settings: {
    react: {
      version: "detect",
    },
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
  ],
  rules: {
    "react/prop-types": 0,
    "no-console": 1,
  },
};
