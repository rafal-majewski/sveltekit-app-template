import EnvValidationError from "./EnvValidationError";
import * as yup from "yup";

const validateEnv = <AnySchema extends yup.AnySchema>(
	appConfigSchema: AnySchema,
	env: Record<string, string | undefined>
) => {
	try {
		const appConfig = appConfigSchema.validateSync(env);
		return appConfig;
	} catch (error) {
		if (!(error instanceof yup.ValidationError)) {
			throw error;
		}
		throw new EnvValidationError(
			"Environment variables are invalid! See details below:\n" + error.errors.join("\n")
		);
	}
};

export default validateEnv;
