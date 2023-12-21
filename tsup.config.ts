import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/components/index.ts"],
  outDir: "build",
  target: "es2020",
  dts: true,
  clean: true,
});
