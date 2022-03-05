<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let className: string = '';
	export { className as class };

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<button
	class={`rounded-full border bg-zinc-200 px-4 py-2 transition-colors hover:bg-zinc-400 ${className}`}
	on:click={handleClick}>
	<slot />
</button>
