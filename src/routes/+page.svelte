<script lang="ts">
	import Marks from '$lib/components/Marks.svelte';
	import { getContext } from 'svelte';

	// grab map data from the world data store
	const worldData: any = getContext('worldData');

	// width, height and margins for svg container
	const width: number = 960;
	const height: number = 500;
</script>

<svg {width} {height}>
	<Marks data={$worldData} />
</svg>
