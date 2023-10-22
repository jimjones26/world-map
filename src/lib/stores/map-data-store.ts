import { writable } from 'svelte/store';

const _dataStore = () => {
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

export const dataStore = _dataStore();