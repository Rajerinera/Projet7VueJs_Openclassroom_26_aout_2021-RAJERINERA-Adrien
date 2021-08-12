
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
    comment: {
      idcom: "NC",
      title: "NC",
      content: "NC"
    }
  },
  mutations: {
    userInfo(state, [iduser, name, email, password]) {
        state.user.iduser = iduser,
        state.user.name = name,
        state.user.email = email,
        state.user.password = password
    },
    commentInfo(state, [idcom, title, content]) {
        state.comment.idcom = idcom,
        state.comment.title = title,
        state.comment.content = content
    }
  },
  actions: {
    getInfo(valeur) {
      const id = localStorage.getItem("userChoice")
      axios
        .get('http://localhost:3000/' + id, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("userToken"),
          },
        })
        .then((response) => {
          console.log(response);
          valeur.commit('userInfo', [response.data[0].iduser, response.data[0].name, response.data[0].email, response.data[0].password])
          console.log(valeur);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /*getComment(value) {
      axios
        .get('http://localhost:3000/comments' , {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("userToken"),
          },
        })
        .then((response) => {
          console.log(response.data);
          value.commit('commentInfo', response.data[0].idcom);
          console.log(value);
        })
        .catch((error) => {
          console.log(error);
        });
    }*/
  }
  
})

