<template class="bg-info">
  <div class="bugs bg-white border rounded shadow-lg mt-5">
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
            class="dropdown-menu text-center bg-primary border border-light btn-block"
            aria-labelledby="btnGroupDrop1"
          >
            <a
              class="dropdown-item border btn btn-block rounded my-1 mx-auto w-50 bg-white text-danger text-center border-danger"
              href="#"
            >
              <h3>Status: closed</h3>
            </a>
            <a
              class="dropdown-item border rounded my-1 w-50 mx-auto bg-white text-success text-center border-success"
              href="#"
            >
              <h3>Status: open</h3>
            </a>
            <a
              class="dropdown-item border border-whiterounded my-1 w-50 mx-auto bg-dark text-center text-white border-secondary text-wrap"
              href="#"
            >
              <h3>Show only bugs that I have submitted</h3>
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
  methods: {},
  components: { bug }
};
</script>


<style scoped>
.full-screen {
  min-height: 100vh;
}
</style>