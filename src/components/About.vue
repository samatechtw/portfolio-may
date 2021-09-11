<template>
  <div id="about" class="about-wrap">
    <div class="about container">
      <div class="about-title section-title">
        <span :class="{ selected }">{{ t('about.title') }}</span>
      </div>
      <TextTransition
        name="fade-in"
        :show="selected"
        :text="items[0]"
        class="about-item-top"
      />
      <div class="about-content">
        <div class="about-left">
          <div v-for="(item, index) in items.slice(1)" :key="index" class="about-item">
            <TextTransition
              name="enter-left"
              :show="selected"
              :text="item"
              :class="`about-item${index + 1}`"
            />
          </div>
        </div>
        <div class="about-right">
          <transition name="enter-right">
            <div v-if="selected" class="about-img-wrap">
              <img :src="May" />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

defineProps({
  selected: Boolean,
});

const { t, tm } = useI18n();

const items = tm('about.items') as string[];
</script>

<style lang="postcss">
@import '@/assets/css/global.css';

.about-wrap {
  background-color: $background;
  .about {
    display: flex;
    padding-top: 96px;
    padding-bottom: 64px;
    flex-wrap: wrap;
    justify-content: center;
  }
  color: $text-brown;
  .about-left {
    padding: 0 32px 0 0;
  }
  .about-item,
  .about-item-top {
    @mixin text 20px;
    line-height: 36px;
    margin-top: 12px;
  }
  .about-item2 .text-transition-real {
    transition-delay: 0.2s;
  }
  .about-item3 .text-transition-real {
    transition-delay: 0.4s;
  }
  .about-item-top {
    margin: 24px 0 16px;
  }
  .about-content {
    display: flex;
  }
  .about-right {
    display: flex;
    justify-content: center;
    min-height: 320px;
    .about-img-wrap {
      padding: 16px;
      box-shadow: 0 0 4px rgb(0, 0, 0, 0.2);
      background-color: white;
      align-self: center;
    }
    img {
      width: 320px;
      max-width: 320px;
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
    .about-content {
      flex-wrap: wrap;
    }
    .about-right {
      margin-top: 48px;
      width: 100%;
    }
    .about-left {
      padding: 0 20px;
      width: 100%;
    }
  }
}
</style>
