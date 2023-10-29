import { writable } from 'svelte/store';

const _citiesDataStore = () => {
  const { set, update, subscribe } = writable({
    cities: []
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

export const citiesDataStore = _citiesDataStore();