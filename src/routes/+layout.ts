import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params }) => {
  const dataUrl: string = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'
  const res = await fetch(dataUrl)

  return { data: await res.text() };
};