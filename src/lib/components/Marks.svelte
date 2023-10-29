<script lang="ts">
	import * as d3 from 'd3';
	export let worldData: any;
	export let citiesData: any;
	export let sizeScale: any;
	export let sizeValue: any;

	const projection = d3.geoNaturalEarth1();
	const path = d3.geoPath(projection);
	const graticule = d3.geoGraticule();

	const getLngLat = (city: any) => {
		return projection([city.lng, city.lat]);
	};
</script>

<g>
	<path d={path({ type: 'Sphere' })} fill="none" stroke="#ccc" />
	<path d={path(graticule())} fill="none" stroke="#efefef" />
	{#each worldData.land.features as feature, i}
		<g>
			<path d={path(feature)} fill="#ccc" stroke="none" />
		</g>
	{/each}
	<path d={path(worldData.interiors)} fill="none" stroke="white" />
	{#each citiesData.cities as city}
		<circle
			cx={getLngLat(city)?.[0]}
			cy={getLngLat(city)?.[1]}
			r={sizeScale(sizeValue(city))}
			opacity={0.3}
		/>
	{/each}
</g>
