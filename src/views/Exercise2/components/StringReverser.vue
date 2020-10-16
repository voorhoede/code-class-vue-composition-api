<template>
  <p>{{ modifiedString }}</p>
  <label>
    <input type="checkbox" v-model="stringIsReversed"/>
    Reverse string
  </label>
</template>

<script>
  import { ref, computed } from 'vue'

  export default {
    props: {
      string: {
        type: String,
        required: true,
      }
    },
    setup(props) {
      const stringIsReversed = ref(false)
      
      /**
       * @TODO use `computed` to reverse the `string` prop,
       * when `stringIsReversed` equals true
       */
      const modifiedString = props.string

      return {
        modifiedString,
        stringIsReversed,
      }
    }
  }
</script>
