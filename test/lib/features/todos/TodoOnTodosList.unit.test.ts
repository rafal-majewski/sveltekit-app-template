import {render, screen} from "@testing-library/svelte";
import matchers from "@testing-library/jest-dom/matchers";
import {describe, test, expect} from "vitest";

expect.extend(matchers);

import {TodoOnTodosList} from "../../../../src/lib/features/todos";

describe("TodoOnTodosList", () => {
	test("renders", () => {
		render(TodoOnTodosList, {todo: {id: 1, content: "My first todo", isCompleted: false}});
		expect(screen.getByText("My first todo")).toBeInTheDocument();
	});
});
