import {svelte} from "@sveltejs/vite-plugin-svelte";
import {defineConfig} from "vitest/config";

const vitestConfig = defineConfig({
	plugins: [
		svelte({
			hot: typeof process.env["VITEST"] === "undefined",
		}),
	],
	resolve: {
		alias: [
			{
				find: /^\$lib$/u,
				replacement: "/src/lib",
			},
			{
				find: /^\$lib\/(?<pathInLib>.*)$/u,
				replacement: "/src/lib/$1",
			},
		],
	},
	test: {
		coverage: {
			provider: "v8",
			reporter: ["html", "text"],
			reportsDirectory: "coverage-report",
		},
		environment: "jsdom",
		include: ["**/*.unit.test.cjs", "**/*.unit.test.js", "**/*.unit.test.mjs", "**/*.unit.test.ts"],
	},
});

export default vitestConfig;
