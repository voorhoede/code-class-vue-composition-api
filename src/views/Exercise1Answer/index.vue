<template>
  <div>
    <h1>Exercise 1</h1>
    <router-link :to="{ name: 'Exercise1' }">Back to exercise</router-link>
    <p>Modify the StringReverser component, to reverse the input on button clicks</p>
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
