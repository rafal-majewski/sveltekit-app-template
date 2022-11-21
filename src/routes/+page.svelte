<script lang="ts">
	import {TodosList} from "$lib/features/todos";
	import favicon from "./favicon.png";
	import type {Todo} from "$lib/features/todos";
	const todos: Todo[] = [{content: "My first todo", id: 1, isCompleted: false}];
</script>

<svelte:head>
	<title>My App</title>
	<link rel="icon" href={favicon} type="image/png" />
</svelte:head>

<div class="landing-page">
	<h1>SvelteKit app template</h1>
	<p>Hello world</p>
	<TodosList {todos} />
</div>
