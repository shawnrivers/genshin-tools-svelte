<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Input from './Input.svelte';

	let baseDamage = 0;
	let critRate = 0;
	let critDamageRate = 0;

	$: nonCritDamage = baseDamage * ((100 - critRate) / 100);
	$: critDamage = baseDamage * ((100 + critDamageRate) / 100) * (critRate / 100);
	$: damageExpectation = nonCritDamage + critDamage;

	const dispatch = createEventDispatcher();

	function handleClose() {
		dispatch('close');
	}
</script>

<div class="relative mt-6 p-4 bg-gray-100 rounded-lg">
	<div class="flex flex-col space-y-4">
		<Input label="Base Damage" bind:value={baseDamage} />
		<Input label="Critical Rate (%)" bind:value={critRate} />
		<Input label="Critical Damage (%)" bind:value={critDamageRate} />
		<div class="text-gray-800 text-base">
			Damage Expectation: <span class="font-bold">{damageExpectation}</span>
		</div>
	</div>
	<button
		aria-label="close"
		class="absolute z-10 right-0 top-0 p-1 bg-gray-400 bg-opacity-40 rounded-full transform -translate-y-1/3 translate-x-1/3"
		on:click={handleClose}
	>
		<img src="/x.svg" alt="close" class="w-4 h-4 text-gray-600" />
	</button>
</div>
