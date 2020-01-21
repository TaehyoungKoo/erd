import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '@/components/Dashboard.vue'
import Entity from '@/components/Entity.vue'
import Attribute from '@/components/Attribute.vue'

import SinglePageSample from '@/components/SinglePageSample.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/entity',
    name: 'entity',
    component: Entity
  },
  {
    path: '/attribute',
    name: 'attribute',
    component: Attribute
  },
  {
    path: '/singlePageSample',
    name: 'singlePageSample',
    component: SinglePageSample
  },
]

const router = new VueRouter({
  routes
})

export default router
