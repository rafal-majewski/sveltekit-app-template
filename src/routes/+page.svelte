<script lang="ts" strictEvents>
	import type {Todo} from "$lib/features/todos/Todo.js";
	import LandingPage from "$lib/landing_page/LadingPage.svelte";
	import type {PageServerData} from "./$types.js";
	import type {DeepReadonly} from "ts-essentials";

	export let data: DeepReadonly<PageServerData>;

	const todos: DeepReadonly<Todo[]> = [{content: "My first todo", id: 1, isCompleted: false}];
</script>

<svelte:head>
	<title>My App</title>
	<link rel="icon" href="/favicon.png" type="image/png" />
</svelte:head>

<LandingPage welcomeMessage={data.welcomeMessage} {todos} />
