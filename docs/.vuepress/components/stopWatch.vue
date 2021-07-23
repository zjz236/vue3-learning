<template>
  <button type="button" @click="refCount++">
    refCount is: {{ refCount }}
  </button>
  <button style="margin-left: 10px" type="button" @click="stopWatch">
    stopWatch
  </button>
</template>

<script>
import {defineComponent, ref, reactive, watch} from 'vue'
export default defineComponent({
  setup() {
    const refCount = ref(0)
    const stopWatch = watch(refCount, (newVal, oldVal) => {
      console.log('refCount ', 'newVal:', newVal, ' oldVal:', oldVal)
    })
    return {
      refCount,
      stopWatch
    }
  }
})
</script>