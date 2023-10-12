import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {  //登录页的路由
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {  //首页的路由
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    children:[
      {  //首页
        path: '/index',
        name: 'index',
        component: () => import('../views/home/index/index.vue')
      },
      {  //数据访问页的路由
        path: '/data',
        name: 'data',
        component: () => import('../views/home/dataManger/index.vue')
      },
      {  //信息管理页的路由
        path: '/information',
        name: 'information',
        component: () => import('../views/home/informationManger/index.vue')
      },
      {  //信息列表的路由
        path: '/list',
        name: 'list',
        component: () => import('../views/home/informationManger/list.vue')
      },
    ]
  },
  {  //用户首页的路由
    path: '/users',
    name: 'users',
    component: () => import('../views/home/userManger/index.vue')
  },
  {  //用户角色的路由
    path: '/role',
    name: 'role',
    component: () => import('../views/home/userManger/role.vue')
  },
  {  //用户数据的路由
    path: '/userdata',
    name: 'userdata',
    component: () => import('../views/home/userManger/userData.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
