<script lang="ts">
	import Input from './Input.svelte';

	let baseDamage = 0;
	let critRate = 0;
	let critDamageRate = 0;

	$: nonCritDamage = baseDamage * ((100 - critRate) / 100);
	$: critDamage = baseDamage * ((100 + critDamageRate) / 100) * (critRate / 100);
	$: damageExpectation = nonCritDamage + critDamage;
</script>

<div>
	<Input label="Base Damage" bind:value={baseDamage} />
	<Input label="Critical Rate (%)" bind:value={critRate} />
	<Input label="Critical Damage (%)" bind:value={critDamageRate} />
	<p>
		Damage Expectation: {damageExpectation}
	</p>
</div>
