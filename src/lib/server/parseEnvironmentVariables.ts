import type {z, ZodType, ZodTypeDef} from "zod";

export function parseEnvironmentVariables<A, B extends ZodTypeDef, C>(
	schema: ZodType<A, B, C>,
	environmentalVariables: unknown,
): A {
	const result = schema.safeParse(environmentalVariables);

	if (result.success) {
		return result.data;
	}

	console.error(
		`There are the following problems with the environment variables:\n${Object.entries(
			result.error.flatten((issue: z.ZodIssue): string => issue.message).fieldErrors,
		)
			.map(
				([variableName, messages]: readonly [string, unknown]): string =>
					`${variableName}: ${messages.join(", ")}`,
			)
			.join("\n")}`,
	);

	process.exit(1);
}
