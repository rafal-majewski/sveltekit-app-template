import {env} from "$env/dynamic/private";
import {appConfigSchema} from "./appConfigSchema.ts";
import {cleanEnv} from "envalid";

export const appConfig = cleanEnv(env, appConfigSchema);