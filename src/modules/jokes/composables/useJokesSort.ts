import { ref } from 'vue'
import type { Joke } from '../interfaces/types'

export function useJokesSort() {
  const sortAscending = ref<boolean>(true)

  const sortJokes = (jokes: Joke[]) => {
    return jokes.sort((a, b) => {
      const comparison = a.setup.localeCompare(b.setup)
      return sortAscending.value ? comparison : -comparison
    })
  }

  const toggleSortOrder = () => {
    sortAscending.value = !sortAscending.value
  }

  return {
    sortJokes,
    sortAscending,
    toggleSortOrder
  }
}
