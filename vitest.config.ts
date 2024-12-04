import {svelte as createSveltePlugin} from "@sveltejs/vite-plugin-svelte";
import type {UserConfig} from "vite";
const sveltePlugin = createSveltePlugin({});

const vitestConfig: UserConfig = {
	plugins: [sveltePlugin],

	resolve: {
		alias: [],
		conditions: ["browser"],
	},

	test: {
		coverage: {
			include: ["src/**"],
			provider: "v8",
			reporter: ["html", "text"],
			reportsDirectory: "coverage-report",
		},

		environment: "jsdom",
		include: ["**/*.unit.test.ts"],
	},
};

export default vitestConfig;
