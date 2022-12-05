<script lang="ts">
	import type Todo from "./Todo.d.js";
	export let todo: Todo;
</script>

<div class="todo-on-todos-list">
	{todo.content}
</div>
