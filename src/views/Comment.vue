<template>
  <div>
    <Nav/>
    <PostComment/>
    <Commentary/>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue"
import PostComment from "../components/PostComment.vue"
import Commentary from "../components/Commentary.vue"
export default {
  name: "commentary",
  components: {
    Nav,
    PostComment,
    Commentary,
  },
};
</script>

<style></style>