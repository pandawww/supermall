<template>
  <div class="">
    <swiper class="detail-swiper">
      <swiper-item v-for="item in topImage" :key="item.index">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  props: {
    topImage: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style scoped>
.detail-swiper{
    height: 300px;
    overflow: hidden;
}
.detail-swiper img{
    width: 100%;
    height: auto;
}
</style>