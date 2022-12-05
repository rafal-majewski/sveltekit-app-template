import {env} from "$env/dynamic/public";

import appConfigSchema from "./appConfigSchema.js";
import validateEnv from "./validateEnv.js";

const appConfig = validateEnv(appConfigSchema, env);

export default appConfig;
