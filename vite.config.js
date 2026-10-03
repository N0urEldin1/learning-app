import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        {
            name: "clean-html-routes",

            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.url === "/note") {
                        req.url = "/note.html";
                    }

                    next();
                });
            },
        },
    ],
});