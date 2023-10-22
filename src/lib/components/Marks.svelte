<script lang="ts">
	import * as d3 from 'd3';
	export let countries: any;
	export let interiors: any;

	const projection = d3.geoEqualEarth();
	const path = d3.geoPath(projection);
</script>

{#each countries.features as feature, i}
	<g>
		<path d={path({ type: 'Sphere' })} fill="none" stroke="#ccc" />
		<path d={path(feature)} fill="#ccc" stroke="none" />
	</g>
{/each}
<path d={path(interiors)} fill="none" stroke="white" />
