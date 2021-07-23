<template>
  <button type="button" @click="refCount++">
    refCount is: {{ refCount }}
  </button>
  <button style="margin-left: 20px" type="button" @click="reactiveState.count++">
    reactiveState.count is: {{ reactiveState.count }}
  </button>
</template>

<script>
import {defineComponent, ref, reactive, watch} from 'vue'
export default defineComponent({
  setup() {
    const refCount = ref(0)
    const reactiveState = reactive({count: 0})
    watch(refCount, (newVal, oldVal) => {
      console.log('refCount ', 'newVal:', newVal, ' oldVal:', oldVal)
    })
    watch(() => reactiveState.count, (newVal, oldVal) => {
      console.log('reactiveState.count ', 'newVal:', newVal, ' oldVal:', oldVal)
    })
    return {
      refCount,
      reactiveState
    }
  }
})
</script>