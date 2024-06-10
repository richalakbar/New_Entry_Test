import homePage from "@/views/homePage.vue";
import aboutPage from "@/views/aboutPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/loginPage.vue";

const routes = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/about",
    component: aboutPage,
  },
  {
    path: "/error",
    component: () => import("@/views/errorPage.vue"),
  },
  {
    path: "/outputnumenuadmin",
    component: () => import("@/views/outputNUAdmin.vue"),
  },
  {
    path: "/outpuwcumenuadmin",
    component: () => import("@/views/outputWCUAdmin.vue"),
  },
  {
    path: "/outputsnimenuadmin",
    component: () => import("@/views/outputSNIAdmin.vue"),
  },
  {
    path: "/inputnu",
    component: () => import("@/views/inputUserNU.vue"),
  },
  {
    path: "/outputmenuwcu",
    component: () => import("@/views/outputMenuWCU.vue"),
  },
  {
    path: "/outputmenusni",
    component: () => import("@/views/outputMenuSNI.vue"),
  },
  {
    path: "/outputmenunu",
    component: () => import("@/views/outputMenuNU.vue"),
  },
  {
    path: "/output",
    component: () => import("@/views/outputPage.vue"),
  },
  {
    path: "/adminuser",
    component: () => import("@/views/adminUser.vue"),
  },
  {
    path: "/nu",
    component: () => import("@/views/adminNU.vue"),
  },

  {
    path: "/wcu",
    component: () => import("@/views/adminWCU.vue"),
  },

  {
    path: "/sni",
    component: () => import("@/views/adminSNI.vue"),
  },
  {
    path: "/create",
    component: () => import("@/views/Create.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
