<template>
  <div class="flex justify-between mt-4 items-center">
    <button
      @click="$emit('prev')"
      :disabled="currentPage === 1"
      class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
    >
      Previous
    </button>

    <span> Page {{ currentPage }} of {{ totalPages }} </span>

    <button
      @click="$emit('next')"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
button:disabled {
  cursor: not-allowed;
}
</style>
