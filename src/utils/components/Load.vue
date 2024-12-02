<template>
    <section>
      <div class="fixed top-0 left-0 w-full h-full f-c-c z-99999999999999999999 bg-white" v-if='options.open'>
        <div class="load f-c-c flex-col gap-10">
    <div class="nb-spinner"></div>
          <div class="text-[var(--text-secondary)] text-lg">{{options.txt}}</div>
        </div>
      </div>
    </section>
  </template>
  <script setup>
  import { defineProps } from 'vue'
  defineProps({
    options: {
      type: Object,
      default: {}
    }
  })
  </script>
  <style scoped>

  .nb-spinner {
  width: 75px;
  height: 75px;
  margin: 0;
  background: transparent;
  border-top: 4px solid var(--primary);
  border-right: 4px solid transparent;
  border-radius: 50%;
  -webkit-animation: 1s spin linear infinite;
  animation: 1s spin linear infinite;
}
  @keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
  </style>