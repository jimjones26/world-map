<script lang="ts">
	import { dataStore } from '$lib/stores/map-data-store';
	import { setContext } from 'svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: dataStore.set(data.data);

	setContext('parsedData', dataStore);
</script>

<slot />
