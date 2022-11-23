import * as yup from "yup";

const appConfigSchema = yup.object({
	PUBLIC_WELCOME_MESSAGE: yup.string().required(),
	PUBLIC_SOME_NUMBER: yup.number().default(42),
});

export default appConfigSchema;
