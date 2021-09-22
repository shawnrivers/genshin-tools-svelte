<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import DamageCard from '$components/damage/DamageCard/index.svelte';
	import { generateId } from '$utils/id';

	let damageCards: string[] = [generateId()];

	function addCard() {
		damageCards = [...damageCards, generateId()];
	}

	function removeCard(id: string) {
		damageCards = damageCards.filter((card) => card !== id);
	}
</script>

<svelte:head>
	<title>Damage Expectation - Genshin Tools</title>
</svelte:head>

<div>
	<h1 class="text-gray-800 text-4xl font-bold uppercase">Damage Expectation</h1>
	<div class="text-center">
		<button
			class="mt-4 p-2 bg-gray-200 rounded-full hover:bg-gray-400 transition-colors"
			aria-label="add"
			on:click={addCard}
		>
			<img src="/plus.svg" alt="add" class="w-8 h-8 text-gray-600" />
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
			class="mt-6"
		>
			<DamageCard on:close={() => removeCard(damageCard)} />
		</div>
	{/each}
</div>
