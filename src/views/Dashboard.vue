<template>
  <div class="dashboard">
    <Sidebar/>
    <div class="content">
     <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
export default {
  components: { Sidebar },
  name: "Home",
};
</script>

<style scoped>
.dashboard{
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color:  	#00FFFF;
  height: 100vh;
  width: 100vw;
}

.content{
  background-color: white;
  border-radius: 20px;
  margin: 6px 6px 6px 0px;
}

</style>
