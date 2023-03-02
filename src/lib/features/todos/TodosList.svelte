<script lang="ts">
	import type Todo from "./Todo.js";
	import TodoOnTodosList from "./TodoOnTodosList.svelte";
	export let todos: Todo[];
</script>

<ul class="todos-list">
	{#each todos as todo}
		<li class="todos-list__item">
			<TodoOnTodosList {todo} />
		</li>
	{/each}
</ul>
