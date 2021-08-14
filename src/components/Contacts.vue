<template>
  <div class="body">
    <h1>La liste des inscrits</h1>
    <ul>
      <li class="use" v-for="user in users" :key="user.iduser">
        <p class="name">{{ user.name }}</p>
        <p class="email">{{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "profile",
  data() {
    return {
      name: "",
      users: [],
      comments: [],
    };
  },
  mounted() {
    this.users = [];
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        console.log(response.data.data);
        this.users = response.data.data;
        console.log(this.users);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script> 
<style scoped>
.use {
  text-decoration: none;
  display: flex;
  justify-content: space-between;
}
.email {
  margin-right: 40px;
  width: 40%;
}
.name {
  width: 90px;
  border: 1px solid black;
}
</style>