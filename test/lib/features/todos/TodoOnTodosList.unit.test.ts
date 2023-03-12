import {render, screen} from "@testing-library/svelte";
import {describe, test, expect} from "vitest";

import TodoOnTodosList from "$lib/features/todos/TodoOnTodosList.svelte";

describe("TodoOnTodosList", () => {
	test("renders", () => {
		render(TodoOnTodosList, {todo: {id: 1, content: "My first todo", isCompleted: false}});
		expect(() => {
			screen.getByText("My first todo");
		}).not.toThrow();
	});
});
