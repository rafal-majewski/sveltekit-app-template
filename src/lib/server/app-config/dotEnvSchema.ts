import {str, num} from "envalid";

export const dotEnvSchema = {
	SOME_NUMBER: num({
		default: 42,
	}),
	WELCOME_MESSAGE: str(),
} as const;
