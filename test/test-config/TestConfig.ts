import type {testEnvironmentVariablesToTestConfigSchema} from "./testEnvironmentVariablesToTestConfigSchema.ts";
import type {z} from "zod";
export type TestConfig = z.infer<typeof testEnvironmentVariablesToTestConfigSchema>;
