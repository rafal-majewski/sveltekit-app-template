import {Handle} from "@sveltejs/kit";

const handle: Handle = async ({event, resolve}) => {
	const response = await resolve(event, {
		transformPageChunk: ({html}) => html.replace(/%sveltekit\.lang%/g, "en"),
	});
	return response;
};

export {handle};
