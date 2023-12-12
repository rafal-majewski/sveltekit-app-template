import * as appEnvironment from "$app/environment";
import type {Handle} from "@sveltejs/kit";

// Validate environment variables by importing appConfig
if (!appEnvironment.building) {
	import("$lib/server/instances/app-config/appConfig.ts");
}

export const handle: Handle = async ({event, resolve}) => {
	const response = await resolve(event, {
		transformPageChunk: ({html}) => html.replace(/%sveltekit\.lang%/gu, "en"),
	});

	return response;
};
