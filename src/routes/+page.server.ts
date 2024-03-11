import type {PageServerLoad} from "./$types.ts";

type LoadReturnValue = Readonly<{
	welcomeMessage: string;
}>;

export const load: PageServerLoad = async (): Promise<LoadReturnValue> => {
	const {appConfig} = await import("$lib/server/instances/app-config/appConfig.ts");

	return {
		welcomeMessage: appConfig.welcomeMessage,
	} as const;
};
