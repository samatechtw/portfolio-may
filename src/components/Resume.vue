<template>
<div id="resume" class="resume-wrap">
  <div class="resume container">
    <div class="resume-title">
      {{ $t('resume.title') }}
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'resume',
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

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
