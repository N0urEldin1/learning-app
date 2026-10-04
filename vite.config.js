import { url } from "node:inspector";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        {
            name: "clean-html-routes",

            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.url.startsWith("/note/")) {
                        req.url = "/note.html";
                    }

                    next();
                });
            },
        },
    ],
});