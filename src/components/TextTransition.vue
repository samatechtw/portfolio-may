<template>
  <div class="text-transition-wrap">
    <transition :name="name">
      <div v-if="show" class="text-transition-real">
        {{ text }}
      </div>
    </transition>
    <div class="text-transition-pseudo">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
  show: Boolean,
  name: {
    type: String,
    required: true,
  },
});
</script>

<style lang="postcss">
.text-transition-wrap {
  white-space: pre-line;
  word-break: break-word;
  position: relative;
}
.text-transition-real {
  position: absolute;
  width: 100%;
  top: 0;
}
.text-transition-pseudo {
  visibility: hidden;
  width: 100%;
}
</style>
