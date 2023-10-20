<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	// grab map data from the data store
	const chartData: Writable<Array<any>> = getContext('parsedData');
</script>

{JSON.stringify($chartData)}
