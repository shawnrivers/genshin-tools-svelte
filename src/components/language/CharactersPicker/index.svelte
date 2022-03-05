<script lang="ts">
	import Button from '$components/shared/Button/index.svelte';

	export let type: 'teyvat' | 'khaenriah' = 'teyvat';

	const characters =
		type === 'teyvat'
			? [
					'a',
					'b',
					'c',
					'd',
					'e',
					'f',
					'g',
					'h',
					'i',
					'j',
					'k',
					'l',
					'm',
					'n',
					'o',
					'p',
					'q',
					'r',
					's',
					't',
					'u',
					'v',
					'w',
					'x',
					'y',
					'z'
			  ]
			: [
					'a',
					'b',
					'c',
					'd',
					'e',
					'f',
					'g',
					'h',
					'i',
					'j',
					'k',
					'l',
					'm',
					'n',
					'o',
					'p',
					'q',
					'r',
					's',
					't',
					'u',
					'v',
					'w',
					'x',
					'y',
					'z',
					'.',
					','
			  ];

	let input: string[] = [];

	function addToInput(character: string) {
		const newInput = [...input];
		newInput.push(character);
		input = newInput;
	}

	function deleteOneCharacter() {
		const newInput = [...input];
		newInput.pop();
		input = newInput;
	}

	function clearInput() {
		input = [];
	}
</script>

<section>
	<h2 class="text-3xl font-semibold capitalize">{type} language</h2>
	<div
		class={`mt-2 flex flex-wrap justify-center ${
			type === 'teyvat' ? 'font-teyvat' : 'font-khaenriah'
		}`}>
		{#each characters as character (character)}
			<Button class="m-0.5 text-3xl" on:click={() => addToInput(character)}>
				{character}
			</Button>
		{/each}
	</div>
	<section class="mt-3">
		<h3 class="text-2xl font-semibold text-zinc-700">Input</h3>
		<div class="mt-2 space-y-0.5 text-xl">
			<div class={type === 'teyvat' ? 'font-teyvat' : 'font-khaenriah'}>{input.join('')}</div>
			<div class="font-serif">{input.join('')}</div>
		</div>
		<div class="mt-2 flex flex-wrap items-center justify-center">
			{#if input.length > 0}
				<Button class="m-0.5" on:click={deleteOneCharacter}>Delete One Character</Button>
				<Button class="m-0.5" on:click={clearInput}>Reset</Button>
			{/if}
		</div>
	</section>
</section>
