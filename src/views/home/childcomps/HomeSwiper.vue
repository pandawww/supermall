<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<style scoped>
    .slide img{
        width: 100%;
        height: auto;
    }
</style>
<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";

export default {
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>