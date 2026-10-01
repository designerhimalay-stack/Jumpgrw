import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";

export default defineConfig([
  globalIgnores(["dist/**", ".astro/**", "templates/**"]),
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
]);
