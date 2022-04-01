/*
import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'

Vue.use(Router)

const routes = [
  {
    path: '*',
    component: Home
  }
]

export default new Router({
  routes
})
*/
import { createRouter, createWebHistory } from 'vue-router'

import Home from 'pages/Home'

const routes = [
	{ 
		path: '/', 
		name: 'Home',
		component: Home 
	},
]

const router = createRouter( {
	history: createWebHistory(),
	routes,
} )

export default router
