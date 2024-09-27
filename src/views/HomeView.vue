<template>
  <div class="bg-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A Vue.js-based Jokes App
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          This app fetches and displays jokes with features like filtering, sorting, and pagination
          for easy navigation. You can sort jokes by type, browse them page by page, or filter by
          category.
        </p>
      </div>

      <div class="mt-10">
        <div class="lg:text-lg leading-7 text-gray-700">
          <p>
            The project was designed with Vue 3's Composition API, focusing on reusable components
            and composables for filtering and sorting. Also there is a favourite filtering feature
            that allows users to mark jokes as favourites and view only those jokes. For now I have
            just used the browser's local storage to store the favourite jokes, but in a real-world
            app, I would use a proper backend API.
          </p>
          <p class="mt-4">
            My main goal was to write clean, maintainable code that’s easy for anyone to understand
            and extend. Feel free to explore the code, and I’m happy to walk you through the details
            if you have any questions.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
