import type {PageServerLoad} from "./$types.js";

export const load: PageServerLoad = async () => {
	const {appConfig} = await import("$lib/server/app_config/appConfig.js");
	return {
		welcomeMessage: appConfig.WELCOME_MESSAGE,
	} as const;
};
