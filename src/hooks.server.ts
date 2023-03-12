import {Handle} from "@sveltejs/kit";
import {building} from "$app/environment";

// Validate environment variables by importing appConfig
if (!building) {
	import("$lib/app-config/appConfig.js");
}

const handle: Handle = async ({event, resolve}) => {
	const response = await resolve(event, {
		transformPageChunk: ({html}) => html.replace(/%sveltekit\.lang%/g, "en"),
	});
	return response;
};

export {handle};
