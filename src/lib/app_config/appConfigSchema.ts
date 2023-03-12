import {str, num} from "envalid";

const appConfigSchema = {
	PUBLIC_WELCOME_MESSAGE: str(), // required
	PUBLIC_SOME_NUMBER: num({default: 42}), // optional
};

export default appConfigSchema;
