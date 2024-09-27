<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/common/AppNavbar.vue'
</script>

<template>
  <AppNavbar />
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
