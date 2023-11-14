import {str, num} from "envalid";

export const appConfigSchema = {
	WELCOME_MESSAGE: str(), // required
	SOME_NUMBER: num({default: 42}), // optional
};
