import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params }) => {
  // load world atlas data
  const worldAtlasUrl: string = 'https://gist.githubusercontent.com/jimjones26/d8fa5949da7090b7d5be3695db87dbeb/raw/world-map-data.json'
  const worldAtlasRes = await fetch(worldAtlasUrl)

  return { worldData: await worldAtlasRes.json() };
};