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

<h1>Damage Expectation</h1>
{#each damageCards as damageCard (damageCard)}
	<DamageCard />
	<button on:click={() => removeCard(damageCard)}>Remove</button>
{/each}

<div>
	<button on:click={addCard}>Add</button>
</div>
