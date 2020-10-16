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
      const modifiedString = computed(() => {
        if (stringIsReversed.value) {
          return props.string
            .split('')
            .reverse()
            .join('')
        }

        return props.string
      })

      return {
        modifiedString,
        stringIsReversed,
      }
    }
  }
</script>
