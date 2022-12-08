<div class="svelte-app-root">
	<slot />
</div>

<style lang="scss" global>
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
	}
	html {
		min-height: 100%;
	}
	html,
	body,
	.sveltekit-body,
	.svelte-app-root {
		display: grid;
	}
</style>
