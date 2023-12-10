<script lang="ts" strictEvents>
	import type {Todo} from "$lib/features/todos/Todo.ts";
	import type {DeepReadonly} from "ts-essentials";

	export let todo: DeepReadonly<Todo>;
</script>

<li>
	{todo.content}
</li>
