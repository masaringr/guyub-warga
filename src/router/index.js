import { createWebHistory, createRouter } from "vue-router";
// import guard from "@/router/guard.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
    meta: { judul: "Home" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/Login.vue"),
    meta: { judul: "Login" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Navigation Guard
// router.beforeEach(guard);

export default router;
