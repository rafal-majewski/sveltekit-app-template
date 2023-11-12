import type {PageServerLoad} from "./$types.ts";

export const load: PageServerLoad = async () => {
	const {appConfig} = await import("$lib/server/app_config/appConfig.ts");
	return {
		welcomeMessage: appConfig.WELCOME_MESSAGE,
	} as const;
};
