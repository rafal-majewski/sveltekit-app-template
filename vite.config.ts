import {sveltekit as createSvelteKitPlugin} from "@sveltejs/kit/vite";
import type {UserConfig} from "vite";
const svelteKitPlugin = await createSvelteKitPlugin();

const viteConfig: UserConfig = {
	plugins: [svelteKitPlugin],
};

export default viteConfig;
