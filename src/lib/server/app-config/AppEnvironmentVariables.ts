import type {appEnvironmentVariablesSchema} from "./appEnvironmentVariablesSchema.ts";
import type {z} from "zod";
export type AppEnvironmentVariables = z.infer<typeof appEnvironmentVariablesSchema>;
