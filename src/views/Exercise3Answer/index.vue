<template>
  <div class="exercise-3">
    <h1>Exercise 3</h1>
    <router-link :to="{ name: 'Exercise3' }">Back to exercise</router-link>
    <h2>Scroll direction: </h2>
    <p>{{ scrollDirection }}</p>
  </div>
</template>

<script>
  import { ref, onMounted, onUnmounted } from 'vue';

  export default {
    setup() {
      let lastScrollPosition = document.documentElement.scrollTop
      const scrollDirection = ref(getScrollDirection());

      function getScrollDirection() {
        const currentScrollPosition = document.documentElement.scrollTop
        let direction

        if (currentScrollPosition === lastScrollPosition) {
          direction = 'Neutral'
        } else {
          direction = currentScrollPosition > lastScrollPosition
            ? 'Down'
            : 'Up'
        }
        lastScrollPosition = currentScrollPosition
        return direction
      }

      function onScroll() {
        scrollDirection.value = getScrollDirection()
      }

      /**
       * @TODO:
       * 1. Use Vue's onMounted hook to make update the scrollDirection ref on scroll
       * 2. Use Vue's onUnmounted hook to remove listeners when to component unmounts
       */
      onMounted(() => window.addEventListener('scroll', onScroll))
      onUnmounted(() => window.removeEventListener('scroll', onScroll))

      return { scrollDirection }
    }
  }
</script>

<style>
  .exercise-3 {
    min-height: 150vh;
  }
</style>
