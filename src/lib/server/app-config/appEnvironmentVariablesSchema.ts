import {z} from "zod";

export const appEnvironmentVariablesSchema = z
	.object({
		WELCOME_MESSAGE: z.string(),
	})
	.readonly();
