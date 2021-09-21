<script lang="ts">
	export let value: string | number, label: string;
</script>

<label>
	<div>{label}</div>
	<input bind:value type="number" />
</label>
