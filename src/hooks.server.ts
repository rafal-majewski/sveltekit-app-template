import type {Handle} from "@sveltejs/kit";
import * as appEnvironment from "$app/environment";

// Validate environment variables by importing appConfig
if (!appEnvironment.building) {
	import("$lib/server/app_config/appConfig.js");
}

export const handle: Handle = async ({event, resolve}) => {
	const response = await resolve(event, {
		transformPageChunk: ({html}) => html.replace(/%sveltekit\.lang%/g, "en"),
	});
	return response;
};
