<template>
  <nav class="navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
    <img
      class="navbar-brand"
      src="../assets/image/icon-left-font-monochrome-white.png"
      id="logo_custom"
      alt="logo"
    />
    <button
      class="navbar-toggler navbar-toggler-right custom-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="col-md-4 ml-auto" id="collapsibleNavbar">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/comment"><b>Accueil</b></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/profile"><b>Profile</b></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact"><b>Contact</b></router-link>
        </li>
        <li @click="disconnected" class="nav-item">
          <a class="nav-link" href="#"><b>Deconnexion</b></a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
    data: function() {
        return{
     
        }
        
    },
    methods:{
      disconnected(){
        localStorage.removeItem("userChoice");
        localStorage.removeItem("userToken");
        this.$router.push("/register");
      }
    }
}
</script>
<style scoped>
#logo_custom{
    width: 150px;
}
.custom-navbar{background-color:#343a40;}
.nav-link{color: white}
@media only screen and (max-width: 760px) { #logo_custom{width: 40%;}}
</style>