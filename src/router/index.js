import Vue from 'vue'
import VueRouter from 'vue-router'

const ShouYe = () => import('../views/shouye/ShouYe.vue');
const FenLei = () => import('../views/fenlei/FenLei.vue');
const GouWuChe = () => import('../views/gouwuche/GouWuChe.vue');
const WoDe = () => import('../views/wode/WoDe.vue');


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/test'
  },
  {
    path: '/test',
    component: () => import("@/views/test.vue")
  },
  {
    path: '/shouye',
    component:ShouYe
  },
  {
    path: '/fenlei',
    component:FenLei
  },
  {
    path: '/gouwuche',
    component:GouWuChe
  },
  {
    path: '/wode',
    component:WoDe
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router