import {env} from "$env/dynamic/private";
import loadAppConfig from "$lib/server/app-config/loadAppConfig";

export const appConfig = loadAppConfig(env);
