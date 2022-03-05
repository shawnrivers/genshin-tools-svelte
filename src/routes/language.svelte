<script lang="ts">
	import CharactersPicker from '$components/language/CharactersPicker/index.svelte';

	const teyvatCharacters = [
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
	];

	let teyvatInput: string[] = [];
	function addToInput(character: string) {
		const newInput = [...teyvatInput];
		newInput.push(character);
		teyvatInput = newInput;
	}
	function deleteOneCharacter() {
		const newInput = [...teyvatInput];
		newInput.pop();
		teyvatInput = newInput;
	}
	function clearInput() {
		teyvatInput = [];
	}
</script>

<svelte:head>
	<title>Language - Genshin Tools</title>
</svelte:head>

<div class="max-w-3xl text-center">
	<h1 class="text-4xl font-bold uppercase">Language</h1>
	<div class="mt-8">
		<CharactersPicker type="teyvat" />
		<hr class="my-6" />
		<CharactersPicker type="khaenriah" />
	</div>
</div>
