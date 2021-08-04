<template>
  <div>
    <Nav/>
    <ProfilUser/>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import ProfilUser from "../components/ProfilUser.vue";

export default {
  name: "contact",
  components: {
    Nav,
    ProfilUser,
  },
};
</script>

<style lang="scss"></style>