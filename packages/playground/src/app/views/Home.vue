<template>
  <div class="home-wrap">
    <!-- <div class="home-title bg-red-50">{{ $t('title') }}</div>
    <div class="home-name">{{ $t('name') }}</div>
    <Logo />
    <div v-html="$t('generated')" /> -->
    <!-- ALERT: <alert></alert> -->
    <h4 class="home-title">Colors:</h4>
    <colors></colors>
    <h4 class="home-title">Typings:</h4>
    <typings></typings>
    <transition name="hide">
      <Cookies v-if="!cookiesAccepted" />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@app/store";
const { cookiesAccepted } = useStore();
</script>

<style lang="postcss">
@import "@assets/css/global.css";

.home-wrap {
  background-color: white;
  @mixin text 16px;
  @mixin flex-center-col;
  height: 100%;
  color: $text-main;
  text-align: left;

  .home-title {
    @mixin title 40px;
    text-align: left;
    width: 100%;
    margin: 50px
  }
  .home-name {
    @mixin text 24px;
    font-weight: bold;
  }
  img {
    margin: 16px 0;
  }
}

.hide-enter-active,
.hide-leave-active {
  transition: opacity 0.3s linear;
}
.hide-enter-from,
.hide-leave-to {
  opacity: 0;
}
</style>
