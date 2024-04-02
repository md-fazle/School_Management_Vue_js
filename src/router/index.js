import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/Students/View.vue'
import TeacherView from '../views/Teachers/View.vue'
import StudentCreateView from '../views/Students/Create.vue' // Corrected path
import StudentEditView from '../views/Students/Edit.vue'
import RegisterView from '../views/Register/Register.vue'
import LoginView from '../views/Login/Login.vue'
import TeacherCreateView from '../views/Teachers/Create.vue'
import TeacherEditView from '../views/Teachers/Edit.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: StudentView
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: TeacherView
    },
    {
      path: '/students/create',
      name: 'students-create', // Consider a unique name for clarity
      component: StudentCreateView
    },
    {
      path: '/teachers/create',
      name: 'teachers-create', // Consider a unique name for clarity
      component: TeacherCreateView
    },
    {
      path: '/students/:id/edit',
      name: 'students-edit', // Consider a unique name for clarity
      component: StudentEditView
    },
    {
      path: '/teachers/:id/edit',
      name: 'teachers-edit', // Consider a unique name for clarity
      component: TeacherEditView
    },
    {
      path: '/register',
      name: 'register', // Consider a unique name for clarity
      component: RegisterView
    },
    {
      path:'/login',
      name:'login',
      component:LoginView

    },
  ]
})

export default router
