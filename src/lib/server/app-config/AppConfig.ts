import type {appEnvironmentVariablesToAppConfigSchema} from "./appEnvironmentVariablesToAppConfigSchema.ts";
import type {z} from "zod";
export type AppConfig = z.infer<typeof appEnvironmentVariablesToAppConfigSchema>;
