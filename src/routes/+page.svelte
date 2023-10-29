<script lang="ts">
	import Marks from '$lib/components/Marks.svelte';
	import { getContext } from 'svelte';

	// grab map data from the world data store
	const worldData: any = getContext('worldData');

	// grab cities data from the cities data store
	const citiesData: any = getContext('citiesData');

	// width, height and margins for svg container
	const width: number = 960;
	const height: number = 500;

	console.log('CITIES: ', $citiesData);
</script>

<svg {width} {height}>
	<Marks worldData={$worldData} />
</svg>
