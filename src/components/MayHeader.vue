<template>
<Sticky>
  <div class="header">
    <div class="container">
      <div class="header-left">
        <img :src="MayHeader" @click="scroll(0)">
      </div>
      <div class="header-right">
        <div
          v-for="link in headerLinks"
          :key="link.title"
          class="header-link"
          :class="{ active: activeSection === link.id }"
          @click="link.fn"
        >
          <a
            v-if="link.link"
            :id="linkId(link)"
            target="_blank"
            :href="link.link"
          >
            {{ $t(link.title) }}
          </a>
          <span
            v-else
            :id="linkId(link)"
          >
            {{ $t(link.title) }}
          </span>
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
    </div>
  </div>
</Sticky>
</template>

<script>

const link = (id, fn) => ({
  id,
  title: `header.${id}`,
  fn: () => fn(id),
});

export default {
  name: 'may-header',
  props: {
    activeSection: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      headerLinks: [
        link('about', this.scrollAnchor),
        link('services', this.scrollAnchor),
        link('portfolio', this.scrollAnchor),
        link('contact', this.scrollAnchor),
        {
          id: 'resume',
          title: 'header.resume',
          link: '/MayLuong_RESUME.pdf'
        },
      ],
    };
  },
  computed: {
    activeLink() {
      let link = this.headerLinks.find(link => link.id === this.activeSection);
      if(link) {
        link = this.calculateUnderline(link);
      }
      return link;
    },
  },
  methods: {
    scroll(top) {
      window.scroll({
        top, 
        left: 0, 
        behavior: 'smooth',
      });
    },
    scrollAnchor(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
      });
    },
    linkId(link) {
      return `header-${link.id}`;
    },
    calculateUnderline(link) {
      const el = document.getElementById(this.linkId(link));
      const size = el.getBoundingClientRect();
      return {
        ...link,
        width: `${size.width}px`,
        left: `${el.offsetLeft}px`,
      };
    }
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.header {
  @mixin title 18px;
  height: 76px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  color: $text;
  background-color: $background-white;
  a, span {
    color: $text;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.7;
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    }
  }
  .container {
    @mixin flex-center;
    height: 100%;
  }
  .header-left {
    @mixin flex-center;
    padding-top: 6px;
    img {
      height: 40px;
      cursor: pointer;
    }
  }
  .header-right {
    margin-left: auto;
    display: flex;
    position: relative;
  }
  .header-underline {
    position: absolute;
    bottom: -2px;
    height: 2px;
    background-color: black;
    transition-property: left width;
    transition-timing-function: ease-in;
    transition-duration: 0.2s;
  }
  .header-link {
    letter-spacing: 0.8px;
    &:not(:first-child) {
      margin-left: 24px;
    }
    cursor: pointer;
  }
}
</style>
