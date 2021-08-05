
import Vuex from "vuex";
import axios from "axios"

export default new Vuex.Store({
  state: {
   user: {
       iduser: "NC",
       name: "NC",
       email: "NC",
       password: "NC"
   },
  },
  mutations:{
    userInfo(state,[iduser, name, email, password]){
        state.user.iduser = iduser,
        state.user.name = name,
        state.user.email = email,
        state.user.password = password
    }
  },
  actions: {
    getInfo(valeur){
      const id = localStorage.getItem("userChoice")
      axios
        .get('http://localhost:3000/' + id, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("userToken"),
          },
        })
        .then((response) => {
          console.log(response.data);
          valeur.commit('userInfo',[response.data[0].iduser, response.data[0].name, response.data[0].email, response.data[0].password])
          console.log(valeur);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
})

