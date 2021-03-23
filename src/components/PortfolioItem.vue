<template>
<div class="portfolio-item">
  <img
    class="portfolio-item-image"
    :src="item.image"
  >
  <div class="portfolio-item-content">
    <div class="portfolio-item-title">
      {{ item.title }}
    </div>
    <div class="portfolio-item-subtitle">
      {{ item.subtitle }}
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'portfolio-item',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.portfolio-item {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  align-self: flex-start;
  margin: 16px 0;
  border: 1px solid black;
  box-shadow: 0 1px 6px rgb(0 0 0 / 60%);
  .portfolio-item-image {
    left: 0;
    width: 100%;
    height: auto;
    transition: all 0.4s ease;
    position: relative;
    display: block;
  }
  .portfolio-item-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($text-brown, 0.86);
    opacity: 0;
    transition: opacity 0.4s ease;
    color: white;
    padding: 32px 20px 0;
    .portfolio-item-title {
      @mixin title 48px;
      letter-spacing: 0.9px;
      font-size: 22px;
      border-bottom: 1px solid white;
      padding-bottom: 16px;
    }
    .portfolio-item-subtitle {
      margin-top: 16px;
      @mixin text 16px;
    }
  }
  &:hover {
    .portfolio-item-content {
      opacity: 1;
    }
    .portfolio-item-image {
      transform: scale(1.2, 1.2);
    }
  }
}
</style>
