<template>
  <div class="media">
    <a class="pull-left" href="#"
      ><img
        class="media-object"
        src="https://bootdey.com/img/Content/avatar/avatar1.png"
        alt=""
    /></a>
    <div class="media-body" v-for="comment in comments" :key="comment.idcom">
      <h4 class="media-heading">{{comment.title}}</h4>
      <p>{{comment.content}}</p>
      
  <ul class="list-unstyled list-inline media-detail pull-left">
        <li><i class="fa fa-calendar"></i>27/02/2014</li>
        <li><i class="fa fa-thumbs-up"></i>13</li>
      </ul>
      <ul class="list-unstyled list-inline media-detail pull-right">
        <li class=""><a href="">Modifier</a></li>
        <li class=""><a href="">Supprimer</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
//import {mapState} from "vuex";
export default {
  name: "comment",
  data() {
    return {
      title: "",
      name: "",
      comments: [],
    };
  },
  //computed:{
  //...mapState(['comment']),
  //},
  mounted() {
    this.comments = [];
    axios
      .get("http://localhost:3000/api/comments", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("userToken"),
        },
      })
      .then((response) => {
        (this.comments = response.data), console.log(this.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
.media{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
}
.media-body{
 text-align: center;
 border: 1px solid black;
 margin-right: auto;
 margin-left: auto;
 width: 80%;
}
.content-item {
    padding:30px 0;
	background-color:#FFFFFF;
}

.content-item.grey {
	background-color:#F0F0F0;
	padding:50px 0;
	height:100%;
}

.content-item h2 {
	font-weight:700;
	font-size:35px;
	line-height:45px;
	text-transform:uppercase;
	margin:20px 0;
}

.content-item h3 {
	font-weight:400;
	font-size:20px;
	color:#555555;
	margin:10px 0 15px;
	padding:0;
}

.content-headline {
	height:1px;
	text-align:center;
	margin:20px 0 70px;
}

.content-headline h2 {
	background-color:#FFFFFF;
	display:inline-block;
	margin:-20px auto 0;
	padding:0 20px;
}

.grey .content-headline h2 {
	background-color:#F0F0F0;
}

.content-headline h3 {
	font-size:14px;
	color:#AAAAAA;
	display:block;
}


#comments {
    box-shadow: 0 -1px 6px 1px rgba(0,0,0,0.1);
	background-color:#FFFFFF;
}

#comments form {
	margin-bottom:30px;
}

#comments .btn {
	margin-top:7px;
}

#comments form fieldset {
	clear:both;
}

#comments form textarea {
	height:100px;
}

#comments .media {
	border-top:1px dashed #DDDDDD;
	padding:20px 0;
	margin:0;
}

#comments .media > .pull-left {
    margin-right:20px;
}

#comments .media img {
	max-width:20px;
}

#comments .media h4 {
	margin:0 0 10px;
}

#comments .media h4 span {
	font-size:14px;
	float:right;
	color:#999999;
}

#comments .media p {
	margin-bottom:15px;
	text-align:justify;
}

#comments .media-detail {
	margin:0;
}

#comments .media-detail li {
	color:#AAAAAA;
	font-size:12px;
	padding-right: 10px;
	font-weight:600;
}

#comments .media-detail a:hover {
	text-decoration:underline;
}

#comments .media-detail li:last-child {
	padding-right:0;
}

#comments .media-detail li i {
	color:#666666;
	font-size:15px;
	margin-right:10px;
}
img.media-object{
  border: 1px solid black;
  width: 50px;
  height: 50px;
}

</style>