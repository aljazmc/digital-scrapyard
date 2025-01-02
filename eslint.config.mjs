import eslint from "@eslint/js";
import globals from "globals";
import jest from "eslint-plugin-jest";
import parser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  prettier,
  {
    files: ["**/*.ts{x,}"],
    ignores: ["**/*.{spec,test}.ts{x,}"],
    languageOptions: {
      parser: parser,
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ["**/*.{spec,test}.ts{x,}"],
    plugins: { jest: jest },
    languageOptions: {
      parser: parser,
      globals: {
        ...jest.environments.globals.globals,
      },
    },
  },
];
