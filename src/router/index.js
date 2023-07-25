import { createWebHistory, createRouter } from "vue-router";
// import guard from "@/router/guard.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@pages/Home.vue"),
    meta: { judul: "Home" },
  },
  {
    path: "/userauth",
    name: "Auth",
    component: () => import("@pages/UserAuth.vue"),
    meta: { judul: "Auth" },
    children: [
      {
        path: "/userauth/login",
        name: "Login",
        component: () => import("@pages/auth/Login.vue"),
      },
      {
        path: "/userauth/register",
        name: "Register",
        component: () => import("@pages/auth/Register.vue"),
      },
      {
        path: "/userauth/forgot-pwd",
        name: "ForgotPwd",
        component: () => import("@pages/auth/ForgotPwd.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Navigation Guard
// router.beforeEach(guard);

export default router;
