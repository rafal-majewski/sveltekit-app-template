import TodoOnTodosList from "$lib/features/todos/TodoOnTodosList.svelte";
import {render, screen} from "@testing-library/svelte";
import {describe, test, expect} from "vitest";

describe("TodoOnTodosList", (): void => {
	test("renders", (): void => {
		render(TodoOnTodosList, {
			todo: {
				content: "My first todo",
				id: 1,
				isCompleted: false,
			},
		});

		expect((): void => {
			screen.getByText("My first todo");
		}).not.toThrow();
	});
});
