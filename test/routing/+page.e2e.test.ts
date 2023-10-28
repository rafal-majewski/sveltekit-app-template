import {preview} from "vite";
import {test, expect} from "@playwright/test";
import * as dotenv from "dotenv";
import * as path from "path";
import * as url from "url";
dotenv.config({path: path.join(url.fileURLToPath(path.dirname(import.meta.url)), ".env.test")});

test.describe("/", () => {
	test('displays "Hello world"', async ({page}) => {
		const server = await preview();
		if (!server.resolvedUrls.local[0]) {
			throw new Error("No local URL");
		}
		await page.goto(server.resolvedUrls.local[0]);
		await expect(page.locator("body")).toContainText("Hello world");
		server.httpServer.close();
	});
	test("displays my first todo", async ({page}) => {
		const server = await preview();
		if (!server.resolvedUrls.local[0]) {
			throw new Error("No local URL");
		}
		await page.goto(server.resolvedUrls.local[0]);
		await expect(page.locator(".todo-on-todos-list")).toContainText("My first todo");
		server.httpServer.close();
	});
});
