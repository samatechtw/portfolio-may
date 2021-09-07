<template>
  <Modal :show="show" class="portfolio-modal" @cancel="$em('cancel')">
    <template #content>
      <div class="modal-content">
        <div class="modal-left">
          <img :src="item.image" />
        </div>
        <div class="modal-right">
          <div class="modal-title">{{ item.subtitle }}</div>
          <div class="modal-subtitle">{{ item.ti }}</div>
          <ul class="modal-bullets">
            <li v-for="(bullet, idx) in item.bullets" :key="idx">{{ bullet }}</li>
          </ul>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
defineEmits(['cancel']);
defineProps({
  show: Boolean,
  item: {
    type: Object,
    default: null,
  },
});
</script>

<style lang="postcss">
@import '@/assets/css/global.css';

.portfolio-modal {
  .modal-inner {
    width: 800px;
  }
  .modal-content {
    display: flex;
  }
  .modal-left {
    display: flex;
    align-items: flex-start;
    img {
      min-width: 240px;
      max-width: 300px;
      height: auto;
    }
  }
  .modal-right {
    padding-left: 32px;
    .modal-title {
      @mixin title 26px;
    }
    .modal-subtitle {
      @mixin text 18px;
      color: $text-brown-light;
      margin-top: 8px;
    }
    .modal-bullets {
      @mixin text 18px;
      color: $text-brown;
      margin-top: 24px;
      padding-left: 32px;
      li {
        margin-top: 16px;
      }
    }
  }
  @media (max-width: 700px) {
    .modal-content {
      flex-direction: column-reverse;
    }
    .modal-left {
      justify-content: center;
      margin-top: 24px;
    }
    .modal-right {
      padding: 0;
    }
  }
}
</style>
