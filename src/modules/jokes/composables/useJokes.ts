import { ref, watchEffect, onMounted } from 'vue'
import { apiRequestHandler } from '../services/apiRequestHandler'
import type { Joke } from '../interfaces/types'
import JokeService from '../services/JokesService'

import { useJokesSort } from './useJokesSort'
import { useJokesFilter } from './useJokesFilter'
import { useFavourites } from './useJokesFavourites'
import { usePagination } from '@/composables/usePagination'

export function useJokes() {
  const jokes = ref<Joke[]>([])
  const paginatedJokes = ref<Joke[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const jokeTypes = ref<string[]>([])
  const jokesType = ref<string>('programming')

  const {
    currentPage,
    totalPages,
    onNextPage,
    onPrevPage,
    paginatedData,
    onResetPagination,
    totalItems
  } = usePagination(5)
  const { sortJokes, sortAscending, toggleSortOrder } = useJokesSort()
  const { filterJokes } = useJokesFilter()

  const { showFavourites, toggleShowFavourites, toggleFavourite, clearFavourites } = useFavourites()

  const fetchJokes = async (type: string) => {
    const data = await apiRequestHandler(() => JokeService.fetchJokes(type), loading, error)
    if (data) {
      jokes.value = data || []
      totalItems.value = jokes.value.length
      onResetPagination()
      applyFilterAndSort()
    }
  }

  const fetchJokeTypes = async () => {
    const types = await apiRequestHandler(JokeService.fetchJokeTypes, loading, error)
    if (types) {
      jokeTypes.value = types || []
    }
  }

  const onClearFavourites = () => {
    fetchJokes(jokesType.value)
    clearFavourites()
  }

  const applyFilterAndSort = () => {
    let processedJokes = jokes.value ? filterJokes(jokes.value) : []
    processedJokes = sortJokes(processedJokes)

    if (showFavourites.value) {
      processedJokes = processedJokes.filter((joke) => joke.isFavourite)
    }

    paginatedJokes.value = paginatedData(processedJokes)
    totalItems.value = processedJokes.length
  }

  watchEffect(() => {
    applyFilterAndSort()
  })

  onMounted(() => {
    fetchJokeTypes()
    fetchJokes(jokesType.value)
  })

  return {
    jokes,
    paginatedJokes,
    currentPage,
    totalPages,
    jokesType,
    jokeTypes,
    sortAscending,
    error,
    loading,
    fetchJokes,
    toggleSortOrder,
    onNextPage,
    onPrevPage,
    toggleShowFavourites,
    toggleFavourite,
    showFavourites,
    onClearFavourites
  }
}
