// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import mdx from "@astrojs/mdx";

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
	adapter: netlify(),
});
