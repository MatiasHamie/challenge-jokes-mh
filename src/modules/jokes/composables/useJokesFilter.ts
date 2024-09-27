import { ref } from 'vue'
import type { Joke } from '../interfaces/types'

export function useJokesFilter() {
  const jokesType = ref<string>('general')

  const filterJokes = (jokes: Joke[]) => {
    if (jokesType.value === 'general') {
      return jokes
    }
    return jokes.filter((joke) => joke.type === jokesType.value)
  }

  return {
    jokesType,
    filterJokes
  }
}
