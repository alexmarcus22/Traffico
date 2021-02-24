<template>
  <heroComponent />
</template>

<style lang='scss'>
@import "./assets/sass/main.scss";
</style>

<script>
import heroComponent from "./page/components/hero.component.vue";

export default {
  name: "App",
  components: {
    heroComponent,
  },
};
</script>
