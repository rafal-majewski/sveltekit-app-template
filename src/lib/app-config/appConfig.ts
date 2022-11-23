import {env} from "$env/dynamic/public";

import appConfigSchema from "./appConfigSchema";
import validateEnv from "./validateEnv";

const appConfig = validateEnv(appConfigSchema, env);

export default appConfig;
