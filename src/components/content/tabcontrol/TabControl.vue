<template>
<div class="tab-control">
    <div v-for="(item,index) in titles" :key="item.index" 
    class="tab-control-item" :class="{active:currentIndex===index}"
    @click="itemClick(index)">
    <span>{{item}}</span>
    </div>
</div>
</template>
<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    background: #fff;
    font-size: 15px;
    line-height: 40px;
}
.tab-control-item{
    flex: 1;
}
.active{
    color: rgb(238, 80, 80);
}
.active span{
    padding: 5px;
    border-bottom: 3px solid rgb(238, 80, 80);
}
</style>
<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            currentIndex:0
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex=index
            this.$emit("tabClick",index)
        }
    },
};
</script>
