import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
 
// 2. 配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: '/home',
    component: () => import("/src/views/Home/index.vue"),
  },
  {
    path: "/miku2024",
    component: () => import("/src/views/Miku2024/index.vue"),
  },
];
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
// 3导出路由   然后去 main.ts 注册 router.ts
export default router