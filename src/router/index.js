import { createRouter, createWebHistory } from 'vue-router';

const publicRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue') // 这里依然可以尝试 @，不行的话改为相对路径
  },
];

const dynamicRoutes = [
  {
    path: "/",
    name: "layout",
    redirect: "/home",
    component: "layout/index.vue",
    children: [
      {
        path: "/home",
        name: "home",
        component: "home/index.vue",
      },
      {
        path: "system",
        name: "system",
        meta: {
          type: "menu"
        },
        children: [
          {
            path: "user",
            name: "user",
            component: "system/user/index.vue",
          },
          {
            path: "role",
            name: "role",
            component: "system/role/index.vue",
          },
          {
            path: "menu",
            name: "menu",
            component: "system/menu/index.vue",
          }
        ]
      }
    ]
  }
];

const getComponent = (componentPath) => {
  return () => import(`../views/${componentPath}`); // 使用相对路径
};

const convertRoutes = (routes) => {
  return routes.map(route => {
    const newRoute = { ...route };
    if (newRoute.component) {
      newRoute.component = getComponent(newRoute.component);
    }
    if (newRoute.children) {
      newRoute.children = convertRoutes(newRoute.children);
    }
    return newRoute;
  });
};

const router = createRouter({
  history: createWebHistory(),
  routes: [...publicRoute, ...convertRoutes(dynamicRoutes)],
});

console.log(router.getRoutes())

export default router;
