<template>
<transition name="modal">
  <div
    v-if="show"
    class="modal-outer"
    @click="handleClickOutside"
  >
    <div class="modal-inner">
      <div class="modal-top">
        <img
          v-if="cancelable"
          class="cancel"
          :src="IcClose"
          @click="$emit('cancel')"
        >
      </div>
      <!-- slot for variable content -->
      <slot name="content" />
    </div>
  </div>
</transition>
</template>

<script>
/*
Usage:

  <Modal
    :cancelable="true"
    @cancel="handleCancel"
    :show="true"
  >
    <template #content>
      <div class="question-submit">
        CONTENT
      </div>
    </template>
  </Modal>
*/

export default {
  name: 'modal',
  emits: ['cancel'],
  props: {
    show: Boolean,
    cancelable: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    show(show) {
      if(show) {
        document.addEventListener('keydown', this.handleEscape);
        document.body.classList.add('noscroll');
      } else {
        document.removeEventListener('keydown', this.handleEscape);
        document.body.classList.remove('noscroll');
      }
    },
  },
  methods: {
    handleClickOutside(e) {
      if(
        this.cancelable
        && (typeof e.target.className === 'string')
        && (e.target.className.split(' ').indexOf('modal-outer') >= 0)
      ) {
        this.$emit('cancel');
      }
    },
    handleEscape(e) {
      if(e.key === 'Escape') {
        this.$emit('cancel');
      }
    },
  },
  unmounted() {
    document.removeEventListener('keydown', this.handleEscape);
    document.body.classList.remove('noscroll');
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.modal-outer {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.3s ease;
  z-index: 2000;
}
.modal-inner {
  width: 640px;
  max-width: 90%;
  padding: 0 40px 40px;
  margin: 120px auto 0;
  background-color: $white;
  box-shadow: 0 2px 8px rgba($black, 0.4);
}
.modal-top {
  position: relative;
  height: 40px;
  margin-right: -40px;

  .cancel {
    position: absolute;
    width: 14px;
    height: 14px;
    top: 13px;
    right: 14px;
    cursor: pointer;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.5, 1.5);
    }
  }
}
@media (max-width: 640px) {
  .modal-inner {
    margin-top: 80px;
  }
}

.modal-main {
  margin-bottom: 40px;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s linear;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-inner,
.modal-leave-active .modal-inner {
  transition: transform 0.3s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.3s linear;
}
.modal-enter-from .modal-inner,
.modal-leave-to .modal-inner {
  opacity: 0;
  transform: scale(0.7) translateY(-10%);
}

</style>
