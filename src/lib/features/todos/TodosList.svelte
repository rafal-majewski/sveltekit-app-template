<svelte:options immutable={true} />

<script lang="ts" strictEvents>
	import type {Todo} from "$lib/features/todos/Todo.ts";
	import TodoOnTodosList from "$lib/features/todos/TodoOnTodosList.svelte";
	import type {DeepReadonly} from "ts-essentials";

	export let todos: DeepReadonly<Todo[]>;
</script>

<ul>
	{#each todos as todo (todo.id)}
		<TodoOnTodosList {todo} />
	{/each}
</ul>
