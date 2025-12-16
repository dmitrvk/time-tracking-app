<script setup>
  const a: int = 1;
  console.log(a);
</script>

<template>
  <button class="start-stop-button">
  <svg viewBox="0 0 24 24" xmlns="www.w3.org" class="play-icon">
    <!-- Path for a standard play icon (triangle) -->
    <path fill="currentColor" d="M8 5v14l11-7z"/>
  </svg>
  </button>
</template>

<style scoped>
  .start-stop-button {
    background-color: #FFA500;
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
    background-color: #FFB733;
  }
  .start-stop-button:active {
    background-color: #E69500;
  }
.play-icon {
  /* Sizing and color of the icon */
  width: 2.5rem;
  height: 2.5rem;
  color: white;
}
</style>
