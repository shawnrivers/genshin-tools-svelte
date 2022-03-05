<script lang="ts">
	export let value: string | number, label: string;
</script>

<label>
	<div class="text-sm font-medium text-gray-700">{label}</div>
	<input
		bind:value
		type="number"
		class="sm:text-smt mt-1 block w-full rounded-md border border-gray-300 p-1 text-base text-gray-800 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" />
</label>
