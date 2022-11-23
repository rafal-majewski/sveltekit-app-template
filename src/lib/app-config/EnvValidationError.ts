class EnvValidationError extends Error {
	constructor(message: string) {
		super(message);
	}
}

export default EnvValidationError;
