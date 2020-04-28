<template>
  <div class="row">
    A Note
    <div class="col-10">{{noteData.content}}</div>
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