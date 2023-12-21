import {test, expect} from "@playwright/test";
import * as dotenv from "dotenv";
import * as path from "path";
import * as url from "url";
import {preview} from "vite";

dotenv.config({
	path: path.join(url.fileURLToPath(path.dirname(import.meta.url)), ".env.test"),
});

test.describe("/", () => {
	test('displays "Hello world"', async ({page}) => {
		const server = await preview();
		const resolvedURL = server.resolvedUrls?.local[0] ?? null;

		if (resolvedURL === null) {
			throw new Error("No local URL");
		}

		await page.goto(resolvedURL);
		await expect(page.locator("body")).toContainText("Hello world");
		server.httpServer.close();
	});

	test("displays my first todo", async ({page}) => {
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
