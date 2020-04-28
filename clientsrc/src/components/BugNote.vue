<template>
  <div class="bug-note">Note here....</div>
</template>


<script>
import bugDetails from "../Pages/BugDetails";
export default {
  name: "bug-note",
  props: ["bugNoteData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { bugDetails }
};
</script>


<style scoped>
</style>