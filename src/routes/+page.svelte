<script lang="ts">
	import * as d3 from 'd3';
	import Marks from '$lib/components/Marks.svelte';
	import { getContext } from 'svelte';

	// grab map data from the world data store
	const worldData: any = getContext('worldData');

	// grab cities data from the cities data store
	const citiesData: any = getContext('citiesData');

	// width, height and margins for svg container
	const width: number = 960;
	const height: number = 500;

	// size scale for cities radius
	const sizeValue = (d: any) => d.population;
	const maxRadius = 15;

	const sizeScale = d3
		.scaleSqrt()
		.domain([0, d3.max($citiesData.cities, sizeValue) as any])
		.range([0, maxRadius]);
</script>

<svg {width} {height}>
	<Marks worldData={$worldData} citiesData={$citiesData} {sizeScale} {sizeValue} />
</svg>
