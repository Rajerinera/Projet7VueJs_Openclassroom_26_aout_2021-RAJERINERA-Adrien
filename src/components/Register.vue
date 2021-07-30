<template>
  <div id="formContent">
    <!-- Login Form -->
    <fieldset>
      <input
        type="text"
        id="login"
        class="fadeIn second"
        placeholder="email"
        v-model="dataConnect.email"
      />
      <input
        type="text"
        id="password"
        class="fadeIn third"
        placeholder="password"
        v-model="dataConnect.password"
      />
       <button
        @click="loginAccount"
        class="w-100 btn btn-lg btn-primary"
        type="submit"
      >
        Se connecter
      </button>
    </fieldset>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "register",
  data () {
    return {
        dataConnect:{
          email: null,
          password: null,
        },
        err: ''
     
    };
  },
  methods: {
    loginAccount: function(){
      if(
        this.email !== null ||
        this.password !== null
      ){
        axios
        .post("http://localhost:3000/login", this.dataConnect
        )
        .then(response =>{
          console.log(response)
        })
        .catch(error =>{
          
          console.log(error);
        })
      }else{
        console.log('echec')
      }
    }
  }
  
}
</script>

<style scoped>
fieldset {
  display: flex;
  flex-direction: column;
}
.alert {
  width: 20px;
  font-style: bold;
}
</style>