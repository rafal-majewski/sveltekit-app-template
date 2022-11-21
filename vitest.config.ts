import {defineConfig} from "vitest/config";
import {svelte} from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	plugins: [svelte({hot: !process.env["VITEST"]})],
	test: {
		include: ["**/*.unit.test.ts", "**/*.unit.test.js", "**/*.unit.test.cjs", "**/*.unit.test.mjs"],

		environment: "jsdom",
		coverage: {
			provider: "c8",
			reportsDirectory: "coverage_report",
			reporter: ["html", "text"],
		},
	},
});
