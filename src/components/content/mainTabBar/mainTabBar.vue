<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/index.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/index-active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/lei">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/lei.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/lei-active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shop">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/shop.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/shop-active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/me">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/me.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/me-active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabBarItem from "@/components/common/tabbar/TabBarItem.vue";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import url("~@/assets/css/base.css");
</style>