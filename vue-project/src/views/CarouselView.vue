<template>
    <div class="carousel">
      <div class="cont" :style="{ transform: `translateX(-${pos * 100}vw)` }">
        <div class="img" v-for="(image, index) in images" :key="index">
            <img :src="image" alt="carousel image">
        </div>
      </div>
      <button class="prev btn btn-primary" @click="prev">이전</button>
      <button class="next btn btn-primary" @click="next">다음</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pos: 0,
        images: [
        require('@/assets/img/사람개.jpg'),
        require('@/assets/img/길스장.jpg'),
        require('@/assets/img/감성산책.jpg')
        ]
      };
    },
    methods: {
      next() {
        if (this.pos < this.images.length - 1) {
          this.pos++;
        }
      },
      prev() {
        if (this.pos > 0) {
          this.pos--;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    overflow: hidden;
    width: 100vw;
  }
  
  .cont {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .img {
    min-width: 100vw;
    /* 추가적인 스타일들 */
  }
  </style>
  