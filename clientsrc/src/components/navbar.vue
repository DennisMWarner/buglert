<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <router-link class="navbar-brand text-white" :to="{ name: 'Home' }">
      <h3>BugLert</h3>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'Home' }">
          <router-link :to="{ name: 'Home' }" class="nav-link text-success">Home</router-link>
        </li>
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'Profile' }"
        >
          <router-link class="nav-link text-success" :to="{ name: 'Profile' }">Profile</router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <button
          class="btn btn-success border rounded"
          @click="login"
          v-if="!$auth.isAuthenticated"
        >Login</button>
        <button class="btn btn-danger border-light shadow" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import createBug from "../components/CreateBug";
import axios from "axios";
import { getUserData } from "@bcwdev/auth0-vue";
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getProfile");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    }
  },
  components: { createBug }
};
</script>

<style></style>
