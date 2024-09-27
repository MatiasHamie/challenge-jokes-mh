<template>
  <div class="mb-4">
    <label for="category" class="font-semibold">Filter by Category:</label>
    <select
      id="category"
      v-model="selectedType"
      @change="onFilterChange"
      class="p-2 border rounded"
    >
      <option v-for="type in jokeTypes" :key="type" :value="type">{{ type }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue'

const props = defineProps<{
  jokeTypes: string[]
  selectedType: string
}>()

const emits = defineEmits(['filterChange'])

const selectedType = ref(props.selectedType)

const onFilterChange = () => {
  emits('filterChange', selectedType.value)
}

watch(
  () => props.selectedType,
  (newValue) => {
    selectedType.value = newValue
  }
)
</script>
