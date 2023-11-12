<script lang="ts" strictEvents>
	import type {Todo} from "./Todo.ts";
	import type {DeepReadonly} from "ts-essentials";

	export let todo: DeepReadonly<Todo>;
</script>

<div class="todo-on-todos-list">
	{todo.content}
</div>
