import { defineAsyncComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

const defaultLayout = defineAsyncComponent(
  () => import("@/layouts/LDefault.vue")
);
const homeLayout = defineAsyncComponent(() => import("@/layouts/LHome.vue"));
const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/pages/PIndex.vue"),
    meta: homeLayout,
  },
  {
    name: "About",
    path: "/about",
    component: () => import("@/pages/PAbout.vue"),
    meta: defaultLayout,
  },
  {
    name: "News",
    path: "/news",
    component: () => import("@/pages/PNews.vue"),
    meta: defaultLayout,
  },
  {
    name: "Partners",
    path: "/partners",
    component: () => import("@/pages/PPartner.vue"),
    meta: defaultLayout,
  },
];

for (const route of routes) {
  if (route.meta === undefined) {
    route.meta = {};
  }

  if (route.meta.layout == undefined) {
    route.meta.layout = homeLayout;
  } else {
    route.meta.layout = defaultLayout;
  }
}

export default routes;
