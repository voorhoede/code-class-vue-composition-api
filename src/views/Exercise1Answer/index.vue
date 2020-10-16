<template>
  <div>
    <h1>Exercise 1</h1>
    <router-link :to="{ name: 'Exercise1' }">Back to exercise</router-link>
    <string-reverser string="Voorhoede"/>
  </div>
</template>

<script>
  import StringReverser from './components/StringReverser'

  export default {
    components: {
      StringReverser
    }
  }
</script>
