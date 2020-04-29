<template>
  <div class="bugDetails text-white">
    <div class="row mr-3">
      <div class="col-12 text-right">
        <span v-if="!activeBug.closed==true">
          <button
            type="button"
            class="btn btn-transparent border bg-primary text-white rounded shadow border-white m-3"
          >
            <h5 class="pt-1">Edit Bug</h5>
          </button>
          <button
            type="button"
            class="btn btn-transparent border bg-primary text-white rounded shadow border-white m-3"
            data-target="#closeBugModal"
            data-toggle="modal"
          >
            <h5 class="pt-1">Mark Bug as Closed</h5>
          </button>
        </span>
        <span v-else>
          <h3
            class="text-center text-light border border-light bg-secondary rounded shadow p-3 ml-4 mt-5"
          >Bug Status: Closed</h3>
        </span>
        <div class="modal fade" tabindex="-1" role="dialog" id="closeBugModal">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header bg-primary">
                <h5
                  class="modal-title border text-white text-center border-white w-75 p-2 bg-warning rounded"
                >Close Bug?</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body bg-white text-center text-dark">
                <h5>
                  Are you sure you want to set this bug's status to "closed"?
                  <br />This cannot be undone.
                </h5>
              </div>
              <div class="modal-footer bg-primary" data-dismiss="modal">
                <button type="button" class="btn btn-primary">Cancel</button>
                <button type="submit" class="btn btn-danger" @click="closeBug()">Close Bug</button>
              </div>
            </div>
          </div>
        </div>

        <h5 class="mr-3">
          Last Modified Date:
          <span class="ml-2">{{activeBug.createdAt}}</span>
        </h5>
      </div>
    </div>

    <div class="row mt-2 bg-primary mx-5 border rounded shadow">
      <div class="col-10">
        <h3>{{activeBug.title}}</h3>
      </div>
    </div>

    <div class="row mt-2 bg-white mx-5 border rounded shadow">
      <div class="col-10 text-primary">
        <h5>Details:</h5>
        <h5>{{activeBug.description}}</h5>
      </div>
    </div>
    <div class="row bg-secondary rounded shadow justify-content-around mx-5 mt-2">
      <div class="col-md-3">Submitted by:</div>
      <div class="col-3 text-center">{{this.$auth.userInfo.name}}</div>
      <div class="col-3 text-right">{{activeBug.creatorEmail}}</div>
    </div>

    <notes />
    <createNote v-show="!activeBug.closed==true" />
  </div>
</template>


<script>
import createNote from "../components/CreateNote";
import bugNote from "../components/BugNote";
import notes from "../components/Notes";
export default {
  name: "bugDetails",
  data() {
    return {};
  },
  computed: {
    activeBug() {
      return this.$store.state.activeBug;
    }
  },
  methods: {
    closeBug() {
      this.$store.dispatch("closeBug", this.activeBug.id);
    },
    editBug() {}
  },
  components: { bugNote, createNote, notes },
  mounted() {
    //console.log("ActiveBlog page created...");
    this.$store.dispatch("getBug", this.$route.params.bugId);
    this.$store.dispatch("getNotesByBugId", this.$route.params.bugId);
  }
};
</script>


<style scoped>
</style>