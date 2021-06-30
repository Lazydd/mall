<template>
  <div class="goods">
    <goods-item
      v-for="(item, index) in goods"
      :key="index"
      :goods-item="item"
    ></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsItem,
  },
};
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }

</style>