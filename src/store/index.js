import { createStore } from "vuex";
const axios = require("axios")
const instance = axios.create({
  baseURL: "http://localhost:3000/",
})

let user = localStorage.getItem('user');
if (!user) {
  user = {
    iduser: -1,
    token: '',
  };
} else {
  try {
    user = JSON.parse(user);
    instance.defaults.headers.common["authorization"] = user.token;
  } catch (ex) {
    user = {
      iduser: -1,
      token: '',
    };
  }
}


const store = createStore({
  state: {
    status: '',

    userInfos: {
      name: '',
      email: '',
    }
  },
  mutations: {
    setStatus: function (state, status) {
      state.status = status
    },
    logUser: function (state, user) {
      instance.defaults.headers.common["authorization"] = user.token;
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },
    userInfos: function (state, userInfos) {
      state.userInfos = userInfos;
    }
  },
  actions: {
    createAccount: ({ commit }, userInfos) => {
      commit('setStatus', 'loading')
      console.log(userInfos)
      axios({
        method: 'post',
        url: 'http://localhost:3000/signup/',
        data: {
          email: userInfos.email,
          password: userInfos.password,
          name: userInfos.name,

        }
      });
    },
    login: ({ commit }, userInfos) => {
      commit('setStatus', 'loading')
      console.log(userInfos)
      axios({
        method: 'post',
        url: 'http://localhost:3000/login/',
        data: {
          email: userInfos.email,
          password: userInfos.password,

        },
      }).then(function (response) {
        commit('setStatus', ' ');
        commit('logUser', response.data);
      }).catch(function (error) {
        console.log("failed loading" + error)
      })


    },
  }, 

})
export default store;
