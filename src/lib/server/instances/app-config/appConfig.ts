import type {AppConfig} from "../../app-config/AppConfig.ts";
import {appEnvironmentVariablesToAppConfigSchema} from "../../app-config/appEnvironmentVariablesToAppConfigSchema.ts";
import {loadDotEnv} from "../../loadDotEnv.ts";
import {parseEnvironmentVariables} from "../../parseEnvironmentVariables.ts";
loadDotEnv();

export const appConfig: AppConfig = parseEnvironmentVariables(
	appEnvironmentVariablesToAppConfigSchema,
	process.env,
);
