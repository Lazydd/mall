<template>
  <nav-bar class="deail-navbar">
    <template v-slot:left>
      <div class="back" @click="backClick">
        <img src="~@/assets/img/common/back.svg" alt="" />
      </div>
    </template>
    <template v-slot:center>
      <div class="titles">
        <div
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: index == currentIndex }"
          class="title-item"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.go(-1);
    },
  },
  created(){
      
  }
};
</script>

<style>
.titles {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 13px;
}
.active {
  color: #ff5777;
}
.back img {
  margin-top: 12px;
}
.deail-navbar{
  background-color: #fff;
}
</style>