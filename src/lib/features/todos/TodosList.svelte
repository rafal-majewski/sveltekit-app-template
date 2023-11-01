<script lang="ts" strictEvents>
	import type {Todo} from "./Todo.js";
	import TodoOnTodosList from "./TodoOnTodosList.svelte";
	import type {DeepReadonly} from "ts-essentials";

	export let todos: DeepReadonly<Todo[]>;
</script>

<ul class="todos-list">
	{#each todos as todo}
		<li class="todos-list__item">
			<TodoOnTodosList {todo} />
		</li>
	{/each}
</ul>
