<template>
  <div class="createNote rounded bg-primary shadow p-1 m-5 row">
    <form class="col-12">
      <div class="form-group row text-left"></div>
      <div class="form-group row bg-primary">
        <label for="exampleFormControlTextarea1" class="mx-2">Add a Note:</label>
        <textarea
          class="form-control mx-2"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="newNote.content"
        ></textarea>
      </div>
      <div class="form-group row justify-content-right">
        <button
          type="button"
          class="btn border bg-warning text-white rounded shadow border-white mt-1 ml-3 text-center"
          @click="addNote()"
        >
          <h5 class="w-100 pt-2">Add Note</h5>
        </button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "createNote",

  data() {
    return {
      newNote: {}
    };
  },

  methods: {
    addNote() {
      this.newNote.bug = this.$route.params.bugId;
      console.log("note: ", this.newNote);
      this.$store.dispatch("addNote", this.newNote);
      this.newNote = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>