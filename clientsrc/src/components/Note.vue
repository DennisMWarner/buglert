<template>
  <div class="note row m-3 mx-5 bg-light border text-center border-dark rounded shadow">
    <div class="col-12 text-left">{{noteData.content}}</div>
    <div class="col-12 text-right">{{noteData.creatorEmail}}</div>
    <div class="col-12 text-right">
      <button
        type="button"
        class="btn btn-sm btn-danger text-right rounded text-white pb-2 mb-2 shadow border border-dark"
        v-show="this.noteData.creatorEmail==this.$auth.userInfo.email"
      >Delete</button>
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
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>