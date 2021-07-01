<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <div class="wrapper">
      <scroll class="content" ref="scroll">
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="Shop"></detail-shop-info>
        <detail-goods-info
          :detail-info="detailInfo"
        ></detail-goods-info>
        <detail-param-info :param-info="paramInfo"></detail-param-info>
      </scroll>
    </div>
  </div>
</template>

<script>
import { getDetail, Goods, GoodsParam, Shop } from "@/network/detail.js";

import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";

import Scroll from "@/components/common/Bscroll/Scroll.vue";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      Shop: {},
      detailInfo: {},
      paramInfo: {},
    };
  },

  created() {
    this.iid = this.$route.params.id;
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
      // console.log(this.topImages);
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
      this.Shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
    console.log(this.goods);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.wrapper {
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
</style>