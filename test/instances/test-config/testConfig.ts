import {loadDotEnv} from "../../../src/lib/server/loadDotEnv.ts";
import {parseEnvironmentVariables} from "../../../src/lib/server/parseEnvironmentVariables.ts";
import type {TestConfig} from "../../test-config/TestConfig.ts";
import {testEnvironmentVariablesToTestConfigSchema} from "../../test-config/testEnvironmentVariablesToTestConfigSchema.ts";
loadDotEnv();

export const testConfig: TestConfig = parseEnvironmentVariables(
	testEnvironmentVariablesToTestConfigSchema,
	process.env,
);
