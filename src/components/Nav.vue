<template>
<div class= "test">
      <p> là doit apparaitre Mr </p>
</div>
</template>

<script>
export default {
  name: 'profile',
   data: function () {
    return {
    user :[],
    };
  },
  mounted: function(){
    this.$store.dispatch('getuserid')
    .then(function (response) {
      console.log(response)
    })
  }
 
}
 
</script>
<style scoped>
.test{
  text-align: center;
  width: 30rem;
  color: red;
}
</style>