<script lang="ts">
	import type {Todo} from "./Todo.ts";

	const {
		todo,
	}: Readonly<{
		todo: Todo;
	}> = $props();
</script>

<li>
	{todo.content}
</li>
