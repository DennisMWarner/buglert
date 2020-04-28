<template class="bg-info">
  <div class="notes bg-white border text-dark rounded shadow-lg mt-5">
    Notes Here...
    <note v-for="note in notes" :noteData="note" :key="note.id" />
  </div>
</template>


<script>
import note from "../components/Note";
export default {
  name: "notes",
  data() {
    return {};
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    }
  },
  methods: {},
  components: { note }
};
</script>


<style scoped>
</style>