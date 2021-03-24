<template>
<div class="goods-list-item" @click="itemClick">
<img :src="goodslist.show.img" alt="">
<div class="goods-info">
    <p>{{goodslist.title}}</p>
    <span class="price">{{goodslist.price}}</span>
    <span class="cfav">{{goodslist.cfav}}</span>
</div>
</div>
</template>
<script>
export default {
    props:{
        goodslist:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        // imageLoad(){
        //     this.bus.emit("itemImageLoad")
        // }
        itemClick(){
            console.log("itemclick")
            this.$router.push("/detail/"+this.goodslist.iid)
        }
    },
};
</script>
<style scoped>
.goods-list-item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
}
.goods-list-item img{
    width: 100%;
    border-radius: 5px;
}
.goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}
.goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;;
}
.goods-info .price{
    margin-right: 20px;
    color: rgb(245, 14, 6);
}
.goods-info .cfav{
    position: relative;
}
.goods-info .cfav::before{
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    left: -15px;
    top: -1px;
    background: url("~assets/images/common/collect.svg") 0 0/14px 14px;

}
</style>