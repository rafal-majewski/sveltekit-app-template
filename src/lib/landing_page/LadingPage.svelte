<script lang="ts" strictEvents>
	import type {Todo} from "$lib/features/todos/Todo.ts";
	import TodosList from "$lib/features/todos/TodosList.svelte";
	import type {DeepReadonly} from "ts-essentials";

	export let todos: DeepReadonly<Todo[]>;
	export let welcomeMessage: string;
</script>

<div class="landing-page">
	<h1>SvelteKit app template</h1>
	<p>{welcomeMessage}</p>
	<TodosList {todos} />
</div>
