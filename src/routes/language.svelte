<script lang="ts">
	import CharactersPicker from '$components/language/CharactersPicker/index.svelte';
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
