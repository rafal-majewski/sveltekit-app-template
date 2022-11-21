import {preview} from "vite";
import {chromium} from "playwright";
import {test, expect} from "@playwright/test";

test.describe("/", () => {
	test('displays "Hello world"', async () => {
		const server = await preview();
		const browser = await chromium.launch();
		const page = await browser.newPage();
		if (!server.resolvedUrls.local[0]) {
			throw new Error("No local URL");
		}
		await page.goto(server.resolvedUrls.local[0]);
		await expect(page.locator("body")).toContainText("Hello world");
		await browser.close();
		server.httpServer.close();
	});
	test("displays my first todo", async () => {
		const server = await preview();
		const browser = await chromium.launch();
		const page = await browser.newPage();
		if (!server.resolvedUrls.local[0]) {
			throw new Error("No local URL");
		}
		await page.goto(server.resolvedUrls.local[0]);
		await expect(page.locator(".todo-on-todos-list")).toContainText("My first todo");
		await browser.close();
		server.httpServer.close();
	});
});
