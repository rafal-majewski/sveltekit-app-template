import TodoOnTodosList from "$lib/features/todos/TodoOnTodosList.svelte";
import {render, screen} from "@testing-library/svelte";
import {describe, test, expect} from "vitest";

describe("TodoOnTodosList", () => {
	test("renders", () => {
		render(TodoOnTodosList, {
			todo: {
				content: "My first todo",
				id: 1,
				isCompleted: false,
			},
		});
		expect(() => {
			screen.getByText("My first todo");
		}).not.toThrow();
	});
});
