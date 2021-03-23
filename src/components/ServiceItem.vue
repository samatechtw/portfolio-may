<template>
<div class="service-item">
  <div class="service-item-image">
    <img :src="image" :style="{ width: imageWidth }">
  </div>
  <div class="service-item-text">
    <div class="service-item-title">
      {{ copy.title }}
    </div>
    <ul>
      <li
        v-for="(item, index) in copy.bullets"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'service-item',
  props: {
    copy: {
      type: Object,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imageWidth: {
      type: String,
      default: '60px',
    },
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.service-item {
  display: flex;
  align-items: center;
  margin-top: 24px;
  .service-item-image {
    display: flex;
    width: 80px;
    img {
      align-self: flex-end;
      height: auto;
      margin-right: 24px;
    }
  }
  ul {
    @mixin text 20px;
    color: $text-brown;
    margin-top: 12px;
    line-height: 32px;
    &::marker {
      color: $text-brown;
    }
  }
  .service-item-title {
    @mixin text-italic 28px;
    color: $text-brown-light;
    text-shadow: 1px 1px 0 $text-brown-shadow;
    margin-left: 16px;
  }
}
</style>
