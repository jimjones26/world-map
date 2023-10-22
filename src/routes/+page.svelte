<script lang="ts">
	import Marks from '$lib/components/Marks.svelte';
	import { getContext } from 'svelte';

	// grab map data from the data store
	const mapData: any = getContext('parsedData');

	// width, height and margins for svg container
	const width: number = 960;
	const height: number = 500;
	const margin = { top: 20, right: 30, bottom: 50, left: 70 };
</script>

<svg {width} {height}>
	<Marks countries={$mapData.countries} interiors={$mapData.interiors} />
</svg>
