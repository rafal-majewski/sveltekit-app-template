import type {PlaywrightTestConfig} from "@playwright/test";

const playwrightConfig = {
	use: {},
	webServer: [],
} as const satisfies PlaywrightTestConfig;

export default playwrightConfig;
