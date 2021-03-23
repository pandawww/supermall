<template>
<div class="back-top">
    <img src="@/assets/images/common/top.png" alt="">
</div>
</template>
<script>
export default {
    name:'BackTop',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
};
</script>
<style scoped>
.back-top{
    position: fixed;
    bottom: 50px;
    right: 10px;
    z-index: 99;
}
.back-top img{
    width: 44px;
    height: 44px;
}
</style>