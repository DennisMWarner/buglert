<template>
  <div class="create-bug rounded bg-primary shadow p-4 mb-4">
    <form>
      <div class="form-group row text-left">
        <label class="col-12 col-form-label m-0">Summary:</label>
        <div class="col-12">
          <input
            type="text"
            max-length="100"
            class="form-control block"
            id="inputEmail3"
            placeholder="Bug summary"
            v-model="newBug.title"
          />
        </div>
      </div>
      <div class="form-group row bg-primary">
        <label for="exampleFormControlTextarea1" class="mx-2">Detailed description of bug:</label>
        <textarea
          class="form-control mx-2"
          id="exampleFormControlTextarea1"
          rows="5"
          v-model="newBug.description"
        ></textarea>
      </div>
      <div class="form-group row"></div>
    </form>
    <button
      type="button"
      class="btn border bg-success text-white rounded shadow border-white"
      @click="addBug()"
    >
      <h5 class="w-100 pt-2">Submit a new bug</h5>
    </button>
  </div>
</template>


<script>
export default {
  name: "create-bug",

  data() {
    return {
      newBug: {
        name: this.$auth.userInfo.name,
        picture: this.$auth.userInfo.picture
      }
    };
  },

  methods: {
    addBug() {
      console.log("newBug created: ", this.newBug);
      this.$store.dispatch("addBug", this.newBug);
      this.newBug = {};
    }
  },
  components: {},
  mounted() {}
};
</script>


<style scoped>
</style>