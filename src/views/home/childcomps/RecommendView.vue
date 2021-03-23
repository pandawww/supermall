<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<style scoped>
    .recommend{
        display: flex;
        padding: 10px 0 20px;
        border-bottom: 8px solid #eee;
    }
    .recommend-item{
        flex: 1;
        text-align: center;
        color: black;
        font-weight: 500;
        font-size: 12px;
        
    }
    .recommend-item img{
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }
</style>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>