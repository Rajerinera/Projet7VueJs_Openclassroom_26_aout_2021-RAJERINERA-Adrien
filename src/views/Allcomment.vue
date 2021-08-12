<template>
  <div>
  <button type="submit" @click="getcomment">test</button>
  </div>
</template>
<script>
import axios from "axios"
//import {mapState} from "vuex";
export default {
  name: "comment",
  data() {
    return {
      title: "",
      name: "",
      comments: []
    };
  },
  //computed:{
    //...mapState(['comment']),
  //},
  methods: {
    getcomment: function ()  {
    this.comments = [];
    axios
      .get("http://localhost:3000/api/comments" , {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("userToken"),
          },
        })
      .then((response) => {
       console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
};
</script>
<style scoped>
body {
  padding-top: 30px;
}
.container {
  width: 70%;
}
.widget .panel-body {
  padding: 0px;
}
.widget .list-group {
  margin-bottom: 0;
}
.widget .panel-title {
  display: inline;
}
.widget .label-info {
  float: right;
}
.widget li.list-group-item {
  border-radius: 0;
  border: 0;
  border-top: 1px solid #ddd;
}
.widget li.list-group-item:hover {
  background-color: rgba(86, 61, 124, 0.1);
}
.widget .mic-info {
  color: #666666;
  font-size: 11px;
}
.widget .action {
  margin-top: 5px;
}
.widget .comment-text {
  font-size: 12px;
}
.widget .btn-block {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
</style>