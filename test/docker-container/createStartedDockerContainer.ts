import {createBuiltDockerContainer} from "./createBuiltDockerContainer.ts";
import type {AppEnvironmentVariables} from "../../src/lib/server/app-config/AppEnvironmentVariables.ts";
import type {StartedTestContainer} from "testcontainers";

export async function createDockerContainer(
	environmentVariables: AppEnvironmentVariables,
): Promise<StartedTestContainer> {
	const builtContainer = await createBuiltDockerContainer();

	const startedContainer = await builtContainer
		.withEnvironment(environmentVariables)
		.withExposedPorts(3000)
		.start();

	return startedContainer;
}
