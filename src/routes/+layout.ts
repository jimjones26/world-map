import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params }) => {
  // load world atlas data
  const worldAtlasUrl: string = 'https://gist.githubusercontent.com/jimjones26/d8fa5949da7090b7d5be3695db87dbeb/raw/world-map-data.json'
  const worldAtlasRes = await fetch(worldAtlasUrl)

  // load cities data
  const citiesUrl: string = 'https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/worldcities_clean.csv'
  const citiesRes = await fetch(citiesUrl)

  return {
    worldData: await worldAtlasRes.json(),
    citiesData: await citiesRes.text()
  };
};