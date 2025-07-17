import { defineConfig } from "vite";
import ViteSassPlugin from "vite-plugin-sass";

export default defineConfig({
	plugins: [ViteSassPlugin()],
	base: "./", // relative Pfade im Build
	build: {
		rollupOptions: {
			input: {
				main: "./index.html",
				uebermich: "./src/html/uebermich.html",
				angebot: "./src/html/angebot.html",
				mehr: "./src/html/mehr.html",
				impressum: "./src/html/impressum.html",
				datenschutz: "./src/html/datenschutz.html",
			},
		},
	},
});
