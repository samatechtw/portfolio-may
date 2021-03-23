<template>
<div id="contact" class="contact-wrap">
  <div class="contact container">
    <div class="contact-title section-title">
      <span :class="{ selected }">{{ $t('contact.work') }}</span>
    </div>
    <div class="contact-items">
      <div class="contact-item">
        <a target="_blank" :href="`mailto:${$t('contact.email.content')}`">
          <div class="contact-item-title">
            {{ $t('contact.email.title') }}
          </div>
          <div class="contact-item-content">
            {{ $t('contact.email.content') }}
          </div>
        </a>
      </div>
      <div class="contact-item">
        <a target="_blank" href="https://www.linkedin.com/in/may-luong-0a882b15a/">
          <div class="contact-item-title">
            {{ $t('contact.linkedin.title') }}
          </div>
          <div class="contact-item-content">
            {{ $t('contact.linkedin.content') }}
          </div>
        </a>
      </div>
      <div class="contact-item">
        <a target="_blank" href="https://www.facebook.com/sweetkhet">
          <div class="contact-item-title">
            {{ $t('contact.facebook.title') }}
          </div>
          <div class="contact-item-content">
            {{ $t('contact.facebook.content') }}
          </div>
        </a>
      </div>
      <!--
      <div class="contact-item">
        <div class="contact-item-title">
          <a target="_blank" href="https://www.instagram.com/mayderlust/">{{ $t('contact.instagram.title') }}</a>
        </div>
        <div class="contact-item-content">
          {{ $t('contact.instagram.content') }}
        </div>
      </div>
      -->
    </div>
    <img class="footer-img" :src="Footer">
  </div>
</div>
</template>

<script>

export default {
  name: 'contact',
  props: {
    selected: Boolean,
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.contact-wrap {
  a {
    text-decoration: none;
    color: $text-brown;
  }
  background-color: $background;
  padding: 160px 0 0;
  text-align: center;
  .contact-title {
    @mixin text 80px;
    color: $text-brick;
    > span {
      &:before,
      &:after {
        bottom: 10px;
      }
    }
  }
  .contact-items {
    display: flex;
    color: $text-brown;
    justify-content: space-around;
    .contact-item {
      width: 33%;
      margin-top: 64px;
    }
    .contact-item a:hover {
      color: $text-brick;
    }
    .contact-item-title {
      @mixin title 32px;
      letter-spacing: 1px;
    }
    .contact-item-content {
      @mixin text 24px;
      margin-top: 16px;
    }
  }
  .footer-img {
    margin: 64px auto 0;
    width: 500px;
    max-width: 70%;
  }
  @media (max-width: 760px) {
    .contact-items {
      flex-direction: column;
      align-items: center;
      .contact-item {
        width: 100%;
      }
    }
    .contact-title {
      font-size: 64px;
    }
  }
}
</style>
