import type {AppConfig} from "./AppConfig.ts";
import type {DotEnv} from "./DotEnv.ts";
import {dotEnvSchema} from "./dotEnvSchema.ts";
import * as envalid from "envalid";

export default function loadAppConfig(dotEnv: DotEnv): AppConfig {
	const validatedDotEnv = envalid.cleanEnv(dotEnv, dotEnvSchema);

	const appConfig: AppConfig = {
		someNumber: validatedDotEnv.SOME_NUMBER,
		welcomeMessage: validatedDotEnv.WELCOME_MESSAGE,
	};

	return appConfig;
}
