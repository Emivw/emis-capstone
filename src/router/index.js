import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products/:id',
    name: 'product',

    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
    
  },
  {
    path: '/admin/products',
    name: 'adminProducts',
    component: () => import('../views/AdminProdView.vue')
    
  },
  {
    path: '/admin/users',
    name: 'adminUser',
    component: () => import('../views/AdminUserView.vue')
    
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminMainView.vue')
    
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
