<template>
  <div class="bug shadow-lg rounded-lg my-4 mx-5 bg-primary" @click="selectBug()">
    <div class="row">
      <div class="col-12 text-white">
        <h3>{{bugData.title}}</h3>
      </div>
    </div>
    <div
      v-if="bugData.closed==!true"
      class="row w-75 m-auto text-center bg-success text-white mx-1 rounded"
    >
      <div class="col-12 m-auto justify-content-around">
        <h5 class="pt-1">Last Modified: {{bugData.createdAt}}</h5>
        <h5>Status: Open</h5>
      </div>
    </div>
    <div v-else class="row w-75 m-auto text-center bg-secondary text-light mx-1 rounded">
      <div class="col-12 m-auto justify-content-around">
        <h5 class="pt-1">Last Modified: {{bugData.createdAt}}</h5>
        <h5>Status: Closed</h5>
      </div>
    </div>
    <div
      class="row bg-info mx-1 text-dark rounded bg-white border border-dark shadow mt-2 w-75 m-auto"
    >
      <div class="col-12">
        <h5>{{bugData.description}}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-white">{{bugData.creatorEmail}}</div>
      <!-- <div class="col-4">{{bugData.picture}}</div> -->
    </div>
  </div>
</template>


<script>
export default {
  name: "bug",
  data() {
    return {};
  },
  props: ["bugData"],
  computed: {},
  methods: {
    selectBug() {
      console.log("this.bugData.id: ", this.bugData.id);
      this.$store.commit("setActiveBug", {});
      this.$router.push({
        name: "BugDetails",
        params: { bugId: this.bugData.id }
      });
      console.log("active bug: ", this.$store.state.activeBug);
      console.log("route: ", this.$router);
      console.log("bugData:", this.bugData.id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>