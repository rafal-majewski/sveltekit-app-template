import {env} from "$env/dynamic/private";
import {appConfigSchema} from "./appConfigSchema.js";
import {cleanEnv} from "envalid";

export const appConfig = cleanEnv(env, appConfigSchema);
