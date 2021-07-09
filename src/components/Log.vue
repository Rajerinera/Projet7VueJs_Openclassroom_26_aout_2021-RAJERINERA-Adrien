<template>
  <div id="formContent">
    <!-- Login Form -->
    <form>
      <input
        v-model="email"
        type="text"
        id="login"
        class="fadeIn second"
        placeholder="email"
      />
      <input
        v-model="password"
        type="text"
        id="password"
        class="fadeIn third"
        placeholder="password"
      />
      <input
        @click="createAccount()"
        type="submit"
        class="fadeIn fourth"
        value="S'inscrire"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "Log",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    createAccount: function () {
      this.$store
        .dispatch("createAccount", {
          email: this.email,
          password: this.password,
        })
        .then(function (response) {
          console.log(response);
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
</style>

