import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["node_modules/*", "**/nuxt.config.ts"],
  },
  ...compat.extends(
    "airbnb-base",
    "airbnb-typescript/base",
    "standard-with-typescript",
    "plugin:vue/vue3-recommended",
    "prettier"
  ),
  {
    plugins: {},

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        defineNuxtPlugin: false,
        defineNuxtConfig: false,
        useNuxtApp: false,
        computed: false,
        toRefs: false,
        onMounted: false,
      },

      ecmaVersion: 13,
      sourceType: "module",

      parserOptions: {
        project: "./tsconfig.json",
      },
    },

    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "import/prefer-default-export": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "no-underscore-dangle": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "import/no-mutable-exports": "off",
    },
  },
];
