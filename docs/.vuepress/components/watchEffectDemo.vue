<template>
  <button type="button" @click="refCount++">
    refCount is: {{ refCount }}
  </button>
  <button style="margin-left: 20px" type="button" @click="reactiveState.count++">
    reactiveState.count is: {{ reactiveState.count }}
  </button>
</template>

<script>
import {defineComponent, ref, reactive, watchEffect} from 'vue'
export default defineComponent({
  setup() {
    const refCount = ref(0)
    const reactiveState = reactive({count: 0})
    watchEffect(() => {
      console.log('refCount', refCount.value)
      console.log('reactiveState', reactiveState.count)
    })
    return {
      refCount,
      reactiveState
    }
  }
})
</script>