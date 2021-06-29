<template>
  <div>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from "@/assets/components/content/mainTabBar/mainTabBar.vue";
export default {
  components: {
    mainTabBar,
  },
};
</script>

<style>
</style>
