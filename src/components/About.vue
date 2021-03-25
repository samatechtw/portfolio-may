<template>
<div id="about" class="about-wrap">
  <div class="about container">
    <div class="about-left">
      <div class="about-title section-title">
        <span :class="{ selected }">{{ $t('about.title') }}</span>
      </div>
      <ul class="about-items">
        <li
          v-for="(item, index) in $tm('about.items')"
          :key="index"
          class="about-item"
        >
          {{ item }}
        </li>
      </ul> 
    </div>
    <div class="about-right">
      <div class="about-img-wrap">
        <img :src="MayImg">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import MayImg from '/src/assets/img/may.jpg';

export default {
  name: 'about',
  props: {
    selected: Boolean,
  },
  data() {
    return {
      MayImg,
    };
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.about-wrap {
  background-color: $background;
  .about {
    display: flex;
    padding-top: 96px;
    padding-bottom: 64px;
    flex-wrap: wrap;
  }
  .about-left {
    width: 50%;
    padding: 0 32px 0 0;
    .about-items {
      color: $text-brown;
    }
    .about-item {
      @mixin text 24px;
      line-height: 36px;
      margin-top: 12px;
    }
  }
  .about-right {
    width: 50%;
    display: flex;
    justify-content: center;
    .about-img-wrap {
      padding: 16px;
      box-shadow: 0 0 4px rgb(0, 0, 0, 0.2);
      background-color: white;
      align-self: center;
    }
    img {
      width: 100%;
      max-width: 520px;
      height: auto;
      align-self: center;
    }
  }
  @media (max-width: 1000px) {
    .about-left .about-item {
      font-size: 20px;
    }
  }
  @media (max-width: 900px) {
    .about-left, .about-right {
      width: 100%;
    }
    .about-right {
      margin-top: 48px;
    }
  }
}
</style>
