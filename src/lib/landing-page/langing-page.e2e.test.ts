import {createDockerContainer} from "../../../test/docker-container/createStartedDockerContainer.ts";
import type {AppEnvironmentVariables} from "../server/app-config/AppEnvironmentVariables.ts";
import {test, expect, type Page} from "@playwright/test";

test.describe("Landing page", (): void => {
	const welcomeMessage = "Hello Playwright";

	const environmentalVariables = {
		WELCOME_MESSAGE: welcomeMessage,
	} as const satisfies AppEnvironmentVariables;

	test('displays "Hello world"', async ({page}: Readonly<{page: Page}>): Promise<void> => {
		const container = await createDockerContainer(environmentalVariables);
		const url = `http://localhost:${container.getFirstMappedPort().toString(10)}`;
		await page.goto(url);
		await expect(page.locator("body")).toContainText("Hello Playwright");
	});

	test("displays my first todo", async ({page}: Readonly<{page: Page}>): Promise<void> => {
		const container = await createDockerContainer(environmentalVariables);
		const url = `http://localhost:${container.getFirstMappedPort().toString(10)}`;
		await page.goto(url);
		await expect(page.locator("ul > li")).toContainText("My first todo");
	});
});
