import {z} from "zod";

export const testEnvironmentalVariablesSchema = z.object({
	ALPINE_VERSION: z.string(),
	NODE_JS_VERSION: z.string(),
} as const);
