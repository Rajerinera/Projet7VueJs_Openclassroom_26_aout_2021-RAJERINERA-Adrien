import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Comment from "../views/Comment.vue"
import Contact from "../views/Contact.vue"
import Profile from "../views/Profile.vue"
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
    path: "/comment" ,
    name: "Comment",
    component: Comment,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path:"/profile",
    name: "Profile",
    component: Profile,
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
