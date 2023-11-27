<script lang="ts" strictEvents>
	import type {Todo} from "$lib/features/todos/Todo.ts";
	import TodoOnTodosList from "$lib/features/todos/TodoOnTodosList.svelte";
	import type {DeepReadonly} from "ts-essentials";

	export let todos: DeepReadonly<Todo[]>;
</script>

<ul class="todos-list">
	{#each todos as todo}
		<li class="todos-list__item">
			<TodoOnTodosList {todo} />
		</li>
	{/each}
</ul>
