<template>
  <div>
    <Nav/>
    <ModifProfil/>
    <Footer/>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue"
import ModifProfil from "../components/ModifProfil.vue"
import Footer from "../components/Footer.vue"
export default {
  name: "updateProfile",
  components: {
    Nav,
    ModifProfil,
    Footer,
  },
};
</script>

<style></style>