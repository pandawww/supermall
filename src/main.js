import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Bus from "@/common/utils/bus.js"
// app.config.globalProperties.bus = Bus
// Cannot read property 'globalProperties' of undefined

import { request } from './network/request'
createApp(App).use(store).use(router).mount('#app')
// axios({
//     url:"http://123.207.32.32:8000/home/multidata"
// }).then(res=>{
//     console.log(res)
// })
// axios({
//     url:'http://152.136.185.210:7878/api/m5/home/data',
//     params:{
//         type:'pop',
//         page:3
//     }
// }).then(res=>{
//     console.log(res)
// })
request({
    url:"/home/multidata"
}).then(res=>{
    // console.log(res)
}).catch(err=>{
    console.log(err)
})