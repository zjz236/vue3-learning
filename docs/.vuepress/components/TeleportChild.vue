<template>
  <teleport to="#teleport-child">
    <div id="child">我是TeleportChild组件</div>
  </teleport>
</template>

<script>
export default {
  name: "TeleportChild"
}
</script>

<style scoped>

</style>