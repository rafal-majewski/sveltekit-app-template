import {describe, test} from "vitest";
import * as testcontainers from "testcontainers";

const dockerImageNodeVersion = "19.7";

describe("Docker image", () => {
	test("builds", async () => {
		await new testcontainers.GenericContainerBuilder(".", "Dockerfile")
			.withBuildArgs({
				"NODE_VERSION": dockerImageNodeVersion,
			})
			.build();
	}, 100000);
});
