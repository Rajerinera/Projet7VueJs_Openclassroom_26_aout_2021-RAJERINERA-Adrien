<template>
  <div id="formContent">
    <!-- Login Form -->
    <form>
      <input
        v-model="dataLog.name"
        type="text"
        id="name"
        class="fadeIn third"
        placeholder="name"
      />
      <input
        v-model="dataLog.email"
        type="text"
        id="login"
        class="fadeIn second"
        placeholder="email"
      />
      <input
        v-model="dataLog.password"
        type="text"
        id="password"
        class="fadeIn third"
        placeholder="password"
      />
      <button
        @click="logaccount"
        class="w-100 btn btn-lg btn-primary"
        type="submit"
      >
        S'inscrire
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Log",
  data() {
    return {
      dataLog: {
        name: "",
        email: "",
        password: "",
      },
      error: "",
      err: "",
    };
  },
  methods: {
    logaccount: function () {
      const datalog1 = "test" 
      if(datalog1){
      axios
        .post("http://localhost:3000/signup/", this.dataLog)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          this.err = error.response;
          console.log(error);
        });
      }else{
        this.err=('Email incorrect')
      }
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

