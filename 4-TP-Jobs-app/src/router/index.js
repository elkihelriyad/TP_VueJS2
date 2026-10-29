import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddJob from '../views/AddJob.vue'
import EditJob from '../views/EditJob.vue'
import JobDetails from '../views/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddJob',
    component: AddJob
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  {
    path: '/jobs/:id/edit',
    name: 'EditJob',
    component: EditJob,
    props: true
  },
  {
    path: '/Jobs/:id',
    redirect: to => `/jobs/${to.params.id}/edit`
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
