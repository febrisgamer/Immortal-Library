import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: "assets/**/*",
                    dest: "assets"
                }
            ]
        })
    ],
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                browse: resolve(__dirname, "browse.html"),
                about: resolve(__dirname, "about-alliance.html"),
                upload: resolve(__dirname, "upload.html"),
                pp: resolve(__dirname, "pp.html"),
                tos: resolve(__dirname, "tos.html"),
                profile: resolve(__dirname, "profile.html"),
                book: resolve(__dirname, "book.html")
            }
        }
    }
});