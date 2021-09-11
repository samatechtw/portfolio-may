<template>
  <div class="header-links">
    <div
      v-for="link in links"
      :key="link.title"
      class="header-link"
      :class="{ active: activeSection === link.id }"
      @click="linkClick(link)"
    >
      <a v-if="link.link" :id="link.headerId" target="_blank" :href="link.link">{{
        t(link.title)
      }}</a>
      <span v-else :id="link.headerId">{{ t(link.title) }}</span>
    </div>
    <div
      v-if="activeLink"
      class="header-underline"
      :style="{
        width: activeLink.width,
        left: activeLink.left,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import { HeaderLink } from '@/interface';
import { PropType } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  activeLink: {
    type: Object as PropType<HeaderLink>,
    default: null,
  },
  links: {
    type: Array as PropType<HeaderLink[]>,
    required: true,
  },
  activeSection: {
    type: String,
    default: null,
  },
});
const emit = defineEmits(['link-click']);

const linkClick = (link: HeaderLink) => {
  if (link.fn) {
    link.fn(link.id);
  }
  emit('link-click');
};
</script>

<style lang="postcss">
@import '@/assets/css/global.css';

.header-links {
  margin-left: auto;
  display: flex;
  position: relative;
  @mix a,
  span {
    color: $text;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.7;
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    }
  }
  .header-underline {
    position: absolute;
    bottom: 0px;
    height: 1px;
    background-color: black;
    transition-property: left width;
    transition-timing-function: ease-in;
    transition-duration: 0.2s;
  }
  .header-link {
    letter-spacing: 0.8px;
    cursor: pointer;
    @mixin balqis 22px;
    &:not(:first-child) {
      margin-left: 24px;
    }
    a {
      text-decoration: none;
      color: $text;
    }
  }
  @media (max-width: 640px) {
    margin-left: unset;
    flex-direction: column;
    padding-top: 64px;
    align-items: center;
    .header-link {
      font-size: 24px;
      margin-top: 16px;
      &:not(:first-child) {
        margin-left: 0;
      }
    }
  }
}
</style>
