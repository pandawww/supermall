<template>
<div class="details-nav-bar">
    <nav-bar>
    <template v-slot:left>
        <div class="back" @click="backClick">
            <img src="@/assets/images/common/back.svg" alt="">
        </div>
    </template>
        <template v-slot:center>
            <div class="title">
            <div v-for="(item,index) in titles" :key="item.index" class="title-item"
            @click="itemClick(index)" :class="{active:currentIndex===index}"
            >{{item}}</div>
            </div>
        </template>
    </nav-bar>
</div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar"
export default {
    data(){
        return{
            titles:["商品","详情","参数","推荐"],
            currentIndex:0
        }
    },
    components:{
        NavBar
    },
    methods:{
        itemClick(index){
            this.currentIndex=index
        },
        backClick(){
            this.$router.back()
        }
    }
};
</script>
<style scoped>
.details-nav-bar{
    text-align: center;
}
.title{
    display: flex;
}
.title-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
}
.active{
    color: crimson;
}
.back img{
    margin-top: 10px;
}
</style>