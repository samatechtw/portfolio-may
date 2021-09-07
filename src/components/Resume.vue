<template>
  <div id="resume" class="resume-wrap">
    <div class="resume container">
      <div class="resume-title">{{ t('resume.  title') }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="postcss">
@import '@/assets/css/global.css';

.resume-wrap {
  background-color: $background-white;
  .resume {
    display: flex;
    padding: 96px 0 64px;
    justify-content: center;
  }
  .resume-title {
    text-align: center;
    @mixin section-title;
  }
}
</style>
