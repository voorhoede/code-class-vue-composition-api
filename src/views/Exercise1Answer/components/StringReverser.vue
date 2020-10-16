<template>
  <p>{{ modifiedString }}</p>
  <button @click="reverseString">
    Reverse string
  </button>
</template>

<script>
  import { ref } from 'vue'

  export default {
    props: {
      string: {
        type: String,
        required: true,
      }
    },
    setup(props) {
      const modifiedString = ref(props.string)

      function reverseString() {
        modifiedString.value = modifiedString.value.split('').reverse().join('')
      }

      return {
        modifiedString,
        reverseString
      }
    }
  }
</script>
