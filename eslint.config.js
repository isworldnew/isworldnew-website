import { defineConfig } from "eslint/config";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  // Настройки для JavaScript и JSX
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      // Базовые правила
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "always"],

      // React-специфичные правила
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Рекомендуемые настройки от плагина React
  pluginReact.configs.flat.recommended,
]);