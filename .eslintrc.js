module.exports = {
  parser: "astro-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".astro"],
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
  },
};
