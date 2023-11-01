<script lang="ts" strictEvents>
	import type {Todo} from "$lib/features/todos/Todo.js";
	import TodosList from "$lib/features/todos/TodosList.svelte";
	import type {PageServerData} from "./$types.js";
	import type {DeepReadonly} from "ts-essentials";

	export let data: DeepReadonly<PageServerData>;

	const todos: DeepReadonly<Todo[]> = [{content: "My first todo", id: 1, isCompleted: false}];
</script>

<svelte:head>
	<title>My App</title>
	<link rel="icon" href="/favicon.png" type="image/png" />
</svelte:head>

<div class="landing-page">
	<h1>SvelteKit app template</h1>
	<p>{data.welcomeMessage}</p>
	<TodosList {todos} />
</div>
