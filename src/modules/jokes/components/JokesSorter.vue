<template>
  <div class="mb-4">
    <button @click="toggleSortOrder" class="p-2 bg-blue-500 text-white rounded">
      Sort by Setup ({{ sortAscending ? 'Ascending' : 'Descending' }})
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  sortAscending: Boolean
})

const emits = defineEmits(['sortChange'])

const toggleSortOrder = () => {
  emits('sortChange')
}
</script>
