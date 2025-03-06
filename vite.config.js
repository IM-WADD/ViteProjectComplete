import { defineConfig } from 'vite';


export default defineConfig({
    base: "https://im-wadd.github.io/ViteProjectComplete",
    build: {
        outDir: 'docs',
        emptyOutDir: true,
    }
})