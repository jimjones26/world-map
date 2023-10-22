<script lang="ts">
	import * as d3 from 'd3';
	export let data: any;

	const projection = d3.geoNaturalEarth1();
	const path = d3.geoPath(projection);
	const graticule = d3.geoGraticule();
</script>

<path d={path({ type: 'Sphere' })} fill="none" stroke="#ccc" />
<path d={path(graticule())} fill="none" stroke="#efefef" />
{#each data.land.features as feature, i}
	<g>
		<path d={path(feature)} fill="#ccc" stroke="none" />
	</g>
{/each}
<path d={path(data.interiors)} fill="none" stroke="white" />
