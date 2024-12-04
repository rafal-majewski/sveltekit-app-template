<script lang="ts">
	import type {Todo} from "./Todo.ts";
	import TodoOnTodosList from "./TodoOnTodosList.svelte";

	const {
		todos,
	}: Readonly<{
		todos: readonly Todo[];
	}> = $props();
</script>

<ul>
	{#each todos as todo (todo.id)}
		<TodoOnTodosList {todo} />
	{/each}
</ul>
