
<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="@/assets/images/tabbar/home.svg" alt />
        </template>
        <template v-slot:item-active-icon>
          <img src="@/assets/images/tabbar/home_active.svg" alt />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="@/assets/images/tabbar/category.svg" alt />
        </template>
        <template v-slot:item-active-icon>
          <img src="@/assets/images/tabbar/category_active.svg" alt />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:item-icon>
          <img src="@/assets/images/tabbar/shopcart.svg" alt />
        </template>
        <template v-slot:item-active-icon>
          <img src="@/assets/images/tabbar/shopcart_active.svg" alt />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="@/assets/images/tabbar/profile.svg" alt />
        </template>
        <template v-slot:item-active-icon>
          <img src="@/assets/images/tabbar/profile_active.svg" alt />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<style scoped>
@import "assets/css/base.css";
</style>
<script>
// 先导入组件
import TabBar from "components/common/tabbar/TabBar.vue"
import TabBarItem from "components/common/tabbar/TabBarItem.vue"
export default {
  name: "app",
  // 在这里注册组件
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      
    }
  },
};
</script>