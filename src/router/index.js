import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeedbackView from '../views/FeedbackView.vue'
import ToDoView from '../views/ToDoView.vue'
import ServiceView from '../views/RenderingView.vue'
import Projects from '../views/Projects.vue'
import RegView from '../views/RegistrationView.vue'
import LoginView from '../views/LoginView.vue'
import ResumeView from '../views/myResume.vue'
import BlogView from '../views/BlogView.vue'
import PostDetail from '../views/PostDetail.vue'
import EditPost from '../views/EditPost.vue'


import { compile } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: FeedbackView
    },
    {
      path: '/todo',
      name: 'todo',
      component: ToDoView
    },
    {
      path: '/services',
      name: 'services',
      component: ServiceView
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/register',
      name: 'register',
      component: RegView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/post/:index',
      name: 'post-detail',
      component: PostDetail,
      props: true 
    },
    {
      path: '/edit-post/:index',
      name: 'edit-post',
      component: EditPost,
      props: true
    }
  ]
})

export default router
