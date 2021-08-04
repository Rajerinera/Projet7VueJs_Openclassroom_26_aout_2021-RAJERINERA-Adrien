<template>
  <nav class="navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
    <img
      class="navbar-brand"
      src="../assets/image/icon-above-font.png"
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
        <li class="nav-item">
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
}
</script>
<style scoped>
#logo_custom{
    width: 150px;
}
.custom-navbar{box-shadow: 10px 10px 10px #eee; background-color: #fff;}
.nav-link{color: #f7204e!important;}
.custom-toggler.navbar-toggler {border-color: rgb(247,32,78);}
.custom-toggler .navbar-toggler-icon {background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(247,32,78, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");}
.custom-toggler .navbar-toggler-icon{width: 18px!important;}
.custom-toggler:hover{border-color: rgb(255,255,255); background-color: #f76a88;}
.navbar-toggler-icon:hover{background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");}#logo_custom{margin-top: -6px;}
@media only screen and (max-width: 760px) { #logo_custom{width: 40%;}}
</style>