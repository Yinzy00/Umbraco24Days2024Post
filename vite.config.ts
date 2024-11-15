import { defineConfig } from "vite";

const basePath = `/App_Plugins/BackofficeExtension/`;

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.ts",
            formats: ["es"]
        },
        outDir: `../MySite.Umbraco${basePath}`,
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco/]
        },
    },
    base: basePath
});