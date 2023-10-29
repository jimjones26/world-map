<script lang="ts">
	import type { LayoutData } from './$types';
	import { setContext } from 'svelte';
	import * as topojson from 'topojson-client';
	import * as d3 from 'd3';

	import { worldDataStore } from '$lib/stores/world-data';
	import { citiesDataStore } from '$lib/stores/cities-data';

	export let data: LayoutData;

	const { countries, land } = data.worldData.objects;
	const cities = data.citiesData;

	$: worldDataStore.set({
		countries: topojson.feature(data.worldData, countries),
		interiors: topojson.mesh(data.worldData, countries, (a, b) => a !== b),
		land: topojson.feature(data.worldData, land)
	});
	$: citiesDataStore.set({
		cities: d3.csvParse(cities, d3.autoType)
	});

	setContext('worldData', worldDataStore);
	setContext('citiesData', citiesDataStore);
</script>

<slot />
