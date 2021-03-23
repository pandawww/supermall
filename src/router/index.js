import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载
const Home=()=> import("@/views/home/Home")
const Category =()=> import("@/views/category/Category")
const  Cart =()=> import("@/views/cart/Cart")
const Profile=()=> import("@/views/profile/Profile")
const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:"/category",
    component:Category
  },
  {
    path:"/cart",
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode:history,
})

export default router
