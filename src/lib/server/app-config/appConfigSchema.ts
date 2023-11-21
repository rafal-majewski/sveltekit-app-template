import {str, num} from "envalid";

export const appConfigSchema = {
	SOME_NUMBER: num({default: 42}), // optional
	WELCOME_MESSAGE: str(), // required
};
