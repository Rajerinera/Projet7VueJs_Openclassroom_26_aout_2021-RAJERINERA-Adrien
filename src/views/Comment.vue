<template>
  <div>
    <Nav/>
    <Commentary/>
  </div>
</template>

<script>
import Commentary from "../components/Commentary.vue";
import Nav from "../components/Nav.vue"
export default {
  name: "commentary",
  components: {
    Nav,
    Commentary,
  },
};
</script>

<style></style>