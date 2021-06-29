<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style>
.tab-bar {
  display: flex;
  background-color: #f2f2f2;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1x 1px rgba(100, 100, 100, 1);
}
</style>