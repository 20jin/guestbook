<template>
    <div class="main">
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <big-header/>
        <info/>
        <gallery/>
        <replies/>
        <contact/>
        <big-footer/>
    </div>
</template>

<script>
  // @ is an alias to /src
  /*import HelloWorld from '@/components/HelloWorld.vue'*/

  import BigHeader from '@/views/BigHeader';
  import Info from '@/views/Info';
  import Gallery from '@/views/Gallery';
  import Replies from '@/views/Replies';
  import Contact from '@/views/Contact';
  import BigFooter from '@/views/BigFooter';

  export default {
    name: 'Home',
    components: {
      BigHeader,
      Info,
      Gallery,
      Replies,
      Contact,
      BigFooter,
    }
  }
</script>


<style scoped>

</style>
