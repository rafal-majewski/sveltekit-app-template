import {env} from "$env/dynamic/private";

import {cleanEnv} from "envalid";
import {appConfigSchema} from "./appConfigSchema.js";

export const appConfig = cleanEnv(env, appConfigSchema);
