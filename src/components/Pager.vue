<template>
  <div class="portfolio-pager">
    <div class="pager-nag-left" @click="goPrev" />
    <div class="pager">
      <transition-group :name="pageDir" tag="div">
        <slot />
      </transition-group>
    </div>
    <div id="pager-nav-right" @click="goNext" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const page = ref(0);
const pageDir = ref('left');

const goPrev = () => {
  page.value = (page.value - 1) % 3;
  pageDir.value = 'left';
};
const goNext = () => {
  page.value = (page.value + 1) % 3;
};
</script>

<style lang="postcss">
@import '@/assets/css/global.css';

$size: 600px;

.left-enter-active, .left-leave-active, .right-enter-active, .right-leave-active {
  transition: all 0.6s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.left-enter {
  transform: translateX($size);
}
.left-leave-active {
  transform: translateX(-$size);
}
.right-enter {
  transform: translateX(-$size);
}
.right-leave-active {
  transform: translateX($size;
}
.left-enter, .left-leave-to, .right-enter, .right-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>
