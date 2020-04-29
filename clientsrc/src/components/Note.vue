<template>
  <div class="note row mt-3 mx-5 bg-light border text-center border-dark rounded shadow">
    <div class="col-12 text-left">{{noteData.content}}</div>
    <div class="col-12 text-right">{{noteData.creatorEmail}}</div>
    <div class="col-12 text-right">
      <button
        type="button"
        class="btn btn-sm btn-danger text-right rounded text-white pb-2 mb-2 shadow border border-dark"
        v-show="this.noteData.creatorEmail==this.$auth.userInfo.email"
        data-target="#deleteNoteModal"
        data-toggle="modal"
      >Delete</button>
    </div>
    <div class="modal fade" tabindex="-1" role="dialog" id="deleteNoteModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5
              class="modal-title border text-white border-white w-75 p-2 bg-warning rounded"
            >Delete Note?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body bg-white text-center text-dark">
            <h5>
              Are you sure you want to delete this note?
              <br />This cannot be undone.
            </h5>
          </div>
          <div class="modal-footer bg-primary" data-dismiss="modal">
            <button type="button" class="btn btn-primary">Cancel</button>
            <button type="submit" class="btn btn-danger" @click="deleteNote()">Delete Note</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "note",
  data() {
    return {};
  },
  props: ["noteData"],
  computed: {},
  methods: {
    deleteNote() {
      this.$store.dispatch("deleteNote", this.noteData.id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>