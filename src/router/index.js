import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import HomeView from '../views/HomeView.vue'
import LogOut from '../views/LogOut.vue'

const routes = [
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/home-view',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/log-out',
    name: 'LogOut',
    component: LogOut
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
