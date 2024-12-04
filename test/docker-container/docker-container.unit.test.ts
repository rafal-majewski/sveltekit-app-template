import {createBuiltDockerContainer} from "./createBuiltDockerContainer.ts";
import {describe, expect, test} from "vitest";

describe("Docker container", (): void => {
	test("builds", async (): Promise<void> => {
		await createBuiltDockerContainer();
	}, 15000);

	test("starts", async (): Promise<void> => {
		const builtContainer = await createBuiltDockerContainer();
		await builtContainer.start();
	}, 15000);

	test('requires "WELCOME_MESSAGE" environment variable', async (): Promise<void> => {
		const builtContainer = await createBuiltDockerContainer();
		const startedContainer = await builtContainer.start();
		let doLogsContainWelcomeMessageEnvironmentVariableName = false;
		const logs = await startedContainer.logs();

		logs.on("data", (chunk: unknown): void => {
			console.log(chunk);

			if (typeof chunk === "string") {
				if (chunk.includes("WELCOME_MESSAGE")) {
					doLogsContainWelcomeMessageEnvironmentVariableName = true;
				}
			}
		});

		await new Promise<void>((resolve: () => void): void => {
			logs.on("end", (): void => {
				resolve();
			});
		});

		expect(doLogsContainWelcomeMessageEnvironmentVariableName).toBe(true);
	}, 15000);
});
