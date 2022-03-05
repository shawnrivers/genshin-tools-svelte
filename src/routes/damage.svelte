<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import DamageCard from '$components/damage/DamageCard/index.svelte';
	import { generateId } from '$utils/id';

	let damageCards: string[] = [generateId()];

	function addCard() {
		damageCards = [generateId(), ...damageCards];
	}

	function removeCard(id: string) {
		damageCards = damageCards.filter((card) => card !== id);
	}
</script>

<svelte:head>
	<title>Damage Expectation - Genshin Tools</title>
</svelte:head>

<div>
	<h1 class="text-4xl font-bold uppercase">Damage Expectation</h1>
	<div class="text-center">
		<button
			class="mt-4 rounded-full bg-gray-200 p-2 transition-colors hover:bg-gray-400"
			aria-label="add"
			on:click={addCard}>
			<img src="/plus.svg" alt="add" class="h-8 w-8 text-gray-600" />
		</button>
	</div>
	{#each damageCards as damageCard (damageCard)}
		<div
			transition:fade={{
				easing: quadOut,
				duration: 400
			}}
			animate:flip={{
				duration: 400
			}}
			class="mt-6">
			<DamageCard on:close={() => removeCard(damageCard)} />
		</div>
	{/each}
</div>
