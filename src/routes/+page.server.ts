import type {PageServerLoad} from "./$types.js";

export const load: PageServerLoad = async () => {
	const {appConfig} = await import("../lib/server/instances/app-config/appConfig.ts");

	return {
		welcomeMessage: appConfig.welcomeMessage,
	} as const;
};
