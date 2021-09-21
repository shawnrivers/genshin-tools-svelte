<script lang="ts">
	export let value: string | number, label: string;
</script>

<label>
	<div class="text-gray-700 text-sm font-medium">{label}</div>
	<input
		bind:value
		type="number"
		class="block mt-1 p-1 w-full text-gray-800 text-base border border-gray-300 focus:border-indigo-500 rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm"
	/>
</label>
