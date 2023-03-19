import {str, num} from "envalid";

const appConfigSchema = {
	WELCOME_MESSAGE: str(), // required
	SOME_NUMBER: num({default: 42}), // optional
};

export default appConfigSchema;
