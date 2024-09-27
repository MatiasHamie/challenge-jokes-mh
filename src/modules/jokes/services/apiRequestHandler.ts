import type { Ref } from 'vue'
import axios from 'axios'

export async function apiRequestHandler<T, Args extends any[]>(
  apiFunction: (...args: Args) => Promise<T>,
  loading: Ref<boolean>,
  error: Ref<string | null>,
  ...args: Args
): Promise<T | null> {
  loading.value = true
  error.value = null

  try {
    const data = await apiFunction(...args)
    return data
  } catch (err) {
    if (axios.isAxiosError(err)) {
      error.value = err.response?.data?.message || 'An error occurred during the API call'
    } else {
      error.value = 'An unexpected error occurred'
    }
    return null
  } finally {
    loading.value = false
  }
}
