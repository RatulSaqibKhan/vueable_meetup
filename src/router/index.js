import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/User/Login'
import Register from '@/components/User/Register'
import Profile from '@/components/User/Profile'
import Logout from '@/components/User/Logout'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/meetups',
    name: 'Meetups',
    component: Meetups
  },
  {
    path: '/meetup/new',
    name: 'CreateMeetup',
    component: CreateMeetup
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
