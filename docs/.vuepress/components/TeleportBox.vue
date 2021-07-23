<template>
  <div id="teleport-box">
    <strong>这里是TeleportBox组件</strong>
    <TeleportChild/>
  </div>
</template>
<script>
import TeleportChild from "./TeleportChild.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {TeleportChild}
})
</script>