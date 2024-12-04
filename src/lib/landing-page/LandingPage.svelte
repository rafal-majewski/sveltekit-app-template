<script lang="ts">
	import type {Todo} from "../todos/Todo.ts";
	import TodosList from "../todos/TodosList.svelte";

	const {
		todos,
		welcomeMessage,
	}: Readonly<{
		todos: readonly Todo[];
		welcomeMessage: string;
	}> = $props();
</script>

<main>
	<h1>SvelteKit app template</h1>
	<p>
		{welcomeMessage}
	</p>
	<TodosList {todos} />
</main>
