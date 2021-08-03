<template>
  <div class="test">
 <div v-for="user in users" :key="user.iduser">
   <p v-text ="user.name"></p>
   <p v-text="user.email"></p>
  </div>
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
    };
  },
  mounted() {
    this.users = []
    axios
      .get("http://localhost:3000/users/")
      .then((response) => {
        console.log(response.data.data);
        this.users = response.data.data
        console.log(this.users)
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script> 
<style scoped>
.test {
  text-align: center;
  width: 30rem;
  color: red;
}
h2, h3 {
  color: black;
  border: 1px solid black;
  font-size: large;
  height: 90px;
}
</style>