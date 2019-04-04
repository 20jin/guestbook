<template>
  <div>
    <h2>Gallery2</h2>
    <button @click="showSingle">Show single picture.</button>
    <button @click="showMultiple">Show a group of pictures.</button>
    <vue-easy-lightbox 
      :visible="visible" 
      :imgs="imgs" 
      @hide="handleHide">
    </vue-easy-lightbox>
  </div>
</template>
<script>

import VueEasyLightbox from "vue-easy-lightbox";

export default {
  name: "Gallery",
  data() {
    return {
      imgs: [],
      visible: false,
      index: 0,
    };
  },
  components: {
    VueEasyLightbox
  },
  methods: {
    showSingle() {
      this.imgs = 'http://via.placeholder.com/350x150'
      this.show()
    },
    showMultiple() {
      this.imgs = ['https://i.ytimg.com/vi/EDzLx3hkli0/maxresdefault.jpg', 'https://secure.i.telegraph.co.uk/multimedia/archive/03597/POTD_chick_3597497k.jpg']
      this.index = 1  // index of imgList
      this.show()
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
};
</script>

<style scoped>
</style>
