import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/post-detail/:id',
    name:'post-detail',
    component: () => import('../views/PostDetail.vue')
  },
  {
    path:'/new-post',
    name:'new-post',
    component: () => import('../views/NewPost.vue')
  },
  {
    path:'/admin',
    name:'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path:'/update-post/:id',
    name:'update-post',
    component: () => import('../views/UpdatePost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
