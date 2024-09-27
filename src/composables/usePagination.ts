import { ref, computed } from 'vue'

export function usePagination(itemsPerPage = 5) {
  const currentPage = ref(1)
  const totalItems = ref(0)
  const itemsPerPageRef = ref(itemsPerPage)

  const totalPages = computed(() => {
    return Math.ceil(totalItems.value / itemsPerPageRef.value)
  })

  const paginatedData = <T>(data: T[]) => {
    const start = (currentPage.value - 1) * itemsPerPageRef.value
    return data.slice(start, start + itemsPerPageRef.value)
  }

  const onNextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  const onPrevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  const onResetPagination = () => {
    currentPage.value = 1
  }

  return {
    currentPage,
    totalPages,
    onNextPage,
    onPrevPage,
    paginatedData,
    onResetPagination,
    totalItems
  }
}
