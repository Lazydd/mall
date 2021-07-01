<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      probeType: this.probeType, //监听滚动事件0,1,2,3
      pullUpLoad: this.pullUpLoad,
    });
    this.scroll.on("scroll", (position) => {
      //   console.log('scroll',position);
      this.$emit("scroll", position);
    });
    // this.scroll.on("pullingUp", () => {
    //   console.log('b');
    //   this.$emit("pullingUp");
    // });
    console.log(this.scroll);
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
};
</script>

<style scoped>
</style>