import type {testEnvironmentalVariablesSchema} from "./testEnvironmentVariablesSchema.ts";
import type {z} from "zod";
export type TestEnvironmentalVariables = z.infer<typeof testEnvironmentalVariablesSchema>;
