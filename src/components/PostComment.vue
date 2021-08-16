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
              >
              </textarea>
              <input type="file" name="image" class="form-control" @change="upload" />
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
import axios from "axios";
export default {
  name: "postCom",
  data() {
    return {
      postComment: {
        title: "",
        content: "",
        image: "",
        idcom: iduser1,
      },
      selectedFileName:null,
      selectedFile:null,
      err: "",
      show: true,
    };
  },
  methods: {
    upload: function(event) {
            this.selectedFile = event.target.files[0]
            this.selectedFileName = event.target.files[0].name
            console.log(this.selectedFile.name)
            console.log(event)
    },

    commentUse: function () {
      const commentlog = "test";
      if (commentlog) {
        axios
          .post("http://localhost:3000/comment/", this.postComment)
          .then((response) => {
            console.log(response.data);
            console.log(response);
            console.log("commentaire envoyé à bdd");
            //location.reload();
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
.commentaire {
  display: flex;
  flex-direction: column;
}
#title {
  width: 250px;
  height: 50px;
}
</style>>