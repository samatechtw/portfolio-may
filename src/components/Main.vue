<template>
  <div class="main">
    <div
      class="main-fixed"
      :style="{
        backgroundImage: `url(${HomeBg})`,
        transform: `scale(${scale}) translateY(${translate}px)`,
      }"
    >
      <div class="main-name">
        <img :src="MayLuong" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const scaleMax = 1.6;
const scale = ref(1);
const translate = ref(1);

const scrollScale = () => {
  const top = window.pageYOffset;
  if (top < 800) {
    const s = 1 + (scaleMax - 1) * (top / 800);
    scale.value = Math.min(scaleMax, s);
    translate.value = -800 * (scale.value - 1);
  }
};
onMounted(() => {
  window.addEventListener('scroll', scrollScale, { passive: true });
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollScale);
});
</script>

<style lang="postcss">
@import '@/assets/css/global.css';

.main {
  background-color: $background-white;
  min-height: 720px;
  .main-fixed {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    background-size: cover;
    background-position: 50% 10%;
    @mixin flex-center;
    .main-name {
      margin-top: 10%;
      img {
        width: 560px;
      }
    }
  }
  @media (max-width: 760px) {
    .main-fixed .main-name img {
      width: 340px;
    }
  }
}
</style>
