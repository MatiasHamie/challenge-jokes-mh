<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center">
          <h1 class="text-white text-lg">JokesApp</h1>
        </div>

        <div class="hidden sm:flex sm:space-x-4">
          <RouterLink
            to="/"
            class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
            aria-current="page"
            active-class="bg-white text-black"
            exact-active-class="bg-white text-black"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/jokes"
            class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
            aria-current="page"
            active-class="bg-white text-black"
            exact-active-class="bg-white text-black"
          >
            Jokes
          </RouterLink>
        </div>

        <div class="sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <RouterLink
          to="/"
          class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
          aria-current="page"
          active-class="bg-white text-black"
          exact-active-class="bg-white text-black"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/jokes"
          class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
          aria-current="page"
          active-class="bg-white text-black"
          exact-active-class="bg-white text-black"
        >
          Jokes
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
