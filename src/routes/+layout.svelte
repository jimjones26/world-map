<script lang="ts">
	import { dataStore } from '$lib/stores/map-data-store';
	import { setContext } from 'svelte';
	import * as topojson from 'topojson-client';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const geoJsonData: any = topojson.feature(data.data, data.data.objects.countries);

	$: dataStore.set(geoJsonData);

	setContext('parsedData', dataStore);
</script>

<slot />
