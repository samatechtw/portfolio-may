<template>
  <div class="home-wrap">
    <div class="main">
      <div class="main-fixed" :style="{
        'background-image': `url(${HomeBg})`,
      }">
        <div class="main-name">
          <img :src="MayLuong" />
        </div>
      </div>
    </div>
    <MayHeader :activeSection="activeSection" />
    <About ref="about" :selected="activeSection === 'about'" />
    <Services ref="services" :selected="activeSection === 'services'" />
    <Portfolio
      ref="portfolio"
      :selected="activeSection === 'portfolio'"
      :columns="portfolioColumns"
    />
    <Contact ref="contact" :selected="activeSection === 'contact'" />
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { debounce } from '@/utils';

const about = ref();
const services = ref();
const portfolio = ref();
const contact = ref();
const refs: Record<string, any> = {
  about,
  services,
  portfolio,
  contact
};
const activeSection = ref();
const portfolioColumns = ref(3);

let onResizeDebounce: (this: Window, ev: UIEvent) => any;
let onScrollDebounce: (this: Window, ev: Event) => any;
let sections: string[];

const onScroll = () => {
  const top = window.pageYOffset;
  const section = sections.find((section, idx: number) => {
    if (top > refs[section].value.$el.offsetTop - 350 || idx === sections.length - 1) {
      return true;
    }
  });
  if (section !== activeSection.value) {
    activeSection.value = section;
  }
};
const onResize = () => {
  if (window.innerWidth < 700) {
    portfolioColumns.value = 2;
  } else {
    portfolioColumns.value = 3;
  }
};
onMounted(() => {
  sections = Object.keys(refs).reverse();
  onScrollDebounce = debounce(onScroll, 100);
  window.addEventListener('scroll', onScrollDebounce, { passive: true });

  onResizeDebounce = debounce(onResize, 500);
  window.addEventListener('resize', onResizeDebounce);
  onResize();
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', onScrollDebounce);
  window.removeEventListener('resize', onResizeDebounce);
});
</script>

<style lang="postcss">
@import "@/assets/css/global.css";

.section-title {
  @mixin section-title;
  > span {
    @mixin fancy-underline;
  }
}

.home-wrap {
  color: $text;
  > div {
    position: relative;
    z-index: 2;
  }
  .main {
    z-index: 1;
  }
}
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
