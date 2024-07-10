module.exports = {
  extends: [
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
  ],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  plugins: ["import"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
