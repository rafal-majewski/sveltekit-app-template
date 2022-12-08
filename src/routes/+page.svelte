<script lang="ts">
	import {TodosList} from "$lib/features/todos/index.js";
	import type {Todo} from "$lib/features/todos/index.js";
	import {appConfig} from "$lib/app-config/index.js";
	const todos: Todo[] = [{content: "My first todo", id: 1, isCompleted: false}];
</script>

<svelte:head>
	<title>My App</title>
	<link rel="icon" href="/favicon.png" type="image/png" />
</svelte:head>

<div class="landing-page">
	<h1>SvelteKit app template</h1>
	<p>{appConfig.PUBLIC_WELCOME_MESSAGE}</p>
	<TodosList {todos} />
</div>
