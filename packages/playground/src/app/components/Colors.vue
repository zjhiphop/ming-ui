<template>
  <div class="alert sm:bg-dark lg:bg-red">
    <p class="inline-flex justify-center">
    <span class="circle bg-primary"></span>
    <span class="circle bg-primaryCta"></span>
    <span class="circle bg-recycleCta"></span>
    <span class="circle bg-recycleCtaTransparent"></span>
    <span class="circle bg-donate"></span>
  </p>
  <p class="inline-flex justify-center">
    <span class="circle bg-success"></span>
    <span class="circle bg-danger"></span>
    <span class="circle bg-fair"></span>
    <span class="circle bg-pressOverlay"></span>
    <span class="circle bg-backgroundOverlay"></span>
    <span class="circle bg-successTransparent"></span>
    <span class="circle bg-dangerTransparent"></span>
    <span class="circle bg-failTransparent"></span>
    <span class="circle bg-hoverOverlayBlack4"></span>
    <span class="circle bg-hoverOverlayBlack2"></span>
    <span class="circle bg-hoverOverlayWhite60"></span>
    <span class="circle bg-hoverOverlayWhite30"></span>
    <span class="circle bg-hoverOverlayWhite12"></span>
  </p>
  <p class="inline-flex justify-center">
    <span class="circle bg-darkBlack"></span>
    <span class="circle bg-darkSecondary"></span>
    <span class="circle bg-darkTertiary"></span>
    <span class="circle bg-darkQuaternary"></span>
    <span class="circle bg-lightWhite"></span>
    <span class="circle bg-lightSecondary"></span>
    <span class="circle bg-lightTertiary"></span>
    <span class="circle bg-lightQuaternary"></span>
  </p>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="postcss">
  .circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  a {
    color: #42b983;
  }
</style>
