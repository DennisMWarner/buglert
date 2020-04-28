<template>
  <div class="home bg-warning full-screen text-success text-center p-5">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <h1 class="text-white">Welcome to BugLert</h1> -->
    <createBug />
    <bugs />
  </div>
</template>

<script>
import createBug from "../components/CreateBug";
import bugs from "../components/Bugs";
export default {
  name: "home",
  components: { createBug, bugs },
  mounted() {
    this.$store.dispatch("getBugs");
  }
};
</script>
<style scoped>
.full-screen {
  min-height: 100vh;
}
</style>