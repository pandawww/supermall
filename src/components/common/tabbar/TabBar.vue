<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<style>
#tab-bar {
  display: flex;
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
  box-shadow: 0, -3px, 1px, rgba(100, 100, 100, 0.2);
}
</style>
<script>
// import TabBarItem from "./TabBarItem.vue"
export default {
    comments:{
        // TabBarItem
    }
  
};
</script>