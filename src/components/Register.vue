<template>
  <div id="formContent">
    <!-- Login Form -->
    <form>
      <input
        type="text"
        id="login"
        class="fadeIn second"
        placeholder="email"
        v-model="email"
      />
      <input
        type="text"
        id="password"
        class="fadeIn third"
        placeholder="password"
        v-model="password"
      />
      <input
        @click="login()"
        type="submit"
        class="fadeIn fourth"
        value="Se connecter"
      />
      <div class="alert" v-if="succès">réussis</div>
    </form>
  </div>
</template>

<script>


export default {
  name: "register",
  data: function () {
    return {
      email: "",
      password: "",
      succès: false,
    };
  },
  methods: {
    login: function () {
      const self = this;
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
          succès: this.succès = true,
        })
        .then(function () {
          
          self.$router.push('/comment/:id')

        }),
        function (error) {
          console.log(error);
        };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.alert {
  width: 20px;
  font-style: bold;
}
</style>