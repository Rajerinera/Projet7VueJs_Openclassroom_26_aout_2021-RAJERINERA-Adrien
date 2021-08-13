<template>
  <div>
    <h1>N'hésitez pas à publier !</h1>
    <div class= "form">
    <p>{{comment.title}}</p>
    <input
            type="text"
            class="bg-light form-control"
            placeholder="Steve"
            v-model="title1"
          />
    <p>{{comment.content}}</p>
    <input
            type="text"
            class="bg-light form-control"
            placeholder="Steve"
            v-model="content1"
          />
    <button class="btn-btn-danger" @click="updateCom">clique pour changer</button>
    <button class="btn-btn-primary" @click="deleteCom"> clique pour supp </button>
    </div>
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
import {mapState} from "vuex";
import axios from "axios";
export default {
  name: "postCom",
  data() {
    return {
      postComment: {
        title: "",
        content: "",
        idcom: iduser1 ,
      },
      title1: "nc",
      content1: "nc",
      err: "",
    };
  },
  computed: {
    ...mapState(['comment']),
      
  },
  mounted(){
    this.$store.dispatch('commentOne')
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
     updateCom: function (){
      let commentId = localStorage.getItem('userChoice')
      axios
      .patch("http://localhost:3000/api/comment/" + commentId,{

          title: this.title1,
          content: this.content1,
          idcom: commentId,
      },
      {
        headers:{
          Authorization: "Bearer" + localStorage.getItem("userToken"),
        }
      })
      .then((response) => console.log("success", response), location.reload())
      .catch((error) => console.log(error))
    },
    deleteCom: function() {
      const deleteComment = window.confirm('Etes vous sûr?') 
      if (deleteComment == true){
        let commentId = localStorage.getItem('userChoice')
        axios.delete("http://localhost:3000/api/comment/" + commentId,{
           headers: {
            Authorization: "Bearer" + localStorage.getItem("userToken"),
          }  
        })
        .then(() =>{
          this.postComment,
          console.log("Delete com fait")
        })
        .catch((error) => console.log(error));
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