import {env} from "$env/dynamic/private";

import {cleanEnv} from "envalid";
import appConfigSchema from "./appConfigSchema.js";

const appConfig = cleanEnv(env, appConfigSchema);

export default appConfig;
