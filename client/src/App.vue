<script setup lang="ts">
import { ref } from 'vue'

var isRunning: bool = ref(false)

function start() {
  isRunning.value = true
}

function stop() {
  isRunning.value = false
}
</script>

<template>
  <button
    id="start-button"
    data-testid="start-button"
    class="start-stop-button"
    :class="{ hidden: isRunning }"
    @click="start"
  >
    <svg viewBox="0 0 24 24" xmlns="www.w3.org" class="play-icon">
      <path fill="currentColor" d="M8 5v14l11-7z" />
    </svg>
  </button>
  <button
    id="stop-button"
    data-testid="stop-button"
    class="start-stop-button"
    :class="{ hidden: !isRunning }"
    @click="stop"
  >
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      class="stop-icon"
    >
      <rect x="8" y="8" width="8" height="8" />
    </svg>
  </button>
</template>

<style scoped>
.start-stop-button {
  background-color: #ffa500;
  color: white;
  border: none;
  width: 4rem;
  height: 4rem;
  text-align: center;
  justify-content: center;
  border-radius: 2rem;
  cursor: pointer;
  align-items: center;
}
.start-stop-button:hover {
  background-color: #ffb733;
}
.start-stop-button:active {
  background-color: #e69500;
}
.play-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: white;
}
.stop-icon {
  width: 3.5rem;
  height: 3.5rem;
  color: white;
}
.hidden {
  display: none;
}
</style>
