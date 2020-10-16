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
      /**
       * @TODO:
       * 1. Create a ref called `modifiedString`
       * 2. Use the `string` prop as initial value
       * 3. Create a function that reverses the current value of the `modifiedString`
       * 4. Expose `modifiedString` and `reverseString` to the template
       */
    }
  }
</script>
