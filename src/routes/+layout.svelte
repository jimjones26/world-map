<script lang="ts">
	import { worldDataStore } from '$lib/stores/world-data';
	import { setContext } from 'svelte';
	import * as topojson from 'topojson-client';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const { countries, land } = data.worldData.objects;

	$: worldDataStore.set({
		countries: topojson.feature(data.worldData, countries),
		interiors: topojson.mesh(data.worldData, countries, (a, b) => a !== b),
		land: topojson.feature(data.worldData, land)
	});

	setContext('worldData', worldDataStore);
</script>

<slot />
