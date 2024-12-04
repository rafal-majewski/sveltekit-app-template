import type {TestEnvironmentalVariables} from "./TestEnvironmentVariables.ts";
import {testEnvironmentalVariablesSchema} from "./testEnvironmentVariablesSchema.ts";

export const testEnvironmentVariablesToTestConfigSchema =
	testEnvironmentalVariablesSchema.transform(
		(variables: TestEnvironmentalVariables) =>
			({
				alpineVersion: variables.ALPINE_VERSION,
				nodeJsVersion: variables.NODE_JS_VERSION,
			}) as const,
	);
