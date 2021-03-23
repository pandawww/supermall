<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <scroll class="content" ref="scroll" 
    :probe-type="3" @scroll="contentScroll" 
    :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "./childcomps/HomeSwiper";
import RecommendView from "./childcomps/RecommendView";
import FeatureView from "./childcomps/FeatureView";
import TabControl from "@/components/content/tabcontrol/TabControl";
import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backtop/BackTop"
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      // result:null
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop:false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // this.bus.on("itemImageLoad",()=>{
    //   this.$refs.scroll.refresh()
    // })
  },
  methods: {
    tabClick(index) {
      if (index == 0) {
        this.currentType = "pop";
      } else if (index == 1) {
        this.currentType = "new";
      } else {
        this.currentType = "sell";
      }
      // switch (index){
      //   case 0:
      //   this.currentType="pop"
      //   break
      //   case 1:
      //   this.currentType="new"
      //   break
      //   case 2:
      //   this.currentType="sell"
      //   break
      // }
      
    },
    backTop(){
      console.log("backtop")
        this.$refs.scroll.scrollTo(0,0,500)
      },
    contentScroll(position){
      this.isShowBackTop=(-position.y)>1000
    },
    loadMore(){
      // console.log("加载更多")
      this.getHomeGoods(this.currentType)
    },

    // 网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res)
        // 保存请求的数据
        // this.result=res
        this.banners = res.data.banner.list;
        //   console.log(res.data.banner.list);
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    }
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  margin-bottom: 49px;
}
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6;
  background: rgb(247, 150, 166);
  font-size: 16px;
  color: #ffffff;
  box-shadow: 0, 1px, 1px, rgba(100, 100, 100, 0.1);
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 99;
}
.content{
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>