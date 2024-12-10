<script setup lang="ts">
</script>

<template>
 <div id="main">
    <router-view v-slot="{ Component }">
        <component :is="Component" :key="$route.fullPath" />
    </router-view>
  </div>
</template>

<style scoped>
#main {
  scrollbar-width: none;
  -ms-overflow-style: none;
  max-width: 100vw;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
#main::-webkit-scrollbar {
  display: none;
}
</style>
