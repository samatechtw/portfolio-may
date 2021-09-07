<template>
  <div id="services" class="services-wrap">
    <div class="services container">
      <div class="services-title section-title">
        <span :class="{ selected }">{{ t('services.title') }}</span>
      </div>
      <div class="services-items">
        <ServiceItem :copy="tm('services.writer')" :image="Book" imageWidth="72px" />
        <ServiceItem :copy="tm('services.media')" :image="Phone" imageWidth="58px" />
        <ServiceItem :copy="tm('services.graphic')" :image="Paint" imageWidth="64px" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

defineProps({
  selected: Boolean,
});
</script>

<style lang="postcss">
@import '@/assets/css/global.css';

.services-wrap {
  background-color: $background-white;
  .services {
    padding-top: 96px;
    padding-bottom: 64px;
    .services-items {
      margin-top: 40px;
    }
  }
}
</style>
