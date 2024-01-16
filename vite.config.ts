import {sveltekit} from "@sveltejs/kit/vite";
import type {UserConfig} from "vite";

const viteConfig: UserConfig = {
	plugins: [sveltekit()],
};

export default viteConfig;
