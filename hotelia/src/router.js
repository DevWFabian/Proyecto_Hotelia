import {
  createRouter,
  createWebHistory
} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp'
const routes = [{
  path: '/',
  name: 'root',
  component: Home
}, {
  path: '/login',
  name: "Login",
  component: Login
},
{
  path: '/home',
  name: "Home",
  component: Home
},{
  path: '/signup',
  name:'SignUp',
  component: SignUp
}
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router