import * as Testcontainers from "testcontainers";
import {describe, expect, test} from "vitest";
const dockerImageNodeVersion = "19.7";

describe("Docker image", (): void => {
	test("builds", async (): Promise<void> => {
		await new Testcontainers.GenericContainerBuilder(".", "Dockerfile")
			.withBuildArgs({
				NODE_VERSION: dockerImageNodeVersion,
			})
			.build();
	}, 100000);
});

describe("Docker container", (): void => {
	test("starts", async (): Promise<void> => {
		const container = await new Testcontainers.GenericContainerBuilder(".", "Dockerfile")
			.withBuildArgs({
				NODE_VERSION: dockerImageNodeVersion,
			})
			.build();

		await container.start();
	}, 100000);

	test('requires "WELCOME_MESSAGE" environment variable', async (): Promise<void> => {
		const container = await new Testcontainers.GenericContainerBuilder(".", "Dockerfile")
			.withBuildArgs({
				NODE_VERSION: dockerImageNodeVersion,
			})
			.build();

		const startedContainer = await container.start();
		const logs = await startedContainer.logs();
		let doLogsContainWelcomeMessageEnvironmentVariableName = false;
		let doLogsContainWordMissing = false;

		logs.on("data", (chunk: unknown): void => {
			if (typeof chunk === "string") {
				if (chunk.includes("WELCOME_MESSAGE")) {
					doLogsContainWelcomeMessageEnvironmentVariableName = true;
				}

				if (chunk.toLowerCase().includes("missing")) {
					doLogsContainWordMissing = true;
				}
			}
		});

		await new Promise<void>((resolve: () => void): void => {
			logs.on("end", (): void => {
				resolve();
			});
		});

		expect(doLogsContainWelcomeMessageEnvironmentVariableName).toBe(true);
		expect(doLogsContainWordMissing).toBe(true);
	});
});
