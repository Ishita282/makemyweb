import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",

    // Next.js generated files
    "next-env.d.ts",

    // Prisma generated client
    "src/generated/**",

    // Dependencies
    "node_modules/**",

    // Other generated/build files
    "coverage/**",
    "dist/**",
    ".turbo/**",

    // Environment/config generated files
    "*.min.js",
    "*.min.css",
  ]),
]);

export default eslintConfig;
