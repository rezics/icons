import fg from "fast-glob";
import { defineConfig } from "tsup";

export default defineConfig(async () => {
  const entries = await fg([
    "src/index.ts",
    "src/components/**/index.ts",
    "src/components/**/*.tsx",
  ]);

  return {
    entry: entries,
    format: ["esm"],
    dts: true,
    sourcemap: true,
    clean: true,
    splitting: false,
    treeshake: true,
    outDir: "dist",
    outbase: "src",
  };
});
