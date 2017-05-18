import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './pages/loginPage/Login.vue'
import Index from './pages/indexPage/Index.vue'

Vue.use(VueRouter)

const routes = [
	{path: '/login', component: Login },
	{path: '/index', component: Index },
	{path: '/', redirect: '/login' }
]
const router = new VueRouter({
	routes
})

export default router