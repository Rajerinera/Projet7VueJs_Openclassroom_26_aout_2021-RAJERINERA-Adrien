import { createStore } from "vuex";
const axios = require("axios")
const store = createStore({
  state: {
      
  },
  actions: {
    createAccount: ({ commit }, userInfos) => {
      commit,
        console.log(userInfos)
      axios({
        method: 'post',
        url: 'http://localhost:3000/signup/',
        data: {
          email: userInfos.email,
          password: userInfos.password
        
        }
      });
    }
  },

})
export default store;
'http://localhost:3000/signup/'
//createAccount: ({ commit }, userInfos) => {