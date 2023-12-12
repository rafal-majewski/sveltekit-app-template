import * as testcontainers from "testcontainers";
import {describe, expect, test} from "vitest";

const dockerImageNodeVersion = "19.7";

describe("Docker image", () => {
	test("builds", async () => {
		await new testcontainers.GenericContainerBuilder(".", "Dockerfile")
			.withBuildArgs({
				NODE_VERSION: dockerImageNodeVersion,
			})
			.build();
	}, 100000);
});

describe("Docker container", () => {
	test("starts", async () => {
		const container = await new testcontainers.GenericContainerBuilder(".", "Dockerfile")
			.withBuildArgs({
				NODE_VERSION: dockerImageNodeVersion,
			})
			.build();

		await container.start();
	}, 100000);

	test('requires "WELCOME_MESSAGE" environment variable', async () => {
		const container = await new testcontainers.GenericContainerBuilder(".", "Dockerfile")
			.withBuildArgs({
				NODE_VERSION: dockerImageNodeVersion,
			})
			.build();

		const startedContainer = await container.start();
		const logs = await startedContainer.logs();
		let doLogsContainWelcomeMessageEnvironmentVariableName = false;
		let doLogsContainWordMissing = false;

		logs.on("data", (chunk) => {
			if (typeof chunk === "string") {
				if (chunk.includes("WELCOME_MESSAGE")) {
					doLogsContainWelcomeMessageEnvironmentVariableName = true;
				}

				if (chunk.toLowerCase().includes("missing")) {
					doLogsContainWordMissing = true;
				}
			}
		});

		await new Promise<void>((resolve) => {
			logs.on("end", () => {
				resolve();
			});
		});

		expect(doLogsContainWelcomeMessageEnvironmentVariableName).toBe(true);
		expect(doLogsContainWordMissing).toBe(true);
	});
});
