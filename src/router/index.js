import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Comment from "../views/Comment.vue"
const routes = [
  {
    path: "/",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "Presentation",
        component: () => import ("../views/Presentation.vue")
      },
      {
        path: "/login",
        name: "Login",
        component: () => import ("../views/Login.vue")
      },
      {
        path: "/register",
        name: "Register",
        component: () => import ("../views/Register.vue")
      },
      {
        path: "/about",
        name: "About",
        component: () => import ("../views/About.vue")
      },
    ]
  },
  {
    path: "/comment/:id" ,
    name: "Comment",
    component: Comment,
  },
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
