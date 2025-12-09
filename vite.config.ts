import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    //plugins: [react()],
    //base: "/game-autobattler/",
    // server: {
    //     proxy: {
    //         /**
    //          * https://discord.com/developers/docs/change-log#activities-proxy-csp-update
    //          */
    //         "/.proxy/colyseus": {
    //             target: "http://localhost:2567",
    //             changeOrigin: true,
    //             ws: true,
    //             rewrite: (path) => path.replace(/^\/.proxy\/colyseus/, ""),
    //         },
    //     },
    // },
});
