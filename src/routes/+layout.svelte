<script lang="ts">
	import { dataStore } from '$lib/stores/map-data-store';
	import { setContext } from 'svelte';
	import * as topojson from 'topojson-client';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const { countries } = data.data.objects;

	$: dataStore.set({
		countries: topojson.feature(data.data, countries),
		interiors: topojson.mesh(data.data, countries, (a, b) => a !== b)
	});

	setContext('parsedData', dataStore);
</script>

<slot />
