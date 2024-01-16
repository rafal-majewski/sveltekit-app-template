import {test, expect, type Page} from "@playwright/test";
import * as Dotenv from "dotenv";
import * as Path from "path";
import * as Url from "url";
import {preview} from "vite";

Dotenv.config({
	path: Path.join(Url.fileURLToPath(Path.dirname(import.meta.url)), ".env.test"),
});

test.describe("/", (): void => {
	test('displays "Hello world"', async ({page}: Readonly<{page: Page}>): Promise<void> => {
		const server = await preview();
		const resolvedURL = server.resolvedUrls?.local[0] ?? null;

		if (resolvedURL === null) {
			throw new Error("No local URL");
		}

		await page.goto(resolvedURL);
		await expect(page.locator("body")).toContainText("Hello world");
		server.httpServer.close();
	});

	test("displays my first todo", async ({page}: Readonly<{page: Page}>): Promise<void> => {
		const server = await preview();
		const resolvedURL = server.resolvedUrls?.local[0] ?? null;

		if (resolvedURL === null) {
			throw new Error("No local URL");
		}

		await page.goto(resolvedURL);
		await expect(page.locator("ul > li")).toContainText("My first todo");
		server.httpServer.close();
	});
});
