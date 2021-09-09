import path from "path";
import adapterStatic from "@sveltejs/adapter-static";
import svg from "vite-plugin-svgstring";
import dsv from "@rollup/plugin-dsv";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";

const dev = process.env.NODE_ENV === "development";

const preprocess = sveltePreprocess({
	postcss: {
		plugins: [autoprefixer]
	}
});

const config = {
	preprocess,
	kit: {
		adapter: adapterStatic(),
		target: "#svelte",
		vite: {
			resolve: {
				alias: {
					"$actions": path.resolve("./src/actions"),
					"$components": path.resolve("./src/components"),
					"$data": path.resolve("./src/data"),
					"$stores": path.resolve("./src/stores"),
					"$styles": path.resolve("./src/styles"),
					"$svg": path.resolve("./src/svg"),
					"$utils": path.resolve("./src/utils")
				}
			},
			plugins: [
				dsv(),
				svg()
			]
		},
		paths: {
			base: dev ? "" : "/website2"
		}
	}
};

export default config;