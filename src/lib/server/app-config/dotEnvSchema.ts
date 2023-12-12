import {str, num} from "envalid";

export const dotEnvSchema = {
	SOME_NUMBER: num({
		default: 42,
	}), // optional
	WELCOME_MESSAGE: str(), // required
} as const;
