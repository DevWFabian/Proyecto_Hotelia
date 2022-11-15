import {
  createRouter,
  createWebHistory
} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Hoteles from './views/Hoteles.vue'
import Nosotros from './views/Nosotros.vue'
import Perfil from './views/Perfil.vue'
import RegistroHotel from './views/RegistroHotel.vue'
import PerfilHotel from './views/PerfilHotel.vue'
import SignUpEncargado from './views/SignUpEncargado.vue'
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
},{
  path: '/hoteles',
  name: 'Hoteles',
  component: Hoteles
},{
  path: '/nosotros',
  name: 'Nosotros',
  component: Nosotros
},{
  path: '/perfil',
  name: 'Perfil',
  component: Perfil
},{
  path: '/registro_hotel',
  name: 'RegistroHotel',
  component: RegistroHotel
},{
  path: `/hotel`,
  name: 'PerfilHotel',
  component: PerfilHotel
},{
  path: '/signup/encargado',
  name:'SignUpEncargado',
  component: SignUpEncargado
}
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router