<template>
  <div class="bugDetails text-white">
    <div class="row mr-3">
      <div class="col-12 text-right" v-show="!activeBug.closed==true">
        <button
          type="button"
          class="btn btn-transparent border bg-primary text-white rounded shadow border-white m-3"
        >
          <h5 class="pt-1">Edit Bug</h5>
        </button>
        <button
          type="button"
          class="btn btn-transparent border bg-primary text-white rounded shadow border-white m-3"
        >
          <h5 class="pt-1">Mark Bug as Closed</h5>
        </button>

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
    <createNote />

    <!-- <bugNote v-for="bugNote in bugNotes" :activebug="bugNoteData" :key="bugNote.id" /> -->
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
  methods: {},
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