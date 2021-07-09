<template>
  <div id="formContent">
    <!-- Login Form -->
    <form>
      <input

        type="text"
        id="login"
        class="fadeIn second"
        placeholder="email"
      />
      <input
        type="text"
        id="password"
        class="fadeIn third"
        placeholder="password"
      />
      <input type="submit" class="fadeIn fourth" value="Se connecter" />
    </form>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>