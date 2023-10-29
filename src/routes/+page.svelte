<script lang="ts">
	import Marks from '$lib/components/Marks.svelte';
	import { getContext } from 'svelte';

	// grab map data from the data store
	const data: any = getContext('worldData');

	// width, height and margins for svg container
	const width: number = 960;
	const height: number = 500;
</script>

<svg {width} {height}>
	<Marks data={$data} />
</svg>
