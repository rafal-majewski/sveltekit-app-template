import type {AppConfig} from "$lib/server/app-config/AppConfig.ts";
import type {DotEnv} from "$lib/server/app-config/DotEnv.ts";
import {dotEnvSchema} from "$lib/server/app-config/dotEnvSchema.ts";
import * as Envalid from "envalid";

export function loadAppConfig(dotEnv: DotEnv): AppConfig {
	const validatedDotEnv = Envalid.cleanEnv(dotEnv, dotEnvSchema);

	return {
		someNumber: validatedDotEnv.SOME_NUMBER,
		welcomeMessage: validatedDotEnv.WELCOME_MESSAGE,
	};
}
