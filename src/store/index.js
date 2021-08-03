
/* import Vuex from "vuex";
import axios from "axios"

export default new Vuex.Store({
  state: {
   user: {
       iduser: "",
       name: "",
       email: "",
       password: ""
   },
  },
  actions: {
    getInfo(){
        const id = localStorage.getItem('userChoice')   
        axios
        .get('http://localhost:3000/:id' + id, {
            headers:{
                'Authorization': 'Bearer' + localStorage.getItem("userToken")
            }
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) =>{  
            console.log(error); 
        }) 
    }, 
  },
})
*/
