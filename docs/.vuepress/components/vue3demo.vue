<template>
  <p>count:{{ count }}</p>
  <p>倍数：{{ multiple }}</p>
  <div>
    <button style="margin-right: 10px" @click="increase">加1</button>
    <button @click="decrease">减一</button>
  </div>
</template>

<script>
import {computed, defineComponent, ref} from 'vue'
export default defineComponent({
  setup() {
    const count = ref(0)
    const increase = () => count.value ++
    const decrease = () => count.value --
    return {
      count,
      multiple: computed(() => count.value * 2),
      increase,
      decrease
    }
  }
})
</script>