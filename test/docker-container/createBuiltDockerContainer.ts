import {testConfig} from "../instances/test-config/testConfig.ts";
import {type GenericContainer, GenericContainerBuilder} from "testcontainers";

export async function createBuiltDockerContainer(): Promise<GenericContainer> {
	const builtContainer = await new GenericContainerBuilder(".", "Dockerfile")
		.withBuildArgs({
			ALPINE_VERSION: testConfig.alpineVersion,
			NODE_JS_VERSION: testConfig.nodeJsVersion,
		})
		.build();

	return builtContainer;
}
