<template>
  <div>
    <p>count: {{count}}</p>
    <p>stateRef-a: {{stateRef.a}}</p>
    <p>stateRef-b: {{stateRef.b}}</p>
    <p>stateReactive-a: {{stateReactive.a}}</p>
    <p>stateReactive-b: {{stateReactive.b}}</p>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onUnmounted } from 'vue'
export default defineComponent({
  setup() {
    const count = ref(0)
    const stateRef = ref({ a: 0, b: 0 })
    const stateReactive = reactive({ a: 0, b: 0 })
    const time = setInterval(() => {
      count.value ++;
      stateRef.value.a += 2;
      stateRef.value.b += 3;
      stateReactive.a += 2;
      stateReactive.b += 3;
    }, 1000)
    onUnmounted(() => {
      clearInterval(time)
    })
    return {
      count,
      stateRef,
      stateReactive
    }
  }
})
</script>
