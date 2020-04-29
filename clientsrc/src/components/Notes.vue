<template >
  <div class="notes row bg-warning text-dark m-auto">
    <div class="col-12">
      <note v-for="note in notes" :noteData="note" :key="note.id" />
    </div>
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