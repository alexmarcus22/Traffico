<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: "Hero Component",
  props: {
    msg: String,
  },
  data() {
    return {
			title: "Title"
		}
  },
};
</script>

<style>
</style>