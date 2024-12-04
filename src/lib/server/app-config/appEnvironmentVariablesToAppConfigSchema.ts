import type {AppEnvironmentVariables} from "./AppEnvironmentVariables.ts";
import {appEnvironmentVariablesSchema} from "./appEnvironmentVariablesSchema.ts";

export const appEnvironmentVariablesToAppConfigSchema = appEnvironmentVariablesSchema
	.transform(
		(variables: AppEnvironmentVariables) =>
			({
				welcomeMessage: variables.WELCOME_MESSAGE,
			}) as const,
	)
	.readonly();
