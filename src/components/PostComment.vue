<template>
  <div>
    <h1>N'hésitez pas à publier !</h1>
    <!-- component envoi formulaire pour les post emis par le user connecter -->
    <div class="d-flex justify-content-center">
      <!-- debut check formulaire -->
      <div
        id="form"
        enctype="multipart/form-data"
        class="largeur80 l100 my-5 shadow bordurePost bordureRond"
      >
        <div class="form-group">
          <label class="text-primary" for="titre">Titre du post</label>
          <input
            v-model="postComment.title"
            type="text"
            class="form-control"
            name="title"
            placeholder="title..."
          />
        </div>
        <div class="form-group">
          <label class="text-primary description" for="description"
            >Description</label
          >
          <input
            v-model="postComment.content"
            class="form-control"
            name="content"
            rows="3"
            placeholder="Décrire le post..."
          />
        </div>
        <!-- check formulaire bien rempli et reponse serveur bouton publier -->
        <div
          class="form-group row d-flex align-item-center justify-content-center"
        >
          <div class="my-3 col-sm-10">
            <button
              type="submit"
              class="bg-light btn btn-outline-primary"
              @click="commentUse"
            >
              Publier !
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let iduser1 = localStorage.getItem("userChoice")
console.log(iduser1)
import axios from "axios";
export default {
  name: "postCom",
  data() {
    return {
      postComment: {
        title: "",
        content: "",
        idtestuser: iduser1 ,
      },
      err: "",
    };
  },
  methods: {
    commentUse: function () {
      const commentlog = "test";
      if (commentlog) {
        axios
          .post("http://localhost:3000/comment/", this.postComment)
          .then((response) => {
            console.log(response.data)
            console.log(response);
            console.log("commentaire envoyé à bdd");  
          })
          .catch((error) => {
            this.err = error.response;
            console.log(error);
          });
      } else {
        console.log("problème");
      }
    },
  },
};
</script>

<style scoped>
#form {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.form-group {
  display: flex;
  justify-content: space-between;
}
.description {
  margin-top: 13px;
  margin-right: 4px;
}
</style>>