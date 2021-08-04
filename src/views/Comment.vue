<template>
  <div>
    <Nav/>
    <Commentary/>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue"
import Commentary from "../components/Commentary.vue"
export default {
  name: "commentary",
  components: {
    Nav,
    Commentary,
  },
};
</script>

<style></style>