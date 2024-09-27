import { ref } from 'vue'
import type { Joke } from '../interfaces/types'

const LOCAL_STORAGE_KEY = 'favouriteJokes'

export function useFavourites() {
  const showFavourites = ref(false)

  const getSavedFavourites = (): string[] => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  }

  const savedFavourites = ref<string[]>(getSavedFavourites())

  const saveFavouritesToLocalStorage = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedFavourites.value))
  }

  const toggleFavourite = (joke: Joke) => {
    const isFavourite = savedFavourites.value.includes(joke.id)

    if (isFavourite) {
      savedFavourites.value = savedFavourites.value.filter((id) => id !== joke.id)
    } else {
      savedFavourites.value.push(joke.id)
    }

    joke.isFavourite = !isFavourite
    saveFavouritesToLocalStorage()
  }

  const toggleShowFavourites = () => {
    showFavourites.value = !showFavourites.value
  }

  const clearFavourites = () => {
    savedFavourites.value = []
    saveFavouritesToLocalStorage()
  }

  const filterJokesByFavourite = (jokes: Joke[]) => {
    return jokes.filter((joke) => savedFavourites.value.includes(joke.id))
  }

  return {
    savedFavourites,
    toggleFavourite,
    toggleShowFavourites,
    clearFavourites,
    showFavourites,
    filterJokesByFavourite
  }
}
