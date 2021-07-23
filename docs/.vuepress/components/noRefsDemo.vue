<template>
  <div>
    <p>count: {{count}}</p>
    <p>aRef: {{aRef}}</p>
    <p>bRef: {{bRef}}</p>
    <p>aReactive: {{aReactive}}</p>
    <p>bReactive: {{bReactive}}</p>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onUnmounted } from 'vue'
export default defineComponent({
  setup() {
    const count = ref(0)
    const stateRef = ref({ aRef: 0, bRef: 0 })
    const stateReactive = reactive({ aReactive: 0, bReactive: 0 })
    const {aRef, bRef} = stateRef.value
    const {aReactive, bReactive} = stateReactive
    const time = setInterval(() => {
      count.value ++;
      stateRef.value.aRef += 2;
      stateRef.value.bRef += 3;
      stateReactive.aReactive += 2;
      stateReactive.bReactive += 3;
    }, 1000)
    onUnmounted(() => {
      clearInterval(time)
    })
    return {
      count,
      aRef,
      bRef,
      aReactive,
      bReactive
    }
  }
})
</script>
