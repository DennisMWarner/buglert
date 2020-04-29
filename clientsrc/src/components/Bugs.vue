<template class="bg-info">
  <div class="bugs bg-warning border border-white rounded shadow-lg mt-5">
    <div class="row">
      <div class="col-12 text-right">
        <div class="btn-group btn-block mr-5" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            class="btn btn-secondary border border-white rounded shadow dropdown-toggle text-center"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Filter by:</button>
          <div
            class="dropdown-menu text-center bg-warning border border-white shadow btn-block"
            aria-labelledby="btnGroupDrop1"
          >
            <a
              class="dropdown-item border border-white rounded my-1 w-50 mx-auto bg-primary text-center text-white border-secondary text-wrap"
              href="#"
              @click="getUserBugs()"
            >
              <h3>Show Only Bugs That I Have Submitted</h3>
            </a>
            <a
              class="dropdown-item border border-white rounded my-1 w-50 mx-auto bg-primary text-center text-white border-secondary text-wrap"
              href="#"
              @click="getBugs()"
            >
              <h3>Show All Bugs</h3>
            </a>
            <a
              class="dropdown-item border btn btn-block rounded my-1 mx-auto w-50 bg-secondary text-light text-center border-light"
              href="#"
              @click="getClosedBugs()"
            >
              <h3>Show Bugs Status: CLOSED</h3>
            </a>
            <a
              class="dropdown-item border rounded my-1 w-50 mx-auto bg-success text-white text-center border-white"
              href="#"
              @click="getOpenBugs()"
            >
              <h3>Show Bugs Status: OPEN</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
    <bug v-for="bug in bugs" :bugData="bug" :key="bug.id" />
  </div>
</template>


<script>
import createBug from "../components/CreateBug";
import bug from "../components/Bug";
export default {
  name: "bugs",
  data() {
    return {};
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  methods: {
    getUserBugs() {
      this.$store.dispatch("getUserBugs", this.$auth.userInfo.email);
    },

    getBugs() {
      this.$store.dispatch("getBugs");
    },

    getClosedBugs() {
      this.$store.dispatch("getClosedBugs");
    },

    getOpenBugs() {
      this.$store.dispatch("getOpenBugs");
    }
  },
  components: { bug }
};
</script>


<style scoped>
.full-screen {
  min-height: 100vh;
}
</style>