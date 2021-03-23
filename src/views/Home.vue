<template>
<div class="home-wrap">
  <div class="main">
    <div
      class="main-fixed"
      :style="{
        'background-image': `url(${HomeBg})`,
      }"
    >
      <div class="main-name">
        <img :src="MayLuong">
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

<script>
import { debounce } from '/src/utils';

export default {
  name: 'home',
  data() {
    return {
      activeSection: null,
      portfolioColumns: 3,
    };
  },
  methods: {
    onScroll() {
      const top = window.pageYOffset;
      const section = this.sections.find((section, idx) => {
        if(
          top > (this.$refs[section].$el.offsetTop - 350)
          || idx === this.sections.length - 1
        ) {
          return true;
        }
      });
      if(section !== this.activeSection) {
        this.activeSection = section;
      }
    },
    onResize() {
      if(window.innerWidth < 700) {
        this.portfolioColumns = 2;
      } else {
        this.portfolioColumns = 3;
      }
    },
  },
  mounted() {
    this.sections = Object.keys(this.$refs).reverse();
    this.onScrollDebounce = debounce(this.onScroll, 100);
    window.addEventListener('scroll', this.onScrollDebounce, { passive: true });

    this.onResizeDebounce = debounce(this.onResize, 500);
    window.addEventListener('resize', this.onResizeDebounce);
    this.onResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onScrollDebounce);
    window.removeEventListener('resize', this.onResizeDebounce);
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.section-title {
  @mixin section-title;
  > span {
    @mixin fancy-underline;
  }
}

.home-wrap {
  color: $text;
  > div  {
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
