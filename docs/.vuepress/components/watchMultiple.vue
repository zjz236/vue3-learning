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
    watch([refCount, () => reactiveState.count],
        ([newRefVal, oldRefVal], [newReactiveVal, oldReactiveVal]) => {
          console.log('refCount ', 'newVal:', newRefVal, ' oldVal:', oldRefVal)
          console.log('reactiveState.count ', 'newVal:', newReactiveVal, ' oldVal:', oldReactiveVal)
        })
    return {
      refCount,
      reactiveState
    }
  }
})
</script>