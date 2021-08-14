<template>
  <div>
    <button type="button" class="btn btn-primary" v-on:click="show = !show">
      Publier un commentaire
    </button>
    <div class="col-sm-8" v-if="!show">
      <form>
        <fieldset>
          <div class="row">
            <div class="col-sm-3 col-lg-2 hidden-xs">
              <img
                class="img-responsive"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
            </div>
            <div class="form-group col-xs-12 col-sm-9 col-lg-10 commentaire">
              <textarea
                class="form-control"
                id="title"
                placeholder="Your title"
                required=""
                rows="3"
                v-model="postComment.title"
              >
              </textarea>
              <textarea
                class="form-control"
                id="message"
                placeholder="Your message"
                required=""
                rows="4"
                v-model="postComment.content"
              ></textarea>
            </div>
          </div>
        </fieldset>
        <button
          type="submit"
          @click="commentUse"
          class="bg-light btn btn-outline-primary pull-right mb-4 btn-lg"
        >
          Publier
        </button>
      </form>
    </div>
  </div>
</template>

<script>
let iduser1 = localStorage.getItem("userChoice");
console.log(iduser1);
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "postCom",
  data() {
    return {
      postComment: {
        title: "",
        content: "",
        idcom: iduser1,
      },
      title1: "nc",
      content1: "nc",
      err: "",
      show: true,
    };
  },
  computed: {
    ...mapState(["comment"]),
  },
  mounted() {
    this.$store.dispatch("commentOne");
  },
  methods: {
    commentUse: function () {
      const commentlog = "test";
      if (commentlog) {
        axios
          .post("http://localhost:3000/comment/", this.postComment)
          .then((response) => {
            console.log(response.data);
            console.log(response);
            console.log("commentaire envoyé à bdd");
            location.reload();
          })
          .catch((error) => {
            this.err = error.response;
            console.log(error);
          });
      } else {
        console.log("problème");
      }
    },
    updateCom: function () {
      let commentId = localStorage.getItem("userChoice");
      axios
        .patch(
          "http://localhost:3000/api/comment/" + commentId,
          {
            title: this.title1,
            content: this.content1,
            idcom: commentId,
          },
          {
            headers: {
              Authorization: "Bearer" + localStorage.getItem("userToken"),
            },
          }
        )
        .then((response) => console.log("success", response), location.reload())
        .catch((error) => console.log(error));
    },
    deleteCom: function () {
      const deleteComment = window.confirm("Etes vous sûr?");
      if (deleteComment == true) {
        let commentId = localStorage.getItem("userChoice");
        axios
          .delete("http://localhost:3000/api/comment/" + commentId, {
            headers: {
              Authorization: "Bearer" + localStorage.getItem("userToken"),
            },
          })
          .then(() => {
            this.postComment, console.log("Delete com fait");
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
.commentaire {
  display: flex;
  flex-direction: column;
}
#title {
  width: 250px;
  height: 50px;
}
</style>>