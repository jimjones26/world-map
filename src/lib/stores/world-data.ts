import { writable } from 'svelte/store';

const _worldDataStore = () => {
  const { set, update, subscribe } = writable({
    countries: [],
    interiors: []
  })

  return {
    subscribe,
    set: (data: any) => set(data),
    update: (item: any) => update((currentState: any) => {
      currentState.csvData.push(item)
      return { ...currentState }
    })
  }
}

export const worldDataStore = _worldDataStore();