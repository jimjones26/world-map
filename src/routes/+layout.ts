import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params }) => {
  const dataUrl: string = 'https://gist.githubusercontent.com/jimjones26/d8fa5949da7090b7d5be3695db87dbeb/raw/world-map-data.json'
  const res = await fetch(dataUrl)

  return { worldData: await res.json() };
};