import {Handle} from "@sveltejs/kit";

// Validate environment variables by importing appConfig
import "$lib/app-config";

const handle: Handle = async ({event, resolve}) => {
	const response = await resolve(event, {
		transformPageChunk: ({html}) => html.replace(/%sveltekit\.lang%/g, "en"),
	});
	return response;
};

export {handle};
