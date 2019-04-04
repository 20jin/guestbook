<template>
  <div>
    <h2>Replies</h2>
    <div
        v-for="{message} in replies">
        <div>{{message}}</div>
    </div>
  </div>
</template>
<script>
  import {FETCH_REPLIES} from "@/store/actionTypes";

  export default {
    name: 'Replies',
    beforeMount() {
      this.$store.dispatch(FETCH_REPLIES);
    },
    // data() {
    //   return this.$store.dispatch(FETCH_REPLIES);
    // },
    computed: {
      replies() {
        return this.$store.state.home.replies;
      }
    }
  };
</script>
<style scoped>
</style>
