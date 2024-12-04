<script lang="ts">
	import type {PageData} from "./$types.ts";
	import LandingPage from "../lib/landing-page/LandingPage.svelte";
	import type {Todo} from "../lib/todos/Todo.ts";
	const {data}: Readonly<{data: PageData}> = $props();

	const todos: readonly Todo[] = [
		{
			content: "My first todo",
			id: 1,
		},
	];
</script>

<LandingPage {todos} welcomeMessage={data.welcomeMessage} />
