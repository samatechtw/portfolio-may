<template>
<div id="portfolio" class="portfolio-wrap">
  <div class="portfolio container">
    <div class="portfolio-title section-title">
      <span :class="{ selected }">{{ $t('portfolio.title') }}</span>
    </div>
    <div class="portfolio-content">
      <div
        v-for="n in columns"
        :key="n"
        class="portfolio-column"
        :class="`columns${columns}`"
      >
        <PortfolioItem
          v-for="(item, index) in colItems(n - 1)"
          :key="index"
          :item="item"
          :style="{ width, margin }"
          @click="activeItem = item"
        />
      </div>
    </div>
  </div>
  <PortfolioModal
    :show="!!activeItem"
    :item="activeItem"
    @cancel="activeItem = null"
  />
</div>
</template>

<script>
import OldDoor1 from '/src/assets/img/old-door1.jpg';
import Inteplast1 from '/src/assets/img/inteplast1.jpg';
import Santu2 from '/src/assets/img/santu2.jpg';
import Sunglasses2 from '/src/assets/img/sunglasses2.jpg';
import Lamanh1 from '/src/assets/img/lamanh1.jpg';
import Sakura2 from '/src/assets/img/sakura2.jpg';

const items = [
  {
    title: 'Social Media Branding & Event Management',
    subtitle: 'Old Door Hostel & Cafe, Taiwan',
    image: OldDoor1,
    bullets: [
      'Design promotional posters and marketing materials to promote the brand image as well as products',
      'Handle the ideation and execution of on-site events',
    ],
  },
  {
    title: 'Internal Communications',
    subtitle: 'Inteplast Group, U.S.A.',
    image: Inteplast1,
    bullets: [
      'Produce articles for the company newsletter',
      'Develop content strategies for various media platforms',
      'Write content for promoting company products',
    ],
  },
  {
    title: 'Freelance Content Writer',
    subtitle: 'Santu Travel, Vietnam',
    image: Santu2,
    bullets: [
      'Produce website posts, social media content, and product/service descriptions',
      'Monitor the online presence of the brand on Facebook, Instagram, and website',
      'Travel review (Taiwan, Korea and Japan-based)'
    ],
  },
  {
    title: 'Freelance Content Writer',
    subtitle: 'Sunglasses For You',
    image: Sunglasses2,
    bullets: [
      'Produce website posts, social media content, and product/service descriptions',
      'Monitor the online presence of the brand on Facebook, Instagram, and website',
    ],
  },
  {
    title: 'Freelance Content Writer',
    subtitle: 'LamAnh Beauty & Spa',
    image: Lamanh1,
    bullets: [
      'Produce website posts, social media content, and product/service descriptions',
      'Monitor the online presence of the brand on Facebook, Instagram, and website',
    ],
  },
  {
    title: 'Freelance Content Writer',
    subtitle: 'Sakura Education',
    image: Sakura2,
    bullets: [
      'Produce website posts, social media content, and product/service descriptions',
      'Monitor the online presence of the brand on Facebook, Instagram, and website',
    ],
  },
];

export default {
  name: 'portfolio',
  props: {
    selected: Boolean,
    columns: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      items,
      activeItem: null,
      width: '100%',
      margin: '8px 0;',
    };
  },
  methods: {
    colItems(index) {
      const { items, columns } = this;
      const firstEnd = Math.ceil(items.length / columns);
      if(index === 0) {
        return items.slice(0, firstEnd);
      }
      let restLen = Math.floor(items.length / columns);
      const start = firstEnd + ((index - 1) * restLen);
      if(index === columns - 1) {
        restLen = Math.max(restLen, items.length - start);
      }
      return items.slice(start, start + restLen);
    }
  }
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.home-wrap > .portfolio-wrap {
  z-index: 2000;
  background-color: $background-white;
  .portfolio {
    display: flex;
    padding: 96px 0 64px;
    flex-direction: column;
    justify-content: center;
  }
  .portfolio-title {
    @mixin section-title;
  }
  .portfolio-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 64px auto 0;
    width: 100%;
    max-width: 1100px;
  }
  .portfolio-column {
    width: 27%;
    margin: 0 1%;
    &.columns2 {
      width: 40%;
    }
  }
}
</style>
