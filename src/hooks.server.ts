import * as AppEnvironment from "$app/environment";
import {preloadAppConfig} from "$lib/server/instances/app-config/preloadAppConfig.ts";
import type {Handle} from "@sveltejs/kit";

if (!AppEnvironment.building) {
	preloadAppConfig();
}

export const handle: Handle = async ({
	event,
	resolve,
}: Parameters<Handle>[0]): Promise<Response> => {
	const response = await resolve(event, {
		transformPageChunk: ({
			html,
		}: Readonly<{
			html: string;
		}>): string => html.replace(/%sveltekit\.lang%/gu, "en"),
	});

	return response;
};
