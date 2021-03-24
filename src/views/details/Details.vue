<template>
  <div id="detail">
    <details-nav-bar class="detail-bar"></details-nav-bar>
    <scroll class="content">
      <detail-swiper :topImage="topImage"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </scroll>
  </div>
</template>
<script>
import DetailsNavBar from "./childcomps/DetailsNavBar";
import DetailSwiper from "./childcomps/DetailSwiper";
import DetailBaseInfo from "./childcomps/DetailBaseInfo";
import DetailShopInfo from "./childcomps/DetailShopInfo";
import Scroll from "@/components/common/scroll/Scroll";
import { getDetails, Goods, Shop } from "@/network/details";
export default {
  data() {
    return {
      iid: null,
      topImage: null,
      goods: {},
      shop: {}
    };
  },
  components: {
    DetailsNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  created() {
    // 保存iid
    this.iid = this.$route.params.iid;
    // 根据iid请求相关的数据
    // console.log('.....')
    getDetails(this.iid).then(res => {
      console.log(res);
      const data = res.result;
      // 获取顶部图片
      this.topImage = data.itemInfo.topImages;
      // console.log(this.topImage)
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      console.log(this.goods);
      this.shop = new Shop(data.shopInfo);
    });
  }
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 999;
  background: #fff;
}
.detail-bar{
    position: relative;
    height: 100%;
    z-index: 999;
    background: #fff;
}
.content{
    overflow: hidden;
    height: calc(100vh - 44px);
}
</style>