<template>
<div class="container">
    <div>
        <button @click="createUser" for="name">ceci est un test pour faire apparaître Mr{{user}}</button>
    </div>
</div>   
</template>
<script>
import axios from "axios"
export default {
  name: "comment",
  data() {
    return {
      user: [],
      name: "",
      id: localStorage.getItem('userChoice') || null
    };
  },
  methods: {
        async createUser(){
        this.user = []
        await axios
        .get(`http://localhost:3000/${this.id}`, {
            headers:{
                'Authorization': 'Bearer' + localStorage.getItem("userToken")
            }
        })
        .then((response) => {
            console.log(response.data);
            this.user = response.data[0].name
            console.log(this.user)
        })
        .catch((error) =>{  
            console.log(error); 
        }) 
        }
        
  }
}
</script>
<style scoped>
body { padding-top:30px; }
.widget .panel-body { padding:0px; }
.widget .list-group { margin-bottom: 0; }
.widget .panel-title { display:inline }
.widget .label-info { float: right; }
.widget li.list-group-item {border-radius: 0;border: 0;border-top: 1px solid #ddd;}
.widget li.list-group-item:hover { background-color: rgba(86,61,124,.1); }
.widget .mic-info { color: #666666;font-size: 11px; }
.widget .action { margin-top:5px; }
.widget .comment-text { font-size: 12px; }
.widget .btn-block { border-top-left-radius:0px;border-top-right-radius:0px; }
</style>