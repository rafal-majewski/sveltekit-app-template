<svelte:options immutable={true} />

<script lang="ts" strictEvents>
	import type {Todo} from "$lib/features/todos/Todo.ts";
	import LandingPage from "$lib/landing-page/LadingPage.svelte";
	import type {PageData} from "./$types.ts";
	import type {DeepReadonly} from "ts-essentials";

	export let data: PageData;

	const todos: DeepReadonly<Todo[]> = [
		{
			content: "My first todo",
			id: 1,
			isCompleted: false,
		},
	];
</script>

<svelte:head>
	<title>My App</title>
	<link href="/favicon.png" rel="icon" type="image/png" />
</svelte:head>

<LandingPage {todos} welcomeMessage={data.welcomeMessage} />
