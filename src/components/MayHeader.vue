<template>
  <Sticky>
    <div class="header">
      <div class="container">
        <div class="header-left">
          <img :src="MayHeader" @click="scroll(0)" />
        </div>
        <MayHeaderLinks
          class="header-right"
          :links="headerLinks"
          :activeLink="activeLink"
          :activeSection="activeSection"
        />
        <div class="sidebar-toggle" @click="sidebarOpened = true">
          <em />
          <em />
          <em />
        </div>
        <div
          class="header-sidebar-wrap"
          :class="{ opened: sidebarOpened }"
          @click="sidebarOpened = false"
        >
          <div class="header-sidebar" @click.stop>
            <Cross
              class="sidebar-close sidebar-toggle"
              :clickable="true"
              color="black"
              @click="sidebarOpened = false"
            />
            <MayHeaderLinks
              class="header-links-mobile"
              :links="headerLinks"
              :activeLink="activeLink"
              :activeSection="activeSection"
              @linkClick="sidebarOpened = false"
            />
          </div>
        </div>
      </div>
    </div>
  </Sticky>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue';
import { HeaderLink } from '@/interface';

const props = defineProps({
  activeSection: {
    type: String,
    default: null,
  },
});
const { activeSection } = toRefs(props);

const link = (id: string, fn: (id: string) => void) => ({
  id,
  headerId: `header-${id}`,
  title: `header.${id}`,
  fn: () => fn(id),
});

const scrollAnchor = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  });
};
const headerLinks = ref<HeaderLink[]>([
  link('about', scrollAnchor),
  link('services', scrollAnchor),
  link('portfolio', scrollAnchor),
  link('contact', scrollAnchor),
  {
    id: 'resume',
    title: 'header.resume',
    link: '/May-Luong-Resume_210911.pdf',
  },
]);

const sidebarOpened = ref(false);

const activeLink = computed(() => {
  let link: HeaderLink | undefined | null = headerLinks.value.find(
    (link) => link.id === activeSection.value,
  );
  if (link) {
    link = calculateUnderline(link);
  }
  return link;
});

const scroll = (top: number) => {
  window.scroll({
    top,
    left: 0,
    behavior: 'smooth',
  });
};

const calculateUnderline = (link: HeaderLink) => {
  const el = document.getElementById(link.headerId ?? '');
  if (el) {
    const size = el.getBoundingClientRect();
    return {
      ...link,
      width: `${size.width}px`,
      left: `${el.offsetLeft}px`,
    };
  }
  return null;
};
</script>

<style lang="postcss">
@import '@/assets/css/global.css';

.header {
  @mixin title 18px;
  height: 76px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  color: $text;
  background-color: $background-white;
  .container {
    @mixin flex-center;
    height: 100%;
    position: relative;
  }
  .header-sidebar-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    transition: 0.3s ease;
    display: none;
    z-index: 1010;
    right: -100%;
    top: 0;
    margin: 0;

    &.opened {
      transform: translateX(-100%);
    }
  }
  .header-sidebar {
    position: absolute;
    right: 0;
    width: 300px;
    height: 100%;
    background: $white;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }
  .sidebar-toggle {
    cursor: pointer;
    display: none;
    margin-left: auto;
    margin-right: 16px;

    em {
      display: block;
      width: 19px;
      height: 2px;
      background: black;
      margin-top: 5px;
      transition: all 0.3s;

      &:first-child {
        margin-top: 0;
      }
    }
  }
  .sidebar-close {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 99;
  }
  .header-left {
    @mixin flex-center;
    padding-top: 6px;
    img {
      height: 40px;
      cursor: pointer;
    }
  }
  @media (max-width: 640px) {
    .header-sidebar-wrap,
    .sidebar-toggle {
      display: block;
    }
    .header-right {
      display: none;
    }
  }
}
</style>
