import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // TODO Consider turning caching back on if slow; issue was cache would lead to outdated linting issues still showing in console
        // Could be an issue specific to file-renaming / relocating / deleting
        eslintPlugin({ cache: false })
    ]
});
