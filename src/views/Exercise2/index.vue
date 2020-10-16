<template>
  <div>
    <h1>Exercise 2</h1>
    <router-link :to="{ name: 'Exercise2Answer' }">See answer</router-link>
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
