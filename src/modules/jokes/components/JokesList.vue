<template>
  <div class="grid grid-cols-1 gap-4">
    <h1 class="text-3xl font-bold mb-6 capitalize">{{ jokesType }} Jokes</h1>

    <JokesFilter
      v-if="jokeTypes?.length > 0"
      :jokeTypes="jokeTypes"
      :selectedType="jokesType"
      @filterChange="fetchJokes"
    />

    <JokesSorter :sortAscending="sortAscending" @sortChange="toggleSortOrder" />

    <div v-if="savedFavourites.length > 0" class="flex space-x-4 mb-4">
      <button @click="toggleShowFavourites" class="px-4 py-2 bg-blue-500 text-white rounded">
        <i class="pi pi-filter"></i>
        {{ showFavourites ? 'Show All Jokes' : 'Show Only Favourite Jokes' }}
      </button>

      <button @click="onClearFavourites" class="px-4 py-2 bg-red-500 text-white rounded">
        <i class="pi pi-trash"></i>
        Clear All Favourites
      </button>
    </div>

    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @next="onNextPage"
      @prev="onPrevPage"
    />

    <div v-if="error" class="text-red-500">
      <p>Error: {{ error }}</p>
    </div>

    <div v-if="loading" class="flex justify-center">
      <AppLoader />
    </div>

    <div v-else-if="paginatedJokes?.length > 0">
      <div
        v-for="joke in paginatedJokes"
        :key="joke.id"
        class="p-4 bg-gray-100 rounded shadow flex items-center justify-between"
      >
        <div>
          <p class="font-semibold">{{ joke.setup }}</p>
          <p class="italic">{{ joke.punchline }}</p>
        </div>

        <button @click="toggleFavourite(joke)" class="mt-2">
          <i v-if="joke.isFavourite" class="pi pi-heart-fill text-red-500"></i>
          <i v-else class="pi pi-heart"></i>
        </button>
      </div>
    </div>

    <div v-else class="text-gray-500 text-center">
      <p>No jokes available.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useJokes } from '../composables/useJokes'
import JokesFilter from './JokesFilter.vue'
import JokesSorter from './JokesSorter.vue'
import Pagination from '@/components/common/pagination/AppPagination.vue'
import AppLoader from '@/components/common/AppLoader.vue'
import { computed } from 'vue'

const {
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
  showFavourites,
  onClearFavourites,
  toggleFavourite
} = useJokes()

const savedFavourites = computed(() => paginatedJokes.value.filter((joke) => joke.isFavourite))
</script>
