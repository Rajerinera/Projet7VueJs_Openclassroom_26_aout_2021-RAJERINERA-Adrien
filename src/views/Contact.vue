<template>
  <div>
    <Nav/>
    <Contacts />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Contacts from "../components/Contacts.vue";

export default {
  name: "contact",
  components: {
    Nav,
    Contacts,
  },
};
</script>

<style scoped>
</style>