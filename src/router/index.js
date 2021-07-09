import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/",
    component: Dashboard,
    children: [
      {
        path: "",
        component: () => import ("../views/Presentation.vue")
      },
      {
        path: "/login",
        component: () => import ("../views/Login.vue")
      },
      {
        path: "/register",
        component: () => import ("../views/Register.vue")
      },
      {
        path: "/about",
        component: () => import ("../views/About.vue")
      },
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
