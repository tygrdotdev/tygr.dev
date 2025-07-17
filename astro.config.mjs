// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	output: "server",
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": new URL("./src", import.meta.url).pathname,
			},
		},
	},
	integrations: [mdx()],
	markdown: {
		shikiConfig: {
			theme: "gruvbox-dark-medium",
		},
	},
	adapter: node({
		mode: "standalone",
	}),
});
