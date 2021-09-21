<script lang="ts">
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
	{#each damageCards as damageCard (damageCard)}
		<DamageCard on:close={() => removeCard(damageCard)} />
	{/each}
	<div class="text-center">
		<button class="mt-4 p-2 bg-gray-200 rounded-full" aria-label="add" on:click={addCard}
			><img src="/plus.svg" alt="add" class="w-8 h-8 text-gray-600" />
		</button>
	</div>
</div>
